import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    
    display: flex;
    align-items: center;
    width: 100%;
    height: 12.5vh;
    background-color: black;
    position: fixed;
    z-index: -1;

`

export const LinksMenu = styled.div`
    justify-: flex-end;
    width: 80%;

`

export const Links = styled(Link)`
    
    text-decoration: none;
    font-size: 16px;
    color: white;
    font-weight: bold;

`