import React from "react";
import styled from "styled-components";
const StyledLi = styled.li`
    display: flex;
    flex-direction: column;
    .inline-static-timeline__inner-wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .inline-static-timeline__item-inner {
        background: linear-gradient(180deg,#ff38bb 5%,#ff8038 55%,#f5be66 65%,#f1fff7 93%);
        position: relative;
        border-radius: 0.5rem;
        padding: 2.6rem 3.2rem;
        height: 100%;
    }
    .inline-static-timeline__item-black-bg {
        z-index: 1;
        position: absolute;
        border-radius: 0.5rem;
        top: 0.1rem;
        left: 0.1rem;
        width: calc(100% - 0.2rem);
        height: calc(100% - 0.2rem);
        background-color: #0c0c0c;
    }
    .inline-static-timeline__item-text-content {
        position: relative;
        z-index: 2;
    }
    .inline-static-timeline__item-heading {
        line-height: 1.5;
        font-family: neue-haas-grot-text,sans-serif;
        font-size: 1.8rem;
        font-weight: 400;
        letter-spacing: -.01em;
        margin: 0;
    }
    .inline-static-timeline__item-highlights {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    .inline-static-timeline__item-highlight {
        line-height: 1.5;
        font-family: neue-haas-grot-text,sans-serif;
        font-size: 1.4rem;
        letter-spacing: -.01em;
        margin-top: 2.4rem;
    }

    @media screen and (min-width: 768px){
        .inline-static-timeline__item-heading {
            line-height: 1.1;
            font-size: 2.2rem;
        }

    }

`;

function MasterplanTimelineLi({heading, highlight, highlight1}) {
    return(
        <StyledLi className="inline-static-timeline__item">
            <article className="inline-static-timeline__inner-wrapper">
                <div className="inline-static-timeline__item-inner">
                    <div className="inline-static-timeline__item-black-bg"></div>
                    <div className="inline-static-timeline__item-text-content">
                        <h1 className="inline-static-timeline__item-heading">{heading}</h1>
                        <ul className="inline-static-timeline__item-highlights">
                            <li className="inline-static-timeline__item-highlight">{highlight}</li>
                            <li className="inline-static-timeline__item-highlight">{highlight1}</li>
                        </ul>
                    </div>
                </div>
            </article>
        </StyledLi>
    )
}
export default MasterplanTimelineLi;