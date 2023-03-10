const bcrypt = require('bcrypt');
const User = require('../models/barber_model');
const AuthService = require('./token');
const {generateTokens} = require('./token');


class barberService  {

    static async registerUser(name,email,password){

        //verify if this email is not in another user
        const userExists = await User.findOne({email});

        if(userExists){
            throw new Error ('E-mail já está em uso')
        }
        //create a new user
        const newUser = new User ({});

        //create token 
        const accessToken = generateTokens.accessToken({userId:user._id});
        const refreshToken = generateTokens.refreshToken({userId:user._id});

        //hash senha
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password,hash);

        //save user on database
        const savedUser = await newUser.save();

        //return saved user 
        return { user: savedUser, tokens: { accessToken, refreshToken } };
    }

    async loginUser(email, password) {
        
        //verify if the user exists on database
        const user = await AuthService.authenticate(email,password);

        //verify access token
        const userId = await AuthService.verifyAccessToken(accessToken)

        if(!userId){
            throw new Error('Token Invalido')
        }

        //create new tokens
        const tokens = AuthService.generateTokens(user)
     
        //return access token and refresh token
        return tokens;
        
    }
        


}



module.exports = barberService;
