import React from "react";
import styled from "styled-components";
import TextGradient from "./TextGradient";

const Styledsection = styled.section`
    position: relative;
    margin: 8rem 0;
    padding: 0 var(--content-padding);

    .section__anchor {
        position: absolute;
        top: -7.2rem;
    }
    .rotating-text-module__inner {
        display: flex;
        flex-direction: column;
        gap: 4rem;
        max-width: 256rem;
        margin: 0 auto;
        width: 100%;
    }
    .rotating-text-module__progress-bar {
        height: 0.1rem;
        width: 21.5rem;
        position: relative;
        background: linear-gradient(270deg,#ff38bb 4.25%,#ff8038 51.61%,#f5be66 80.43%,#f4dca8 93.03%);
    }
    .rotating-text-module__progress-bar-inner {
        background-color: #cecece;
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        transform-origin: center right;
        transform: scaleX(1);
    }
    .rotating-text-module__progress-bar-inner.is-animating {
        transition: transform 5s;
        transition-timing-function: linear;
        transform: scaleX(0);
    }

`;
function TextLoader() {
    return(
        <Styledsection className="section rotating-text-module section--large-margin">
            <div id="rotating-title-component" className="section__anchor"></div>
            <div aria-live="polite" className="rotating-text-module__inner">
                <div className="rotating-text-module__progress-bar">
                    <div className="rotating-text-module__progress-bar-inner is-animating"></div>
                </div>
                <TextGradient isActive={true} text={"What if we were capable of "} gtext={"creating"} ntext={"a higher quality of life?"}/>
                <TextGradient text={"What if we were capable of "} gtext={"repairing"} ntext={"our supply chain?"}/>
                <TextGradient text={"What if we were capable of "} gtext={"supporting"} ntext={"emerging economies?"}/>
            </div>
        </Styledsection>
    )
}
export default TextLoader;