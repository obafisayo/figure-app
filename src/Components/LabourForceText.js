import React from "react";
import styled from "styled-components";
const StyledSection = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    padding: 3.8rem 0;
    
    .stats-item__heading {
        line-height: 1.1;
        font-family: FreeSans, sans-serif;
        font-size: 2.4rem;
        font-weight: 400;
        letter-spacing: -.01em;
        margin: 0 0 2.4rem;
    }
    .stats-item__stat {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .stats-item__stat-text {
        line-height: 1;
        font-family: NeueMachina-Regular, sans-serif;
        font-size: 5.2rem;
        font-feature-settings: "ss12" on;
        letter-spacing: -.01em;
        font-size: 15.8rem;
        text-align: right;
        white-space: nowrap;
        background: linear-gradient(270deg,#ff38bb 4.25%,#ff8038 51.61%,#f5be66 80.43%,#f4dca8 93.03%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }

    @media screen and (min-width: 768px){
        :first-child {
            padding-top: 0;
        }
        :not(:first-child) {
            border-top: 0.1rem solid hsla(0,0%,5%,.1);
        }
        :last-child {
            padding-bottom: 0;
        }
        padding: 6rem 0;
        grid-template-columns: minmax(0,.35fr) minmax(0,.65fr);

        .stats-item__heading {
            font-size: 3.6rem;
            margin: 0;
        }
        .stats-item__stat {
            justify-content: flex-end;
        }
        .stats-item__stat-text {
            font-size: 25rem;
            margin-right: -1.5rem;
        }

    }

    @media screen and (min-width: 1024px){
        .stats-item__stat-text {
            font-size: 14.5rem;
        }
        .stats-item__stat-text {
            font-size: 35rem;
            margin-right: -2rem;
        }
    }

    @media screen and (min-width: 1280px){
        .stats-item__stat-text {
            font-size: 44rem;
            margin-right: -2.8rem;
        }
    }
`;

function LabourForceText({h1, span}) {
    return (
        <StyledSection>
            <h1 className="stats-item__heading">{h1}</h1>
            <div className="stats-item__stat">
                <span aria-label="The number of job openings for essential roles in warehouses, transportation, and retail in the United States." className="stats-item__stat-text">{span}</span>
            </div>
        </StyledSection>
    )
}
export default LabourForceText;