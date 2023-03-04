import styled from "styled-components";

export const ModalDiv = styled.div`
    
    height: 450px;
    width: 350px;
    background-color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

`

export const ModalWrap = styled.form`
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`

export const ModalTitle = styled.h2`
    
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;

`