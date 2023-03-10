require('dotenv').config(); //load .env

const express = require('express');
const cors = require('cors')
const database  = require('./database/db');
const port = process.env.PORT
const app = express();

//api routes
const user = require('./routes/userRoute')
const barber = require('./routes/barberRoute')

app.use(cors()); //enable cors
app.use(express.json())
app.use('/auth',user)
app.use('/authbarber',barber)

app.listen(port, () =>{
    console.log(`Server listening on port ${port}`)
});



