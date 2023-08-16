import React from "react";
import styled from "styled-components";
import MasterplanTimelineLi from "./MasterplanTimelineLi";
const StyledSection = styled.section`
    background-color: #0c0c0c;
    color: #fff;
    padding: 4rem var(--content-padding);
    width: calc(100% + var(--content-padding)*2);
    margin-left: calc(var(--content-padding)*-1);

    .inline-static-timeline__heading {
        line-height: 1.1;
        font-family: neue-haas-grot-text,sans-serif;
        font-size: 2.4rem;
        font-weight: 400;
        letter-spacing: -.01em;
        text-transform: none;
        margin-bottom: 2.4rem;
        margin-top: 0;
        max-width: 51rem;
    }
    .inline-static-timeline__sub-text {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2.4rem;
    }
    .inline-static-timeline__sub-text-left, .inline-static-timeline__sub-text-right, .inline-static-timeline__sub-text-right-mobile {
        line-height: 1.5;
        font-family: neue-haas-grot-text,sans-serif;
        font-size: 1.4rem;
        letter-spacing: -.01em;
    }
    .inline-static-timeline__sub-text-right {
        display: none;
    }
    .inline-static-timeline__items {
        padding: 0;
        margin: 0;
        list-style: none;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 3rem;
        gap: 3rem;
    }
    .inline-static-timeline__sub-text-right-mobile {
        display: block;
        margin-top: 3.4rem;
    }

    @media (min-width: 768px){
        margin-left: 0;
        width: 100%;
        padding: 8rem 4rem;
        .inline-static-timeline__heading {
            font-size: 3.6rem;
            margin-bottom: 4rem;
        }
        .inline-static-timeline__sub-text-right {
            display: block;
        }
        .inline-static-timeline__items {
            grid-template-columns: repeat(3,1fr);
            column-gap: 2rem;
            row-gap: 3rem;
        }
        .inline-static-timeline__sub-text-right-mobile {
            display: none;
        }
    }
    @media screen and (min-width: 1024px){
        .inline-static-timeline__sub-text-right {
            display: none;
        }
        .inline-static-timeline__items {
            grid-template-columns: 1fr;
            gap: 3rem;
        }
        .inline-static-timeline__sub-text-right-mobile {
            display: block;
        }

    }
    @media (min-width: 1280px){
        .inline-static-timeline__items {
            column-gap: 2rem;
            row-gap: 3rem;
        }

    }
`;

function MasterplanTimeline() {
    return(
        <StyledSection className="inline-static-timeline">
            <h1 className="inline-static-timeline__heading">We see three major business opportunities in the long term</h1>
            <div className="inline-static-timeline__sub-text">
                <p className="inline-static-timeline__sub-text-left">
                    More Structured <br/>
                    Less Variability
                </p>
                <p className="inline-static-timeline__sub-text-right">
                    Less Structured <br/>
                    More Variability
                </p>
            </div>
            <ul className="inline-static-timeline__items">
                <MasterplanTimelineLi heading={'Physical Labor'} highlight={'50% of global GDP is human labor ($42T)'} />
                <MasterplanTimelineLi heading={'Consumer Household'} highlight={'2.3 billion households worldwide'} highlight1={'700M aging population in need of at-home care'}/>
                <MasterplanTimelineLi heading={'Off-World'} highlight={'Space exploration to build new worlds'} />
            </ul>
            <p className="inline-static-timeline__sub-text-right-mobile">
                Less Structured <br/>
                More Variability
            </p>
        </StyledSection>
    )
}
export default MasterplanTimeline;