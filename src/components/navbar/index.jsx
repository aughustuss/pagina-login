import React, {useState, useEffect, useRef} from "react"
import { UserLogin } from "../userlogin";
import { StoreRegister } from "../storeregister";
import { UserRegister } from "../userregister"
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

    const [openModalOne, setOpenModalOne] = useState(false);    
    const [openModalTwo, setOpenModalTwo] = useState(false);
    const [openModalThree, setOpenModalThree] = useState(false);

    const showModalOne = () => {
        if(!openModalTwo && !openModalThree ){
            setOpenModalOne(prev => !prev);
            setOpenList(false);
        }
        
    }
    const showModalTwo = () => {
        if(!openModalThree && !openModalOne){
            setOpenModalTwo(prev => !prev)
            setOpenList(false);
        }

    }

    const showModalThree = () => {
        if(!openModalTwo && !openModalOne){
            setOpenModalThree(prev => !prev)
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
                                    <AccountBox/><DropDownItem onClick={showModalTwo} >Para mim</DropDownItem>
                                </DropDownItemMenu>
                                <DropDownItemMenu>
                                    <AddBusiness/><DropDownItem onClick={showModalThree} >Para minha barbearia</DropDownItem>
                                </DropDownItemMenu>
                                
                            </DropDownList>
                            : null }
                        </DropdownMenu>
                        


                        <Links onClick={showModalOne}>fazer login</Links>
                    </LinksMenu>
                </Nav>
            </Navigation>
            
            <UserLogin closemodal={setOpenModalOne} openModalOne={openModalOne} setOpenModalOne={setOpenModalOne}/>
            <UserRegister openLoginModal={setOpenModalOne} closeRegisterModal={setOpenModalTwo} openModalTwo={openModalTwo} setopenModalTwo={setOpenModalTwo} />
            <StoreRegister closeStoreModal={setOpenModalThree} openLoginModal={setOpenModalOne} openModalThree={openModalThree} setOpenModalThree={setOpenModalThree} />
        </>
    )
}