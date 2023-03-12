import styled from "styled-components";

export const ConfirmDiv = styled.form`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 300px;
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ConfirmTitle = styled.h4`
    
    text-align: center;
    
`

export const CodeDiv = styled.div`
    
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

`

export const ConfirmMenu = styled.label`
    padding: .3rem;
`

export const ConfirmCode = styled.input`
    width: 25px;
    height: 50px;
`

export const ErrorMsg = styled.p`

    color:red;

`