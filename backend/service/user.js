const bcrypt = require('bcrypt');
const User = require('../models/user_model');
const AuthService = require('./token');
const {generateTokens} = require('./token');


class userService  {

    static async registerUser(username,userlastname,useremail,usertel,userpassword){

        //verify if this email is not in another user
        const userExists = await User.findOne({email});

        if(userExists){
            throw new Error ('E-mail já está em uso')
        }
        //create a new user
        const newUser = new User ({username,userlastname,useremail,usertel});

        //hash senha
        const salt = await bcrypt.genSalt(10);
        newUser.userpassword = await bcrypt.hash(userpassword,hash);

     
        //save user on database
        const savedUser = await newUser.save();

        //create token 
        const {accessToken,refreshToken} = generateTokens.accessToken({userId: savedUser._id});

        //return saved user 
        return { user: savedUser, tokens: { accessToken, refreshToken } };
    }

    async loginUser(email, userpassword) {
        
        //verify if the user exists on database
        const user = await AuthService.authenticate(email,userpassword);

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



module.exports = userService;
