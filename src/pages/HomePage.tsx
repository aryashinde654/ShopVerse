import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, SparklesIcon, TruckIcon, ShieldCheckIcon, HeartIcon } from '@heroicons/react/24/outline';
import { ProductGrid } from '../components/product/ProductGrid';
import { useProducts } from '../hooks/useProducts';
import { categories } from '../data/mockData';

export const HomePage: React.FC = () => {
  const { products: featuredProducts } = useProducts({ 
    sortBy: 'featured',
    limit: 8 
  });

  const heroCategories = categories.slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/20 rounded-full animate-float floating-element" />
          <div className="absolute top-32 right-20 w-24 h-24 bg-purple-400/20 rounded-full animate-float floating-element" />
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-pink-400/20 rounded-full animate-float floating-element" />
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-indigo-400/20 rounded-full animate-float floating-element" />
          
          {/* Morphing Shapes */}
          <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-purple-400/10 animate-morphing" />
          <div className="absolute bottom-32 left-20 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-pink-400/10 animate-morphing" style={{ animationDelay: '4s' }} />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 animate-fadeInUp">
                <SparklesIcon className="h-5 w-5 text-yellow-400" />
                <span className="text-sm font-medium">Premium Shopping Experience</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold animate-fadeInUp delay-200 text-gradient-animated">
                Discover Amazing
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 animate-textGlow">
                  Products
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fadeInUp delay-400">
                Shop the latest trends across all your favorite categories with 
                <span className="font-semibold text-white"> unbeatable prices</span> and 
                <span className="font-semibold text-white"> premium quality</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fadeInUp delay-500">
              <Link
                to="/products"
                className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 btn-premium"
              >
                <span>Shop Now</span>
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/products"
                className="group inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 glass-morphism"
              >
                <span>Explore Categories</span>
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fadeInUp delay-700">
              <div className="flex items-center justify-center space-x-3 text-blue-100">
                <TruckIcon className="h-8 w-8 text-blue-400" />
                <span className="font-medium">Free Delivery</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-blue-100">
                <ShieldCheckIcon className="h-8 w-8 text-green-400" />
                <span className="font-medium">Secure Payments</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-blue-100">
                <HeartIcon className="h-8 w-8 text-pink-400" />
                <span className="font-medium">Customer Love</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20 fill-slate-50">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-gradient-animated">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection across diverse categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {heroCategories.map((category, index) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-fadeInUp card-premium"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-w-1 aspect-h-1 relative">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700 image-parallax"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="text-white transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-blue-100 opacity-90 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="mt-4 inline-flex items-center text-blue-300 font-medium group-hover:text-white transition-colors duration-300">
                      <span>Explore Collection</span>
                      <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="flex items-center justify-between mb-12 animate-fadeInUp">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-gradient-animated">
                Featured Products
              </h2>
              <p className="text-xl text-gray-600">
                Handpicked favorites loved by our customers
              </p>
            </div>
            
            <Link
              to="/products"
              className="group hidden md:inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              <span>View All Products</span>
              <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
          
          <div className="animate-fadeInUp delay-300">
            <ProductGrid products={featuredProducts} />
          </div>

          {/* Mobile View All Button */}
          <div className="text-center mt-12 md:hidden">
            <Link
              to="/products"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg btn-premium"
            >
              <span>View All Products</span>
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-400/10 rounded-full animate-float floating-element" />
          <div className="absolute bottom-32 right-32 w-32 h-32 bg-purple-400/10 rounded-full animate-float floating-element" />
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-400/10 rounded-full animate-float floating-element" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-animated">
              Why Choose Us?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join millions of satisfied customers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center animate-fadeInUp delay-200 group">
              <div className="relative inline-block mb-6">
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  35K+
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
              </div>
              <div className="text-xl font-semibold text-blue-100 mb-2">Products Available</div>
              <div className="text-blue-200">Across all categories</div>
            </div>

            <div className="text-center animate-fadeInUp delay-400 group">
              <div className="relative inline-block mb-6">
                <div className="text-6xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  2M+
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
              </div>
              <div className="text-xl font-semibold text-blue-100 mb-2">Happy Customers</div>
              <div className="text-blue-200">Worldwide satisfaction</div>
            </div>

            <div className="text-center animate-fadeInUp delay-500 group">
              <div className="relative inline-block mb-6">
                <div className="text-6xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
              </div>
              <div className="text-xl font-semibold text-blue-100 mb-2">Customer Support</div>
              <div className="text-blue-200">Always here to help</div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-gradient-animated">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get the latest deals and product updates delivered to your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg btn-premium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};