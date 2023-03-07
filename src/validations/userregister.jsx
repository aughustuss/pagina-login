import React from "react";
import * as yup from 'yup'

export const registerSchema = yup.object().shape({
    username: yup.string().max(32).required('Insira o seu nome.'),
    userlastname: yup.string().max(32).required('Insira o seu sobrenome. '),
    useremail: yup.string().email('E-mail inválido.').required('Insira um e-mail válido. '),
    usertel: yup.string().min(11).max(11).required('Insira um telefone válido.'),
    userpassword1: yup.string().min(6).max(10).required(),
    userpassword2: yup.string().min(6).max(10).oneOf([yup.ref('userpassword1'), null]).required(),
})