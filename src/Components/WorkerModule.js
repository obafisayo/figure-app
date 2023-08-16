import React from "react";
import styled from "styled-components";
import F8 from "../assets/figure_B__2_8.png"
const StyledSection = styled.section`
    position: relative;
    .intro-worker-module {
        padding: 16rem var(--content-padding);
        color: #fff;
        position: relative;
        overflow: hidden;
    }
    .section--dark {
        background-color: #0c0c0c;
    }
    .section--with-background {
        margin: unset;
    }
    .intro-worker-module__inner {
        width: 100%;
        max-width: 32.5rem;
        margin: 0 auto;
    }
    .intro-worker-module__inner:after {
        content: "";
        display: block;
        background: linear-gradient(0deg,#0c0c0c 22.81%,hsla(0,0%,5%,0) 70.16%);
        position: absolute;
        z-index: 2;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 22rem;
    }
    .intro-worker-module__image {
        position: absolute;
        bottom: 0;
        left: 0;
        height: calc(100% - 6rem);
        width: 100%;
        z-index: 1;
        object-fit: cover;
    }
    .intro-worker-module__text {
        position: relative;
        z-index: 3;
    }
    .intro-worker-module__kicker {
        line-height: 1.2;
        font-family: neue-haas-grot-text,sans-serif;
        font-size: 1.5rem;
        font-weight: 500;
        letter-spacing: 0;
        text-align: center;
        margin-bottom: 2.6rem;
    }
    .intro-worker-module__title--desktop {
        display: none;
    }
    .intro-worker-module__title {
        line-height: 1;
        font-family: pp-neue-machina-plain,serif;
        font-size: 4.2rem;
        font-weight: 400;
        font-feature-settings: "ss12" on;
        letter-spacing: -.01em;
        text-transform: uppercase;
        width: 100%;
        margin: 0;
    }
    .intro-worker-module__title-line--left {
        text-align: left;
    }
    .intro-worker-module__title-line--right {
        text-align: right;
    }
    .intro-worker-module__title-line {
        display: block;
    }
    .intro-worker-module__title-line-gradient {
        background-image: linear-gradient(270deg,#ff38bb 5%,#ff8038 55%,#f5be66 65%,#f1fff7 93%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }
    .intro-worker-module__title--mobile {
        display: block;
    }
    .intro-worker-module__title-line-gradient--last {
        background: linear-gradient(270deg,#ff38bb 40%,#ff8038 75%,#f5be66);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }

    @media screen and (min-width: 768px){
        .intro-worker-module__inner {
            max-width: 119rem;
        }
        .intro-worker-module__image {
            object-fit: contain;
        }
        .intro-worker-module__kicker {
            margin-bottom: 4rem;
        }
        .intro-worker-module__title--desktop {
            display: block;
        }
        .intro-worker-module__title {
            font-size: 8.5rem;
            font-size: 6rem;
        }
        .intro-worker-module__title--mobile {
            display: none;
        }
    }

    @media screen and (min-width: 1024px){
        .intro-worker-module {
            padding: 20rem var(--content-padding);
        }
        .intro-worker-module__title {
            font-size: 8.5rem;
        }
    }
`;

function WorkerModule() {
    return (
        <StyledSection>
            <section className="intro-worker-module section--with-background section--dark">
                <div id="enter-a-worker-to-fill-the-gaps" className="section__anchor"></div>
                <div className="intro-worker-module__inner">
                    <img alt="" sizes="2016w" 
                        srcSet={F8}
                        src={F8} width="2016" height="1724" decoding="async" data-nimg="1" className="intro-worker-module__image" loading="lazy" style={{color: 'transparent'}}
                    />
                    <div className="intro-worker-module__text">
                        <div className="intro-worker-module__kicker">Enter: a worker to fill the gaps</div>
                        <h1 className="intro-worker-module__title intro-worker-module__title--desktop">
                            <span className="intro-worker-module__title-line intro-worker-module__title-line--left">Our goal is to</span>
                            <span className="intro-worker-module__title-line intro-worker-module__title-line--right">deploy autonomous</span>
                            <span className="intro-worker-module__title-line intro-worker-module__title-line--left">humanoid workers</span>
                            <span className="intro-worker-module__title-line intro-worker-module__title-line--right">To support us</span>
                            <span className="intro-worker-module__title-line intro-worker-module__title-line--left">on a <span className="intro-worker-module__title-line-gradient">global scale.</span></span>
                        </h1>
                        <h1 className="intro-worker-module__title intro-worker-module__title--mobile">
                            <span className="intro-worker-module__title-line intro-worker-module__title-line--left">Our goal is</span>
                            <span className="intro-worker-module__title-line intro-worker-module__title-line--right">to deploy</span>
                            <span className="intro-worker-module__title-line intro-worker-module__title-line--left">autonomous</span>
                            <span className="intro-worker-module__title-line intro-worker-module__title-line--left">humanoid</span>
                            <span className="intro-worker-module__title-line intro-worker-module__title-line--right">workers to</span>
                            <span className="intro-worker-module__title-line intro-worker-module__title-line--left">support us</span>
                            <span className="intro-worker-module__title-line intro-worker-module__title-line--left">on a <span className="intro-worker-module__title-line-gradient">global</span></span>
                            <span className="intro-worker-module__title-line intro-worker-module__title-line--right">
                                <span className="intro-worker-module__title-line-gradient intro-worker-module__title-line-gradient--last">scale.</span>
                            </span>
                        </h1>
                    </div>
                </div>
            </section>
        </StyledSection>
    )
}
export default WorkerModule;