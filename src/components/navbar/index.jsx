import React from "react"
import { Link } from "react-router-dom"
import { 
    Navigation,
    Nav,
    Logo,
    Links,
    LinksMenu
} from "./style"
export const Navbar = () => {
    return (
        <>
            <Navigation>
                <Nav>
                    <Logo>Logo</Logo>
                    <LinksMenu>
                        <Links>Agendar</Links>
                        <Links>Entrar</Links>
                    </LinksMenu>
                </Nav>
            </Navigation>
        </>
    )
}