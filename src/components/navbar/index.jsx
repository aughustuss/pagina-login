import React, {useEffect, useState} from "react"
import { useLocation } from "react-router-dom";
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
import { Scroll } from "parallax-controller";


export const Navbar = () => {
 
    const location = useLocation();
    const [navBg, setnavBg] = useState("transparent");
    const [navDisplay, setnavDisplay] = useState("flex")
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const Scrolled = () =>{
            if(window.scrollY > 60){
                setScroll(true);
            } else {
                setScroll(false);
            }
        }
        window.addEventListener('scroll', Scrolled);

        return () => {
            window.removeEventListener('scroll', Scrolled);
        }
    })

    

    const Scrolling = () => {
        if(window.scrollY >= 60){
            setnavBg("#111111")
        } else {
            setnavBg("transparent")
        }
    }

    window.addEventListener('scroll', Scrolling);

    useEffect(() => {
        if(window.location.pathname === '/appointment'){
            setnavBg("#111111");
        } 
        else {
            setnavBg("transparent");
        }
    }, [window.location.pathname]);


    useEffect(() => {
        if(window.location.pathname === '/emailconfirm'){
            setnavDisplay("none");
        } else {
            setnavDisplay("flex");
        }
    })

    const getScroll = () => {
        if(window.scrollY > 100){
            setnavBg("black");
        } else {
            setnavBg("transparent");
        }
    }

    window.addEventListener('scroll', getScroll);

    const [openList, setOpenList] = useState(false);

    const [openModalOne, setOpenModalOne] = useState(false);    
    const [openModalTwo, setOpenModalTwo] = useState(false);
    const [openModalThree, setOpenModalThree] = useState(false);
    const [openSideBar, setOpenSideBar] = useState(false);

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
                <Nav style={{display: navDisplay, backgroundColor: navBg, transition: "all .5s ease-in-out" }}>
                    <LogoDiv to="/">
                        <Logo alt="Brasil Barber's" src={barber}/>
                    </LogoDiv>
                    <LinksMenu>
                        <Links to="/appointment">Agendar horário</Links>
                        <Links to="/emailconfirm">Confirmação de email</Links>
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