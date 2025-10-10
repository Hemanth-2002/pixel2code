import React, { useState } from 'react'
import {
  Box,
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  TextField,
  InputAdornment,
  Chip,
  Button,
  FormControlLabel,
  Checkbox,
  Slider,
  Rating,
  Pagination,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper,
  Divider,
} from '@mui/material'
import {
  Search,
  ViewModule,
  ViewList,
  Favorite,
  FavoriteBorder,
} from '@mui/icons-material'

interface Product {
  id: number
  name: string
  category: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  image: string
  discount?: number
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    category: 'Electronics',
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.5,
    reviewCount: 234,
    image: 'https://via.placeholder.com/300x200/FFD700/000000?text=Headphones',
    discount: 25,
  },
  {
    id: 2,
    name: 'Ultra-Comfortable Running Shoes',
    category: 'Sports',
    price: 89.99,
    rating: 4.2,
    reviewCount: 156,
    image: 'https://via.placeholder.com/300x200/FF0000/FFFFFF?text=Nike+Shoes',
  },
  {
    id: 3,
    name: 'Smart Watch',
    category: 'Electronics',
    price: 299.99,
    originalPrice: 349.99,
    rating: 4.7,
    reviewCount: 89,
    image: 'https://via.placeholder.com/300x200/E0E0E0/000000?text=Smart+Watch',
    discount: 14,
  },
  {
    id: 4,
    name: 'Organic Cotton T-Shirt',
    category: 'Clothing',
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.3,
    reviewCount: 67,
    image: 'https://via.placeholder.com/300x200/FFFFFF/000000?text=T-Shirt',
    discount: 29,
  },
  {
    id: 5,
    name: 'Professional Camera Lens',
    category: 'Electronics',
    price: 599.99,
    rating: 4.8,
    reviewCount: 45,
    image: 'https://via.placeholder.com/300x200/8B4513/FFFFFF?text=Camera+Lens',
  },
  {
    id: 6,
    name: 'Bestselling Fiction Novel',
    category: 'Books',
    price: 14.99,
    rating: 4.6,
    reviewCount: 123,
    image: 'https://via.placeholder.com/300x200/FFE4B5/000000?text=Book',
  },
  {
    id: 7,
    name: 'Skincare Set with Natural Ingredients',
    category: 'Beauty',
    price: 79.99,
    originalPrice: 99.00,
    rating: 4.4,
    reviewCount: 78,
    image: 'https://via.placeholder.com/300x200/9370DB/FFFFFF?text=Skincare',
    discount: 20,
  },
  {
    id: 8,
    name: 'Ergonomic Office Chair',
    category: 'Home & Garden',
    price: 249.99,
    rating: 4.5,
    reviewCount: 92,
    image: 'https://via.placeholder.com/300x200/FFD700/000000?text=Office+Chair',
  },
  {
    id: 9,
    name: 'Wireless Gaming Mouse',
    category: 'Electronics',
    price: 69.99,
    rating: 4.3,
    reviewCount: 145,
    image: 'https://via.placeholder.com/300x200/000000/FFFFFF?text=Gaming+Mouse',
  },
]

const categories = [
  { name: 'Electronics', count: 1234 },
  { name: 'Clothing', count: 856 },
  { name: 'Books', count: 432 },
  { name: 'Home & Garden', count: 678 },
  { name: 'Sports', count: 321 },
  { name: 'Beauty', count: 180 },
]

