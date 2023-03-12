import { Button } from '@mui/material';
import React, { useContext, useRef, useState } from 'react'
import {
    ConfirmDiv,
    ConfirmTitle,
    CodeDiv,
    ConfirmMenu,
    ConfirmCode,
    ErrorMsg
} from './style'
import axios from 'axios';
import { EmailContext } from '../../components/userregister/emailcontext';

export const EmailConfirm = (props) => {

    const email = useContext(EmailContext)
    const [values, setValues] = useState(Array(6).fill(''));
    
    const [errosDiv, setErrorDiv] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:8000/auth/confirm-email', {values, useremail: 'pedrocoimbra124123@gmail.com'});
            setValues(Array(6).fill(''));
            alert('Foi')
            
        } catch (e){
            console.log(e);
            alert('Nao foi.')
        } 
    }

    const handleChange = (e, i) => {
        const newValues = [...values];
        newValues[i] = e.target.value;
        setValues(newValues);
    };

    return (
        <ConfirmDiv onSubmit={handleSubmit}>
            <ConfirmTitle>Nós enviamos um e-mail para: {email}</ConfirmTitle>
            <CodeDiv>
                    <ConfirmMenu>
                    
                    <ConfirmCode maxLength={1} type="text" value={values[0]} onChange={(e) => handleChange(e, 0)} ></ConfirmCode>
                </ConfirmMenu>
                <ConfirmMenu>
                   
                    <ConfirmCode maxLength={1} type="text" value={values[1]} onChange={(e) => handleChange(e, 1)} ></ConfirmCode>
                </ConfirmMenu>
                <ConfirmMenu>
                    
                    <ConfirmCode maxLength={1} type="text" value={values[2]} onChange={(e) => handleChange(e, 2)} ></ConfirmCode>
                </ConfirmMenu>
                <ConfirmMenu>
                    
                    <ConfirmCode maxLength={1} type="text" value={values[3]} onChange={(e) => handleChange(e, 3)} ></ConfirmCode>
                </ConfirmMenu>
                <ConfirmMenu>
                    
                    <ConfirmCode maxLength={1} type="text" value={values[4]} onChange={(e) => handleChange(e, 4)} ></ConfirmCode>
                </ConfirmMenu>
                <ConfirmMenu>
                    
                    <ConfirmCode maxLength={1} type="text" value={values[5]} onChange={(e) => handleChange(e, 5)} ></ConfirmCode>
                </ConfirmMenu>
            </CodeDiv>
           
            <Button variant="contained" type="submit" >Enviar</Button>
            
        </ConfirmDiv>
    )
}