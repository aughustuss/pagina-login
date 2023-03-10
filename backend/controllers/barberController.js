const bcrypt = require('bcrypt');
const User = require('../models/barberModel');
const jwt  = require('jsonwebtoken');
const RefreshToken = require('../models/refreshTokenModel');
require('dotenv').config //load .env


//function to generate tokens
function generateTokens(user) {
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
  

const registerUser = async(req,res)=>{

    const{name,lastname,fullname,email,tel,location,number,address,password} = req.body

    try{
        //verify if this email is not in another user
        const userExists = await User.findOne({email});

        if(userExists){
            throw new Error ('E-mail já está em uso')
        }

        //hash senha
        const hash = await bcrypt.hash(password,10);

        //create a new user
        const user = new User ({name,lastname,fullname,email,tel,location,number,address,password:hash});

        //save user on database
        await user.save();
        

        //create token 
        const {accessToken,refreshToken} = generateTokens(user);

        //return saved user and tokens
        return res.send({user,token : {accessToken,refreshToken}});



    }catch(err){
        return res.status(400).json({ error: err.message });
    }
}

const loginUser = async(req,res) =>{
    const{email,password} = req.body
    try{
    //verify if the user exists on database
    const user = await User.findOne({email});  
    if(!user){
        return res.status(401).json({ error: 'E-mail ou senha inválidos' });
    }

    //verify if the passwords is valid
    const validPassword = bcrypt.compare(password,user.password);

    if(!validPassword){
        return res.status
    }
       
    //create new tokens                
    const {accessToken,refreshToken} = generateTokens(user)
            
    //return access token and refresh token
    return res.send({token : {accessToken,refreshToken}});

    }catch(err){

    return res.status(400).json({ error: err.message });
}         
}


module.exports = {
    registerUser,
    loginUser,
}