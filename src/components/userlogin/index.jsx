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

export const UserLogin = ({openModalOne, setOpenModalOne, closemodal}) => {
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
                
                <CloseBTN onClick={() => {
                    setOpenModalOne(false);
                }} >X</CloseBTN>
                <LoginSpan><Login style={{width: "42px", height: "42px"}} /></LoginSpan>
                <LoginTitle>Faça o seu Login</LoginTitle>

                <ThemeProvider theme={theme}>
                   <TextField 
                   style={{marginBottom: "2em"}} 
                   label="Email" 
                   type="email" 
                   id="logineamil"
                   name="loginemail"
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
                   style={{marginBottom: "2em"}} 
                   label="Senha" 
                   type="password" 
                   id="loginpassword"
                   name="loginpassword" 
                   InputProps={
                    {
                        startAdornment: (
                            <InputAdornment position="start">
                                <Key/>
                            </InputAdornment>
                        )
                    }
                   } />
                   <Button fullWidth variant="contained" style={{color: "white", fontWeight: "bold", marginBottom: "2em"}} >Entrar</Button>
                   <AccLink  onClick={() => {
                        closemodal(false);
                   }} >Ainda não possui uma conta? Crie uma aqui.</AccLink>
                </ThemeProvider>
            </LoginDiv>
        : null }
           
        </>
    )
}