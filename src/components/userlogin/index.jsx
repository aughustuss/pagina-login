import React, { useEffect, useRef } from "react";
import {
    LoginSpan,
    LoginDiv,
    LoginTitle,
    CloseBTN,
    AccLink
} from './style'

import { TextField, createTheme, ThemeProvider, InputAdornment, Button } from "@mui/material";
import { Key, Login, Mail } from "@mui/icons-material";
import { logSchema } from "../../validations/userlogin";
import { useFormik } from "formik";
import axios from "axios";

export const UserLogin = ({ openModalOne, setOpenModalOne, closemodal }) => {
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

    const {values, errors, handleChange, handleSubmit, isSubmitting} = useFormik({
        initialValues: {
            useremail: "",
            userpassword1: "",

        },
        validationSchema: logSchema,

        onSubmit: async (values, { setSubmitting }) => {
            try {
              const response = await axios.post('http://localhost:8000/auth/login', values);
              console.log('Response:', response.data);
              setSubmitting(false);
            } catch (error) {
              console.error('Error:', error);
              setSubmitting(false);
            }
          }
            
    });


    return (
        <>
            {openModalOne ?
                <LoginDiv onSubmit={handleSubmit} >

                    <CloseBTN onClick={() => {
                        setOpenModalOne(false);
                    }} >X</CloseBTN>
                    <LoginSpan><Login style={{ width: "42px", height: "42px" }} /></LoginSpan>
                    <LoginTitle>Faça o seu Login</LoginTitle>

                    <ThemeProvider theme={theme}>
                        <TextField
                            style={{ marginBottom: "2em" }}
                            label="Email"
                            type="email"
                            id="useremail"
                            name="useremail"
                            onChange={handleChange}
                            value={values.useremail}
                            helperText={errors.useremail && errors.useremail}
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
                            style={{ marginBottom: "2em" }}
                            label="Senha"
                            type="password"
                            id="userpassword1"
                            name="userpassword1"
                            value={values.userpassword1}
                            onChange={handleChange}
                            helperText={errors.userpassword1 && errors.userpassword1}
                            InputProps={
                                {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Key />
                                        </InputAdornment>
                                    )
                                }
                            } />
                        <Button type="submit" fullWidth variant="contained" style={{ color: "white", fontWeight: "bold", marginBottom: "2em" }} >Entrar</Button>
                        <AccLink onClick={() => {
                            closemodal(false);
                        }} >Ainda não possui uma conta? Crie uma aqui.</AccLink>
                    </ThemeProvider>
                </LoginDiv>
                : null}

        </>
    )
}