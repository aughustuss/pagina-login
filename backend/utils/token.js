const jwt  = require('jsonwebtoken');
const RefreshToken = require('../models/refreshTokenModel');
require('dotenv').config //load .env


/// nao funciona
class AuthService{

    static async generateTokens(user) {
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
}

module.exports = AuthService;