import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Typography,
  Button,
  TextField,
  Rating,
  Divider,
  CircularProgress,
  IconButton,
  Snackbar,
  Alert,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { 
  ShoppingCart,
  Add as AddIcon,
  Remove as RemoveIcon 
} from '@mui/icons-material';
import { addToCart } from '../../store/slices/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const { products, loading } = useSelector((state) => state.products);
  const { cartItems } = useSelector((state) => state.cart);
  const product = products.find((p) => p._id === id);

  const existingCartItem = cartItems.find(item => item._id === id);
  const currentQuantity = existingCartItem ? existingCartItem.quantity : 0;

  if (loading || !product) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh" }}>
        <CircularProgress />
      </div>
    );
  }

  const handleQuantityChange = (newQuantity) => {
    setQuantity(Math.max(1, Math.min(newQuantity, 10))); // Limit to 10 items
  };

  const handleAddToCart = () => {
    if (!product.inStock) {
      return;
    }

    dispatch(addToCart({
      _id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    }));

    setShowSuccess(true);
    setQuantity(1); // Reset quantity after adding to cart
  };

  const handleViewCart = () => {
    navigate('/cart');
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 1rem' }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {/* Product Image */}
        <div style={{ flex: 1 }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </div>

        {/* Product Details */}
        <div style={{ flex: 1 }}>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            {product.name}
          </Typography>
          
          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
            <Rating value={product.rating} readOnly precision={0.5} />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              ({product.reviews?.length || 0} reviews)
            </Typography>
          </div>

          <Typography variant="h5" color="primary" sx={{ mb: 2, fontWeight: 'bold' }}>
            ${product.price.toFixed(2)}
          </Typography>

          <Typography variant="body1" sx={{ mb: 3 }}>
            {product.description}
          </Typography>

          <div style={{ marginBottom: '1.5rem' }}>
            <Typography variant="subtitle1" gutterBottom>
              Quantity
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton 
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1}
                size="small"
              >
                <RemoveIcon />
              </IconButton>
              <TextField
                type="number"
                value={quantity}
                onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                inputProps={{ 
                  min: 1,
                  max: 10,
                  style: { textAlign: 'center' }
                }}
                sx={{ width: 80 }}
              />
              <IconButton 
                onClick={() => handleQuantityChange(quantity + 1)}
                disabled={quantity >= 10}
                size="small"
              >
                <AddIcon />
              </IconButton>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<ShoppingCart />}
              onClick={handleAddToCart}
              disabled={!product.inStock}
              sx={{
                flex: 2,
                py: 1.5,
                fontWeight: 'bold',
                borderRadius: 2
              }}
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>

            {currentQuantity > 0 && (
              <Button
                variant="outlined"
                size="large"
                onClick={handleViewCart}
                sx={{
                  flex: 1,
                  py: 1.5,
                  fontWeight: 'bold',
                  borderRadius: 2
                }}
              >
                View Cart
              </Button>
            )}
          </div>

          <Divider sx={{ my: 4 }} />

          {/* Additional Information */}
          <Typography variant="h6" gutterBottom fontWeight="bold">
            Product Details
          </Typography>
          <div style={{ 
            backgroundColor: 'background.paper', 
            padding: '1rem',
            borderRadius: 1,
            border: '1px solid',
            borderColor: 'divider'
          }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Category: {product.category}
            </Typography>
            <Typography 
              variant="body2" 
              color={product.inStock ? 'success.main' : 'error.main'}
              fontWeight="medium"
            >
              Availability: {product.inStock ? 'In Stock' : 'Out of Stock'}
            </Typography>
          </div>
        </div>
      </div>

      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setShowSuccess(false)} 
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Item added to cart successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ProductDetail;
