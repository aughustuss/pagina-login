import { Link } from "react-router-dom";
import styled from "styled-components";

export const SideBarDiv = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    height: 100vh;
    width: 30%;
    background-color: rgb(0,0,10);
    font-size: 13px;
    
`

export const SideBarMenu = styled.ul`
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 0;
    padding-left: 0;
    margin-top: 100px;
`

export const SiderBarLink = styled(Link)`
    
    text-transform: capitalize;
    text-decoration: none;
    font-size: 14px;
    color: #fff;
    margin-bottom: 1rem;
    text-align: center;

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

export const SideBarListMenu = styled.div`
    display: flex;
    flex-direction: column;
`

export const SideBarList = styled.ul`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-size: 13px;
    text-transform: capitalize;
    text-align: center;
    padding: 0;
`

export const SideBarListWrap = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;

    
`

export const SideBarListItem = styled.li`

    &:hover{
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.9);
    }

`