import React from "react";
import {StyledInput} from './style'

export const Input = (props) => {
    return(
        <StyledInput 
        id={props.id}
        name={props.name}
        type={props.type}
        />
    )
}