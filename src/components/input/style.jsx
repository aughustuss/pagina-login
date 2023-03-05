import styled from "styled-components";
import { Label } from "../label";

export const StyledInput = styled.input`
    
    border: none;
    border-bottom: 1px solid black;
    width: 100%;
    justify-content: center;
    padding: 1rem;
    outline: none;
    background-color: transparent;
    padding: 10px 0;

    &:focus + ${Label} {
        font-size: 32px;
    }

`