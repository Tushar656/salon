const router = require('express').Router();
const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/register', async(req, res)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User(req.body);
        newUser.password = hashPass;

        const result = await newUser.save();
        res.status(201).send(result);
    }catch(e){
        console.log("Register error " + e);
    }
})


router.post('/login', async(req, res) => {
    const {email, password} = req.body;
    try{
        const user = await User.findOne({email});
        !user && res.status(404).send("User not found");

        const matchPass = await bcrypt.compare(password, user.password);
        !matchPass && res.status(404).send("Incorrect Password");

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRETE);
        res.status(200).send({token, user});
    }catch(e){
        console.log("Login error " + e);
    }
})


module.exports = router;