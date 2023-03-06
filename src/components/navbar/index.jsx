import React, {useState, useEffect, useRef} from "react"
import { LoginModal } from "../loginmodal";
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
    const [openModalTwo, setOpenModalTwo] = useState(false);
    const showModalOne = () => {
        if(!openModalTwo){
            setopenModalOne(prev => !prev);
        }
        
    }
    const showModalTwo = () => {
        if (!openModalOne) {
            setOpenModalTwo(prev => !prev)
        }
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
                        <Links onClick={showModalTwo}>fazer login</Links>
                    </LinksMenu>
                </Nav>
            </Navigation>
            <RegisterModal openModalOne={openModalOne} setopenModalOne={setopenModalOne}/>
            <LoginModal openModalTwo={openModalTwo} setOpenModalTwo={setOpenModalTwo}></LoginModal>
        </>
    )
}