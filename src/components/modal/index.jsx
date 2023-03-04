
import React, { useState } from "react";
import {
    ModalDiv,
} from './style'

export const Modal = ({openModal, setopenModal}) => {

    return (
        <>
            {openModal ? 
           
           <ModalDiv>
                
            </ModalDiv> 
            
            : null}
        </>
    )
}