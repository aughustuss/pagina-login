const nodemailer = require('nodemailer');
const User = require('../models/userModel');
const {generateTokens} = require('../utils/token')


async function sendEmailConfirmation(email,confirmationCode){
    try{        

        const user = await User.findOne({email});

        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASSWORD,
            }
        });

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to:email,
            subject: 'Confirmação de cadastro',
            text:`Olá ${user.name}!\n\nSeu código de confirmação é: ${confirmationCode}\n\nObrigado!`
        };

        await transporter.sendMail(mailOptions);
        return{sucess:true};

    }catch(err){
        console.error('Erro ao enviar o e-mail:', err);
        throw err;

    }
}


module.exports = {
    sendEmailConfirmation,
};

