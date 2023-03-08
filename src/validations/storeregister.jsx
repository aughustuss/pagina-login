import * as yup from "yup"

export const storeSchema = yup.object().shape({
    storename: yup.string().max(32).required('Informe o nome do dono. '),
    storelastname: yup.string().max(32).required('Informe o sobrenome.'),
    storefullname: yup.string().max(64).required('Informe o nome da barbearia.'),
    storeemail: yup.string().email('Digite um e-mail válido. ').required('Informe o e-mail. '),
    storetel: yup.string().min(11).max(11).required('Digite o telefone do proprietário. '),
    storelocation: yup.string().required('Informe o endereço da barbearia. '),
    storenumber: yup.string().max(10).required('Informe o número da sua propriedade. '),
    storeadress: yup.string().required('Informe o bairro da sua barbearia. '),
    storepassword1: yup.string().min(6).max(12).required('Informe uma senha. '),
    storepassword2: yup.string().min(6).max(12).oneOf([yup.ref('password'), null], 'As senhas não coincidem. ').required('Repita a senha. ')
})