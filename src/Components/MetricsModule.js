import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
    padding: 8rem var(--content-padding);

    .metrics-module {
        color: #fff;
    }
    .metrics-module__inner {
        max-width: 144rem;
        width: 100%;
        margin: 0 auto;
    }
    .metrics-module__divider-line {
        position: absolute;
        top: 0;
        left: var(--content-padding);
        width: calc(100% - var(--content-padding)*2);
        height: 0.1rem;
        background-color: hsla(0,0%,100%,.2);
    }
    .metrics-module__kicker {
        line-height: 1.2;
        font-family: neue-haas-grot-text,sans-serif;
        font-size: 1.4rem;
        font-weight: 500;
        letter-spacing: 0;
        margin: 0 0 4rem;
    }
    .metrics-module__list {
        margin: 0;
        padding: 0;
        list-style: none;
        display: grid;
        grid-template-columns: 1fr;
        flex-direction: column;
        grid-gap: 4rem;
        gap: 4rem;
    }
    .metrics-module__item {
        margin: 0;
        text-align: left;
    }
    .metrics-module__item-title {
        background-image: linear-gradient(270deg,#ff38bb 5%,#ff8038 55%,#f5be66 65%,#f1fff7 93%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        line-height: 1;
        font-family: pp-neue-machina-plain,serif;
        font-size: 7rem;
        font-feature-settings: "ss12" on;
        letter-spacing: -.01em;
        display: inline-block;
    }
    .metrics-module__item-description {
        line-height: 1.5;
        font-family: neue-haas-grot-text,sans-serif;
        font-size: 1.4rem;
        letter-spacing: -.01em;
        margin: 0;
    }


    @media screen and (min-width: 768px){
        padding: 16rem var(--content-padding);
        .metrics-module__kicker {
            margin: 0 0 5.5rem;
        }
        .metrics-module__list {
            gap: 2rem;
            grid-template-columns: repeat(3,1fr);
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
        .metrics-module__item {
            text-align: center;
        }
        .metrics-module__item:nth-child(3) {
            text-align: right;
        }
        .metrics-module__item:first-child {
            text-align: left;
        }
        .metrics-module__item-title {
            font-size: 15rem;
        }
        .metrics-module__item-description {
            font-size: 1.6rem;
        }

    }
`;
function MetricsModule() {
    return(
        <StyledSection className="section section--with-background section--dark">
            <section className="metrics-module  section--metrics-module">
                <div id="metrics" className="section__anchor"></div>
                <div className="metrics-module__inner">
                    <div className="metrics-module__divider-line"></div>
                    <h1 className="metrics-module__kicker">Figure by numbers</h1>
                    <dl className="metrics-module__list">
                        <div className="metrics-module__item">
                            <dt className="metrics-module__item-title">40</dt>
                            <dd className="metrics-module__item-description">employees</dd>
                        </div>
                        <div className="metrics-module__item">
                            <dt className="metrics-module__item-title">100+</dt>
                            <dd className="metrics-module__item-description">years of combined AI & humanoid experience</dd>
                        </div>
                        <div className="metrics-module__item">
                            <dt className="metrics-module__item-title">&lt;2</dt>
                            <dd className="metrics-module__item-description">years until go to market</dd>
                        </div>
                    </dl>
                </div>
            </section>
        </StyledSection>
    )
}
export default MetricsModule;