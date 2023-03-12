const jwt  = require('jsonwebtoken');
const RefreshToken = require('../models/refreshTokenModel');
require('dotenv').config //load .env
const User = require('../models/userModel');


async function renewRefreshToken (refreshToken) {
    try{
        //verify if refresh token is valid and get user id
        const decoded = '';
        const userId = decoded._id;

        //verify if the refresh token exists on db
        const refreshTokenDoc = await RefreshToken.findOne({ _id, token: refreshToken })
        if(!refreshTokenDoc){
            return new Error("Refresh Token Invalido")
        }

        //generate a new access token
        const user = await User.findById(userId);
        const accessToken = ''

        return accessToken

    }catch(err){
        console.error(err);
        throw err;
    }
}

function generateTokens(user){
    const accessToken = jwt.sign(
        { userId: user.id },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION }
    );

    const refreshToken = jwt.sign(
        { userId: user.id },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRATION }
    );

    const refreshTokenObject = new RefreshToken({
        userId: user.id,
        token: refreshToken,
        expiresAt: new Date(Date.now() + process.env.REFRESH_TOKEN_EXPIRATION * 1000)
    });

    refreshTokenObject.save();

    return { accessToken, refreshToken };

}




module.exports ={
     generateTokens,
     renewRefreshToken    
};