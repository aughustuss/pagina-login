import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const RegisterWrapper = styled.div`
    height: fit-content;
    width: 450px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    
    display: flex;
    flex-direction: column;
    z-index: 1000;
`

export const RegisterDiv = styled.form`
    padding: 1rem;
    background-color: #FFF;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box; 
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 4px;
`

export const RegisterSpan = styled.span`

    text-align: center;

`

export const RegisterTitle = styled.h2`
    
    text-align: center;
    color: black;
    font-weight: bold;
    margin-bottom: 1em;
    text-transform: uppercase;

`

export const RegisterName = styled.div`
    
    display: flex;
    flex-direction: row;

`

export const CloseBTN = styled.span`
    
    position: absolute;
    font-weight: bold;
    color: black;
    right: 0;
    top: 0;
    margin: 1em;
    padding: 0 .5em 0 .5em;
    background-color: #e3dddc;
    border-radius: 5px;

    &:hover{
        background-color: #c7c3c3;
        cursor: pointer;
    }

`

export const AccLink = styled(Link)`
    
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 1em;
    text-decoration: none;
    font-size: 14px;
    color: black;

    &:hover{
        color: #f57f17;
        cursor: pointer;
    }
`

export const LoadingDiv = styled.div`
    
    display: flex;
    align-items: center;
    flex-direction: row;

`

export const Loading= styled.span`

    margin-left: 5px;
    display: flex;
    width: 10px;
    height: 10px;
    border: 3px solid rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    border-top-color: #fff;
    animation: spin 1s ease-in-out infinite;

    @keyframes spin {
        to {transform: rotate(360deg)}
    }

`

export const UnsuccessDiv = styled.div`
    opacity: 0;
    
`

export const SuccessDiv = styled.div`
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    height: 100%;
    width: 100%;
    animation: showDiv .5s ease-in;
    background-color: rgba(119, 255, 149, 0.8);
    padding: 1rem;
    border-radius: 4px;

    @keyframes showDiv {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
        
    }
`



export const NoDisplayDiv = styled.div`
    
    display: none;
`