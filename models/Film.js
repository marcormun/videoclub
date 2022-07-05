const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        enum: ['terror','comedia','suspense','accion','ciencia ficcion','musical','not specified'],
        default: 'not specified'
    },
    actors: {
        type: Array,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
        default: 5
    },
    description: {
        type: String,
        required: true
    }
})

const Film = mongoose.model('Film', filmSchema);

module.exports = Film;