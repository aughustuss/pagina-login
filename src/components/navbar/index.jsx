import React, {useState, useEffect, useRef} from "react"
import { RegisterModal } from "../registermodal";
import { 
    Navigation,
    Nav,
    Logo,
    Links,
    LinksMenu,
    CloseBTN
} from "./style"


export const Navbar = () => {

    const [openModalOne, setopenModalOne] = useState(false);    
    const showModalOne = () => {
        setopenModalOne(prev => !prev);
    }

    return (
        <>
            <Navigation>
                <Nav>
                    <Logo>Brasil Barber's</Logo>
                    <LinksMenu>
                        <Links>Agendar horário</Links>
                        <Links>ver barbearias próximas</Links>
                        <Links onClick={showModalOne}>criar uma conta</Links>
                        <Links>fazer login</Links>
                    </LinksMenu>
                </Nav>
            </Navigation>
            <RegisterModal openModalOne={openModalOne} setopenModalOne={setopenModalOne}/>

        </>
    )
}