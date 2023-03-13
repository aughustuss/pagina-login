import jwt from "jsonwebtoken";
import RefreshToken from "../models/RefreshToken.js";
import User from "../models/User.js";


import dotenv from 'dotenv'; //load .env
dotenv.config();


class TokenUtils{

    static generateTokens(user){

        try{
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
        }catch(err){
            console.err(err);
            throw err;
        }
    }

    static async renewRefreshToken (refreshToken) {
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

}


export default TokenUtils;