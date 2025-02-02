import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Paper,
  Card,
  CardContent,
  Avatar,
  Divider,
  useTheme,
} from '@mui/material';
import {
  LocalShipping,
  EmojiNature,
  People,
  Storefront,
} from '@mui/icons-material';

// Team members data
const teamMembers = [
  {
    name: 'John Smith',
    position: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    description: 'With over 15 years of experience in grocery retail, John leads our mission to deliver quality groceries to every doorstep.'
  },
  {
    name: 'Sarah Johnson',
    position: 'Operations Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    description: 'Sarah ensures smooth operations and maintains our high standards of service and product quality.'
  },
  {
    name: 'David Chen',
    position: 'Quality Control Manager',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    description: 'David works directly with our suppliers to ensure only the freshest products reach our customers.'
  }
];

// Company stats
const stats = [
  { number: '50,000+', label: 'Happy Customers' },
  { number: '1,000+', label: 'Products' },
  { number: '98%', label: 'Satisfaction Rate' },
  { number: '24/7', label: 'Customer Support' },
];

const About = () => {
  const theme = useTheme();

  return (
    <Box sx={{ pb: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          mb: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="overline"
            sx={{
              color: 'primary.light',
              fontWeight: 500,
              mb: 2,
              display: 'block',
            }}
          >
            ABOUT US
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 800,
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            Fresh Groceries,
            <br />
            Delivered with Care
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: 600,
              fontWeight: 300,
              opacity: 0.9,
            }}
          >
            We're committed to bringing the freshest groceries right to your doorstep, making healthy living easier for everyone.
          </Typography>
        </Container>
      </Box>

      {/* Our Values Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: '100%',
                bgcolor: 'primary.light',
                color: 'white',
                textAlign: 'center',
              }}
            >
              <LocalShipping sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Fast Delivery
              </Typography>
              <Typography>
                Same-day delivery to ensure freshness
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: '100%',
                bgcolor: 'secondary.light',
                color: 'white',
                textAlign: 'center',
              }}
            >
              <EmojiNature sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6" gutterBottom fontWeight="bold">
                100% Organic
              </Typography>
              <Typography>
                Certified organic products
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: '100%',
                bgcolor: 'success.light',
                color: 'white',
                textAlign: 'center',
              }}
            >
              <People sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Customer First
              </Typography>
              <Typography>
                Dedicated support team
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: '100%',
                bgcolor: 'info.light',
                color: 'white',
                textAlign: 'center',
              }}
            >
              <Storefront sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Quality Products
              </Typography>
              <Typography>
                Premium quality selection
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Stats Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 8, mb: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      color: 'primary.main',
                      mb: 1,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: 'text.secondary' }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: 800, mb: 2 }}
          >
            Our Story
          </Typography>
          <Divider sx={{ width: '80px', margin: '24px auto', borderWidth: 2 }} />
          <Typography
            variant="body1"
            sx={{
              maxWidth: 800,
              mx: 'auto',
              color: 'text.secondary',
              fontSize: '1.1rem',
              lineHeight: 1.8,
            }}
          >
            Founded in 2020, we started with a simple mission: to make fresh, quality groceries accessible to everyone. 
            What began as a small local delivery service has grown into a trusted name in online grocery shopping. 
            We work directly with farmers and suppliers to ensure that only the finest products reach your kitchen, 
            all while maintaining our commitment to sustainability and supporting local communities.
          </Typography>
        </Box>
      </Container>

      {/* Team Section */}
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: 800, mb: 2 }}
          >
            Meet Our Team
          </Typography>
          <Divider sx={{ width: '80px', margin: '24px auto', borderWidth: 2 }} />
        </Box>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                elevation={2}
                sx={{
                  height: '100%',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    sx={{
                      width: 120,
                      height: 120,
                      mx: 'auto',
                      mb: 2,
                      border: `4px solid ${theme.palette.primary.main}`,
                    }}
                  />
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: 700, mb: 1 }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    sx={{ mb: 2 }}
                  >
                    {member.position}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.7 }}
                  >
                    {member.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
