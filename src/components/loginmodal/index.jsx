import React, { useState } from "react";
import {
    LoginDiv,
    LoginTitle
} from './style'

import { Button, TextField, createTheme, ThemeProvider, Link, InputAdornment} from "@mui/material";
import { AccountCircle, Lock, LockOpen, Mail, Password, Phone } from "@mui/icons-material";


export const LoginModal = ({openModal, setopenModal}) => {

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

    
    return (
        <>
            {openModal ? 
           
           <LoginDiv>
                <ThemeProvider  theme={theme}>
                    
                    <LoginTitle>Crie a sua conta</LoginTitle>
                    <TextField p="2" label="Nome" type="text" id="" variant="outlined" style={{marginBottom: "1em"}} InputProps={
                        {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle/>
                                </InputAdornment>
                            )
                        }
                    } />
                    <TextField label="Email" type="email" id="" variant="outlined" style={{marginBottom: "1em"}} InputProps={
                        {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Mail/>
                                </InputAdornment>
                            )
                        }
                    } />
                    <TextField label="Telefone" type="tel" id="" variant="outlined" style={{marginBottom: "1em"}} InputProps={
                        {
                            startAdornment: (
                                <InputAdornment>
                                    <Phone/>
                                </InputAdornment>
                            )
                        }
                    } />
                    <TextField label="Senha" type="password" id="" variant="outlined" style={{marginBottom: "1em"}} InputProps={
                        {
                            startAdornment: (
                                <InputAdornment>
                                    <Password/>
                                </InputAdornment>
                            )
                        }
                    } />
                    <TextField label="Repita a senha" type="password" id="" variant="outlined" style={{marginBottom: "1em"}}/>
                    <Button fullWidth variant="contained" style={{fontWeight: "bold"}}>Criar conta</Button>
                    <Link variant="body2" color="primary">Já possui uma conta? Faça o Login aqui.</Link>
                 </ThemeProvider>
            </LoginDiv> 
            
            : null}
        </>
    )
}