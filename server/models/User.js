const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    pinCode:{
        type: Number,
        required: true
    }
})


module.exports = mongoose.model('User', UserSchema);