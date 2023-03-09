const mongoose = require('mongoose');
const {Schema} = mongoose.Schema;



const refreshTokenSchema = new Schema({

    //a fazer

})

const refreshToken = mongoose.model('RefreshToken',refreshToken);

module.exports = refreshToken