const mongoose = require('mongoose');
require('dotenv').config();

// Import models and data
const User = require('../models/User');
const users = require('./userData');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected for user seeding'))
  .catch(err => console.error('MongoDB connection error:', err));

// Import data
const importData = async () => {
  try {
    // Clear existing users (except admins)
    await User.deleteMany({ role: { $ne: 'admin' } });
    console.log('Existing non-admin users deleted');

    // Check for existing admin
    const existingAdmin = await User.findOne({ role: 'admin' });
    
    // Filter out admin from users array if admin exists
    const usersToInsert = existingAdmin 
      ? users.filter(user => user.role !== 'admin')
      : users;

    // Insert users
    await User.insertMany(usersToInsert);
    console.log('Users imported successfully');

    process.exit();
  } catch (error) {
    console.error('Error importing users:', error);
    process.exit(1);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await User.deleteMany({ role: { $ne: 'admin' } });
    console.log('Non-admin users deleted successfully');
    process.exit();
  } catch (error) {
    console.error('Error deleting users:', error);
    process.exit(1);
  }
};

// Run based on command line argument
if (process.argv[2] === '-d') {
  deleteData();
} else {
  importData();
}
