import React from "react";
import {
    RegisterDiv,
    RegisterTitle,
    RegisterWrap,
    CloseBTN,
    AccLink,
    RegisterSpan
} from './style'

import { Button, TextField, createTheme, ThemeProvider, Link, InputAdornment} from "@mui/material";
import { Key, Mail, Phone, AccountBox, Store, LocalOffer } from "@mui/icons-material";


export const StoreRegister = ({openModalOne, setopenModalOne}) => {

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
                    <RegisterWrap style={{marginBottom: "1em"}}  >
                        <TextField
                        label="Nome" 
                        type="text" 
                        id="storename" 
                        name="storename" 
                        variant="outlined"
                    
                         />

                        <TextField
                        label="Sobrenome"
                        type="text"
                        id="storelastname"
                        name="storelastname"
                        variant="outlined"
                        
                        />

                    </RegisterWrap>
                    <TextField 
                    label="Email" 
                    type="email" 
                    id="storeemail"
                    name="storeemail" 
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
                    id="storetel"
                    name="storetel" 
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
                    label="Endereço"
                    type="text"
                    id="storelocation"
                    name="storelocation"
                    variant="outlined"
                    style={{marginBottom: "2em"}}
                    InputProps={
                        {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Store/>
                                </InputAdornment>
                            )                                
                        }
                    }
                    />

                    <RegisterWrap style={{marginBottom: "2em"}}>

                    <TextField
                    label="Número"
                    type="text"
                    id="storenumber"
                    name="storenumber"
                    variant="outlined"
                    InputProps={
                        {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LocalOffer/>
                                </InputAdornment>
                            )
                        }
                    }
                    />

                    <TextField
                    label="Bairro"
                    type="text"
                    id="storeadress"
                    name="storeadress"
                    variant="outlined"
                    InputProps={
                        {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Store/>
                                </InputAdornment>
                            )
                        }
                    }
                    />

                    </RegisterWrap>

                    <TextField 
                    label="Senha" 
                    type="password" 
                    id="storepassword1"
                    name="storepassword1" 
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
                    id="storepassword2"
                    name="storepassword2" 
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