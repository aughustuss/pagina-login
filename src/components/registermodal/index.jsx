import React from "react";
import {
    RegisterDiv,
    RegisterTitle,
    CloseBTN,
    AccLink,
    RegisterSpan
} from './style'

import { Button, TextField, createTheme, ThemeProvider, Link, InputAdornment} from "@mui/material";
import { AccountCircle, Key, Mail, Phone, AccountBox } from "@mui/icons-material";


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
           
           <RegisterDiv>
                <RegisterSpan><AccountBox style={{width: "28px", height: "28px"}}/></RegisterSpan>
                <RegisterTitle>Crie a sua conta</RegisterTitle>
                
                
                <ThemeProvider  theme={theme}>
                    <TextField label="Nome" type="text" id="" variant="outlined" style={{marginBottom: "1em"}} InputProps={
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
                                    <Key/>
                                </InputAdornment>
                            )
                        }
                    } />
                    <TextField label="Repita a senha" type="password" id="" variant="outlined" style={{marginBottom: "1em"}}/>
                    <Button type="submit" fullWidth variant="contained" style={{fontWeight: "bold", color: "white", marginBottom: "2em"}}>Criar conta</Button>
                    <AccLink >Já possui uma conta? Clique aqui.</AccLink>
                 </ThemeProvider>
            </RegisterDiv> 
            
            : null}
        </>
    )
}