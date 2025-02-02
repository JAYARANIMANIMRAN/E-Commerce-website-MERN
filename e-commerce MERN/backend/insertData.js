const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/foodmarts')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Create a schema for the food items
const foodSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  image: String,
  inStock: Boolean,
  quantity: Number,
  rating: Number
}, { collection: 'foodmarts' }); // Explicitly set collection name

// Create a model
const Food = mongoose.model('Food', foodSchema);

// Sample food data
const foodItems = [
  {
    name: "Margherita Pizza",
    description: "Classic Italian pizza with fresh tomatoes, mozzarella, and basil",
    price: 12.99,
    category: "main-course",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca",
    inStock: true,
    quantity: 50,
    rating: 4.5
  },
  {
    name: "Chicken Caesar Salad",
    description: "Fresh romaine lettuce, grilled chicken, parmesan cheese, and Caesar dressing",
    price: 9.99,
    category: "appetizers",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    inStock: true,
    quantity: 30,
    rating: 4.3
  },
  {
    name: "Chocolate Brownie",
    description: "Rich, fudgy brownie served with vanilla ice cream",
    price: 6.99,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    inStock: true,
    quantity: 40,
    rating: 4.8
  },
  {
    name: "Mango Smoothie",
    description: "Fresh mango blended with yogurt and honey",
    price: 4.99,
    category: "beverages",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e",
    inStock: true,
    quantity: 25,
    rating: 4.4
  },
  {
    name: "Garlic Bread",
    description: "Freshly baked bread with garlic butter and herbs",
    price: 3.99,
    category: "appetizers",
    image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c",
    inStock: true,
    quantity: 60,
    rating: 4.2
  },
  {
    name: "Spaghetti Carbonara",
    description: "Classic Italian pasta with eggs, cheese, pancetta, and black pepper",
    price: 14.99,
    category: "main-course",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3",
    inStock: true,
    quantity: 35,
    rating: 4.6
  },
  {
    name: "Tiramisu",
    description: "Italian dessert with coffee-soaked ladyfingers and mascarpone cream",
    price: 7.99,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
    inStock: true,
    quantity: 20,
    rating: 4.7
  },
  {
    name: "Iced Latte",
    description: "Chilled espresso with milk and optional flavoring",
    price: 4.49,
    category: "beverages",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
    inStock: true,
    quantity: 45,
    rating: 4.3
  }
];

// Function to insert data
const insertData = async () => {
  try {
    // Clear existing data
    await Food.deleteMany({});
    console.log('Cleared existing data');

    // Insert new data
    const result = await Food.insertMany(foodItems);
    console.log(`Successfully inserted ${result.length} food items`);
    
    // Log the inserted items
    const items = await Food.find();
    console.log('Inserted items:', items);

    mongoose.connection.close();
  } catch (error) {
    console.error('Error inserting data:', error);
  }
};

// Run the insertion
insertData();
