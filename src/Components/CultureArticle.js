import React, { useState } from "react";
import styled from "styled-components";
import Svg from "./Svg";
const StyledArticle = styled.article`
    .inline-accordion-item {
        border-top: 0.1rem solid #cecece;
        counter-increment: inline-accordion-counter;
    }
    .inline-accordion-item__heading-wrapper {
        margin: 0;
    }
    .inline-accordion-item:last-child {
        border-bottom: 0.1rem solid #cecece;
    }
    .inline-accordion-item--has-description .inline-accordion-item__heading {
        cursor: pointer;
        grid-template-columns: 2rem 1fr 4.4rem;
    }
    .inline-accordion-item__heading-counter:before {
        line-height: 1.2;
        font-family: neue-haas-grot-text,sans-serif;
        font-size: 1.4rem;
        font-weight: 500;
        letter-spacing: 0;
        content: counter(inline-accordion-counter,decimal-leading-zero);
        display: block;
    }
    .inline-accordion-item__heading {
        line-height: 1.5;
        font-family: neue-haas-grot-text,sans-serif;
        font-size: 1.8rem;
        font-weight: 400;
        letter-spacing: -.01em;
        position: relative;
        display: grid;
        grid-template-columns: 2rem 1fr;
        align-items: center;
        padding: 1rem 0;
        grid-gap: 2rem;
        gap: 2rem;
        width: 100%;
        color: #0c0c0c;
        text-align: left;
        background-color: transparent;
        border: none;
        min-height: 8.5rem;
    }
    .inline-accordion-item__heading-text-wrapper {
        position: relative;
    }
    .inline-accordion-item__heading-text {
        transition: background-size .3s ease-in-out;
        background: linear-gradient(90deg,hsla(0,0%,5%,0),hsla(0,0%,5%,0)),linear-gradient(90deg,#0c0c0c,#0c0c0c);
        background-size: 100% 0.1rem,0 0.1rem;
        background-position: 100% 100%,0 100%;
        background-repeat: no-repeat;
    }
    :hover .inline-accordion-item__heading-text {
        background-size: 100% 0.1rem,0 0.1rem;
    }
    .inline-accordion-item__heading-icon-container {
        width: fit-content;
        position: inherit;
        right: 1.5rem;
    }
    .inline-accordion-item__description-wrapper {
        transition: height .3s ease-in-out;
        height: 0;
        overflow: hidden;
    }
    .inline-accordion-item__description {
        padding-bottom: 4rem;
    }
    .inline-accordion-item__paragraph {
        margin: 0;
    }

    @media (min-width: 768px){
        .inline-accordion-item__heading {
            line-height: 1.1;
            font-size: 2.2rem;
            min-height: 10.5rem;
        }
        :hover .inline-accordion-item__heading-text {
            background-size: 0 0.1rem,100% 0.1rem;
        }
    }
`;

function CultureArticle({header, subtext}) {
    const [state, setState] = useState(false)
    const [hover, setHover] = useState(false)
    function handleClick(){
        setState(prevState => !prevState)
    }
    function handleMouseEnter(){
        setHover(true)
    }
    function handleMouseLeave(){
        setHover(false)
    }
    return(
        <StyledArticle>
        <article className="inline-accordion-item inline-accordion-item--has-description ">
            <h1 className="inline-accordion-item__heading-wrapper" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <button className="inline-accordion-item__heading" aria-expanded="true" aria-controls="inline-accordion-move-fast-be-technically-fearless">
                    <span className="inline-accordion-item__heading-counter"></span>
                    <span className="inline-accordion-item__heading-text-wrapper">
                        <span className="inline-accordion-item__heading-text">{header}</span>
                    </span>
                    <span className="inline-accordion-item__heading-icon-container">
                        {state? <Svg width={'140%'} hov={hover} minus nohover/>
                        :
                        <Svg width={'140%'} hov={hover} plus nohover/>}
                    </span>
                </button>
            </h1>
            <div id="inline-accordion-move-fast-be-technically-fearless" className="inline-accordion-item__description-wrapper" style={{height: `${state? "112px" : "0px"}`}}>
                <div className="inline-accordion-item__description">
                    <p className="inline-accordion-item__paragraph">{subtext}</p>
                </div>
            </div>
        </article>
        </StyledArticle>
    )
}
export default CultureArticle;
