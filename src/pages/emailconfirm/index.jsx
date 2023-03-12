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
import EmailContext from '../../Emailcontext';

export const EmailConfirm = () => {

    const email = useContext(EmailContext);
    const [vector, setVector] = useState([0, 0, 0, 0, 0, 0]);

    const handleInputChange = (index, e) => {
        const newValue = parseInt(e.target.value, 10);
        const updatedVector = [...vector];
        updatedVector[index] = newValue;
        setVector(updatedVector);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post("http://localhost:8000/auth/confirm-email", { vector, useremail: email });
        console.log(response.data);
        } catch (error) {
        console.error(error);
        }
    };

    return (
        <ConfirmDiv onSubmit={handleSubmit}>
            <ConfirmTitle>Nós enviamos um e-mail para: {email}</ConfirmTitle>
            <CodeDiv>
                    <ConfirmMenu>
                        {vector.map((value, index) => (
                            <ConfirmCode 
                            key={index}
                            type="number"
                            value={value}
                            onChange={(e) => {
                                handleInputChange(index, e)
                            }}
                            min={0}
                            max={9}
                            />
                        ))}
                    </ConfirmMenu>
            </CodeDiv>
           
            <Button variant="contained" type="submit" >Enviar</Button>
            
        </ConfirmDiv>
    )
}