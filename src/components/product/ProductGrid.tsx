import React from 'react';
import { Product } from '../../types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  viewMode?: 'grid' | 'list';
  loading?: boolean;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, viewMode = 'grid', loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 bg-gray-300 loading-shimmer"></div>
            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-300 rounded loading-shimmer"></div>
              <div className="h-3 bg-gray-300 rounded w-3/4 loading-shimmer"></div>
              <div className="h-6 bg-gray-300 rounded w-1/2 loading-shimmer"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12 animate-fadeInUp">
        <div className="text-gray-500 text-lg">No products found</div>
        <p className="text-gray-400 mt-2">Try adjusting your search or filters</p>
      </div>
    );
  }

  const gridClasses = viewMode === 'list' 
    ? 'space-y-4'
    : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';

  return (
    <div className={gridClasses}>
      {products.map((product, index) => (
        <div 
          key={product.id} 
          className="animate-fadeInUp"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <ProductCard product={product} viewMode={viewMode} />
        </div>
      ))}
    </div>
  );
};