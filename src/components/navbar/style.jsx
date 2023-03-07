import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navigation = styled.header`
    
    width: 100%;
    z-index: 100;
    top: 0;
    left: 0;
    position: initial;
`

export const Nav = styled.nav`

    background-color: transparent;
    display: flex;
    height: 100px;
    

`

export const Logo = styled.div`
    display: flex;
    flex-grow: 1;
    color: #fff;
    align-items: center;
    padding: 1rem;
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
`

export const LinksMenu = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Links = styled(Link)`
    
    text-transform: capitalize;
    text-decoration: none;
    font-size: 13px;
    color: #fff;
    font-weight: 500;
    padding: 1rem;

    &::after{
        content: "";
        display: block;
        width: 0;
        height: 2px;
        background: #FFF;
        transition: width .4s ease-in;
    }

    &:hover::after{
        width: 100%;
    }

`

export const DropdownMenu = styled.div`
    
    display: flex;
    
`

export const DropDownList = styled.ul`
    position: absolute;
    color: white;
    font-size: 13px;
    text-transform: capitalize;
    text-align: start;
    top: 5em;
    margin-left: 5px;
    padding: 0;

`


export const DropDownItemMenu = styled.div`
    
    display: flex;
    flex-direction: row;
    align-items: center;

`

export const DropDownItem = styled.li`

    text-decoration: none;
    list-style: none;
    padding: 1em;

    &:hover{
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.9);
    }

`