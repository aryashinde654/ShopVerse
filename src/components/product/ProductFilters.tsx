import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { FilterOptions } from '../../types';
import { brands } from '../../data/mockData';

interface ProductFiltersProps {
  filters: Partial<FilterOptions>;
  onFilterChange: (filters: Partial<FilterOptions>) => void;
  onClearFilters: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  onFilterChange,
  onClearFilters,
  isOpen,
  onClose
}) => {
  const handleBrandChange = (brand: string, checked: boolean) => {
    const currentBrands = filters.brands || [];
    const newBrands = checked
      ? [...currentBrands, brand]
      : currentBrands.filter(b => b !== brand);
    
    onFilterChange({ ...filters, brands: newBrands });
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    onFilterChange({ ...filters, priceRange: [min, max] });
  };

  const handleRatingChange = (rating: number) => {
    onFilterChange({ ...filters, rating });
  };

  const handleInStockChange = (inStock: boolean) => {
    onFilterChange({ ...filters, inStock });
  };

  const activeFiltersCount = Object.values(filters).filter(value => 
    Array.isArray(value) ? value.length > 0 : value !== undefined
  ).length;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Filter panel */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 lg:z-0
        w-80 lg:w-full bg-white lg:bg-transparent
        transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
        transition-transform duration-300 ease-in-out lg:transition-none
        overflow-y-auto lg:overflow-visible
      `}>
        <div className="p-6 lg:p-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 lg:mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
            <div className="flex items-center space-x-2">
              {activeFiltersCount > 0 && (
                <button
                  onClick={onClearFilters}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Clear All
                </button>
              )}
              <button
                onClick={onClose}
                className="lg:hidden p-1 text-gray-400 hover:text-gray-500"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-900 mb-3">Price Range</h4>
            <div className="space-y-2">
              <div className="flex space-x-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.priceRange?.[0] || 0}
                  onChange={(e) => {
                    const min = parseInt(e.target.value) || 0;
                    const max = filters.priceRange?.[1] || 300000;
                    handlePriceRangeChange(min, max);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.priceRange?.[1] || 300000}
                  onChange={(e) => {
                    const max = parseInt(e.target.value) || 300000;
                    const min = filters.priceRange?.[0] || 0;
                    handlePriceRangeChange(min, max);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Price range: ₹0 - ₹3,00,000
              </div>
            </div>
          </div>

          {/* Brands */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-900 mb-3">Brands</h4>
            <div className="space-y-2">
              {brands.map((brand) => (
                <label key={brand} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.brands?.includes(brand) || false}
                    onChange={(e) => handleBrandChange(brand, e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{brand}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-900 mb-3">Minimum Rating</h4>
            <div className="space-y-2">
              {[4, 3, 2, 1].map((rating) => (
                <label key={rating} className="flex items-center">
                  <input
                    type="radio"
                    name="rating"
                    checked={filters.rating === rating}
                    onChange={() => handleRatingChange(rating)}
                    className="border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    {rating}+ Stars
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-900 mb-3">Availability</h4>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.inStock || false}
                onChange={(e) => handleInStockChange(e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">In Stock Only</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};