const router = require('express').Router();
const Appointment = require('../models/Appointments')


//ADD APPOINTMENT
router.post('/add', async(req, res) => {
    try{
        const newAppointment = new Services(req.body);
        const result = await newAppointment.save();
        res.status(201).send(result);
    }catch(e){
        res.status(400).send("Add Appointment error " + e);
    }
})

// GET SALON Appointments
router.get('/:salonName', async(req, res) => {
    try{
        const appointments = await Appointment.find({SalonName: req.params.salonName});
        res.status(200).send(appointments);
    }catch(e){
        console.log("Get Appointmentss Error: " + e);
    }
})


// // GET A SERVICE
// router.get('/get/:serviceName', async(req, res) => {
//     try{
//         const service = await Services.find({ServiceName: req.params.serviceName});
//         res.status(200).send(service);
//     }catch(e){
//         console.log("Get Service Error: " + e);
//     }
// })


module.exports = router;