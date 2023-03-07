import React, {useState, useEffect, useRef} from "react"
import { UserLogin } from "../userlogin";
import { StoreRegister } from "../storeregister";
import { AccountBox, AddBusiness } from "@mui/icons-material";
import { 
    Navigation,
    Nav,
    Logo,
    Links,
    LinksMenu,
    DropdownMenu,
    DropDownList,
    DropDownItemMenu,
    DropDownItem
} from "./style"


export const Navbar = () => {
 
    const [openList, setOpenList] = useState(false);
    const [openModalOne, setopenModalOne] = useState(false);    
    const [openModalTwo, setOpenModalTwo] = useState(false);

    const showModalOne = () => {
        if(!openModalTwo){
            setopenModalOne(prev => !prev);
            setOpenList(false);
        }
        
    }
    const showModalTwo = () => {
        if (!openModalOne) {
            setOpenModalTwo(prev => !prev)
            setOpenList(false);
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

                                <DropDownItemMenu>
                                    <AccountBox/><DropDownItem >Para mim</DropDownItem>
                                </DropDownItemMenu>
                                <DropDownItemMenu>
                                    <AddBusiness/><DropDownItem onClick={showModalOne} >Para minha barbearia</DropDownItem>
                                </DropDownItemMenu>
                                

                            </DropDownList>
                            : null }
                        </DropdownMenu>
                        


                        <Links onClick={showModalTwo}>fazer login</Links>
                    </LinksMenu>
                </Nav>
            </Navigation>

            <StoreRegister openModalOne={openModalOne} setopenModalOne={setopenModalOne}/>
            <UserLogin openModalTwo={openModalTwo} setOpenModalTwo={setOpenModalTwo}/>
        </>
    )
}