import React from "react";
import styled from "styled-components";
import Intro from "../Components/Intro";
import CultureContent from "../Components/CultureContent";

const StyledMain = styled.main`
    display: block;
`;

function Culture() {
    return (
        <StyledMain>
            <section className="section rich-text-page-content rich-text-page-content--has-side-nav">
                <div id="master-plan" className="section__anchor"></div>
                <div className="rich-text-page-content__inner">
                    <Intro name={'Culture at Figure'}
                        ntext={'FIGURE WAS FOUNDED WITH THE AMBITION TO CHANGE '}
                        gtext={'THE WORLD.'}
                    /> 
                    <CultureContent/>
                </div>
            </section>
        </StyledMain>
    )
}
export default Culture
