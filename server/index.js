const express = require('express');
const app = express();


const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json())



//ROUTES
const authRoute = require('./routes/auth')
const salonRoute = require('./routes/salon')
app.use('/api/auth', authRoute)
app.use('/api/salon', salonRoute);



//MONGOOSE SETUP
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Connect to mongo DB")
})
.catch((e) => {
    console.log("Cann't connect to mongo DB" + e)
})


const port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log("Server is running at port " + port);
})
