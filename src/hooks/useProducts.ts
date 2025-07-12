import { useState, useEffect, useMemo } from 'react';
import { Product, FilterOptions, SortOption } from '../types';
import { products as mockProducts } from '../data/mockData';

interface UseProductsOptions {
  categoryId?: string;
  searchQuery?: string;
  filters?: Partial<FilterOptions>;
  sortBy?: string;
  page?: number;
  limit?: number;
}

export function useProducts(options: UseProductsOptions = {}) {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (options.categoryId) {
      result = result.filter(product => 
        product.categoryId === options.categoryId || 
        product.categoryId.startsWith(`${options.categoryId}-`)
      );
    }

    // Filter by search query
    if (options.searchQuery) {
      const query = options.searchQuery.toLowerCase();
      result = result.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query)
      );
    }

    // Apply filters
    if (options.filters) {
      const { brands, priceRange, rating, inStock } = options.filters;

      if (brands && brands.length > 0) {
        result = result.filter(product => brands.includes(product.brand));
      }

      if (priceRange) {
        result = result.filter(product => 
          product.price >= priceRange[0] && product.price <= priceRange[1]
        );
      }

      if (rating) {
        result = result.filter(product => product.rating >= rating);
      }

      if (inStock) {
        result = result.filter(product => product.stockQuantity > 0);
      }
    }

    // Sort products
    if (options.sortBy) {
      switch (options.sortBy) {
        case 'price-low':
          result.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          result.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          result.sort((a, b) => b.rating - a.rating);
          break;
        case 'newest':
          result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
          break;
        case 'name':
          result.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'featured':
        default:
          result.sort((a, b) => {
            if (a.featured && !b.featured) return -1;
            if (!a.featured && b.featured) return 1;
            return 0;
          });
          break;
      }
    }

    // Pagination
    if (options.page && options.limit) {
      const startIndex = (options.page - 1) * options.limit;
      const endIndex = startIndex + options.limit;
      result = result.slice(startIndex, endIndex);
    }

    return result;
  }, [products, options]);

  const totalPages = useMemo(() => {
    if (!options.limit) return 1;
    let totalProducts = products.length;

    // Apply same filters for count
    if (options.categoryId || options.searchQuery || options.filters) {
      totalProducts = filteredAndSortedProducts.length;
    }

    return Math.ceil(totalProducts / options.limit);
  }, [products.length, filteredAndSortedProducts.length, options.limit]);

  return {
    products: filteredAndSortedProducts,
    loading,
    error,
    totalPages,
    refetch: () => setProducts([...mockProducts])
  };
}