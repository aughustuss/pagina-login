
import { TextField } from "@mui/material";
import React, { useState } from "react";
import {
    ModalDiv,
} from './style'

export const LoginModal = ({openModal, setopenModal}) => {

    return (
        <>
            {openModal ? 
           
           <ModalDiv>
                
            </ModalDiv> 
            
            : null}
        </>
    )
}