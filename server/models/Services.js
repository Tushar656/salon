const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    ServiceName: {
        type: String,
        unique: true,
        require: true,
    },
    SalonName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    photo: String,
    Catogary: String,
    timeTaken: String,
    description: String
})

module.exports = mongoose.model('Service', ServiceSchema)