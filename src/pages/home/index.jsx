import React from "react";
import { Content } from "../../components/container/style";
import {
    HomeDivOne,
    HomeDivTwo,
    HomeDivThree
} from './style'
import { Parallax } from "react-scroll-parallax";

export const Home = () => {
    return (
        <>
            <Parallax speed={-10}>
                <HomeDivOne>
                    Home
                </HomeDivOne>
            </Parallax>
            <Parallax speed={0}>
                <HomeDivTwo>
                    Outro Conteudo
                </HomeDivTwo>
            </Parallax>
            <Parallax>
                <HomeDivThree>
                    Mais um aqui
                </HomeDivThree>
            </Parallax>
        </>

    )
}