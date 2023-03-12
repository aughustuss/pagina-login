const nodemailer = require('nodemailer');
require('dotenv').config(); //load .env


async function sendEmailConfirmation(username,email,confirmationCode){
    try{        

        const transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secure: false,
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to:email,
            subject: 'Confirmação de cadastro',
            text:`Olá ${username}!\n\nSeu código de confirmação é: ${confirmationCode}\n\nObrigado!`
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

