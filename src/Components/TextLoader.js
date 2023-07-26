import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import TextGradient from "./TextGradient"

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
    @media screen and (min-width: 768px){
        margin: 15rem 0;
        .section__anchor {
            position: absolute;
            top: -7.2rem;
        }
    }
`;
function TextLoader() {
    const progressRef = useRef(null)

    const [first, setFirst] = useState(true);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    useEffect(() => {
        const progressRefEl = progressRef.current
        const interval = setInterval(() => {
            progressRefEl.classList.add("is-animating")
        }, 90);
        const intervalTwo = setInterval(() => {
            progressRefEl.classList.remove("is-animating")
            if (first) {
                setFirst(false);
                setSecond(true);
                setThird(false);
            } else if (second){
                setFirst(false);
                setSecond(false);
                setThird(true);
            } else if (third) {
                setFirst(true);
                setSecond(false);
                setThird(false);
            }
        }, 5000);
        // Cleanup the interval when the component unmounts
        return () => {
            clearInterval(interval);
            clearInterval(intervalTwo);
        };
    }, [first, second, third]);
    return(
        <Styledsection>
            <div id="rotating-title-component" className="section__anchor"></div>
            <div aria-live="polite" className="rotating-text-module__inner">
                <div className="rotating-text-module__progress-bar">
                    <div className="rotating-text-module__progress-bar-inner" ref={progressRef}></div>
                </div>
                {first && <TextGradient activeness={first} text={"What if we were capable of "} gtext={"creating"} ntext={"a higher quality of life?"}/>}
                {second && <TextGradient activeness={second} text={"What if we were capable of "} gtext={"repairing"} ntext={"our supply chain?"}/>}
                {third && <TextGradient activeness={third} text={"What if we were capable of "} gtext={"supporting"} ntext={"emerging economies?"}/>}
            </div>
        </Styledsection>
    )
}
export default TextLoader;