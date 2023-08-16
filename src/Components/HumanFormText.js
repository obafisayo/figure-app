import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 1rem;
    padding: 1rem 0 0;
    border-top: 0.1rem solid hsla(0,0%,5%,.1);

    .human-form-item__title {
        line-height: 1.2;
        font-family: neue-haas-grot-text,sans-serif;
        font-size: 1.4rem;
        font-weight: 500;
        letter-spacing: 0;
    }
    .human-form-item__description {
        line-height: 1;
        font-family: pp-neue-machina-plain,serif;
        font-size: 4.2rem;
        font-weight: 400;
        font-feature-settings: "ss12" on;
        letter-spacing: -.01em;
        text-transform: uppercase;
        background: linear-gradient(-90deg,#ff38bb 4.25%,#ff8038 51.61%,#f5be66 80.43%,#f4dca8 93.03%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        white-space: nowrap;
    }
   
    @media screen and (min-width: 768px) {
        gap: 2rem;
        padding: 2rem 0 0;

        :first-child {
            border-top: none;
        }
        .human-form-item__description {
            font-size: 8.5rem;
            font-size: 10rem;
        }
    }
    @media screen and (min-width: 1024px){
        .human-form-item__description {
            font-size: 14.5rem;
            line-height: 14.5rem;
        }
    }
`;

function HumanFormText({value, title}) {
    return (
        <StyledDiv>
            <dt className="human-form-item__title">{title}</dt>
            <dd className="human-form-item__description">
                <span className="stats-module__number-shuffler">{value}</span>
            </dd>
        </StyledDiv>
    )
}
export default HumanFormText;