import React from "react";
import styled from "styled-components";
const StyledArticle = styled.article`
    border-top: 0.1rem solid #cecece;
    counter-increment: inline-accordion-counter;
    .inline-accordion-item__heading-wrapper {
        margin: 0;
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
    .inline-accordion-item__heading-counter:before {
        line-height: 1.2;
        font-family: neue-haas-grot-text,sans-serif;
        font-size: 1.4rem;
        font-weight: 500;
        letter-spacing: 0;
        content: counter(inline-accordion-counter,decimal-leading-zero);
        display: block;
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
    :last-child {
        border-bottom: 0.1rem solid #cecece;
    }

    @media screen and (min-width: 768px){
        .inline-accordion-item__heading {
            line-height: 1.1;
            font-size: 2.2rem;
            min-height: 10.5rem;
        }

    }

`;

function MasterplanInline({text}) {
    return(
        <StyledArticle className="inline-accordion-item">
            <h1 className="inline-accordion-item__heading-wrapper">
                <div className="inline-accordion-item__heading">
                    <span className="inline-accordion-item__heading-counter"></span>
                    <span className="inline-accordion-item__heading-text-wrapper">
                        <span className="inline-accordion-item__heading-text">{text}</span>
                    </span>
                </div>
            </h1>
        </StyledArticle>
    )
}
export default MasterplanInline;