import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginDiv = styled.form`
    
    height: 550px;
    width: 450px;
    background-color: #FFF;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 2.5px;
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`
export const LoginTitle = styled.h2`
    
    text-align: center;
    color: black;
    font-weight: bold;
    margin-bottom: 1em;
    text-transform: uppercase;

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
    margin: 1em 1em 2em 1em;
    text-decoration: none;
    font-size: 14px;
    color: black;

    &:hover{
        color: #f57f17;
        cursor: pointer;
    }
`
