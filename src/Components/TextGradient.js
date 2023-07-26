import React from "react";
import styled from "styled-components";
const StyledDiv = styled.div`
    width: 100%;
    display: grid;
    grid-template: "a";
        
    .rotating-text-module__heading{
        line-height: 1;
        font-family: inherit, serif;
        font-size: 4.2rem;
        font-weight: 600;
        font-feature-settings: "ss12" on;
        letter-spacing: -.01em;
        text-transform: uppercase;
        margin: 0;
        max-width: 111rem;
        grid-area: a;
    }
    .rotating-text-module__item {
        transition: opacity .3s ease-in-out;
        opacity: 1;
    }
    .rotating-text-item {
        display: inline;
    }
    .gradient-rich-text__gradient-text {
        background: linear-gradient(270deg,#ff38bb 4.25%,#ff8038 51.61%,#f5be66 80.43%,#f4dca8 93.03%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-weight: 600;
    }
    @media screen and (min-width: 768px){
        .rotating-text-module__heading{
            font-size: 85px;
        }
    }
`; 

function TextGradient({text, ntext, gtext, activeness}) {
   
    return(
        <StyledDiv>
            {activeness && <h1 className="rotating-text-module__heading" >
                <span className="rotating-text-module__text-prefix">{text}</span>
                <span className="rotating-text-item rotating-text-module__item">
                    <span className="gradient-rich-text__heading-text">
                        <strong className="gradient-rich-text__gradient-text">{gtext}</strong> {ntext}
                    </span>
                </span>
            </h1>}
        </StyledDiv>
    )
}
export default TextGradient;