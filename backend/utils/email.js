import nodemailer from 'nodemailer';

const transporterConfig = {
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
    }

};


class emailUtils {

    static async sendEmailConfirmation(username,email,confirmationCode){
        try{        

            const transporter = nodemailer.createTransport(transporterConfig);

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


    static async resetPassword (email,verificationCode){
        try{        

            const transporter = nodemailer.createTransport(transporterConfig);

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to:email,
                subject: 'Alterar Senha',
                text:`Seu código de verificação é ${verificationCode}. Use-o para redefinir sua senha.`
            };

            await transporter.sendMail(mailOptions);
            return{sucess:true};

        }catch(err){
            console.error('Erro ao enviar o e-mail:', err);
            throw err;

        }

    }
}

export default emailUtils;
