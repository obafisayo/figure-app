import React from "react";
import styled from "styled-components";
import Svg from './Svg'
import useContextState from "../useContextState";

const SliderButton = styled.button`
    transition: background-size .3s ease-in-out;
    line-height: 1.2;
    font-family:  ${({ff}) => ff || 'pp-neue-machina=plain, sans-serif'};
    font-size: ${({fsz}) => fsz || '1.4rem'};
    font-weight: ${({fw}) => fw || '500'};
    letter-spacing: ${({ls}) => ls || '0'};
    display: inline-flex;
    align-items: center;
    justify-content: ${({sb}) => sb? 'space-between' : 'center'};
    color: ${({light}) => light? '#ffffff' : '#0c0c0c'} ;
    text-decoration: none;
    border: none;
    background: ${({light}) => light? 'linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,0)),linear-gradient(90deg,#fff,#fff)' : 'linear-gradient(90deg,hsla(0,0%,5%,0),hsla(0,0%,5%,0)),linear-gradient(90deg,#0c0c0c,#0c0c0c)'};
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
        border-bottom: ${({height}) => height || '1px'} solid ${({bordercolor}) => bordercolor || 'black'};
    }
    :hover::after{
        width: ${({slide}) => slide ? '100%' : '0'};
        /* ${({hovered}) => hovered ? 'width: 100%;' : 'width: 0;'} */
    }
    @media screen and (max-width: 860px) {
        font-size: ${({mfsz, fsz}) => mfsz || fsz};
        :hover::after{
            ${({unslide}) => unslide ? 'width: 0;' : 'width: 100;'}
        }
        ::after{
            width: ${({unslide}) => unslide ? '0' : '0'};
            width: ${({news}) => news ? '100%' : '0'};
        }
    }
`;

function Slider({news, text, icon, plus, arrowUpRight, arrowLeft, arrowRight, slide, ls, fsz, mfsz, fw, height, hovered, unslide, light, bordercolor, ff, sb }) {
    const {hover, onLeave, onEnter} = useContextState()
    return(
        <SliderButton ff={ff} news={news} unslide={unslide} slide={slide} fsz={fsz} fw={fw} mfsz={mfsz} ls={ls} height={height} onMouseEnter={onEnter} onMouseLeave={onLeave} hovered={hovered} light={light} bordercolor={bordercolor} sb={sb}>
            {text}
            { icon && plus && <Svg plus hov={hover}/>}
            { icon && arrowUpRight && <Svg arrowUpRight hov={hover} hove={hovered}/>}
            { icon && arrowLeft && <Svg arrowLeft hov={hover}/>}
            { icon && arrowRight && <Svg arrowRight hov={hover}/>}
        </SliderButton>
    )
}
export default Slider