import React from "react";
import styled from "styled-components";
import Svg from './Svg'
import useContextState from "../useContextState";

const SliderDiv = styled.button`
    transition: background-size .3s ease-in-out;
    line-height: 1.2;
    font-family: inherit, sans-serif;
    font-size: ${({fsz}) => fsz || '1.4rem'};
    font-weight: ${({fw}) => fw || '500'};
    letter-spacing: ${({ls}) => ls || '0'};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #0c0c0c;
    text-decoration: none;
    border: none;
    background: linear-gradient(90deg,hsla(0,0%,5%,0),hsla(0,0%,5%,0)),linear-gradient(90deg,#0c0c0c,#0c0c0c);
    background-size: 100% 0.1rem,0 0.1rem;
    background-position: 100% 100%,0 100%;
    background-repeat: no-repeat;
    cursor: pointer;
    position: relative;
    padding-left: 0;

    ::after{
        content: '';
        transition: width .3s ease-in-out;
        position: absolute;
        bottom: 0px; left: 0;
        width: ${({hovered}) => hovered ? '100%' : '0'};
        border-bottom: ${({height}) => height || '1px'} solid black;
    }
    :hover::after{
        width: ${({slide}) => slide ? '100%' : '0'};
    }
    @media screen and (max-width: 860px) {
        font-size: ${({mfsz, fsz}) => mfsz || fsz};
        :hover::after{
            /* width: ${({unslide}) => unslide ? '0' : '0'}; */
            ${({unslide}) => unslide ? 'width: 0;' : 'width: 100;'}
        }
        ::after{
            width: ${({unslide}) => unslide ? '0' : '0'};
        }
    }
`;
function Slider({text, icon, plus, arrowUpRight, arrowLeft, arrowRight, slide, ls, fsz, mfsz, fw, height, hovered, unslide}) {
    const {hover, onLeave, onEnter} = useContextState()
    return(
        <SliderDiv unslide={unslide} slide={slide} fsz={fsz} fw={fw} mfsz={mfsz} ls={ls} height={height} onMouseEnter={onEnter} onMouseLeave={onLeave} hovered={hovered}>
            {text}
            { icon && plus && <Svg plus hov={hover}/>}
            { icon && arrowUpRight && <Svg arrowUpRight hov={hover}/>}
            { icon && arrowLeft && <Svg arrowLeft hov={hover}/>}
            { icon && arrowRight && <Svg arrowRight hov={hover}/>}
        </SliderDiv>
    )
}
export default Slider