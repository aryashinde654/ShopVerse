import React from 'react';
import { XMarkIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { state, updateQuantity, removeItem } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div className={`
        fixed right-0 top-0 h-full w-96 bg-white z-50 shadow-xl
        transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        transition-all duration-300 ease-in-out
        flex flex-col
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-teal-50">
          <h2 className="text-lg font-semibold text-gray-900">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-500 transition-all duration-200 transform hover:scale-110"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {state.items.length === 0 ? (
            <div className="text-center py-12 animate-fadeInUp">
              <ShoppingBagIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item, index) => (
                <div 
                  key={item.id} 
                  className="flex space-x-4 border-b border-gray-200 pb-4 animate-slideInRight"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img
                    src={item.product.images[0]?.url}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-lg hover:scale-105 transition-transform duration-200"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">₹{item.product.price.toLocaleString()}</p>
                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-all duration-200 transform hover:scale-110"
                        >
                          -
                        </button>
                        <span className="text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-all duration-200 transform hover:scale-110"
                        >
                          +
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 text-sm transition-all duration-200 transform hover:scale-105"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t border-gray-200 p-4 space-y-4 bg-gradient-to-r from-gray-50 to-blue-50 animate-fadeInUp">
            <div className="flex items-center justify-between text-lg font-semibold">
              <span>Total:</span>
              <span>₹{state.total.toLocaleString()}</span>
            </div>
            
            <div className="space-y-2">
              <Link
                to="/cart"
                onClick={onClose}
                className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-medium text-center block hover:bg-gray-200 transition-all duration-200 transform hover:scale-105"
              >
                View Cart
              </Link>
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};