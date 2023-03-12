require('dotenv').config(); //load .env

const express = require('express');
const cors = require('cors')
const database  = require('./db/db');
const port = process.env.PORT
const app = express();


//api routes
const user = require('./routes/userRoute')
const barber = require('./routes/barberRoute')
const token = require('./routes/refreshTokenRoute');


app.use(cors('')); //enable cors
app.use(express.json())

//api routes
app.use('/auth',user)
app.use('/authbarber',barber)
app.user('/token',token);

app.listen(port, () =>{
    console.log(`Server listening on port ${port}`)
});



