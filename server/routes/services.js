const router = require('express').Router();
const Services = require('../models/Services')


//ADD SERVICE
router.post('/addservice', async(req, res) => {
    try{
        const newService = new Services(req.body);
        const result = await newService.save();
        res.status(201).send(result);
    }catch(e){
        res.status(400).send("Add service error " + e);
    }
})

// GET SALON SERVICES
router.get('/:salonName', async(req, res) => {
    try{
        const service = await Services.find({SalonName: req.params.salonName});
        res.status(200).send(service);
    }catch(e){
        console.log("Get Services Error: " + e);
    }
})


// GET A SERVICE
router.get('/get/:serviceName', async(req, res) => {
    try{
        const service = await Services.find({ServiceName: req.params.serviceName});
        res.status(200).send(service);
    }catch(e){
        console.log("Get Service Error: " + e);
    }
})


module.exports = router;