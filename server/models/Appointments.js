const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    ServiceName: {
        type: String,
        require: true,
    },
    SalonName: {
        type: String,
        required: true,
    },
    userName: {
        type: Number,
        required: true,
    },
    userPhone: Number,
    startTime: String,
})

module.exports = mongoose.model('Appointments', AppointmentSchema)