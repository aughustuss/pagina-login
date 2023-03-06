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
    flex-direction: row;

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
    
    text-transform: uppercase;
    text-decoration: none;
    font-size: 13px;
    color: #fff;

    padding: 1rem 1rem 1rem 1.5rem;

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

export const CloseBTN = styled.span`
    
    position: absolute;
    display: inline;
    float: right;
    font-weight: bold;
    color: black;

`
