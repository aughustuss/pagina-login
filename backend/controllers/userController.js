const bcrypt = require('bcrypt');
const User = require('../models/userModel');
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

    const{username,userlastname,useremail,usertel,userpassword1,userpassword2} = req.body

    try{
        //verify if this email is not in another user
        const userExists = await User.findOne({useremail});

        if(userExists){
            throw new Error ('E-mail já está em uso')
        }

        //hash senhas
        const hash1 = await bcrypt.hash(userpassword1,10);
        const hash2 = await bcrypt.hash(userpassword2,10);

        //create a new user
        const user = new User ({username,userlastname,useremail,usertel,userpassword1:hash1,userpassword2:hash2});

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
    const{useremail,userpassword1} = req.body
    try{
    //verify if the user exists on database
    const user = await User.findOne({useremail});  
    if(!user){
        return res.status(401).json({ error: 'E-mail ou senha inválidos' });
    }

    //verify if the passwords is valid
    const validPassword = bcrypt.compare(userpassword1,user.userpassword1);

    if(!validPassword){
        return res.status
    }
       
    //create new tokens                
    const {accessToken,refreshToken} = generateTokens(user)
            
    //return access token and refresh token
    return res.send({
        user:{id:user._id , name:user.username,email:useremail},
        token : {accessToken,refreshToken}});

    }catch(err){

    return res.status(400).json({ error: err.message });
}         
}


module.exports = {
    registerUser,
    loginUser,
}