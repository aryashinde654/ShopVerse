import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, StarIcon, HeartIcon, EyeIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid, HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode = 'grid' }) => {
  const { addItem } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => {
      const isFilled = i < Math.floor(rating);
      
      return (
        <span key={i} className="relative">
          {isFilled ? (
            <StarIconSolid className="h-4 w-4 text-yellow-400 drop-shadow-sm" />
          ) : (
            <StarIcon className="h-4 w-4 text-gray-300" />
          )}
        </span>
      );
    });
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const discountPercentage = product.comparePrice 
    ? Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)
    : 0;

  if (viewMode === 'list') {
    return (
      <Link to={`/product/${product.slug}`} className="block group">
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-6 group border border-gray-100 animate-fadeInUp card-premium">
          <div className="flex space-x-6">
            <div className="flex-shrink-0 w-40 h-40 relative overflow-hidden rounded-xl">
              <img
                src={product.images[0]?.url}
                alt={product.images[0]?.altText}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 image-parallax"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="flex-1 min-w-0 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-600 line-clamp-2 leading-relaxed">{product.shortDescription}</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex">{renderStars(product.rating)}</div>
                <span className="text-sm text-gray-500 font-medium">({product.reviewCount} reviews)</span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                  {product.brand}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                    {product.comparePrice && (
                      <>
                        <span className="text-lg text-gray-500 line-through">₹{product.comparePrice.toLocaleString()}</span>
                        <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                          {discountPercentage}% OFF
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-sm text-green-600 font-medium">Free delivery available</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleWishlistToggle}
                    className="p-3 rounded-full border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all duration-200 transform hover:scale-110 micro-interaction"
                  >
                    {isWishlisted ? (
                      <HeartIconSolid className="h-5 w-5 text-red-500" />
                    ) : (
                      <HeartIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  
                  <button
                    onClick={handleAddToCart}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg hover:shadow-xl btn-premium font-medium"
                  >
                    <ShoppingCartIcon className="h-5 w-5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link 
      to={`/product/${product.slug}`} 
      className="block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden group border border-gray-100 animate-fadeInUp card-premium relative">
        {/* Image Container */}
        <div className="aspect-w-1 aspect-h-1 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          <img
            src={product.images[0]?.url}
            alt={product.images[0]?.altText}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 image-parallax"
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col space-y-2">
            {product.featured && (
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse shadow-lg">
                ⭐ Featured
              </div>
            )}
            {discountPercentage > 0 && (
              <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce">
                {discountPercentage}% OFF
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className={`absolute top-3 right-3 flex flex-col space-y-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
            <button
              onClick={handleWishlistToggle}
              className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 transform hover:scale-110 micro-interaction"
            >
              {isWishlisted ? (
                <HeartIconSolid className="h-4 w-4 text-red-500" />
              ) : (
                <HeartIcon className="h-4 w-4 text-gray-600" />
              )}
            </button>
            
            <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 transform hover:scale-110 micro-interaction">
              <EyeIcon className="h-4 w-4 text-gray-600" />
            </button>
          </div>

          {/* Stock Status */}
          <div className="absolute bottom-3 left-3">
            <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
              product.stockQuantity > 0 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              <div className={`w-2 h-2 rounded-full ${
                product.stockQuantity > 0 ? 'bg-green-500' : 'bg-red-500'
              } animate-pulse`} />
              <span>{product.stockQuantity > 0 ? 'In Stock' : 'Out of Stock'}</span>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5 space-y-4">
          {/* Brand & Title */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                {product.brand}
              </span>
              <div className="flex items-center space-x-1">
                <div className="flex">{renderStars(product.rating)}</div>
                <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
              {product.name}
            </h3>
            
            <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
              {product.shortDescription}
            </p>
          </div>
          
          {/* Pricing */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
              {product.comparePrice && (
                <span className="text-sm text-gray-500 line-through">₹{product.comparePrice.toLocaleString()}</span>
              )}
            </div>
            
            {product.comparePrice && (
              <p className="text-sm text-green-600 font-medium">
                You save ₹{(product.comparePrice - product.price).toLocaleString()}
              </p>
            )}
          </div>
          
          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={product.stockQuantity === 0}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed btn-premium font-medium"
          >
            <ShoppingCartIcon className="h-5 w-5" />
            <span>{product.stockQuantity > 0 ? 'Add to Cart' : 'Out of Stock'}</span>
          </button>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </Link>
  );
};