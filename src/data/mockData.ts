export interface Product {
  id: number
  name: string
  category: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  image: string
  discount?: number
  brand?: string
}

export interface Category {
  name: string
  count: number
}

export interface Brand {
  name: string
  count: number
}

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    category: 'Electronics',
    brand: 'Sony',
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.5,
    reviewCount: 234,
    image: 'https://picsum.photos/300/200?random=1',
    discount: 25,
  },
  {
    id: 2,
    name: 'Ultra-Comfortable Running Shoes',
    category: 'Sports',
    brand: 'Nike',
    price: 89.99,
    rating: 4.2,
    reviewCount: 156,
    image: 'https://picsum.photos/300/200?random=2',
  },
  {
    id: 3,
    name: 'Smart Watch',
    category: 'Electronics',
    brand: 'Apple',
    price: 299.99,
    originalPrice: 349.99,
    rating: 4.7,
    reviewCount: 89,
    image: 'https://picsum.photos/300/200?random=3',
    discount: 14,
  },
  {
    id: 4,
    name: 'Organic Cotton T-Shirt',
    category: 'Clothing',
    brand: 'Adidas',
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.3,
    reviewCount: 67,
    image: 'https://picsum.photos/300/200?random=4',
    discount: 29,
  },
  {
    id: 5,
    name: 'Professional Camera Lens',
    category: 'Electronics',
    brand: 'Sony',
    price: 599.99,
    rating: 4.8,
    reviewCount: 45,
    image: 'https://picsum.photos/300/200?random=5',
  },
  {
    id: 6,
    name: 'Bestselling Fiction Novel',
    category: 'Books',
    price: 14.99,
    rating: 4.6,
    reviewCount: 123,
    image: 'https://picsum.photos/300/200?random=6',
  },
  {
    id: 7,
    name: 'Skincare Set with Natural Ingredients',
    category: 'Beauty',
    price: 79.99,
    originalPrice: 99.00,
    rating: 4.4,
    reviewCount: 78,
    image: 'https://picsum.photos/300/200?random=7',
    discount: 20,
  },
  {
    id: 8,
    name: 'Ergonomic Office Chair',
    category: 'Home & Garden',
    price: 249.99,
    rating: 4.5,
    reviewCount: 92,
    image: 'https://picsum.photos/300/200?random=8',
  },
  {
    id: 9,
    name: 'Wireless Gaming Mouse',
    category: 'Electronics',
    brand: 'Samsung',
    price: 69.99,
    rating: 4.3,
    reviewCount: 145,
    image: 'https://picsum.photos/300/200?random=9',
  },
  {
    id: 10,
    name: 'Yoga Mat Premium',
    category: 'Sports',
    brand: 'Nike',
    price: 45.99,
    rating: 4.1,
    reviewCount: 89,
    image: 'https://picsum.photos/300/200?random=10',
  },
  {
    id: 11,
    name: 'Designer Jeans',
    category: 'Clothing',
    brand: 'Adidas',
    price: 89.99,
    originalPrice: 120.00,
    rating: 4.2,
    reviewCount: 156,
    image: 'https://picsum.photos/300/200?random=11',
    discount: 25,
  },
  {
    id: 12,
    name: 'Programming Book',
    category: 'Books',
    price: 39.99,
    rating: 4.7,
    reviewCount: 234,
    image: 'https://picsum.photos/300/200?random=12',
  },
  {
    id: 13,
    name: 'Face Cream Anti-Aging',
    category: 'Beauty',
    price: 59.99,
    rating: 4.3,
    reviewCount: 67,
    image: 'https://picsum.photos/300/200?random=13',
  },
  {
    id: 14,
    name: 'Garden Tools Set',
    category: 'Home & Garden',
    price: 79.99,
    rating: 4.4,
    reviewCount: 45,
    image: 'https://picsum.photos/300/200?random=14',
  },
  {
    id: 15,
    name: 'iPhone 15 Pro',
    category: 'Electronics',
    brand: 'Apple',
    price: 999.99,
    rating: 4.8,
    reviewCount: 456,
    image: 'https://picsum.photos/300/200?random=15',
  },
]

export const categories: Category[] = [
  { name: 'Electronics', count: 5 },
  { name: 'Clothing', count: 2 },
  { name: 'Books', count: 2 },
  { name: 'Home & Garden', count: 2 },
  { name: 'Sports', count: 2 },
  { name: 'Beauty', count: 2 },
  { name: 'Shoes', count: 3 },
]

export const brands: Brand[] = [
  { name: 'Apple', count: 2 },
  { name: 'Samsung', count: 1 },
  { name: 'Nike', count: 2 },
  { name: 'Adidas', count: 2 },
  { name: 'Sony', count: 2 },
]
