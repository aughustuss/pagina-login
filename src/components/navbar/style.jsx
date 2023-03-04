import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navigation = styled.header`
    
    width: 100%;
    z-index: 100;
    top: 0;
    left: 0;
    position: fixed;
    overflow: hidden;
    margin: auto;

`

export const Nav = styled.nav`

    background-color: black;
    display: flex;
    height: 12.5vh;
    flex-direction: row;

`

export const Logo = styled.div`
    display: flex;
    flex-grow: 1;
    color: green;
    align-items: center;
    padding: 1rem;
`

export const LinksMenu = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Links = styled(Link)`
    
    text-transform: uppercase;
    text-decoration: none;
    font-size: 14px;
    color: white;
    font-weight: bold;
    padding: 1rem;

    &:hover{
        color: red;
    }

`
