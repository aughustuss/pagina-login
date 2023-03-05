import React, { useState } from "react";
import {
    LoginDiv,
} from './style'

import { Button, createMuiTheme, TextField, createTheme, ThemeProvider} from "@mui/material";
import { create } from "@mui/material/styles/createTransitions";
import { light } from "@mui/material/styles/createPalette";


export const LoginModal = ({openModal, setopenModal}) => {

    const theme = createTheme({
        palette:{
            mode: 'light',
            primary: {
                main: '#f57f17'
            },
            secondary: {
                main: '#f50057'
            }
        }
    }) 

    return (
        <>
            {openModal ? 
           
           <LoginDiv>
                <ThemeProvider theme={theme}>
                    <TextField label="Nome" type="text" id="" variant="outlined" />
                    <TextField label="Email" type="email" id="" variant="outlined" />
                    <TextField label="Senha" type="password" id="" variant="outlined" />
                    <TextField label="Repita a senha" type="password" id="" variant="outlined" />
                </ThemeProvider>
            </LoginDiv> 
            
            : null}
        </>
    )
}