import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Box,
  TextField,
  Divider,
  Alert,
} from '@mui/material';
import { Add, Remove, Delete, ShoppingBag } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeFromCart,
  updateQuantity,
  clearCart,
  selectCartTotal,
} from '../../store/slices/cartSlice';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const cartTotal = useSelector(selectCartTotal);

  const handleQuantityChange = (_id, quantity) => {
    if (quantity > 0 && quantity <= 10) {
      dispatch(updateQuantity({ _id, quantity }));
    }
  };

  const handleRemoveItem = (_id) => {
    dispatch(removeFromCart(_id));
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, textAlign: 'center' }}>
        <Box sx={{ py: 8 }}>
          <ShoppingBag sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h5" gutterBottom>
            Your cart is empty
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Looks like you haven't added any items to your cart yet.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/products')}
            sx={{ 
              mt: 2,
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontWeight: 'bold'
            }}
          >
            Start Shopping
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Shopping Cart
      </Typography>

      <Grid container spacing={4}>
        {/* Cart Items */}
        <Grid item xs={12} md={8}>
          {cartItems.map((item) => (
            <Card 
              key={item._id} 
              sx={{ 
                mb: 2,
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)',
                }
              }}
            >
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} sm={3}>
                    <CardMedia
                      component="img"
                      height="120"
                      image={item.image}
                      alt={item.name}
                      sx={{ 
                        objectFit: 'cover', 
                        borderRadius: 1,
                        cursor: 'pointer'
                      }}
                      onClick={() => navigate(`/product/${item._id}`)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                      }}
                    >
                      <Box>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            cursor: 'pointer',
                            '&:hover': { color: 'primary.main' }
                          }}
                          onClick={() => navigate(`/product/${item._id}`)}
                        >
                          {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          ${item.price.toFixed(2)} each
                        </Typography>
                      </Box>
                      <IconButton
                        color="error"
                        onClick={() => handleRemoveItem(item._id)}
                        sx={{ 
                          '&:hover': { 
                            backgroundColor: 'error.light',
                            color: 'white'
                          }
                        }}
                      >
                        <Delete />
                      </IconButton>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mt: 2,
                        gap: 1,
                      }}
                    >
                      <IconButton
                        size="small"
                        onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Remove />
                      </IconButton>
                      <TextField
                        size="small"
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value) || 1)}
                        inputProps={{ 
                          min: 1, 
                          max: 10,
                          style: { textAlign: 'center' } 
                        }}
                        sx={{ width: '60px' }}
                      />
                      <IconButton
                        size="small"
                        onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                        disabled={item.quantity >= 10}
                      >
                        <Add />
                      </IconButton>
                      <Typography
                        variant="body1"
                        sx={{ ml: 'auto', fontWeight: 'bold' }}
                      >
                        ${(item.price * item.quantity).toFixed(2)}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </Grid>

        {/* Order Summary */}
        <Grid item xs={12} md={4}>
          <Card sx={{ position: 'sticky', top: 20 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Order Summary
              </Typography>
              
              <Box sx={{ my: 2 }}>
                <Grid container justifyContent="space-between">
                  <Typography>Subtotal ({cartItems.length} items)</Typography>
                  <Typography>${cartTotal.toFixed(2)}</Typography>
                </Grid>
                <Grid container justifyContent="space-between" sx={{ mt: 1 }}>
                  <Typography>Shipping</Typography>
                  <Typography color="success.main">Free</Typography>
                </Grid>
              </Box>
              
              <Divider sx={{ my: 2 }} />
              
              <Box sx={{ my: 2 }}>
                <Grid container justifyContent="space-between">
                  <Typography variant="h6" fontWeight="bold">Total</Typography>
                  <Typography variant="h6" fontWeight="bold" color="primary">
                    ${cartTotal.toFixed(2)}
                  </Typography>
                </Grid>
              </Box>

              <Alert severity="info" sx={{ mb: 2 }}>
                Free shipping on all orders!
              </Alert>
              
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                onClick={handleCheckout}
                sx={{ 
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 'bold',
                  '&:hover': {
                    transform: 'translateY(-1px)',
                    boxShadow: 4,
                  }
                }}
              >
                Proceed to Checkout
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
