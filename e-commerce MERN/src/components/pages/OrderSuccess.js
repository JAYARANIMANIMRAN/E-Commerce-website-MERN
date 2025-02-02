import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Button,
  Paper,
} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const OrderSuccess = () => {
  const navigate = useNavigate();
  
  // Calculate estimated delivery time (35 minutes from now)
  const deliveryTime = new Date(new Date().getTime() + 35 * 60000);
  const deliveryTimeString = deliveryTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  // Redirect to home if accessed directly
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 10000); // Redirect after 10 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{ maxWidth: '600px', margin: '4rem auto', padding: '0 1rem' }}>
      <Paper 
        elevation={3} 
        style={{ 
          padding: '1rem', 
          textAlign: 'center',
          background: 'linear-gradient(to bottom right, #ffffff, #f8f9fa)'
        }}
      >
        <CheckCircle
          color="success"
          style={{ 
            fontSize: 80,
            marginBottom: '1rem',
            animation: 'bounce 1s ease-in-out'
          }}
        />
        
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Order Placed Successfully!
        </Typography>
        
        <Typography variant="h6" color="text.secondary" style={{ marginBottom: '1rem' }}>
          Estimated Delivery by {deliveryTimeString}
        </Typography>
        
        <Typography color="text.secondary" style={{ marginBottom: '1.5rem' }}>
          Thank you for your order! We'll send you a confirmation email with your order details.
        </Typography>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/')}
            style={{ 
              padding: '0.5rem 1rem',
              borderRadius: 2,
              fontWeight: 'bold'
            }}
          >
            Continue Shopping
          </Button>
          
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate('/orders')}
            style={{ 
              padding: '0.5rem 1rem',
              borderRadius: 2,
              fontWeight: 'bold'
            }}
          >
            View Orders
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default OrderSuccess;
