import * as yup from "yup"

const logSchema = yup.object().shape({
    loginemail: yup.string().required('Informe o seu email. '),
    loginpassword: yup.string().required('Informe a sua senha. ')
})