import { AddBusiness, ExpandLess, ExpandMore, Person } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItemText, List, Collapse, ListItem } from "@mui/material";
import React, {useState, useEffect, useRef} from "react"
import { LoginModal } from "../loginmodal";
import { RegisterModal } from "../registermodal";
import { 
    Navigation,
    Nav,
    Logo,
    Links,
    LinksMenu,
    CloseBTN,
    DropdownMenu,
    DropDownList,
    DropDownItem
} from "./style"


export const Navbar = () => {
 
    const [openList, setOpenList] = useState(false);
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

    const HandleClick = () => {
        setOpenList(!openList);
    }

    return (
        <>
            <Navigation>
                <Nav>
                    <Logo>Brasil Barber's</Logo>
                    <LinksMenu>
                        <Links>Agendar horário</Links>
                        <Links>ver barbearias próximas</Links>
                        <DropdownMenu>
                            
                            <Links onClick={HandleClick}> Criar conta </Links>
                            { openList ?
                            <DropDownList>
                                <DropDownItem>Para mim</DropDownItem>
                                <DropDownItem>Para minha barbearia</DropDownItem>
                            </DropDownList>
                            : null }
                        </DropdownMenu>
                        


                        <Links onClick={showModalTwo}>fazer login</Links>
                    </LinksMenu>
                </Nav>
            </Navigation>
            <RegisterModal openModalOne={openModalOne} setopenModalOne={setopenModalOne}/>
            <LoginModal openModalTwo={openModalTwo} setOpenModalTwo={setOpenModalTwo}></LoginModal>
        </>
    )
}