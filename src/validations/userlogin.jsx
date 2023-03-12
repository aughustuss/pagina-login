import * as yup from "yup"

export const logSchema = yup.object().shape({
    useremail: yup.string().required('Informe o seu email. '),
    userpassword1: yup.string().required('Informe a sua senha. ')
})