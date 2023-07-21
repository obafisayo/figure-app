import React from "react";
import styled from "styled-components";
import classNames from "classnames";
const StyledDiv = styled.div`
    visibility: visible;
    opacity: 1;

    .rotatingcontainer{
        width: 100%;
        display: grid;
        grid-template: "a";
    }
    .rotating-text-module__heading{
        line-height: 1;
        font-family: inherit, serif;
        font-size: 4.2rem;
        font-weight: 400;
        font-feature-settings: "ss12" on;
        letter-spacing: -.01em;
        text-transform: uppercase;
        margin: 0;
        max-width: 111rem;
        grid-area: a;
    }
    .rotating-text-module__heading:first-child .rotating-text-module__text-prefix {
        opacity: 1;
    }
    .rotating-text-module__text-prefix {
        opacity: 0;
    }
    .rotating-text-module__heading.isActive .rotating-text-module__item {
        opacity: 1;
    }
    .rotating-text-module__item {
        transition: opacity .3s ease-in-out;
        opacity: 0;
    }
    .rotating-text-item {
        display: inline;
    }
    .gradient-rich-text__gradient-text {
        background: linear-gradient(270deg,#ff38bb 4.25%,#ff8038 51.61%,#f5be66 80.43%,#f4dca8 93.03%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-weight: 400;
    }
`; 

function TextGradient({text, ntext, gtext, isActive}) {
    const myClassnames = classNames({
        isActive: isActive,
        rotatingContainer: true,
    });
    console.log(myClassnames)
    return(
        <StyledDiv>
            <div className="rotatingcontainer isActive">
                <h1 className="rotating-text-module__heading" >
                    <span className="rotating-text-module__text-prefix">{text} </span>
                    <span className="rotating-text-item rotating-text-module__item">
                        <span className="gradient-rich-text__heading-text">
                            <strong className="gradient-rich-text__gradient-text">{gtext} tefd</strong>
                            {ntext}c d
                        </span>
                    </span>
                </h1>
            </div>
        </StyledDiv>
    )
}
export default TextGradient;