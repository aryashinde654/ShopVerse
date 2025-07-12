import React from 'react';
import { ChevronDownIcon, Squares2X2Icon, ListBulletIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { sortOptions } from '../../data/mockData';

interface ProductSortProps {
  sortBy: string;
  onSortChange: (sort: string) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  onFilterToggle: () => void;
  resultsCount: number;
}

export const ProductSort: React.FC<ProductSortProps> = ({
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
  onFilterToggle,
  resultsCount
}) => {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-600">
          {resultsCount} result{resultsCount !== 1 ? 's' : ''}
        </span>
        
        <button
          onClick={onFilterToggle}
          className="lg:hidden flex items-center space-x-2 px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
        >
          <AdjustmentsHorizontalIcon className="h-4 w-4" />
          <span>Filters</span>
        </button>
      </div>

      <div className="flex items-center space-x-4">
        {/* View Mode Toggle */}
        <div className="hidden sm:flex items-center border border-gray-300 rounded-md">
          <button
            onClick={() => onViewModeChange('grid')}
            className={`p-2 ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <Squares2X2Icon className="h-4 w-4" />
          </button>
          <button
            onClick={() => onViewModeChange('list')}
            className={`p-2 ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <ListBulletIcon className="h-4 w-4" />
          </button>
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};