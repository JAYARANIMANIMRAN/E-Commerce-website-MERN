import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Button,
  Container,
} from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { selectCartItemsCount } from '../../store/slices/cartSlice';

const Navbar = () => {
  const cartItemsCount = useSelector(selectCartItemsCount);

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            GROCERY
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button
              component={RouterLink}
              to="/products"
              sx={{ color: 'white' }}
            >
              Products
            </Button>
            <Button
              component={RouterLink}
              to="/about"
              sx={{ color: 'white' }}
            >
              About
            </Button>
            <IconButton
              component={RouterLink}
              to="/cart"
              size="large"
              aria-label="show cart items"
              color="inherit"
            >
              <Badge badgeContent={cartItemsCount} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
