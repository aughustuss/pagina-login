import React, {useState} from "react"
import { Modal } from "../modal";
import { 
    Navigation,
    Nav,
    Logo,
    Links,
    LinksMenu
} from "./style"
export const Navbar = () => {

    const [openModal, setopenModal] = useState(false);
    
    const showModal = () => {
        setopenModal(prev => !prev);
    }

    return (
        <>
            <Navigation>
                <Nav>
                    <Logo>Brasil Barber's</Logo>
                    <LinksMenu>
                        <Links>Agendar horário</Links>
                        <Links>ver barbearias próximas</Links>
                        <Links>criar uma conta</Links>
                        <Links onClick={showModal}>fazer login</Links>
                    </LinksMenu>
                </Nav>
            </Navigation>
            <Modal openModal={openModal} setopenModal={setopenModal}></Modal>
        </>
    )
}