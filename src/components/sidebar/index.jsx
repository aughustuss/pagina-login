import { AccountBox, AddBusiness } from "@mui/icons-material";
import React, { useState } from "react";
import { Links } from "../navbar/style";
import {
    SideBarDiv,
    SideBarMenu,
    SiderBarLink,
    SideBarListMenu,
    SideBarList, 
    SideBarListWrap,
    SideBarListItem
} from './style'

export const SideBar = ({openSideBar, openLoginModal, closeSideBar, openRegisterModal, openStoreModal}) => {

    const[openSideBarList, setOpenSideBarList] = useState(false);

    return(
        <>
        { openSideBar ? 
            <SideBarDiv >
                <SideBarMenu>

                    <SiderBarLink>Agendar Horário</SiderBarLink>
                    <SiderBarLink>Ver Barbearias Próximas</SiderBarLink>

                    <SiderBarLink onClick={() => {
                        openLoginModal(true);
                        closeSideBar(false);
                    }}>Fazer Login</SiderBarLink>

                    
                    
                    <SideBarListMenu>
                        <SiderBarLink onClick={() => {
                            setOpenSideBarList(!openSideBarList);
                        }} >Criar Conta</SiderBarLink>
                        {openSideBarList ? 
                        <SideBarList>
                            <SideBarListWrap>
                                <AccountBox/><SideBarListItem onClick={() => {
                                    openRegisterModal(true);
                                    closeSideBar(false);
                                }} >Para Mim</SideBarListItem>
                            </SideBarListWrap>
                            <SideBarListWrap>
                                <AddBusiness/><SideBarListItem onClick={() => {
                                    openStoreModal(true);
                                    closeSideBar(false);
                                }}>Para Minha Barbearia</SideBarListItem>
                            </SideBarListWrap>
                        </SideBarList>
                        : null }
                    </SideBarListMenu>

                </SideBarMenu>
            </SideBarDiv>
        : null }
        </>
    )
}