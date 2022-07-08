const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        //maxlength: 16
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    adress: {
        type: String,
        //minlength: 6,
        
    },
    phone: {
        type: String,
        //minlength: 6,
        
    }
   
},
{
    timestamps: true
}
);

const User = mongoose.model('User', UserSchema);

module.exports = User;