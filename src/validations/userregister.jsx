import * as yup from 'yup'

export const registerSchema = yup.object().shape({
    username: yup.string().max(32).required('Insira o seu nome.'),
    userlastname: yup.string().max(32).required('Insira o seu sobrenome. '),
    useremail: yup.string().email('E-mail inválido.').required('Insira um endereço de e-mail.'),
    usertel: yup.string().min(11, 'Digite o número informando o DDD.').max(11,'O seu número de telefone está incorreto.').required('Insira um telefone válido.'),
    userpassword1: yup.string().min(6, 'Digite uma senha com no mínimo 6 caractéres.').max(10, 'Digite uma senha com no máximo 10 caractéres').required('Insira a sua senha. '),
    userpassword2: yup.string().oneOf([yup.ref('userpassword1'), null], 'As senhas não coincidem. ').required('Confirme a sua senha. '),
})