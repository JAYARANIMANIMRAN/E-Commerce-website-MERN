const bcrypt = require('bcryptjs');

// Generate random Indian mobile number
const generatePhone = () => {
  return `+91${Math.floor(Math.random() * 9000000000 + 1000000000)}`;
};

const users = [
  {
    name: 'Admin User',
    email: 'admin@foodmart.com',
    password: bcrypt.hashSync('123456', 10),
    phone: generatePhone(),
    address: {
      street: '123 Tech Park Road',
      city: 'Bangalore',
      state: 'Karnataka',
      zipCode: '560001',
      country: 'India'
    },
    role: 'admin',
    preferences: {
      newsletter: true,
      notifications: true
    },
    orderHistory: [],
    createdAt: new Date()
  },
  {
    name: 'Rahul Sharma',
    email: 'rahul@example.com',
    password: bcrypt.hashSync('123456', 10),
    phone: generatePhone(),
    address: {
      street: '456 MG Road',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400001',
      country: 'India'
    },
    role: 'user',
    preferences: {
      newsletter: true,
      notifications: true
    },
    orderHistory: [],
    createdAt: new Date()
  },
  {
    name: 'Priya Patel',
    email: 'priya@example.com',
    password: bcrypt.hashSync('123456', 10),
    phone: generatePhone(),
    address: {
      street: '789 Sector 18',
      city: 'Noida',
      state: 'Uttar Pradesh',
      zipCode: '201301',
      country: 'India'
    },
    role: 'user',
    preferences: {
      newsletter: false,
      notifications: true
    },
    orderHistory: [],
    createdAt: new Date()
  },
  {
    name: 'Amit Kumar',
    email: 'amit@example.com',
    password: bcrypt.hashSync('123456', 10),
    phone: generatePhone(),
    address: {
      street: '321 Anna Salai',
      city: 'Chennai',
      state: 'Tamil Nadu',
      zipCode: '600002',
      country: 'India'
    },
    role: 'user',
    preferences: {
      newsletter: true,
      notifications: false
    },
    orderHistory: [],
    createdAt: new Date()
  },
  {
    name: 'Sneha Reddy',
    email: 'sneha@example.com',
    password: bcrypt.hashSync('123456', 10),
    phone: generatePhone(),
    address: {
      street: '567 Jubilee Hills',
      city: 'Hyderabad',
      state: 'Telangana',
      zipCode: '500033',
      country: 'India'
    },
    role: 'user',
    preferences: {
      newsletter: true,
      notifications: true
    },
    orderHistory: [],
    createdAt: new Date()
  },
  {
    name: 'Vikram Singh',
    email: 'vikram@example.com',
    password: bcrypt.hashSync('123456', 10),
    phone: generatePhone(),
    address: {
      street: '890 Civil Lines',
      city: 'Delhi',
      state: 'Delhi',
      zipCode: '110001',
      country: 'India'
    },
    role: 'user',
    preferences: {
      newsletter: false,
      notifications: true
    },
    orderHistory: [],
    createdAt: new Date()
  },
  {
    name: 'Meera Iyer',
    email: 'meera@example.com',
    password: bcrypt.hashSync('123456', 10),
    phone: generatePhone(),
    address: {
      street: '234 FC Road',
      city: 'Pune',
      state: 'Maharashtra',
      zipCode: '411001',
      country: 'India'
    },
    role: 'user',
    preferences: {
      newsletter: true,
      notifications: true
    },
    orderHistory: [],
    createdAt: new Date()
  },
  {
    name: 'Arjun Nair',
    email: 'arjun@example.com',
    password: bcrypt.hashSync('123456', 10),
    phone: generatePhone(),
    address: {
      street: '678 MG Marg',
      city: 'Kochi',
      state: 'Kerala',
      zipCode: '682001',
      country: 'India'
    },
    role: 'user',
    preferences: {
      newsletter: true,
      notifications: false
    },
    orderHistory: [],
    createdAt: new Date()
  }
];

module.exports = users;
