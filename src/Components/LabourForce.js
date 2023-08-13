import React from "react";
import styled from "styled-components";
import LabourForceText from "./LabourForceText";
const StyledSection = styled.section`
     .stats-module {
        padding: 0 var(--content-padding);
        position: relative;
        overflow: hidden;
    }
    .stats-module__inner {
        max-width: 256rem;
        width: 100%;
        margin: 0 auto;
    }
    .stats-item:first-child {
        padding-top: 0;
    }
    .stats-item:not(:first-child) {
        border-top: 0.1rem solid hsla(0,0%,5%,.1);
    }
    .stats-item:last-child {
        padding-bottom: 0;
    }
`;
function LabourForce() {
    return(
        <StyledSection>
            <section className="section stats-module section--small-margin">
                <div id="stats-module" className="section__anchor"></div>
                <div className="stats-module__inner">
                    <div className="stats-item">
                        <LabourForceText h1={'There are 10 million un-filled jobs in the United States.'} span={'10M'}/>
                    </div>
                    <div className="stats-item">
                        <LabourForceText h1={'7 million of those job openings are for essential roles in warehouses, transportation, and retail.'} span={'7M'}/>
                    </div>
                    <div className="stats-item">
                        <LabourForceText h1={'There are only 6 million people available to fill these open positions — and attrition rates remain high.'} span={'6M'}/>
                    </div>
                    <div className="stats-item">
                        <LabourForceText h1={'Key warehouse suppliers predict they will run out of people to hire by 2024.'} span={'0'}/>
                    </div>
                </div>
            </section>
        </StyledSection>
    )
}
export default LabourForce;