const brands = [
  { name: 'Apple', count: 234 },
  { name: 'Samsung', count: 186 },
  { name: 'Nike', count: 156 },
  { name: 'Adidas', count: 142 },
  { name: 'Sony', count: 96 },
]

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('wireless headphones')
  const [sortBy, setSortBy] = useState('relevance')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [priceRange, setPriceRange] = useState<number[]>([50, 200])
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['Electronics'])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [minRating, setMinRating] = useState<number>(4)
  const [favorites, setFavorites] = useState<number[]>([])

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    )
  }

  const toggleFavorite = (productId: number) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const filteredProducts = mockProducts.filter(product => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    const matchesRating = product.rating >= minRating
    return matchesCategory && matchesPrice && matchesRating
  })

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="xl" sx={{ py: 3 }}>
        {/* Header */}
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 2 }}
          />
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6">
              3,247 results for "{searchTerm}"
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel>Sort by</InputLabel>
                <Select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  label="Sort by"
                >
                  <MenuItem value="relevance">Relevance</MenuItem>
                  <MenuItem value="price-low">Price: Low to High</MenuItem>
                  <MenuItem value="price-high">Price: High to Low</MenuItem>
                  <MenuItem value="rating">Rating</MenuItem>
                </Select>
              </FormControl>
              
              <Box>
                <IconButton
                  onClick={() => setViewMode('grid')}
                  color={viewMode === 'grid' ? 'primary' : 'default'}
                >
                  <ViewModule />
                </IconButton>
                <IconButton
                  onClick={() => setViewMode('list')}
                  color={viewMode === 'list' ? 'primary' : 'default'}
                >
                  <ViewList />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Typography variant="body1" sx={{ mb: 2 }}>
            This is the updated description of the content.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 3 }}>
          {/* Left Sidebar - Filters */}
          <Box sx={{ width: { xs: '100%', md: '25%' } }}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Filters
              </Typography>
              
              {/* Active Filters */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  Active Filters
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1 }}>
                  <Chip label="Electronics" onDelete={() => handleCategoryChange('Electronics')} />
                  <Chip label="$50-$200" onDelete={() => setPriceRange([0, 1000])} />
                  <Chip label="4+ Stars" onDelete={() => setMinRating(0)} />
                </Box>
                <Button size="small" onClick={() => {
                  setSelectedCategories([])
                  setSelectedBrands([])
                  setPriceRange([0, 1000])
                  setMinRating(0)
                }}>
                  Clear All
                </Button>
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Categories */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  Category
                </Typography>
                {categories.map((category) => (
                  <FormControlLabel
                    key={category.name}
                    control={
                      <Checkbox
                        checked={selectedCategories.includes(category.name)}
                        onChange={() => handleCategoryChange(category.name)}
                      />
                    }
                    label={`${category.name} (${category.count})`}
                  />
                ))}
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Price Range */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  Price Range
                </Typography>
                <Slider
                  value={priceRange}
                  onChange={(_, newValue) => setPriceRange(newValue as number[])}
                  valueLabelDisplay="auto"
                  min={0}
                  max={500}
                  step={10}
                />
                <Typography variant="body2" sx={{ textAlign: 'center', mt: 1 }}>
                  ${priceRange[0]} - ${priceRange[1]}
                </Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Rating */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  Rating
                </Typography>
                {[5, 4, 3, 2, 1].map((stars) => (
                  <FormControlLabel
                    key={stars}
                    control={
                      <Checkbox
                        checked={minRating === stars}
                        onChange={() => setMinRating(minRating === stars ? 0 : stars)}
                      />
                    }
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Rating value={stars} readOnly size="small" />
                        <Typography variant="body2" sx={{ ml: 1 }}>
                          & up
                        </Typography>
                      </Box>
                    }
                  />
                ))}
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Brands */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  Brand
                </Typography>
                {brands.map((brand) => (
                  <FormControlLabel
                    key={brand.name}
                    control={
                      <Checkbox
                        checked={selectedBrands.includes(brand.name)}
                        onChange={() => handleBrandChange(brand.name)}
                      />
                    }
                    label={`${brand.name} (${brand.count})`}
                  />
                ))}
              </Box>
            </Paper>
          </Box>

          {/* Main Content - Product Grid */}
          <Box sx={{ width: { xs: '100%', md: '75%' } }}>
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { 
                xs: '1fr', 
                sm: 'repeat(2, 1fr)', 
                md: 'repeat(3, 1fr)' 
              }, 
              gap: 2 
            }}>
              {filteredProducts.map((product) => (
                <Card key={product.id} sx={{ height: '100%', position: 'relative' }}>
                  {/* Discount Badge */}
                  {product.discount && (
                    <Chip
                      label={`-${product.discount}%`}
                      color="secondary"
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 8,
                        left: 8,
                        zIndex: 1,
                      }}
                    />
                  )}
                  
                  {/* Favorite Button */}
                  <IconButton
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      zIndex: 1,
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    }}
                    onClick={() => toggleFavorite(product.id)}
                  >
                    {favorites.includes(product.id) ? (
                      <Favorite color="error" />
                    ) : (
                      <FavoriteBorder />
                    )}
                  </IconButton>

                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.name}
                  />
                  
                  <CardContent>
                    <Chip
                      label={product.category}
                      size="small"
                      sx={{ mb: 1 }}
                    />
                    
                    <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                      {product.name}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Rating value={product.rating} readOnly size="small" />
                      <Typography variant="body2" sx={{ ml: 1 }}>
                        ({product.reviewCount})
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="h6" color="primary">
                        ${product.price}
                      </Typography>
                      {product.originalPrice && (
                        <Typography
                          variant="body2"
                          sx={{ textDecoration: 'line-through', color: 'text.secondary' }}
                        >
                          ${product.originalPrice}
                        </Typography>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>

            {/* Pagination */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Pagination count={5} page={1} color="primary" />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Home
