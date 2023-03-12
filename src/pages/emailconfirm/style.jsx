import styled from "styled-components";

export const ConfirmWrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 300px;
    background-color: #f1f2f3;
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    padding: .5rem;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
`

export const ConfirmDiv = styled.form`

    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
   
`

export const ConfirmTitle = styled.p`
    font-size: 16px;
    text-align: center;
    color: black;
    padding: .5rem;
    margin: 0;
`

export const CodeDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: .5rem;
`

export const ConfirmMenu = styled.label`
    padding: .3rem;
`

export const ConfirmCode = styled.input`
    width: 25px;
    height: 50px;
    text-align: center;
    background-color: transparent;
    border: 1px solid gray;
    border-radius: 4px;
`

export const ErrorMSG = styled.p`
    margin-top: 2rem;
    position: absolute;
    bottom: 0;
    color: black;
    text-align: center;

`