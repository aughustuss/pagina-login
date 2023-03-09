const jwt = require('jsonwebtoken');
const RefreshToken = require('../models/refreshToken_model');

class tokenService {

    static async generateTokens(user){

        //crate access token
        const accessToken = jwt.sign(
            { userId: user.id },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION }
          );
      
        //create refesh token
        const refreshToken = jwt.sign(
            { userId: user.id },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: process.env.REFRESH_TOKEN_EXPIRATION }
          );
      
        //save refresh token on database
        const refreshTokenObject = new RefreshToken({
            userId: user.id,
            token: refreshToken,
            expiresAt: new Date(Date.now() + process.env.REFRESH_TOKEN_EXPIRATION * 1000)
          });
      
          refreshTokenObject.save();
      
          return { accessToken, refreshToken };
    }
}

module.exports = tokenService;
