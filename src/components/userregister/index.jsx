import React from "react";
import {
    RegisterDiv,
    RegisterTitle,
    RegisterName,
    CloseBTN,
    AccLink,
    RegisterSpan
} from './style'

import { Button, TextField, createTheme, ThemeProvider, Link, InputAdornment} from "@mui/material";
import { AccountCircle, Key, Mail, Phone, AccountBox } from "@mui/icons-material";


export const UserRegister = ({openModalOne, setopenModalOne}) => {

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
                    <RegisterName style={{marginBottom: "1em"}}  >
                        <TextField
                        label="Nome" 
                        type="text" 
                        id="username" 
                        name="username" 
                        variant="outlined"
                    
                         />

                        <TextField
                        label="Sobrenome"
                        type="text"
                        id="userlastname"
                        name="userlastname"
                        variant="outlined"
                        
                        />

                    </RegisterName>
                    <TextField 
                    label="Email" 
                    type="email" 
                    id="useremail"
                    name="useremail" 
                    variant="outlined" 
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