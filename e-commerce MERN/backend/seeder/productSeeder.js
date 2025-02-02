require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');

// Sample products data
const products = [
    // Fruits & Vegetables
    {
        name: "Fresh Tomatoes",
        description: "Farm-fresh, ripe tomatoes perfect for cooking and salads",
        price: 40,
        category: "fruits-vegetables",
        brand: "Local Farms",
        image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80",
        inStock: true,
        quantity: 100,
        unit: "kg",
        rating: 4.5,
        reviews: [],
        discount: 0
    },
    {
        name: "Onions",
        description: "Premium quality onions for everyday cooking",
        price: 35,
        category: "fruits-vegetables",
        brand: "Fresh Daily",
        image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb",
        inStock: true,
        quantity: 150,
        unit: "kg",
        rating: 4.3,
        reviews: [],
        discount: 5
    },
    // Dairy & Eggs
    {
        name: "Amul Gold Milk",
        description: "Fresh toned milk, rich in calcium and protein. 1L Tetrapack",
        price: 68,
        category: "dairy-eggs",
        brand: "Amul",
        image: "https://frivery.in/wp-content/uploads/2021/11/Amul-Gold-Milk-Tetrapack-1L.jpg",
        inStock: true,
        quantity: 80,
        unit: "pack",
        rating: 4.8,
        reviews: [],
        discount: 0
    },
    {
        name: "Farm Fresh Eggs",
        description: "Farm-fresh brown eggs, pack of 6",
        price: 72,
        category: "dairy-eggs",
        brand: "Country Farms",
        image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f",
        inStock: true,
        quantity: 100,
        unit: "pack",
        rating: 4.6,
        reviews: [],
        discount: 0
    },
    // Staples
    {
        name: "Tata Salt",
        description: "Iodized table salt for healthy cooking",
        price: 25,
        category: "staples",
        brand: "Tata",
        image: "https://th.bing.com/th/id/OIP.Ixz4KThiCQiz0Me9kDk88wHaE8?w=270&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        inStock: true,
        quantity: 200,
        unit: "kg",
        rating: 4.7,
        reviews: [],
        discount: 0
    },
    {
        name: "Aashirvaad Atta",
        description: "Premium whole wheat flour",
        price: 325,
        category: "staples",
        brand: "Aashirvaad",
        image: "https://pokharatrading.com/wp-content/uploads/2023/03/Aashirvaad-Whole-Wheat-Atta-2kg.jpg",
        inStock: true,
        quantity: 50,
        unit: "kg",
        rating: 4.8,
        reviews: [],
        discount: 10
    },
    // Snacks
    {
        name: "Lay's Classic",
        description: "Classic salted potato chips",
        price: 20,
        category: "snacks",
        brand: "Lay's",
        image: "https://th.bing.com/th/id/OIP.umEapM6WZoT4bSemdR-nugHaHa?w=187&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        inStock: true,
        quantity: 150,
        unit: "pack",
        rating: 4.4,
        reviews: [],
        discount: 0
    },
    {
        name: "Britannia Good Day",
        description: "Butter cookies for tea time",
        price: 30,
        category: "snacks",
        brand: "Britannia",
        image: "https://th.bing.com/th/id/OIP.qz0f73CmaP1hHME8_lPhrwHaHa?w=186&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        inStock: true,
        quantity: 100,
        unit: "pack",
        rating: 4.5,
        reviews: [],
        discount: 0
    },
    // Beverages
    {
        name: "Tata Tea Gold",
        description: "Premium tea leaves for perfect chai",
        price: 145,
        category: "beverages",
        brand: "Tata",
        image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/cc14024e-f322-4727-b85f-058a923c9790.__CR0,0,970,600_PT0_SX970_V1___.jpg",
        inStock: true,
        quantity: 80,
        unit: "pack",
        rating: 4.6,
        reviews: [],
        discount: 5
    },
    {
        name: "Bru Instant Coffee",
        description: "Rich instant coffee powder",
        price: 285,
        category: "beverages",
        brand: "Bru",
        image: "https://m.media-amazon.com/images/I/61aJ6vpMH1L._SL1000_.jpg",
        inStock: true,
        quantity: 60,
        unit: "pack",
        rating: 4.7,
        reviews: [],
        discount: 0
    },
    // Household
    {
        name: "Surf Excel",
        description: "Advanced detergent powder for clothes",
        price: 199,
        category: "household",
        brand: "Surf Excel",
        image: "https://www.harishfoodzone.com/jb-content/uploads/2020/08/Surf-Excel-1img.jpg",
        inStock: true,
        quantity: 70,
        unit: "kg",
        rating: 4.8,
        reviews: [],
        discount: 15
    },
    {
        name: "Lizol Disinfectant",
        description: "Floor cleaner and disinfectant",
        price: 168,
        category: "household",
        brand: "Lizol",
        image: "https://images.unsplash.com/photo-1585342565162-3704ff9b221d",
        inStock: true,
        quantity: 90,
        unit: "l",
        rating: 4.5,
        reviews: [],
        discount: 0
    },
    // Personal Care
    {
        name: "Dove Soap",
        description: "Moisturizing beauty bar for soft skin",
        price: 45,
        category: "personal-care",
        brand: "Dove",
        image: "https://th.bing.com/th/id/R.626e8a43401808385e1849794b95547c?rik=uLA5VbqotVKLjQ&riu=http%3a%2f%2fwww.jansonwholesale.com%2fwp-content%2fuploads%2f2017%2f06%2fDOVE-SOAP-2.jpg&ehk=Y%2fmL00%2bG%2bjwEAKKozzCPdzNvLj%2fR4grga9kPMvw2xcA%3d&risl=&pid=ImgRaw&r=0",
        inStock: true,
        quantity: 120,
        unit: "pieces",
        rating: 4.7,
        reviews: [],
        discount: 0
    },
    {
        name: "Colgate MaxFresh",
        description: "Cooling crystal toothpaste",
        price: 115,
        category: "personal-care",
        brand: "Colgate",
        image: "https://cdn.shopify.com/s/files/1/0418/6846/0191/products/colgatemax.jpg?v=1599219691",
        inStock: true,
        quantity: 100,
        unit: "pack",
        rating: 4.6,
        reviews: [],
        discount: 10
    },
    {
        name: "Dettol Hand Sanitizer",
        description: "Instant germ protection sanitizer",
        price: 85,
        category: "personal-care",
        brand: "Dettol",
        image: "https://th.bing.com/th/id/OIP.hWt-CT6iV6Pdp76ETEhlMQHaHa?w=221&h=220&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        inStock: true,
        quantity: 150,
        unit: "ml",
        rating: 4.8,
        reviews: [],
        discount: 0
    }
];

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB Connected Successfully'))
    .catch((err) => console.error('MongoDB Connection Error:', err));

// Function to seed products
const seedProducts = async () => {
    try {
        // Delete existing products
        await Product.deleteMany({});
        console.log('Existing products deleted');

        // Insert new products
        await Product.insertMany(products);
        console.log('Products seeded successfully');

        // Close the connection
        mongoose.connection.close();
    } catch (error) {
        console.error('Error seeding products:', error);
        process.exit(1);
    }
};

// Run the seeder
seedProducts();
