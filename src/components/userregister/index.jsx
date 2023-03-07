import React from "react";
import {
    RegisterDiv,
    RegisterTitle,
    RegisterName,
    CloseBTN,
    AccLink,
    RegisterSpan
} from './style'

import { Button, TextField, createTheme, ThemeProvider, InputAdornment} from "@mui/material";
import { Key, Mail, Phone, AccountBox } from "@mui/icons-material";
import { Formik, useFormik } from "formik";
import { registerSchema } from "../../validations/userregister";


export const UserRegister = ({openModalTwo, setopenModalTwo}) => {

    const theme = createTheme({
        palette:{
            mode: 'light',
            primary: {
                main: '#f57f17'
            },
            secondary: {
                main: '#f50057'
            },
        }
    }) 

    const {values, errors, handleChange, handleSubmit} = useFormik({
        initialValues: {
            username: "",
            userlastname: "",
            useremail: "",
            usertel: "",
            userpassword1: "",
            userpassword2: ""
        },
        validationSchema: registerSchema, 
    });


    return (
        <>
            {openModalTwo ? 
           
           <RegisterDiv onSubmit={handleSubmit}>
                <RegisterSpan><AccountBox style={{width: "28px", height: "28px"}}/></RegisterSpan>
                <RegisterTitle>Crie a sua conta</RegisterTitle>
                
                
                <ThemeProvider  theme={theme}>
                    <RegisterName style={{marginBottom: "1em"}}  >
                        <TextField
                        label="Nome" 
                        type="text" 
                        id="username" 
                        name="username" 
                        variant="outlined"
                        value={values.username}
                        onChange={handleChange}
                        helperText={errors.username && errors.username}
                        style={{marginRight: "1em"}}
                         />

                        <TextField
                        label="Sobrenome"
                        type="text"
                        id="userlastname"
                        name="userlastname"
                        variant="outlined"
                        value={values.userlastname}
                        onChange={handleChange}
                        />

                    </RegisterName>
                    <TextField 
                    label="Email" 
                    type="email" 
                    id="useremail"
                    name="useremail" 
                    variant="outlined" 
                    value={values.useremail}
                    onChange={handleChange}
                    helperText={errors.useremail && errors.useremail}
                    style={{marginBottom: "1em"}} 
                    InputProps={
                        {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Mail/>
                                </InputAdornment>
                            )
                        }
                    } />
                    <TextField 
                    label="Telefone" 
                    type="tel" 
                    id="usertel"
                    name="usertel" 
                    variant="outlined" 
                    value={values.usertel}
                    onChange={handleChange}
                    style={{marginBottom: "1em"}} 
                    InputProps={
                        {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Phone/>
                                </InputAdornment>
                            )
                        }
                    } />
                    <TextField 
                    label="Senha" 
                    type="password" 
                    id="userpassword1"
                    name="userpassword1" 
                    variant="outlined" 
                    value={values.userpassword1}
                    onChange={handleChange}
                    style={{marginBottom: "1em"}} 
                    InputProps={
                        {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Key/>
                                </InputAdornment>
                            )
                        }
                    } />

                    <TextField 
                    label="Repita a senha" 
                    type="password" 
                    id="userpassword2"
                    name="userpassword2" 
                    variant="outlined" 
                    value={values.userpassword2}
                    onChange={handleChange}
                    style={{marginBottom: "1em"}}
                    />

                    <Button type="submit" fullWidth variant="contained" style={{fontWeight: "bold", color: "white", marginBottom: "2em"}}>Criar conta</Button>
                    <AccLink >Já possui uma conta? Clique aqui.</AccLink>

                 </ThemeProvider>
            </RegisterDiv> 
            
            : null}
        </>
    )
}