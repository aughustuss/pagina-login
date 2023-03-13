import React, { useState } from "react";
import {
    RegisterDiv,
    RegisterTitle,
    RegisterName,
    CloseBTN,
    AccLink,
    RegisterSpan,
    LoadingDiv,
    Loading,
    SuccessDiv,
    NoDisplayDiv,
    RegisterWrapper,
    UnsuccessDiv
} from './style'

import * as yup from 'yup'
import { Button, TextField, createTheme, ThemeProvider, InputAdornment } from "@mui/material";
import { Key, Mail, Phone, AccountBox } from "@mui/icons-material";
import { Formik, useFormik } from "formik";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";
import { registerSchema } from '../../validations/userregister'

export const UserRegister = ({ openModalTwo, setopenModalTwo, closeRegisterModal, openLoginModal }) => {

    const [usedEmailMsg, setUsedEmailMsg] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const theme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#f57f17'
            },
            secondary: {
                main: '#f50057'
            },
        }
    })

    const navigate = useNavigate();

    const { values, errors, handleChange, handleSubmit, isSubmitting, resetForm, touched } = useFormik({
        initialValues: {
            username: "",
            userlastname: "",
            useremail: "",
            usertel: "",
            userpassword1: "",
            userpassword2: ""
        },
        validationSchema: registerSchema,

        onSubmit: async (values, { setSubmitting }) => {
            try {
                const response = await axios.post('http://localhost:8000/auth/register', values); 
                    setSubmitted(true);
                    setSubmitting(false);
                    localStorage.setItem('useremail', values.useremail);
                    resetForm();
                    setTimeout(() => {
                        setopenModalTwo(false);
                        navigate('/emailconfirm');
                    }, 3000); 
                
            } catch (error) {
                if(error.response.data){
                    setUsedEmailMsg('Email já está em uso.');
                } else {
                    setUsedEmailMsg('')
                }
                console.error('Error:', error);
                setSubmitting(false);
            }
        }

    });
    console.log(usedEmailMsg);

    return (
        <>
            {openModalTwo ?
                <RegisterWrapper>
                    {submitted ?
                    <RegisterDiv onSubmit={handleSubmit}>
                        
                        <CloseBTN onClick={() => {
                            setopenModalTwo(false);
                        }} >X</CloseBTN>
                        
                        <RegisterSpan><AccountBox style={{ width: "42px", height: "42px" }} /></RegisterSpan>
                        
                        <RegisterTitle>Crie a sua conta</RegisterTitle>
                        
                         
                        <ThemeProvider theme={theme}>

                            <RegisterName style={{ marginBottom: "1em" }}  >
                                <TextField
                                    label="Nome"
                                    type="text"
                                    id="username"
                                    name="username"
                                    variant="outlined"
                                    value={values.username}
                                    onChange={handleChange}
                                    helperText={errors.username && errors.username}
                                    style={{ marginRight: "1em" }}
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
                                helperText={touched.useremail && errors.useremail ? errors.useremail : usedEmailMsg}
                                style={{ marginBottom: "1em" }}
                                InputProps={
                                    {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Mail />
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
                                helperText={errors.usertel && errors.usertel}
                                style={{ marginBottom: "1em" }}
                                InputProps={
                                    {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Phone />
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
                                helperText={errors.userpassword1 && errors.userpassword1}
                                onChange={handleChange}
                                style={{ marginBottom: "1em" }}
                                InputProps={
                                    {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Key />
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
                                helperText={errors.userpassword2 && errors.userpassword2}
                                style={{ marginBottom: "1em" }}
                            />

                            <Button type="submit" fullWidth variant="contained" style={{ fontWeight: "bold", color: "white", marginBottom: "2em" }}> {!isSubmitting ? 'Criar Conta' : <LoadingDiv>Enviando <Loading /></LoadingDiv>}</Button>
                            <AccLink onClick={() => {
                                closeRegisterModal(false);
                                openLoginModal(true);
                            }}>Já possui uma conta? Clique aqui.</AccLink>

                        </ThemeProvider>
                        
                    </RegisterDiv>
                    : <SuccessDiv>Conta criada com sucesso. </SuccessDiv> }
                </RegisterWrapper>
                : null}

        </>
    )
}