const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderDate:{
        type: Date,
        required: true
    },
    returnDate:{
        type: Date
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    filmId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Film',
        required: true,
        unique: true
    }
})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;