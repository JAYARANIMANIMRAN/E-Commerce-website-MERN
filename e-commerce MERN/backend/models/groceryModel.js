const mongoose = require('mongoose');

const grocerySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter grocery item name'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Please enter grocery item price'],
        min: 0
    },
    category: {
        type: String,
        required: [true, 'Please enter grocery item category']
    },
    stock: {
        type: Number,
        required: [true, 'Please enter grocery item stock'],
        min: 0,
        default: 0
    },
    description: {
        type: String,
        required: [true, 'Please enter grocery item description']
    },
    image: {
        type: String,
        required: [true, 'Please enter grocery item image URL']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Grocery', grocerySchema);
