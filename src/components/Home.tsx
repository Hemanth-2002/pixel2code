import React, { useState } from "react";
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
  Skeleton,
} from "@mui/material";
import {
  Search,
  ViewModule,
  ViewList,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";
import { mockProducts, categories, brands } from "../data/mockData";

const ProductCardSkeleton: React.FC<{ viewMode: "grid" | "list" }> = ({
  viewMode,
}) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: viewMode === "list" ? "flex" : "block",
      }}
    >
      <Skeleton
        variant="rectangular"
        width={viewMode === "list" ? 150 : "100%"}
        height={viewMode === "list" ? 150 : 200}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" height={20} />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="rectangular" width="40%" height={24} sx={{ mt: 1 }} />
      </CardContent>
    </Card>
  );
};

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(mockProducts);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 1000); // Simulate 1 second loading time
    return () => clearTimeout(timer);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("relevance");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [minRating, setMinRating] = useState<number>(0);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      searchTerm === "" ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const matchesBrand =
      selectedBrands.length === 0 ||
      (product.brand && selectedBrands.includes(product.brand));
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesRating = minRating === 0 || product.rating >= minRating;
    return (
      matchesSearch &&
      matchesCategory &&
      matchesBrand &&
      matchesPrice &&
      matchesRating
    );
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = sortedProducts.slice(startIndex, endIndex);

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [
    searchTerm,
    selectedCategories,
    selectedBrands,
    priceRange,
    minRating,
    sortBy,
    products, // Add products to dependency array
  ]);

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
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

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="h6">
              {products.length} results
              {searchTerm ? ` for "${searchTerm}"` : ""}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
                  onClick={() => setViewMode("grid")}
                  color={viewMode === "grid" ? "primary" : "default"}
                >
                  <ViewModule />
                </IconButton>
                <IconButton
                  onClick={() => setViewMode("list")}
                  color={viewMode === "list" ? "primary" : "default"}
                >
                  <ViewList />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 3 }}>
          {/* Left Sidebar - Filters */}
          <Box sx={{ width: { xs: "100%", md: "25%" } }}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Filters
              </Typography>

              {/* Active Filters */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  Active Filters
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 1 }}>
                  {selectedCategories.map((category) => (
                    <Chip
                      key={category}
                      label={category}
                      onDelete={() => handleCategoryChange(category)}
                    />
                  ))}
                  {selectedBrands.map((brand) => (
                    <Chip
                      key={brand}
                      label={brand}
                      onDelete={() => handleBrandChange(brand)}
                    />
                  ))}
                  {priceRange[0] > 0 || priceRange[1] < 1000 ? (
                    <Chip
                      label={`$${priceRange[0]}-$${priceRange[1]}`}
                      onDelete={() => setPriceRange([0, 1000])}
                    />
                  ) : null}
                  {minRating > 0 ? (
                    <Chip
                      label={`${minRating}+ Stars`}
                      onDelete={() => setMinRating(0)}
                    />
                  ) : null}
                </Box>
                {(selectedCategories.length > 0 ||
                  selectedBrands.length > 0 ||
                  priceRange[0] > 0 ||
                  priceRange[1] < 1000 ||
                  minRating > 0) && (
                  <Button
                    size="small"
                    onClick={() => {
                      setSelectedCategories([]);
                      setSelectedBrands([]);
                      setPriceRange([0, 1000]);
                      setMinRating(0);
                    }}
                  >
                    Clear All
                  </Button>
                )}
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
                  onChange={(_, newValue) =>
                    setPriceRange(newValue as number[])
                  }
                  valueLabelDisplay="auto"
                  min={0}
                  max={500}
                  step={10}
                />
                <Typography variant="body2" sx={{ textAlign: "center", mt: 1 }}>
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
                        onChange={() =>
                          setMinRating(minRating === stars ? 0 : stars)
                        }
                      />
                    }
                    label={
                      <Box sx={{ display: "flex", alignItems: "center" }}>
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
          <Box sx={{ width: { xs: "100%", md: "75%" } }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                },
                gap: 2,
              }}
            >
            {loading ? (
                // Loading Skeletons
                Array.from(new Array(itemsPerPage)).map((_, index) => (
                  <ProductCardSkeleton key={index} viewMode={viewMode} />
                ))
              ) : paginatedProducts.length === 0 ? (
                // Empty State
                <Box
                  sx={{
                    gridColumn: "1 / -1", // Span across all columns
                    textAlign: "center",
                    py: 4,
                    color: "text.secondary",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    No products found
                  </Typography>
                  <Typography variant="body1">
                    Try adjusting your filters or clearing them.
                  </Typography>
                  {(selectedCategories.length > 0 ||
                    selectedBrands.length > 0 ||
                    priceRange[0] > 0 ||
                    priceRange[1] < 1000 ||
                    minRating > 0 ||
                    searchTerm !== "") && (
                    <Button
                      variant="outlined"
                      sx={{ mt: 2 }}
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategories([]);
                        setSelectedBrands([]);
                        setPriceRange([0, 1000]);
                        setMinRating(0);
                      }}
                    >
                      Clear All Filters
                    </Button>
                  )}
                </Box>
              ) : (
                // Actual Product Cards
                paginatedProducts.map((product) => (
                  <Card
                    key={product.id}
                    sx={{
                      height: "100%",
                      position: "relative",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                        "& .product-image": {
                          transform: "scale(1.05)",
                        },
                        "& .favorite-button": {
                          opacity: 1,
                          transform: "scale(1.1)",
                        },
                        "& .discount-badge": {
                          transform: "scale(1.1)",
                        },
                      },
                    }}
                  >
                    {/* Discount Badge */}
                    {product.discount && (
                      <Chip
                        label={`-${product.discount}%`}
                        color="secondary"
                        size="small"
                        className="discount-badge"
                        sx={{
                          position: "absolute",
                          top: 8,
                          left: 8,
                          zIndex: 1,
                          transition: "transform 0.3s ease-in-out",
                        }}
                      />
                    )}

                    {/* Favorite Button */}
                    <IconButton
                      className="favorite-button"
                      sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        zIndex: 1,
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        opacity: 0.7,
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.95)",
                        },
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
                      className="product-image"
                      sx={{
                        transition: "transform 0.3s ease-in-out",
                        overflow: "hidden",
                      }}
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

                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 1 }}
                      >
                        <Rating value={product.rating} readOnly size="small" />
                        <Typography variant="body2" sx={{ ml: 1 }}>
                          ({product.reviewCount})
                        </Typography>
                      </Box>

                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Typography variant="h6" color="primary">
                          ${product.price}
                        </Typography>
                        {product.originalPrice && (
                          <Typography
                            variant="body2"
                            sx={{
                              textDecoration: "line-through",
                              color: "text.secondary",
                            }}
                          >
                            ${product.originalPrice}
                          </Typography>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                ))
              )}
            </Box>

            {/* Pagination */}
            {totalPages > 1 && (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  color="primary"
                  onChange={(_, page) => setCurrentPage(page)}
                  showFirstButton
                  showLastButton
                />
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
