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
                    <Logo>Brasil Barber's</Logo>
                    <LinksMenu>
                        <Links>Agendar horário</Links>
                        <Links>Sou barbeiro</Links>
                        <Links>Login</Links>
                    </LinksMenu>
                </Nav>
            </Navigation>
        </>
    )
}