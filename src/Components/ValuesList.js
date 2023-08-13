import React from "react";
import styled from "styled-components";

const StyledLi = styled.li`
    display: grid;
    grid-template-columns: 1fr;
    padding: 3.2rem 0;
    border-image-slice: 1;
    border-width: 0.1rem;
    border-top: 0.1rem solid;
    border-image-source: linear-gradient(-90deg,rgba(255,56,187,.5) 5%,rgba(255,128,56,.5) 55%,hsla(37,88%,68%,.5) 65%,rgba(241,255,247,.5) 93%);
    grid-gap: 2.4rem;
    gap: 2.4rem;
    counter-increment: values-module-counter;
    :first-child {
        border-top: none;
    }
    :last-child {
        padding-bottom: 0;
    }
    .values-module-item__index-text:before {
        line-height: 1.11;
        font-size: 1.8rem;
        font-weight: 400;
        letter-spacing: -.01em;
        text-transform: uppercase;
        content: counter(values-module-counter,decimal-leading-zero);
        display: block;
        font-family: NeueMachina-Regular,serif;
        font-feature-settings: "ss12" on;
        white-space: nowrap;
    }
    .values-module-item__heading-text {
        line-height: 1.11;
        font-family: NeueMachina-Regular,serif;
        font-feature-settings: "ss12" on;
        font-size: 3.4rem;
        font-weight: 400;
        letter-spacing: 0;
        text-transform: uppercase;
        margin: 0;
        max-width: 60rem;
    }
    .values-module-item__description-text {
        font-family: FreeSans, serif;
        width: 100%;
        margin: 0;
    }

@media screen and (min-width: 1024px){
    gap: 2rem;
    grid-template-columns: .04fr .5fr .46fr;
    .values-module-item__description {
        justify-self: flex-end;
    }
    .values-module-item__description-text {
        max-width: 45.5rem;
    }
}

@media screen and (min-width: 768px){
    padding: 4.2rem 0;

    :first-child {
        border-top: 0.1rem solid;
    }
    .values-module-item__index-text:before {
        font-size: 2.4rem;
        position: relative;
        top: 0.9rem;
    }
    .values-module-item__heading-text {
        font-size: 5.2rem;
    }

}
`;
function ValueList({paragraph, header}) {
    return(
        <StyledLi>
            <div className="values-module-item__index">
                <span className="values-module-item__index-text"></span>
            </div>
            <div className="values-module-item__heading">
                <h1 className="values-module-item__heading-text">{header}</h1>
            </div>
            <div className="values-module-item__description">
                <p className="values-module-item__description-text">{paragraph}</p>
            </div>
        </StyledLi>
    )
}
export default ValueList;