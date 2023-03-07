import React from "react";
import {
    RegisterDiv,
    RegisterTitle,
    RegisterWrap,
    CloseBTN,
    AccLink,
    RegisterSpan
} from './style'

import { useFormik } from "formik";
import { Button, TextField, createTheme, ThemeProvider, Link, InputAdornment} from "@mui/material";
import { Key, Mail, Phone, AccountBox, Store, LocalOffer, Badge } from "@mui/icons-material";
import { storeSchema } from "../../validations/storeregister";

export const StoreRegister = ({openModalThree, setOpenModalThree}) => {

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

    const {values, handleChange, isSubmitting, errors, handleSubmit} = useFormik({
        initialValues:{
            storename: "",
            storelastname: "",
            storeemail: "",
            storetel: "",
            storelocation: "",
            storenumber: "",
            storeadress: "",
            storepassword1: "",
            storepassword2: ""
        },
        validationSchema: storeSchema,
    })

    return (
        <>
            {openModalThree ? 
           
           <RegisterDiv onSubmit={handleSubmit}>
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
                        value={values.storename}
                        onChange={handleChange}
                        helperText={errors.storename && errors.storename}
                        style={{marginRight: "1em"}}
                        InputProps={
                            {
                                startAdornment: (
                                    <InputAdornment>
                                        <Badge/>
                                    </InputAdornment>
                                )
                            }
                        }
                         />

                        <TextField
                        label="Sobrenome"
                        type="text"
                        id="storelastname"
                        name="storelastname"
                        variant="outlined"
                        value={values.storelastname}
                        onChange={handleChange}
                        helperText={errors.storelastname && errors.storelastname}
                        />

                    </RegisterWrap>

                    <TextField
                    label="Nome da Barbearia"
                    type="text"
                    id="storefullname"
                    name="storefullname"
                    variant="outlined"
                    
                    style={{marginBottom: "1em"}}
                    />

                    <TextField 
                    label="Email" 
                    type="email" 
                    id="storeemail"
                    name="storeemail" 
                    variant="outlined" 
                    value={values.storeemail}
                    onChange={handleChange}
                    helperText={errors.storeemail && errors.storeemail}
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
                    value={values.storetel}
                    onChange={handleChange}
                    helperText={errors.storetel && errors.storetel}
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
                    value={values.storelocation}
                    onChange={handleChange}
                    helperText={errors.storelocation && errors.storelocation}
                    style={{marginBottom: "1em"}}
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

                    <RegisterWrap style={{marginBottom: "1em"}}>

                    <TextField
                    label="Número"
                    type="text"
                    id="storenumber"
                    name="storenumber"
                    variant="outlined"
                    value={values.storenumber}
                    onChange={handleChange}
                    helperText={errors.storenumber && errors.storenumber}
                    style={{marginRight: "1em"}}
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
                    value={values.storeadress}
                    onChange={handleChange}
                    helperText={errors.storeadress && errors.storeadress}
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
                    value={values.storepassword1}
                    onChange={handleChange}
                    helperText={errors.storepassword1 && errors.storepassword1}
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
                    value={values.storepassword2}
                    onChange={handleChange}
                    helperText={errors.storepassword2 && errors.storepassword2}
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