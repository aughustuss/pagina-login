require('dotenv').config(); //load .env

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connect = require('./db/db');
const userRoutes = require('./routes/user')

//Rotas
app.user('/user',userRoutes);


const port = process.env.PORT
const app = express();

app.use(cors()); //active cors
app.use(express.json())
app.user(cookieParser()) //active cookie

app.listen(port, () =>{
    console.log(`Server listening on port ${port}`)
});

connect()
    .then(db =>{
        console.log('Conectado ao MongoDB')
    })

    .catch(err => {
        console.error(err);
    });