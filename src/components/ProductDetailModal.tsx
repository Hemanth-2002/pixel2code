import React from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Typography, Box, Rating } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
}

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ isOpen, onClose, product }) => {
  if (!product) {
    return null;
  }

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        {product.name}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <img src={product.image} alt={product.name} style={{ maxWidth: '100%', height: 'auto' }} />
          <Typography variant="h6" component="p">
            Price: ${product.price.toFixed(2)}
          </Typography>
          <Rating name="read-only" value={product.rating} readOnly precision={0.5} />
          <Typography variant="body1" color="text.secondary">
            {product.description}
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;
