import { Product, Category, Review } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    slug: 'electronics',
    description: 'Latest gadgets and electronic devices',
    imageUrl: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
    children: [
      {
        id: '1-1',
        name: 'Smartphones',
        slug: 'smartphones',
        description: 'Latest smartphones and accessories',
        imageUrl: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800',
        parentId: '1'
      },
      {
        id: '1-2',
        name: 'Laptops',
        slug: 'laptops',
        description: 'High-performance laptops for work and gaming',
        imageUrl: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800',
        parentId: '1'
      },
      {
        id: '1-3',
        name: 'Audio',
        slug: 'audio',
        description: 'Headphones, speakers, and audio equipment',
        imageUrl: 'https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=800',
        parentId: '1'
      }
    ]
  },
  {
    id: '2',
    name: 'Clothing',
    slug: 'clothing',
    description: 'Fashion and apparel for all occasions',
    imageUrl: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
    children: [
      {
        id: '2-1',
        name: 'Men\'s Clothing',
        slug: 'mens-clothing',
        description: 'Stylish clothing for men',
        imageUrl: 'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=800',
        parentId: '2'
      },
      {
        id: '2-2',
        name: 'Women\'s Clothing',
        slug: 'womens-clothing',
        description: 'Fashionable clothing for women',
        imageUrl: 'https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&w=800',
        parentId: '2'
      }
    ]
  },
  {
    id: '3',
    name: 'Home & Garden',
    slug: 'home-garden',
    description: 'Home improvement and garden essentials',
    imageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    name: 'Sports',
    slug: 'sports',
    description: 'Sports equipment and fitness gear',
    imageUrl: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const products: Product[] = [
  // Electronics - Smartphones
  {
    id: '1',
    name: 'iPhone 15 Pro',
    slug: 'iphone-15-pro',
    description: 'The most advanced iPhone yet with titanium design, A17 Pro chip, and pro camera system featuring 48MP main camera with 2x telephoto zoom.',
    shortDescription: 'Latest iPhone with titanium design and A17 Pro chip',
    price: 134900,
    comparePrice: 149900,
    sku: 'IPH15PRO',
    categoryId: '1-1',
    brand: 'Apple',
    stockQuantity: 50,
    isActive: true,
    featured: true,
    weight: 0.187,
    rating: 4.8,
    reviewCount: 234,
    images: [
      {
        id: '1-1',
        url: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'iPhone 15 Pro front view',
        sortOrder: 1,
        isPrimary: true
      },
      {
        id: '1-2',
        url: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'iPhone 15 Pro side view',
        sortOrder: 2,
        isPrimary: false
      }
    ],
    specifications: {
      'Display': '6.1-inch Super Retina XDR',
      'Chip': 'A17 Pro',
      'Storage': '128GB',
      'Camera': '48MP Main, 12MP Ultra Wide, 12MP Telephoto'
    },
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    slug: 'samsung-galaxy-s24-ultra',
    description: 'Premium Android smartphone with S Pen, advanced AI features, and exceptional camera system with 200MP main sensor.',
    shortDescription: 'Flagship Samsung with S Pen and AI features',
    price: 124999,
    comparePrice: 139999,
    sku: 'SGS24U',
    categoryId: '1-1',
    brand: 'Samsung',
    stockQuantity: 35,
    isActive: true,
    featured: true,
    weight: 0.232,
    rating: 4.7,
    reviewCount: 189,
    images: [
      {
        id: '2-1',
        url: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'Samsung Galaxy S24 Ultra',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Display': '6.8-inch Dynamic AMOLED 2X',
      'Processor': 'Snapdragon 8 Gen 3',
      'Storage': '256GB',
      'Camera': '200MP Main, 50MP Periscope, 12MP Ultra Wide'
    },
    createdAt: '2024-01-12T10:00:00Z'
  },
  {
    id: '3',
    name: 'Google Pixel 8 Pro',
    slug: 'google-pixel-8-pro',
    description: 'AI-powered smartphone with exceptional computational photography and pure Android experience with 7 years of updates.',
    shortDescription: 'Google flagship with advanced AI photography',
    price: 84999,
    comparePrice: 94999,
    sku: 'GP8PRO',
    categoryId: '1-1',
    brand: 'Google',
    stockQuantity: 42,
    isActive: true,
    featured: false,
    weight: 0.213,
    rating: 4.6,
    reviewCount: 156,
    images: [
      {
        id: '3-1',
        url: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'Google Pixel 8 Pro',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Display': '6.7-inch LTPO OLED',
      'Processor': 'Google Tensor G3',
      'Storage': '128GB',
      'Camera': '50MP Main, 48MP Ultra Wide, 48MP Telephoto'
    },
    createdAt: '2024-01-10T10:00:00Z'
  },
  {
    id: '26',
    name: 'OnePlus 12',
    slug: 'oneplus-12',
    description: 'Flagship killer with Snapdragon 8 Gen 3, 100W fast charging, and Hasselblad camera system.',
    shortDescription: 'Premium OnePlus with ultra-fast charging',
    price: 64999,
    comparePrice: 69999,
    sku: 'OP12',
    categoryId: '1-1',
    brand: 'OnePlus',
    stockQuantity: 38,
    isActive: true,
    featured: false,
    weight: 0.220,
    rating: 4.5,
    reviewCount: 142,
    images: [
      {
        id: '26-1',
        url: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'OnePlus 12',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Display': '6.82-inch LTPO AMOLED',
      'Processor': 'Snapdragon 8 Gen 3',
      'Storage': '256GB',
      'Camera': '50MP Hasselblad Triple Camera'
    },
    createdAt: '2024-01-08T10:00:00Z'
  },

  // Electronics - Laptops
  {
    id: '4',
    name: 'MacBook Pro 16"',
    slug: 'macbook-pro-16',
    description: 'Supercharged by M3 Max chip for extreme performance and battery life. Perfect for professionals and creators.',
    shortDescription: 'Professional laptop with M3 Max chip',
    price: 249999,
    comparePrice: 269999,
    sku: 'MBP16M3',
    categoryId: '1-2',
    brand: 'Apple',
    stockQuantity: 25,
    isActive: true,
    featured: true,
    weight: 2.1,
    rating: 4.9,
    reviewCount: 156,
    images: [
      {
        id: '4-1',
        url: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'MacBook Pro 16 inch',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Display': '16.2-inch Liquid Retina XDR',
      'Chip': 'Apple M3 Max',
      'Memory': '36GB unified memory',
      'Storage': '1TB SSD'
    },
    createdAt: '2024-01-10T10:00:00Z'
  },
  {
    id: '5',
    name: 'Dell XPS 13 Plus',
    slug: 'dell-xps-13-plus',
    description: 'Ultra-portable laptop with stunning InfinityEdge display and premium build quality for professionals.',
    shortDescription: 'Premium ultrabook with InfinityEdge display',
    price: 109999,
    comparePrice: 124999,
    sku: 'DXPS13P',
    categoryId: '1-2',
    brand: 'Dell',
    stockQuantity: 18,
    isActive: true,
    featured: false,
    weight: 1.26,
    rating: 4.5,
    reviewCount: 89,
    images: [
      {
        id: '5-1',
        url: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
        altText: 'Dell XPS 13 Plus',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Display': '13.4-inch OLED InfinityEdge',
      'Processor': 'Intel Core i7-1360P',
      'Memory': '16GB LPDDR5',
      'Storage': '512GB SSD'
    },
    createdAt: '2024-01-08T10:00:00Z'
  },
  {
    id: '6',
    name: 'ASUS ROG Strix G15',
    slug: 'asus-rog-strix-g15',
    description: 'High-performance gaming laptop with RTX 4070 graphics and advanced cooling system for ultimate gaming.',
    shortDescription: 'Gaming laptop with RTX 4070 graphics',
    price: 134999,
    comparePrice: 149999,
    sku: 'ARSG15',
    categoryId: '1-2',
    brand: 'ASUS',
    stockQuantity: 22,
    isActive: true,
    featured: false,
    weight: 2.3,
    rating: 4.6,
    reviewCount: 134,
    images: [
      {
        id: '6-1',
        url: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'ASUS ROG Strix G15',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Display': '15.6-inch FHD 144Hz',
      'Processor': 'AMD Ryzen 7 7735HS',
      'Graphics': 'NVIDIA RTX 4070',
      'Memory': '16GB DDR5'
    },
    createdAt: '2024-01-06T10:00:00Z'
  },
  {
    id: '27',
    name: 'HP Pavilion 15',
    slug: 'hp-pavilion-15',
    description: 'Versatile laptop for everyday computing with Intel Core i5 processor and sleek design.',
    shortDescription: 'Everyday laptop with Intel Core i5',
    price: 54999,
    comparePrice: 64999,
    sku: 'HPP15',
    categoryId: '1-2',
    brand: 'HP',
    stockQuantity: 45,
    isActive: true,
    featured: false,
    weight: 1.75,
    rating: 4.3,
    reviewCount: 98,
    images: [
      {
        id: '27-1',
        url: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
        altText: 'HP Pavilion 15',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Display': '15.6-inch FHD',
      'Processor': 'Intel Core i5-1235U',
      'Memory': '8GB DDR4',
      'Storage': '512GB SSD'
    },
    createdAt: '2024-01-04T10:00:00Z'
  },

  // Electronics - Audio
  {
    id: '7',
    name: 'Sony WH-1000XM5',
    slug: 'sony-wh-1000xm5',
    description: 'Industry-leading noise canceling headphones with exceptional sound quality and comfort for audiophiles.',
    shortDescription: 'Sony flagship noise-canceling headphones',
    price: 29999,
    comparePrice: 34999,
    sku: 'SWH1000XM5',
    categoryId: '1-3',
    brand: 'Sony',
    stockQuantity: 45,
    isActive: true,
    featured: true,
    weight: 0.249,
    rating: 4.8,
    reviewCount: 267,
    images: [
      {
        id: '7-1',
        url: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'Sony WH-1000XM5',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Battery Life': '30 hours',
      'Connectivity': 'Bluetooth 5.2',
      'Noise Cancellation': 'Industry-leading ANC',
      'Quick Charge': '3 min = 3 hours'
    },
    createdAt: '2024-01-14T10:00:00Z'
  },
  {
    id: '8',
    name: 'JBL Charge 5 Speaker',
    slug: 'jbl-charge-5-speaker',
    description: 'Portable Bluetooth speaker with powerful sound, waterproof design, and power bank feature for outdoor adventures.',
    shortDescription: 'Waterproof Bluetooth speaker with power bank',
    price: 14999,
    comparePrice: 16999,
    sku: 'JBLC5',
    categoryId: '1-3',
    brand: 'JBL',
    stockQuantity: 67,
    isActive: true,
    featured: false,
    weight: 0.96,
    rating: 4.5,
    reviewCount: 198,
    images: [
      {
        id: '8-1',
        url: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'JBL Charge 5 Speaker',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Battery Life': '20 hours',
      'Waterproof': 'IP67 rated',
      'Power Bank': 'Yes',
      'Connectivity': 'Bluetooth 5.1'
    },
    createdAt: '2024-01-11T10:00:00Z'
  },
  {
    id: '9',
    name: 'boAt Airdopes 141',
    slug: 'boat-airdopes-141',
    description: 'True wireless earbuds with 42 hours playback, IPX4 water resistance, and instant voice assistant.',
    shortDescription: 'TWS earbuds with 42 hours playback',
    price: 1999,
    comparePrice: 2999,
    sku: 'BA141',
    categoryId: '1-3',
    brand: 'boAt',
    stockQuantity: 120,
    isActive: true,
    featured: true,
    weight: 0.04,
    rating: 4.2,
    reviewCount: 1456,
    images: [
      {
        id: '9-1',
        url: 'https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'boAt Airdopes 141',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Battery Life': '42 hours total',
      'Water Resistance': 'IPX4',
      'Driver': '8mm dynamic drivers',
      'Connectivity': 'Bluetooth 5.0'
    },
    createdAt: '2024-01-09T10:00:00Z'
  },

  // Clothing - Men's
  {
    id: '10',
    name: 'Men\'s Premium Jacket',
    slug: 'mens-premium-jacket',
    description: 'Stylish and comfortable jacket perfect for casual and semi-formal occasions with premium cotton blend.',
    shortDescription: 'Versatile jacket for all occasions',
    price: 2999,
    comparePrice: 3999,
    sku: 'MPJ001',
    categoryId: '2-1',
    brand: 'StyleCraft',
    stockQuantity: 40,
    isActive: true,
    featured: false,
    weight: 0.8,
    rating: 4.4,
    reviewCount: 67,
    images: [
      {
        id: '10-1',
        url: 'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'Men\'s premium jacket',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Material': '100% Cotton',
      'Fit': 'Regular',
      'Care': 'Machine washable',
      'Origin': 'Made in India'
    },
    createdAt: '2024-01-08T10:00:00Z'
  },
  {
    id: '11',
    name: 'Men\'s Classic Denim Jeans',
    slug: 'mens-classic-denim-jeans',
    description: 'Premium quality denim jeans with classic fit and timeless style for everyday wear.',
    shortDescription: 'Classic fit denim jeans',
    price: 1999,
    comparePrice: 2499,
    sku: 'MCDJ001',
    categoryId: '2-1',
    brand: 'DenimCo',
    stockQuantity: 55,
    isActive: true,
    featured: false,
    weight: 0.6,
    rating: 4.3,
    reviewCount: 89,
    images: [
      {
        id: '11-1',
        url: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'Men\'s classic denim jeans',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Material': '98% Cotton, 2% Elastane',
      'Fit': 'Classic',
      'Wash': 'Dark Blue',
      'Sizes': '28-42 waist'
    },
    createdAt: '2024-01-07T10:00:00Z'
  },
  {
    id: '12',
    name: 'Men\'s Business Shirt',
    slug: 'mens-business-shirt',
    description: 'Professional dress shirt with wrinkle-resistant fabric and modern fit for office wear.',
    shortDescription: 'Wrinkle-resistant business shirt',
    price: 1499,
    comparePrice: 1999,
    sku: 'MBS001',
    categoryId: '2-1',
    brand: 'ProWear',
    stockQuantity: 73,
    isActive: true,
    featured: false,
    weight: 0.3,
    rating: 4.5,
    reviewCount: 112,
    images: [
      {
        id: '12-1',
        url: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'Men\'s business shirt',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Material': 'Cotton blend',
      'Fit': 'Modern',
      'Features': 'Wrinkle-resistant',
      'Colors': 'White, Blue, Light Blue'
    },
    createdAt: '2024-01-05T10:00:00Z'
  },
  {
    id: '29',
    name: 'Men\'s Casual T-Shirt',
    slug: 'mens-casual-t-shirt',
    description: 'Comfortable cotton t-shirt with modern fit and premium quality fabric for everyday wear.',
    shortDescription: 'Premium cotton casual t-shirt',
    price: 799,
    comparePrice: 1199,
    sku: 'MCT001',
    categoryId: '2-1',
    brand: 'CasualWear',
    stockQuantity: 95,
    isActive: true,
    featured: false,
    weight: 0.2,
    rating: 4.2,
    reviewCount: 234,
    images: [
      {
        id: '29-1',
        url: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'Men\'s casual t-shirt',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Material': '100% Cotton',
      'Fit': 'Regular',
      'Neck': 'Round neck',
      'Sizes': 'S to XXL'
    },
    createdAt: '2024-01-03T10:00:00Z'
  },

  // Clothing - Women's
  {
    id: '13',
    name: 'Women\'s Designer Dress',
    slug: 'womens-designer-dress',
    description: 'Elegant dress crafted from premium materials for special occasions and formal events.',
    shortDescription: 'Elegant dress for special occasions',
    price: 3999,
    comparePrice: 4999,
    sku: 'WDD002',
    categoryId: '2-2',
    brand: 'Elegance',
    stockQuantity: 30,
    isActive: true,
    featured: true,
    weight: 0.4,
    rating: 4.7,
    reviewCount: 123,
    images: [
      {
        id: '13-1',
        url: 'https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'Women\'s designer dress',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Material': 'Silk blend',
      'Length': 'Knee-length',
      'Occasion': 'Formal/Semi-formal',
      'Care': 'Dry clean only'
    },
    createdAt: '2024-01-05T10:00:00Z'
  },
  {
    id: '14',
    name: 'Women\'s Casual Blouse',
    slug: 'womens-casual-blouse',
    description: 'Comfortable and stylish blouse perfect for everyday wear and office settings with modern design.',
    shortDescription: 'Versatile casual blouse',
    price: 1299,
    comparePrice: 1799,
    sku: 'WCB001',
    categoryId: '2-2',
    brand: 'CasualChic',
    stockQuantity: 68,
    isActive: true,
    featured: false,
    weight: 0.2,
    rating: 4.4,
    reviewCount: 87,
    images: [
      {
        id: '14-1',
        url: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'Women\'s casual blouse',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Material': 'Polyester blend',
      'Fit': 'Relaxed',
      'Sleeves': 'Long sleeve',
      'Colors': 'Multiple options'
    },
    createdAt: '2024-01-04T10:00:00Z'
  },
  {
    id: '15',
    name: 'Women\'s Skinny Jeans',
    slug: 'womens-skinny-jeans',
    description: 'High-quality skinny jeans with stretch fabric for comfort and style in everyday wear.',
    shortDescription: 'Comfortable stretch skinny jeans',
    price: 1799,
    comparePrice: 2299,
    sku: 'WSJ001',
    categoryId: '2-2',
    brand: 'FitFashion',
    stockQuantity: 52,
    isActive: true,
    featured: false,
    weight: 0.5,
    rating: 4.6,
    reviewCount: 156,
    images: [
      {
        id: '15-1',
        url: 'https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'Women\'s skinny jeans',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Material': '92% Cotton, 6% Polyester, 2% Elastane',
      'Fit': 'Skinny',
      'Rise': 'Mid-rise',
      'Sizes': '24-34 waist'
    },
    createdAt: '2024-01-03T10:00:00Z'
  },
  {
    id: '30',
    name: 'Women\'s Ethnic Kurti',
    slug: 'womens-ethnic-kurti',
    description: 'Traditional Indian kurti with modern design elements, perfect for casual and festive occasions.',
    shortDescription: 'Traditional kurti with modern design',
    price: 1599,
    comparePrice: 2199,
    sku: 'WEK001',
    categoryId: '2-2',
    brand: 'EthnicWear',
    stockQuantity: 45,
    isActive: true,
    featured: true,
    weight: 0.3,
    rating: 4.5,
    reviewCount: 189,
    images: [
      {
        id: '30-1',
        url: 'https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'Women\'s ethnic kurti',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Material': 'Cotton',
      'Pattern': 'Printed',
      'Sleeves': '3/4 sleeves',
      'Sizes': 'XS to XXL'
    },
    createdAt: '2024-01-02T10:00:00Z'
  },

  // Home & Garden
  {
    id: '16',
    name: 'Smart Home Security Camera',
    slug: 'smart-home-security-camera',
    description: '4K smart security camera with night vision, two-way audio, and mobile app integration for complete home security.',
    shortDescription: '4K security camera with smart features',
    price: 8999,
    comparePrice: 11999,
    sku: 'SHSC4K',
    categoryId: '3',
    brand: 'SecureHome',
    stockQuantity: 60,
    isActive: true,
    featured: false,
    weight: 0.5,
    rating: 4.5,
    reviewCount: 78,
    images: [
      {
        id: '16-1',
        url: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'Smart security camera',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Resolution': '4K Ultra HD',
      'Night Vision': 'Yes',
      'Audio': 'Two-way',
      'Storage': 'Cloud + Local'
    },
    createdAt: '2024-01-03T10:00:00Z'
  },
  {
    id: '17',
    name: 'Modern Table Lamp',
    slug: 'modern-table-lamp',
    description: 'Elegant LED table lamp with adjustable brightness and contemporary design for modern homes.',
    shortDescription: 'LED table lamp with adjustable brightness',
    price: 2999,
    comparePrice: 3999,
    sku: 'MTL001',
    categoryId: '3',
    brand: 'LightCraft',
    stockQuantity: 45,
    isActive: true,
    featured: true,
    weight: 1.2,
    rating: 4.6,
    reviewCount: 92,
    images: [
      {
        id: '17-1',
        url: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'Modern table lamp',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Light Source': 'LED',
      'Brightness': 'Adjustable',
      'Material': 'Metal and fabric',
      'Height': '24 inches'
    },
    createdAt: '2024-01-02T10:00:00Z'
  },
  {
    id: '18',
    name: 'Ceramic Plant Pot Set',
    slug: 'ceramic-plant-pot-set',
    description: 'Beautiful set of ceramic plant pots with drainage holes and saucers for indoor gardening.',
    shortDescription: 'Decorative ceramic plant pot set',
    price: 1299,
    comparePrice: 1799,
    sku: 'CPPS001',
    categoryId: '3',
    brand: 'GreenThumb',
    stockQuantity: 78,
    isActive: true,
    featured: false,
    weight: 2.1,
    rating: 4.4,
    reviewCount: 134,
    images: [
      {
        id: '18-1',
        url: 'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'Ceramic plant pot set',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Material': 'Ceramic',
      'Set Size': '3 pots',
      'Drainage': 'Yes',
      'Sizes': 'Small, Medium, Large'
    },
    createdAt: '2024-01-01T10:00:00Z'
  },
  {
    id: '19',
    name: 'Bamboo Kitchen Utensil Set',
    slug: 'bamboo-kitchen-utensil-set',
    description: 'Eco-friendly bamboo kitchen utensil set with holder for sustainable cooking and food preparation.',
    shortDescription: 'Eco-friendly bamboo utensil set',
    price: 999,
    comparePrice: 1499,
    sku: 'BKUS001',
    categoryId: '3',
    brand: 'EcoKitchen',
    stockQuantity: 89,
    isActive: true,
    featured: false,
    weight: 0.8,
    rating: 4.7,
    reviewCount: 167,
    images: [
      {
        id: '19-1',
        url: 'https://images.pexels.com/photos/4226769/pexels-photo-4226769.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'Bamboo kitchen utensil set',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Material': '100% Bamboo',
      'Set Includes': '6 utensils + holder',
      'Eco-friendly': 'Yes',
      'Care': 'Hand wash only'
    },
    createdAt: '2023-12-30T10:00:00Z'
  },
  {
    id: '20',
    name: 'Smart Thermostat',
    slug: 'smart-thermostat',
    description: 'WiFi-enabled smart thermostat with energy-saving features and mobile app control for efficient home climate management.',
    shortDescription: 'WiFi smart thermostat with app control',
    price: 12999,
    comparePrice: 15999,
    sku: 'ST001',
    categoryId: '3',
    brand: 'SmartHome',
    stockQuantity: 34,
    isActive: true,
    featured: true,
    weight: 0.6,
    rating: 4.8,
    reviewCount: 203,
    images: [
      {
        id: '20-1',
        url: 'https://images.pexels.com/photos/8031918/pexels-photo-8031918.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'Smart thermostat',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Connectivity': 'WiFi',
      'Compatibility': 'Most HVAC systems',
      'Energy Saving': 'Up to 23%',
      'Display': 'Color touchscreen'
    },
    createdAt: '2023-12-28T10:00:00Z'
  },
  {
    id: '31',
    name: 'Air Purifier with HEPA Filter',
    slug: 'air-purifier-hepa-filter',
    description: 'Advanced air purifier with True HEPA filter, removes 99.97% of airborne particles for cleaner indoor air.',
    shortDescription: 'HEPA air purifier for clean air',
    price: 15999,
    comparePrice: 19999,
    sku: 'APHF001',
    categoryId: '3',
    brand: 'PureAir',
    stockQuantity: 28,
    isActive: true,
    featured: false,
    weight: 5.2,
    rating: 4.6,
    reviewCount: 145,
    images: [
      {
        id: '31-1',
        url: 'https://images.pexels.com/photos/8031918/pexels-photo-8031918.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'Air purifier with HEPA filter',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Filter Type': 'True HEPA',
      'Coverage': 'Up to 500 sq ft',
      'Noise Level': 'Ultra quiet',
      'Smart Features': 'App control, air quality sensor'
    },
    createdAt: '2023-12-26T10:00:00Z'
  },
  {
    id: '32',
    name: 'Ergonomic Office Chair',
    slug: 'ergonomic-office-chair',
    description: 'Premium ergonomic office chair with lumbar support, adjustable height, and breathable mesh for all-day comfort.',
    shortDescription: 'Ergonomic chair with lumbar support',
    price: 18999,
    comparePrice: 24999,
    sku: 'EOC001',
    categoryId: '3',
    brand: 'ComfortSeating',
    stockQuantity: 22,
    isActive: true,
    featured: false,
    weight: 18.5,
    rating: 4.7,
    reviewCount: 89,
    images: [
      {
        id: '32-1',
        url: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'Ergonomic office chair',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Material': 'Breathable mesh',
      'Adjustability': 'Height, armrests, tilt',
      'Weight Capacity': '150 kg',
      'Warranty': '5 years'
    },
    createdAt: '2023-12-24T10:00:00Z'
  },

  // Sports
  {
    id: '21',
    name: 'Professional Yoga Mat',
    slug: 'professional-yoga-mat',
    description: 'Premium non-slip yoga mat with excellent cushioning and eco-friendly materials for yoga and fitness.',
    shortDescription: 'Premium non-slip yoga mat',
    price: 2499,
    comparePrice: 3199,
    sku: 'PYM001',
    categoryId: '4',
    brand: 'ZenFit',
    stockQuantity: 67,
    isActive: true,
    featured: true,
    weight: 1.8,
    rating: 4.7,
    reviewCount: 189,
    images: [
      {
        id: '21-1',
        url: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'Professional yoga mat',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Material': 'Natural rubber',
      'Thickness': '6mm',
      'Size': '72" x 24"',
      'Non-slip': 'Yes'
    },
    createdAt: '2023-12-27T10:00:00Z'
  },
  {
    id: '22',
    name: 'Adjustable Dumbbell Set',
    slug: 'adjustable-dumbbell-set',
    description: 'Space-saving adjustable dumbbells with quick weight change system for home gym workouts.',
    shortDescription: 'Space-saving adjustable dumbbells',
    price: 24999,
    comparePrice: 32999,
    sku: 'ADS001',
    categoryId: '4',
    brand: 'PowerFit',
    stockQuantity: 23,
    isActive: true,
    featured: false,
    weight: 24.0,
    rating: 4.6,
    reviewCount: 145,
    images: [
      {
        id: '22-1',
        url: 'https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'Adjustable dumbbell set',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Weight Range': '2.5-25 kg per dumbbell',
      'Adjustment': 'Quick-change system',
      'Material': 'Steel and rubber',
      'Space Saving': 'Yes'
    },
    createdAt: '2023-12-26T10:00:00Z'
  },
  {
    id: '23',
    name: 'Running Shoes',
    slug: 'running-shoes',
    description: 'High-performance running shoes with advanced cushioning and breathable design for marathon runners.',
    shortDescription: 'High-performance running shoes',
    price: 4999,
    comparePrice: 6499,
    sku: 'RS001',
    categoryId: '4',
    brand: 'RunTech',
    stockQuantity: 56,
    isActive: true,
    featured: true,
    weight: 0.8,
    rating: 4.5,
    reviewCount: 234,
    images: [
      {
        id: '23-1',
        url: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'Running shoes',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Cushioning': 'Advanced foam',
      'Upper': 'Breathable mesh',
      'Sole': 'Rubber outsole',
      'Sizes': '6-13 UK'
    },
    createdAt: '2023-12-25T10:00:00Z'
  },
  {
    id: '24',
    name: 'Resistance Band Set',
    slug: 'resistance-band-set',
    description: 'Complete resistance band workout set with multiple resistance levels and accessories for full-body training.',
    shortDescription: 'Complete resistance band workout set',
    price: 1599,
    comparePrice: 2299,
    sku: 'RBS001',
    categoryId: '4',
    brand: 'FlexFit',
    stockQuantity: 89,
    isActive: true,
    featured: false,
    weight: 1.2,
    rating: 4.4,
    reviewCount: 178,
    images: [
      {
        id: '24-1',
        url: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'Resistance band set',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Resistance Levels': '5 different levels',
      'Accessories': 'Handles, door anchor, ankle straps',
      'Material': 'Natural latex',
      'Portable': 'Yes'
    },
    createdAt: '2023-12-24T10:00:00Z'
  },
  {
    id: '25',
    name: 'Basketball',
    slug: 'basketball',
    description: 'Official size basketball with superior grip and durability for indoor and outdoor play.',
    shortDescription: 'Official size basketball',
    price: 1299,
    comparePrice: 1799,
    sku: 'BB001',
    categoryId: '4',
    brand: 'SportsPro',
    stockQuantity: 78,
    isActive: true,
    featured: false,
    weight: 0.6,
    rating: 4.3,
    reviewCount: 156,
    images: [
      {
        id: '25-1',
        url: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'Basketball',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Size': 'Official (Size 7)',
      'Material': 'Composite leather',
      'Use': 'Indoor/Outdoor',
      'Grip': 'Deep channel design'
    },
    createdAt: '2023-12-23T10:00:00Z'
  },
  {
    id: '33',
    name: 'Treadmill for Home',
    slug: 'treadmill-for-home',
    description: 'Compact foldable treadmill with digital display, multiple speed settings, and heart rate monitor for home fitness.',
    shortDescription: 'Foldable home treadmill with digital display',
    price: 45999,
    comparePrice: 54999,
    sku: 'TFH001',
    categoryId: '4',
    brand: 'FitHome',
    stockQuantity: 15,
    isActive: true,
    featured: true,
    weight: 45.0,
    rating: 4.4,
    reviewCount: 67,
    images: [
      {
        id: '33-1',
        url: 'https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'Treadmill for home',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Speed Range': '1-12 km/h',
      'Display': 'LED digital',
      'Foldable': 'Yes',
      'Max Weight': '120 kg'
    },
    createdAt: '2023-12-22T10:00:00Z'
  },
  {
    id: '34',
    name: 'Cricket Bat Professional',
    slug: 'cricket-bat-professional',
    description: 'Professional grade cricket bat made from premium English willow for serious cricket players.',
    shortDescription: 'Professional English willow cricket bat',
    price: 8999,
    comparePrice: 12999,
    sku: 'CBP001',
    categoryId: '4',
    brand: 'CricketPro',
    stockQuantity: 32,
    isActive: true,
    featured: false,
    weight: 1.2,
    rating: 4.6,
    reviewCount: 89,
    images: [
      {
        id: '34-1',
        url: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'Cricket bat professional',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Material': 'English Willow',
      'Weight': '1.1-1.3 kg',
      'Handle': 'Cane handle',
      'Grade': 'Professional'
    },
    createdAt: '2023-12-21T10:00:00Z'
  },
  {
    id: '35',
    name: 'Badminton Racket Set',
    slug: 'badminton-racket-set',
    description: 'Professional badminton racket set with 2 rackets, shuttlecocks, and carrying case for competitive play.',
    shortDescription: 'Professional badminton racket set',
    price: 3999,
    comparePrice: 5499,
    sku: 'BRS001',
    categoryId: '4',
    brand: 'ShuttlePro',
    stockQuantity: 45,
    isActive: true,
    featured: false,
    weight: 0.8,
    rating: 4.5,
    reviewCount: 123,
    images: [
      {
        id: '35-1',
        url: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
        altText: 'Badminton racket set',
        sortOrder: 1,
        isPrimary: true
      }
    ],
    specifications: {
      'Material': 'Carbon fiber',
      'Weight': '85-90g per racket',
      'String Tension': '22-26 lbs',
      'Includes': '2 rackets, shuttlecocks, case'
    },
    createdAt: '2023-12-20T10:00:00Z'
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    productId: '1',
    reviewerName: 'Rajesh Kumar',
    rating: 5,
    reviewText: 'Amazing phone! The camera quality is outstanding and the performance is incredibly smooth. Worth every rupee!',
    createdAt: '2024-01-20T14:30:00Z',
    isVerified: true
  },
  {
    id: '2',
    productId: '1',
    reviewerName: 'Priya Sharma',
    rating: 4,
    reviewText: 'Great phone overall, but the battery life could be better for the price point.',
    createdAt: '2024-01-18T09:15:00Z',
    isVerified: true
  },
  {
    id: '3',
    productId: '4',
    reviewerName: 'Amit Patel',
    rating: 5,
    reviewText: 'Perfect for professional work. The M3 chip handles everything I throw at it. Best laptop for creative work.',
    createdAt: '2024-01-16T16:45:00Z',
    isVerified: true
  },
  {
    id: '4',
    productId: '7',
    reviewerName: 'Sneha Reddy',
    rating: 5,
    reviewText: 'Best noise-canceling headphones I\'ve ever owned. Worth every penny! Great for long flights.',
    createdAt: '2024-01-15T11:20:00Z',
    isVerified: true
  },
  {
    id: '5',
    productId: '21',
    reviewerName: 'Vikram Singh',
    rating: 5,
    reviewText: 'Excellent yoga mat with great grip. Perfect for my daily practice. Highly recommended!',
    createdAt: '2024-01-14T08:30:00Z',
    isVerified: true
  },
  {
    id: '6',
    productId: '9',
    reviewerName: 'Ananya Gupta',
    rating: 4,
    reviewText: 'Great value for money! Sound quality is impressive for the price. Battery life is excellent.',
    createdAt: '2024-01-13T12:45:00Z',
    isVerified: true
  },
  {
    id: '7',
    productId: '30',
    reviewerName: 'Meera Joshi',
    rating: 5,
    reviewText: 'Beautiful kurti with excellent fabric quality. Perfect fit and comfortable to wear all day.',
    createdAt: '2024-01-12T15:20:00Z',
    isVerified: true
  },
  {
    id: '8',
    productId: '17',
    reviewerName: 'Rohit Agarwal',
    rating: 4,
    reviewText: 'Stylish lamp that adds great ambiance to my room. LED is bright and adjustable.',
    createdAt: '2024-01-11T18:30:00Z',
    isVerified: true
  }
];

export const brands = [
  'Apple',
  'Samsung',
  'Google',
  'OnePlus',
  'Dell',
  'HP',
  'ASUS',
  'Sony',
  'JBL',
  'boAt',
  'SoundTech',
  'StyleCraft',
  'DenimCo',
  'ProWear',
  'CasualWear',
  'Elegance',
  'CasualChic',
  'FitFashion',
  'EthnicWear',
  'SecureHome',
  'LightCraft',
  'GreenThumb',
  'EcoKitchen',
  'SmartHome',
  'PureAir',
  'ComfortSeating',
  'ZenFit',
  'PowerFit',
  'RunTech',
  'FlexFit',
  'SportsPro',
  'FitHome',
  'CricketPro',
  'ShuttlePro'
];

export const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Customer Rating' },
  { value: 'name', label: 'Name A-Z' }
];