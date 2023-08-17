import React, { useState } from "react";
import styled from "styled-components";
import Slider from "./Slider";
import Svg from "./Svg";

const StyledPrimaryLinks = styled.div`
    line-height: 1.11;
    font-family: pp-neue-machina-plain, serif;
    font-feature-settings: "ss12" on;
    font-size: 3.4rem;
    font-weight: 400;
    letter-spacing: 0;
    text-transform: uppercase;
    counter-increment: number__primary-links-counter;
    text-decoration: none;
    color: #0c0c0c;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1.5rem 1.7rem 1.5rem 0rem;
    cursor: pointer;
    text-decoration: none;

    :first-child {
        padding-top: ${({paddingTop}) => paddingTop? '2.5rem' : '0'};
        border-top: ${({borderTop}) => borderTop? '0.1rem solid hsla(0,0%,5%,.2)' : "none"};
    }
    :not(:first-child) {
        border-top: 0.1rem solid hsla(0,0%,5%,.2);
    }
    :last-child {
        border-bottom: ${({borderBottom}) => borderBottom? '0.1rem solid hsla(0,0%,5%,.2)' : "none"};
    }
    :before {
    line-height: 1.11;
    font-family: pp-neue-machina-plain, serif;
    font-feature-settings: "ss12" on;
    font-size: 1.8rem;
    font-weight: 400;
    letter-spacing: -.01em;
    text-transform: uppercase;
    content: counter(number__primary-links-counter,decimal-leading-zero);
    display: block;
    margin-right: 3rem;
    color: #0c0c0c;
    }
    @media screen and (min-width: 768px){
        padding: 1.5rem 1.7rem 2.5rem 0rem;
        font-size: 5.2rem;
        color: #0c0c0c;
        :before {
            font-size: 2.4rem;
            position: relative;
            top: -0.2rem;
            margin-right: 3rem;
            color: #0c0c0c;
        }
    }
`;
const S = styled.div`
    display: flex;
    justify-content: space-between;
    width: 95dvw;
    color: #0c0c0c;
`;

const StyledSpan = styled.span`
    transition: background-size .3s ease-in-out;
    display: inline-block;
    background: linear-gradient(90deg,hsla(0,0%,5%,0),hsla(0,0%,5%,0)),linear-gradient(90deg,#0c0c0c,#0c0c0c);
    background-size: 100% 0.3rem,0 0.3rem;
    background-position: 100% 100%,0 100%;
    background-repeat: no-repeat;
    line-height: .8;
    color: #0c0c0c;
`;

function PrimaryLinks({title, text, icon, paddingTop, borderBottom, borderTop, slide, fsz, mfsz, fw, height, ls, link, unslide, hoverIt}) {
    const [hover, setHover] = useState(false)
    function onEnter() {
        setHover(true)
    }
    function onLeave() {
        setHover(false)
    }
    
    const thereisSliderSlide =  <Slider pri ls={ls} mfsz={mfsz} hovered={hoverIt || hover} fsz={fsz} fw={fw} height={height} unslide={unslide} slide text={text} ff={'pp-neue-machina-plain'}/> 
    const thereNoHover =  <Slider mfsz={mfsz} fsz={'3.4rem'} fw={'400'} height={'2px'} text={text} /> 
    const thereisIcon = <S>{thereisSliderSlide} <Svg hov={hover} plus /> </S>

    function PrimaryLinks() {
        if (icon) {
            return thereisIcon
        } else if (!icon && slide) {
            return thereisSliderSlide
        }else {
            return thereNoHover
        }
    }
    return(
        <>
            {link
                ? 
            <StyledSpan >
                    {PrimaryLinks()}
            </StyledSpan>
                :
            <StyledPrimaryLinks className="footer__primary-link" onMouseEnter={onEnter} onMouseLeave={onLeave} title={title} paddingTop={paddingTop} borderBottom={borderBottom} borderTop={borderTop}>
                <StyledSpan>
                    {PrimaryLinks()}
                </StyledSpan>
            </StyledPrimaryLinks>
            }
        </>
    )
}
export default PrimaryLinks;