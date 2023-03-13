import dotenv from 'dotenv'; //load .env
dotenv.config();

import mongoose from 'mongoose'

const url = process.env.URL_MONGO;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

export default mongoose;