import React from "react";
import {
    LoginDiv,
    LoginTitle,
    CloseBTN,
    AccLink
} from './style'

import { Button, TextField, createTheme, ThemeProvider, Link, InputAdornment} from "@mui/material";
import { AccountCircle, Mail, Password, Phone } from "@mui/icons-material";


export const RegisterModal = ({openModalOne, setopenModalOne}) => {

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
            {openModalOne ? 
           
           <LoginDiv>
                <CloseBTN >X</CloseBTN>
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
                                <InputAdornment position="start">
                                    <Phone/>
                                </InputAdornment>
                            )
                        }
                    } />
                    <TextField label="Senha" type="password" id="" variant="outlined" style={{marginBottom: "1em"}} InputProps={
                        {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Password/>
                                </InputAdornment>
                            )
                        }
                    } />
                    <TextField label="Repita a senha" type="password" id="" variant="outlined" style={{marginBottom: "1em"}}/>
                    <Button fullWidth variant="contained" style={{fontWeight: "bold", color: "white"}}>Criar conta</Button>
                    <AccLink >Já possui uma conta? Clique aqui.</AccLink>
                 </ThemeProvider>
            </LoginDiv> 
            
            : null}
        </>
    )
}