const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const { generateTokens } = require('../utils/token');
const { sendEmailConfirmation , resetPassword} = require('../utils/email');



  const registerUser = async(req,res)=>{

    const{username,userlastname,useremail,usertel,userpassword1,userpassword2} = req.body

    try{
        //verify if this email is not in another user
        const userExists = await User.findOne({useremail});

        if(userExists){
            throw new Error ('E-mail já está em uso')
        }

        //hash senhas
        const salt = await bcrypt.genSalt(10)
        const hash1 = await bcrypt.hash(userpassword1,salt);
        const hash2 = await bcrypt.hash(userpassword2,salt);

        //create a new user
        const user = new User ({username,userlastname,useremail,usertel,userpassword1:hash1,userpassword2:hash2});

        //generate random code for confirmation
        const confirmationCode = Math.floor(Math.random()*1000000);

        //add confirmation code to db
        user.confirmationCode = confirmationCode;

        //save user on database
        await user.save();

        //send email for user confirmation
        await sendEmailConfirmation(username,useremail,confirmationCode);

        return res.status(201).json({message: 'Usuário registrado com sucesso'})


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
    res.setHeader('Authorization', `Bearer ${accessToken}`);
    res.status(200).json({ message: 'Login realizado com sucesso' });
    console.log(`Refresh token: ${refreshToken}`);

    }catch(err){
        return res.status(400).json({ error: err.message });
}         
}


const confirmEmail = async(req,res) =>{
    const {useremail,confirmationCode} = req.body;

    try{
        //verify if the user exists on db
        const user = await User.findOne({useremail});
        if(!user){
            throw new Error('Usuario não encontrado')
        }

        //verify if the email has been confirmed
        if(user.emailConfirmed){
            throw new Error('E-mail já confirmado')
        }


        //get array elementes and trasnforme in string
        const code = confirmationCode.join('');

        //verify if code is valid
        if(user.confirmationCode !== code){
            throw new Error('Codigo de confirmação invalido');
        }

        //update email confirmed to true
        user.emailConfirmed = true;
        await user.save();

        //generate tokens for user
        const {accessToken, refreshToken} = generateTokens(user)

        //return access token and refresh token
        res.setHeader('Authorization', `Bearer ${accessToken}`);
        res.status(200).json({ message: 'Login realizado com sucesso' });
        console.log(`Refresh token: ${refreshToken}`);

    }catch(err){
        console.error(err);
        res.status(400).json({ error: err.message });
    }
}

const sendPasswordReset = async(req,res) =>{
    const {useremail} = req.body;

    //verify if the user exists on db
    try{
        //verify if the user exists on db
        const user = await User.findOne({useremail});
        if(!user){
            throw new Error('Usuario não encontrado')
        }

        //generate random code for confirmation
        const confirmationCode = Math.floor(Math.random()*1000000);

        //add confirmation code to db
        user.confirmationCode = confirmationCode;

        //save user on database
        await user.save();

        //send email for user confirmation
        await resetPassword(useremail,confirmationCode);

        return res.status(201).json({message: 'Codigo para alteração de senha enviado com sucesso'})

    }catch(err){
        return res.status(400).json({ error: err.message });
    }

}

const verifyPasswordReset = async(req,res) =>{
    const { useremail, confirmationCode,userpassword1,userpassword2 } = req.body

    
    //verify if the user exists on db
    try{
        //verify if the user exists on db
        const user = await User.findOne({useremail});
        if(!user){
            throw new Error('Usuario não encontrado')
        }

        //verify reset code is equals to type code
        if(confirmationCode !== user.confirmationCode){
            return res.status(400).json({ message: 'O código de verificação fornecido está incorreto.'})
        }

        //to do -> verify password format

        //verify if the new password it is equal to newpasswordconfirm
        if(userpassword1!==userpassword2){
            return res.status(400).json({ message: 'A nova senha e a confirmação da senha não são iguais'})
        }

        //hash senhas
        const salt = await bcrypt.genSalt(10)
        const hash1 = await bcrypt.hash(userpassword1,salt);
        const hash2 = await bcrypt.hash(userpassword2,salt);

        user.userpassword1 = hash1;
        user.userpassword2 = hash2;

        await user.save();
        return res.status(200).json({ message: 'A senha foi alterada com sucesso'})

    }catch(err){
        return res.status(500).json({ message: 'Ocorreu um erro ao atualizar a senha'})
    }
}


module.exports = {
    registerUser,
    loginUser,
    confirmEmail,
    sendPasswordReset,
    verifyPasswordReset
}