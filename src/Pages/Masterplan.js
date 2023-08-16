import React from "react";
import styled from "styled-components";
import MasterplanIntro from "../Components/Intro";
import MasterplanContent from "../Components/MasterplanContent";

const StyledMain = styled.main`
    display: block;
`;

function Masterplan() {
    return (
        <StyledMain>
            <section className="section rich-text-page-content rich-text-page-content--has-side-nav">
                <div id="master-plan" className="section__anchor"></div>
                <div className="rich-text-page-content__inner">
                    <MasterplanIntro name={'Master Plan'} 
                        ntext={'Roadmap to a positive future '} 
                        gtext={'powered by AI'} 
                        descriptionlink
                    /> 
                    <MasterplanContent/>
                </div>
            </section>
        </StyledMain>
    )
} 
export default Masterplan;