import React from "react"
import { Link } from "react-router-dom"
import { 
    Nav,
    Links,
    LinksMenu
} from "./style"
export const Navbar = () => {
    return (
        <>
            <Nav>
                <LinksMenu>
                    <Links>Ver Barbearias próximas</Links>
                    <Links>Agendar Horário</Links>
                    <Links>Entrar</Links>
                </LinksMenu>
            </Nav>
        </>
    )
}