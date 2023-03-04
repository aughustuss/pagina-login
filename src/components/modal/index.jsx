
import React, { useState } from "react";
import {
    ModalDiv,
    ModalWrap,
    ModalTitle
} from './style'

export const Modal = ({openModal, setopenModal}) => {

    return (
        <>
            {openModal ? 
           
           <ModalDiv>
                <ModalWrap>
                    <ModalTitle>Faça seu Login</ModalTitle>
                    
                </ModalWrap>
            </ModalDiv> 
            
            : null}
        </>
    )
}