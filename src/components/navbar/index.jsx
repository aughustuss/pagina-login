import React, {useState, useEffect, useRef} from "react"
import { UserLogin } from "../userlogin";
import { StoreRegister } from "../storeregister";
import { UserRegister } from "../userregister"
import { AccountBox, AddBusiness, CloseRounded, MenuRounded } from "@mui/icons-material";
import barber from '../../assets/brasilbarbers.png'
import { 
    Navigation,
    Nav,
    Logo,
    LogoDiv,
    Links,
    LinksMenu,
    DropdownMenu,
    DropDownList,
    DropDownItemMenu,
    DropDownItem,
    CollapseNavbar,
    MenuIconDiv
} from "./style"
import { SideBar } from "../sidebar";


export const Navbar = () => {
 
    const [openList, setOpenList] = useState(false);

    const [openModalOne, setOpenModalOne] = useState(false);    
    const [openModalTwo, setOpenModalTwo] = useState(false);
    const [openModalThree, setOpenModalThree] = useState(false);
    const [openSideBar, setOpenSideBar] = useState(false);
    const [openSideBarList, setOpenSideBarList] = useState(false);

    const showModalOne = () => {
        if(!openModalTwo && !openModalThree ){
            setOpenModalOne(prev => !prev);
            setOpenList(false);
        }
        
    }
    const showModalTwo = () => {
        if(!openModalThree && !openModalOne){
            setOpenModalTwo(prev => !prev);
            setOpenList(false);
        }

    }

    const showModalThree = () => {
        if(!openModalTwo && !openModalOne){
            setOpenModalThree(prev => !prev);
            setOpenList(false);
        }
    }

    const sideBarOpen = () => {
        setOpenSideBar(prev => !prev);
    }

    

    const HandleClick = () => {
        setOpenList(!openList);
    }

    return (
        <>
            <Navigation>
                <Nav>
                    <LogoDiv>
                        <Logo src={barber}/>
                    </LogoDiv>
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

                    <SideBar 
                    openLoginModal={setOpenModalOne} 
                    closeSideBar={setOpenSideBar} 
                    openSideBar={openSideBar} 
                    setOpenSideBar={setOpenSideBar} 
                    openRegisterModal={setOpenModalTwo}
                    openStoreModal={setOpenModalThree}
                    />

                    <CollapseNavbar onClick={sideBarOpen}>
                        <MenuIconDiv>
                            {!openSideBar ? 
                                <MenuRounded style={{height: "36px", width: "36px", color: "white"}} />
                            : 
                                <CloseRounded style={{height: "36px", width: "36px", color: "white"}} />
                            }
                        </MenuIconDiv>
                        
                    </CollapseNavbar>
                </Nav>
            </Navigation>
            
            <UserLogin 
            closemodal={setOpenModalOne} 
            openModalOne={openModalOne} 
            setOpenModalOne={setOpenModalOne}/>

            <UserRegister 
            openLoginModal={setOpenModalOne} 
            closeRegisterModal={setOpenModalTwo} 
            openModalTwo={openModalTwo} 
            setopenModalTwo={setOpenModalTwo} />

            <StoreRegister 
            closeStoreModal={setOpenModalThree} 
            openLoginModal={setOpenModalOne} 
            openModalThree={openModalThree} 
            setOpenModalThree={setOpenModalThree} />
        </>
    )
}