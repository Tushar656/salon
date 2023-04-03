const mongoose = require('mongoose')

const SalonSchema = new mongoose.Schema({
    salonName: {
        type: String,
        unique: true,
        required: true,
    },
    phone: {
        type: Number,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    pinCode: {
        type: Number,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    rating:{
        type: Array,
        default: []
    },
    Services:{
        type: Array,
        default: []
    }
})

module.exports = mongoose.model('Salon', SalonSchema)
