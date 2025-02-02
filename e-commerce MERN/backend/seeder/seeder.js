require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');
const products = require('./foodData');

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected for seeding'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

const importData = async () => {
  try {
    // Clear existing data
    await Product.deleteMany();
    console.log('Existing products deleted');

    // Insert new data
    await Product.insertMany(products);
    console.log('Products imported successfully');

    process.exit();
  } catch (error) {
    console.error('Error importing data:', error);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await Product.deleteMany();
    console.log('All products deleted');
    process.exit();
  } catch (error) {
    console.error('Error deleting data:', error);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  deleteData();
} else {
  importData();
}
