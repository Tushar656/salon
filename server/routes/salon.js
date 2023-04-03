const router = require('express').Router();
const Salon = require('../models/Salon')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//REGISTER SALON
router.post('/register', async(req, res)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password, salt);
        const newSalon = new Salon(req.body);
        newSalon.password = hashPass;

        const result = await newSalon.save();
        res.status(201).send(result);
    }catch(e){
        console.log("Register error " + e);
    }
})


// LOGIN TO SALON
router.post('/login', async(req, res) => {
    const {salonName, password} = req.body;
    try{
        const salon = await Salon.findOne({salonName});
        !salon && res.status(404).send("Salon not found");

        const matchPass = await bcrypt.compare(password, salon.password);
        !matchPass && res.status(404).send("Incorrect Password");

        const token = jwt.sign({id: salon._id}, process.env.JWT_SECRETE);
        res.status(200).send({token, salon});
    }catch(e){
        console.log("Login error " + e);
    }
})


// GET NEARBY SALON
router.get('/get/:pin', async(req, res) => {
    try{
        const salons = await Salon.find({pinCode: req.params.pin});
        res.status(200).send(salons);
    }catch(e){
        console.log("Get Salons Error: " + e);
    }
})


// GET A SALON
router.get('/salon/:name', async(req, res) => {
    try{
        const salons = await Salon.find({salonName: req.params.name});
        res.status(200).send(salons);
    }catch(e){
        console.log("Get Salons Error: " + e);
    }
})


// UPDATE IN SALON

module.exports = router;