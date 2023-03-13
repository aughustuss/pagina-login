import bcrypt from 'bcrypt';
import User from "../models/User.js";
import TokenUtils from '../utils/token.js'
import emailUtils from '../utils/email.js';

class UserController{

    static async registerUser(req,res){

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
            let confirmationCode = Math.floor(Math.random() * 1000000); //  0 - 999999
            confirmationCode = confirmationCode.toString().padStart(6, '0'); //add 0 if its necessary
            
            //add confirmation code to db
            user.confirmationCode = confirmationCode;

            //save user on database
            await user.save();

            //send email for user confirmation
            await emailUtils.sendEmailConfirmation(username,useremail,confirmationCode);

            return res.status(201).json({message: 'Usuário registrado com sucesso'})


        }catch(err){
            return res.status(400).json({ error: err.message });
        }
    }

    static async loginUser (req,res){
        const{useremail,userpassword1} = req.body
        try{
        //verify if the user exists on database
        const user = await User.findOne({useremail});  
        if(!user){
            return res.status(401).json({ error: 'E-mail ou senha inválidos' });
        }

        //verify if the email has been confirmed
        if(!user.emailConfirmed){
            throw new Error('E-mail não confirmado')
        }

        //verify if the passwords is valid
        const validPassword = bcrypt.compare(userpassword1,user.userpassword1);

        if(!validPassword){
            return res.status
        }
        
        //create new tokens                
        const {accessToken,refreshToken} = TokenUtils.generateTokens(user)
                
        //return access token and refresh token
        res.setHeader('Authorization', `${accessToken}`);
        res.status(200).json({ refreshToken: refreshToken });

        }catch(err){
            return res.status(400).json({ error: err.message });
    }         
    }

    static async getProfile (req,res){
        try{
            const user = await User.findById(req.params.id);

            //verify if id exists
            if(!user){
                return res.status(404).json({error:'Perfil não encontrado'})
            }
            //verify if the email has been confirmed
            if(!user.emailConfirmed){
                return res.status(404).json({error:'O e-mail não está confirmado'})
            }
            //show user 
            res.send(user);

        }catch(err){
            console.error(err);
            return res.status(400).json({message: 'Ocorreu um erro ao mostrar o perfil do usuario'});
        }
    }


    static async confirmEmail (req,res){
        const {useremail,confirmationCode} = req.body;
        
            console.log('useremail:', useremail);
            console.log('confirmationCode:', confirmationCode);

        try{
            //verify if the user exists on db
            const user = await User.findOne({useremail});
            if(!user){
                throw new Error('Nao existe usuario cadastrado com esse e-mail')
            }

            //verify if the email has been confirmed
            if(user.emailConfirmed){
                throw new Error('E-mail já confirmado')
            }

            //teste
            console.log(`Código de confirmação válido: ${confirmationCode}`);
            console.log(typeof(confirmationCode))
            console.log(`Código de confirmação armazenado: ${user.confirmationCode}`);
            console.log(typeof(user.confirmationCode))

            //verify if code is valid
            if(user.confirmationCode !== confirmationCode){
                throw new Error('Codigo de confirmação invalido');
            }

            //update email confirmed to true
            user.emailConfirmed = true;
            await user.save();

            //generate tokens for user
            const {accessToken, refreshToken} = TokenUtils.generateTokens(user)

            //return access token and refresh token
            res.setHeader('Authorization', `${accessToken}`);
            res.status(200).json({ refreshToken: refreshToken });

        }catch(err){
            console.error(err);
            res.status(400).json({ error: err.message });
        }
    }

    static async sendPasswordReset (req,res){
        const {useremail} = req.body;

        //verify if the user exists on db
        try{
            //verify if the user exists on db
            const user = await User.findOne({useremail});
            if(!user){
                throw new Error('Usuario não encontrado')
            }

            //generate random code for confirmation
            let confirmationCode = Math.floor(Math.random() * 1000000); //  0 - 999999
            confirmationCode = confirmationCode.toString().padStart(6, '0'); //add 0 if its necessary
            

            //add confirmation code to db
            user.confirmationCode = confirmationCode;

            //save user on database
            await user.save();

            
            //send email for user confirmation
            await emailUtils.resetPassword(useremail,confirmationCode);

            return res.status(201).json({message: 'Codigo para alteração de senha enviado com sucesso'})

        }catch(err){
            return res.status(400).json({ error: err.message });
        }

    }

    static async verifyPasswordReset (req,res){
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
}

export default UserController;