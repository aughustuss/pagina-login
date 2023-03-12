import { Button, ThemeProvider } from '@mui/material';
import React, { useContext, useEffect, useRef, useState } from 'react'
import {
    ConfirmWrapper,
    ConfirmDiv,
    ConfirmTitle,
    CodeDiv,
    ConfirmMenu,
    ConfirmCode,
    ErrorMSG
} from './style'
import axios from 'axios';
import { createTheme } from '@mui/material';

const EmailConfirm = () => {

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

    
    const [email, setEmail] = useState(null);
    const inputRefs = Array(6).fill('').map(() => useRef());
    const [code, setCode] = useState(Array(6).fill(''));
    const [errorDiv, setErrorDiv] = useState(false);

    useEffect(() => {
        const savedEmail = localStorage.getItem("useremail");
        if(savedEmail){
            setEmail(savedEmail);
        }
    })

    const handleChange = (event, index) => {
        const newCode = [...code];
        newCode[index] = event.target.value;
        setCode(newCode);
        if (index < 5 && event.target.value) {
            inputRefs[index + 1].current.focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(code);
        if (code.every(Boolean)) {
            setErrorDiv(false);
            try {
                const response = await axios.post('', { 
                    code, 
                    email
                 }); 
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        } else {
            setErrorDiv(true);
        }
    };

    return (

        <ConfirmWrapper>
            <ThemeProvider theme={theme}>
                
                <ConfirmDiv onSubmit={handleSubmit}>
                <ConfirmTitle>Nós enviamos um e-mail de confirmação para: {email}. Não se esqueça de checar a caixa de Spam.</ConfirmTitle>
                <ConfirmTitle>Digite o código enviado por E-mail.</ConfirmTitle>
                    <CodeDiv >
                        
                        <ConfirmMenu>
                            <ConfirmCode maxLength={1} type="text" value={code[0]} onChange={(event) => handleChange(event, 0)} ref={inputRefs[0]} />
                        </ConfirmMenu>
                        <ConfirmMenu>
                            <ConfirmCode maxLength={1} type="text" value={code[1]} onChange={(event) => handleChange(event, 1)} ref={inputRefs[1]} />
                        </ConfirmMenu>
                        <ConfirmMenu>
                            <ConfirmCode maxLength={1} type="text" value={code[2]} onChange={(event) => handleChange(event, 2)} ref={inputRefs[2]} />
                        </ConfirmMenu>
                        <ConfirmMenu>
                            <ConfirmCode maxLength={1} type="text" value={code[3]} onChange={(event) => handleChange(event, 3)} ref={inputRefs[3]} />
                        </ConfirmMenu>
                        <ConfirmMenu>
                            <ConfirmCode maxLength={1} type="text" value={code[4]} onChange={(event) => handleChange(event, 4)} ref={inputRefs[4]} />
                        </ConfirmMenu>
                        <ConfirmMenu>
                            <ConfirmCode maxLength={1} type="text" value={code[5]} onChange={(event) => handleChange(event, 5)} ref={inputRefs[5]} />
                        </ConfirmMenu>
                    </CodeDiv>
                    <Button fullWidth variant="contained" type="submit" style={{color: "white", fontWeight: "bold"}} >Enviar</Button>
                    {errorDiv ? <ErrorMSG>O código deve possuir 6 caractéres.</ErrorMSG> : null}
                </ConfirmDiv>
            </ThemeProvider>
        </ConfirmWrapper>

    )
}

export default EmailConfirm;