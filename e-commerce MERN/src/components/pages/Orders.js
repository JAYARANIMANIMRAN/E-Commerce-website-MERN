import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Alert,
} from '@mui/material';
import { fetchOrders } from '../../store/slices/orderSlice';

const Orders = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem' }}>
        <Alert severity="error">{error}</Alert>
      </div>
    );
  }

  if (!orders.length) {
    return (
      <div style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem', textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          No orders found
        </Typography>
        <Typography color="text.secondary">
          You haven't placed any orders yet.
        </Typography>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem' }}>
      <Typography variant="h4" gutterBottom>
        Your Orders
      </Typography>
      <Paper style={{ overflowX: 'auto', marginBottom: '2rem' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Items</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order._id}>
                <TableCell>{order._id}</TableCell>
                <TableCell>
                  {new Date(order.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {order.items.map((item) => (
                    <div key={item._id}>
                      {item.name} x {item.quantity}
                    </div>
                  ))}
                </TableCell>
                <TableCell>${order.total.toFixed(2)}</TableCell>
                <TableCell>{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default Orders;
