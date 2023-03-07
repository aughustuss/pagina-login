import React from "react";
import {
    LoginSpan,
    LoginDiv,
    LoginTitle,
    CloseBTN,
    AccLink
} from './style'

import { TextField, createTheme, ThemeProvider, InputAdornment, Button } from "@mui/material";
import { Key, Login, Mail } from "@mui/icons-material";

export const UserLogin = ({openModalTwo, setOpenModalTwo}) => {
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
        {openModalTwo ? 
            <LoginDiv>
                
                <LoginSpan><Login style={{width: "28px", height: "28px"}} /></LoginSpan>
                <LoginTitle>Faça o seu Login</LoginTitle>

                <ThemeProvider theme={theme}>
                   <TextField style={{marginBottom: "2em"}} label="Email" type="email" InputProps={
                    {
                        startAdornment: (
                            <InputAdornment position="start">
                                <Mail/>
                            </InputAdornment>
                        )
                    }
                   } />
                   <TextField style={{marginBottom: "2em"}} label="Senha" type="password" id="" InputProps={
                    {
                        startAdornment: (
                            <InputAdornment position="start">
                                <Key/>
                            </InputAdornment>
                        )
                    }
                   } />
                   <Button fullWidth variant="contained" style={{color: "white", fontWeight: "bold", marginBottom: "2em"}} >Entrar</Button>
                   <AccLink>Ainda não possui uma conta? Crie uma aqui.</AccLink>
                </ThemeProvider>
            </LoginDiv>
        : null }
           
        </>
    )
}