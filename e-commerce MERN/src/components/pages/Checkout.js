import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Stepper,
  Step,
  StepLabel,
  Card,
  CardContent,
  Divider,
  Alert,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';
import { selectCartTotal, clearCart } from '../../store/slices/cartSlice';

const steps = ['Shipping Address', 'Payment Method', 'Review Order'];

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector(selectCartTotal);

  const [activeStep, setActiveStep] = useState(0);
  const [shippingAddress, setShippingAddress] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('cod');

  // Redirect if cart is empty
  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    handleNext();
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    handleNext();
  };

  const handlePlaceOrder = () => {
    // Clear cart and show success message
    dispatch(clearCart());
    
    // Show success alert
    alert('Order placed successfully!');
    
    // Navigate back to products
    navigate('/products');
  };

  const renderShippingForm = () => (
    <form onSubmit={handleShippingSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Full Name"
            value={shippingAddress.fullName}
            onChange={(e) =>
              setShippingAddress({ ...shippingAddress, fullName: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Phone Number"
            value={shippingAddress.phone}
            onChange={(e) =>
              setShippingAddress({ ...shippingAddress, phone: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Address"
            value={shippingAddress.address}
            onChange={(e) =>
              setShippingAddress({ ...shippingAddress, address: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="City"
            value={shippingAddress.city}
            onChange={(e) =>
              setShippingAddress({ ...shippingAddress, city: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="State"
            value={shippingAddress.state}
            onChange={(e) =>
              setShippingAddress({ ...shippingAddress, state: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="PIN Code"
            value={shippingAddress.pincode}
            onChange={(e) =>
              setShippingAddress({ ...shippingAddress, pincode: e.target.value })
            }
          />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button onClick={() => navigate('/cart')} sx={{ mr: 1 }}>
          Back to Cart
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Next
        </Button>
      </Box>
    </form>
  );

  const renderPaymentForm = () => (
    <form onSubmit={handlePaymentSubmit}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Payment Method</FormLabel>
        <RadioGroup
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <FormControlLabel
            value="cod"
            control={<Radio />}
            label="Cash on Delivery"
          />
        </RadioGroup>
      </FormControl>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button onClick={handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Next
        </Button>
      </Box>
    </form>
  );

  const renderOrderSummary = () => (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Shipping Address
          </Typography>
          <Typography gutterBottom>
            {shippingAddress.fullName}
            <br />
            {shippingAddress.address}
            <br />
            {shippingAddress.city}, {shippingAddress.state} {shippingAddress.pincode}
            <br />
            Phone: {shippingAddress.phone}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Payment Method
          </Typography>
          <Typography gutterBottom>
            {paymentMethod === 'cod' ? 'Cash on Delivery' : paymentMethod}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Order Items
          </Typography>
          {cartItems.map((item) => (
            <Box key={item._id} sx={{ mb: 2 }}>
              <Grid container alignItems="center" spacing={2}>
                <Grid item xs={8}>
                  <Typography>{item.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Quantity: {item.quantity}
                  </Typography>
                </Grid>
                <Grid item xs={4} sx={{ textAlign: 'right' }}>
                  <Typography>
                    ${(item.price * item.quantity).toFixed(2)}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button onClick={handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handlePlaceOrder}
        >
          Place Order
        </Button>
      </Box>
    </>
  );

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return renderShippingForm();
      case 1:
        return renderPaymentForm();
      case 2:
        return renderOrderSummary();
      default:
        throw new Error('Unknown step');
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography component="h1" variant="h4" align="center" gutterBottom>
          Checkout
        </Typography>
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {getStepContent(activeStep)}
      </Paper>

      {/* Order Summary Card */}
      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
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
          <Divider />
          <Box sx={{ my: 2 }}>
            <Grid container justifyContent="space-between">
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6" color="primary">
                ${cartTotal.toFixed(2)}
              </Typography>
            </Grid>
          </Box>
          <Alert severity="info">Free shipping on all orders!</Alert>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Checkout;
