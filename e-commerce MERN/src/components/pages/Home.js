import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Paper,
  Chip,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { LocalOffer, Timer, TrendingUp } from '@mui/icons-material';

// Featured images
const heroImage = "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=2000&q=80";

const featuredItems = [
  {
    id: 1,
    name: 'Fresh Vegetables Pack',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    price: 24.99
  },
  {
    id: 2,
    name: 'Organic Fruits Bundle',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80',
    price: 29.99
  },
  {
    id: 3,
    name: 'Essential Groceries',
    image: 'https://images.unsplash.com/photo-1579113800032-c38bd7635818?auto=format&fit=crop&w=800&q=80',
    price: 49.99
  }
];

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '90vh',
          width: '100%',
          overflow: 'hidden',
          mb: 8,
        }}
      >
        <Box
          component="img"
          src={heroImage}
          alt="Fresh Groceries"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'scale(1.1)',
            transition: 'transform 10s ease',
            '&:hover': {
              transform: 'scale(1)',
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3))',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            textAlign: 'center',
            px: 3,
          }}
        >
          <Typography 
            variant="h1" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontSize: { xs: '2.8rem', sm: '4rem', md: '5rem' },
              fontWeight: 900,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              letterSpacing: '-0.5px',
              mb: 3,
            }}
          >
            Fresh Groceries Delivered
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 4,
              maxWidth: '800px',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
              fontWeight: 300,
            }}
          >
            Quality groceries delivered right to your doorstep
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate('/products')}
              sx={{
                fontSize: '1.1rem',
                py: 1.5,
                px: 4,
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 600,
              }}
            >
              Shop Now
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              onClick={() => navigate('/about')}
              sx={{
                fontSize: '1.1rem',
                py: 1.5,
                px: 4,
                borderRadius: 2,
                textTransform: 'none',
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                },
              }}
            >
              About Us
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Quick Info Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{ p: 3, textAlign: 'center', height: '100%', bgcolor: 'primary.light', color: 'white' }}>
              <LocalOffer sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Best Prices
              </Typography>
              <Typography>
                Quality groceries at competitive prices
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{ p: 3, textAlign: 'center', height: '100%', bgcolor: 'secondary.light', color: 'white' }}>
              <Timer sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Fast Delivery
              </Typography>
              <Typography>
                Same-day delivery available
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{ p: 3, textAlign: 'center', height: '100%', bgcolor: 'success.light', color: 'white' }}>
              <TrendingUp sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Fresh & Organic
              </Typography>
              <Typography>
                100% fresh and organic products
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Featured Items Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="overline" 
              component="div" 
              color="primary"
              sx={{ mb: 1, letterSpacing: 2 }}
            >
              SPECIAL OFFERS
            </Typography>
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ fontWeight: 800, color: 'text.primary' }}
            >
              Featured Products
            </Typography>
            <Divider sx={{ width: '80px', margin: '24px auto', borderWidth: 2 }} />
          </Box>
          <Grid container spacing={4}>
            {featuredItems.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Paper
                  elevation={2}
                  sx={{
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                    borderRadius: 3,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[10],
                    },
                  }}
                  onClick={() => navigate('/products')}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="320"
                      image={item.image}
                      alt={item.name}
                      sx={{ 
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.1)',
                        },
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                        color: 'white',
                        p: 3,
                      }}
                    >
                      <Typography 
                        variant="h5" 
                        gutterBottom
                        sx={{ fontWeight: 600 }}
                      >
                        {item.name}
                      </Typography>
                      <Typography 
                        variant="h6" 
                        color="primary.light"
                        sx={{ fontWeight: 700 }}
                      >
                        ${item.price.toFixed(2)}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Promotional Section */}
      <Box
        sx={{
          py: 10,
          textAlign: 'center',
          background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          color: 'white',
        }}
      >
        <Container maxWidth="md">
          <Typography 
            variant="h3" 
            gutterBottom
            sx={{ 
              fontWeight: 800,
              mb: 3,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            }}
          >
            Get 20% Off Your First Order
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 4,
              opacity: 0.9,
              fontWeight: 300,
              fontSize: { xs: '1rem', sm: '1.2rem' },
            }}
          >
            Sign up now and enjoy exclusive discounts on fresh groceries
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/signup')}
            sx={{
              py: 2,
              px: 6,
              borderRadius: 2,
              fontSize: '1.1rem',
              textTransform: 'none',
              fontWeight: 600,
            }}
          >
            Sign Up Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
