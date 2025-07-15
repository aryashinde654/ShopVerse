import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductGrid } from '../components/product/ProductGrid';
import { ProductFilters } from '../components/product/ProductFilters';
import { ProductSort } from '../components/product/ProductSort';
import { useProducts } from '../hooks/useProducts';
import { categories } from '../data/mockData';
import { FilterOptions } from '../types';

export const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [filters, setFilters] = useState<Partial<FilterOptions>>({});
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const category = categories.find(c => c.slug === slug);
  const categoryId = category?.id;

  const { products, loading } = useProducts({
    categoryId,
    filters,
    sortBy
  });

  const handleFilterChange = (newFilters: Partial<FilterOptions>) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({});
  };

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600">The category you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Hero */}
      <div className="relative h-64 bg-gray-900">
        <img
          src={category.imageUrl}
          alt={category.name}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
            <p className="text-lg opacity-90">{category.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <ProductFilters
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
                isOpen={true}
                onClose={() => {}}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort and View Controls */}
            <div className="mb-6">
              <ProductSort
                sortBy={sortBy}
                onSortChange={setSortBy}
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                onFilterToggle={() => setIsFilterOpen(true)}
                resultsCount={products.length}
              />
            </div>

            {/* Products Grid */}
            <ProductGrid 
              products={products} 
              viewMode={viewMode}
              loading={loading}
            />

            {/* Subcategories */}
            {category.children && category.children.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Subcategories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.children.map((subcategory) => (
                    <a
                      key={subcategory.id}
                      href={`/category/${subcategory.slug}`}
                      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="aspect-w-16 aspect-h-9">
                        <img
                          src={subcategory.imageUrl}
                          alt={subcategory.name}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <h3 className="text-white text-lg font-semibold">{subcategory.name}</h3>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Filters */}
        <ProductFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
        />
      </div>
    </div>
  );
};