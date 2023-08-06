import React from "react";
import styled from "styled-components";
import HumanoidFull from "../assets/Figure_humanoid__2_.webp"
import HumanoidMobile from "../assets/Humanoid_Mobile.webp"

const StyledSection = styled.section`
    .human-form-module {
        position: relative;
        padding: 8rem var(--content-padding) 2.5rem;
    }
    .section--tan {
        background-color: #f6f6ef;
    }
    .section__anchor {
        position: absolute;
        top: -7.2rem;
    }
    .human-form-module__inner {
        display: grid;
        grid-template-columns: 1fr;
        position: relative;
        z-index: 2;
        grid-gap: 9rem;
        gap: 9rem;
        margin: 0 auto;
        max-width: 256rem;
    }
    .human-form-module__image {
        position: absolute;
        bottom: 0;
        left: 0;
        max-width: 37.5rem;
        width: 100%;
        height: 60rem;
        object-fit: contain;
        object-position: left bottom;
        z-index: 1;
        aspect-ratio: 800/1330;
    }
    .human-form-module__heading-description {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
        width: 100%;
    }
    .human-form-module__heading {
        line-height: 1;
        font-family: NeueMachina-Regular,serif;
        font-size: 4.2rem;
        font-weight: 400;
        font-feature-settings: "ss12" on;
        letter-spacing: -.01em;
        text-transform: uppercase;
        margin: 0;
    }
    .human-form-module__description {
        line-height: 1.5;
        font-family: Freesans,sans-serif;
        font-size: 1.4rem;
        letter-spacing: -.01em;
        margin: 0;
    }
    .human-form-module__items {
        margin: 0;
        padding: 0;
    }
    .human-form-item {
        text-align: right;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        gap: 1rem;
        padding: 1rem 0 0;
        border-top: 0.1rem solid hsla(0,0%,5%,.1);
    }
    .human-form-item__title {
        line-height: 1.2;
        font-family: FreesansBold,sans-serif;
        font-size: 1.4rem;
        font-weight: 500;
        letter-spacing: 0;
    }
    .human-form-item__description {
        line-height: 1;
        font-family: sans-serif,serif;
        font-size: 4.2rem;
        font-weight: 400;
        font-feature-settings: "ss12" on;
        letter-spacing: -.01em;
        text-transform: uppercase;
        background: linear-gradient(-90deg,#ff38bb 4.25%,#ff8038 51.61%,#f5be66 80.43%,#f4dca8 93.03%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        white-space: nowrap;
    }

    @media screen and (min-width: 1024px){
        .human-form-module__inner {
            grid-template-columns: minmax(0,.5fr) minmax(0,.5fr);
        }
        .human-form-item__description {
            font-size: 14.5rem;
        }
    }

    @media screen and (min-width: 768px) {
        .human-form-module {
            padding: 16rem var(--content-padding) 2.5rem;
        }
        .section__anchor {
            top: -12.8rem;
        }
        .human-form-module__inner {
            gap: 0;
        }
        .human-form-module__image {
            max-width: 100%;
            width: 100%;
            height: 90%;
            object-position: bottom center;
            aspect-ratio: 1440/1169;
        }
        .human-form-module__heading-description {
            gap: 3.2rem;
        }
        .human-form-module__heading {
            font-size: 8.5rem;
        }
        .human-form-module__description {
            font-size: 1.6rem;
        }
        .human-form-module__items {
            padding: 9rem 0 0;
        }
        .human-form-item:first-child {
            border-top: none;
        }
        .human-form-item {
            gap: 2rem;
            padding: 2rem 0 0;
        }
        .human-form-item__description {
            font-size: 8.5rem;
            font-size: 10rem;
        }
    }
`;
function HumanForm () {
    return (
        <StyledSection>
            <section className="section human-form-module section--with-background section--tan section--human-form-module">
                <div id="introducing-figure-01" className="section__anchor"></div>
                <div className="human-form-module__inner">
                    <div className="human-form-module__heading-description">
                        <h1 className="human-form-module__heading">Introducing Figure 01</h1>
                        <p className="human-form-module__description">The world’s first commercially-viable autonomous humanoid robot</p>
                    </div>
                    <dl className="human-form-module__items">
                        <div className="human-form-item">
                            <dt className="human-form-item__title">Height</dt>
                            <dd className="human-form-item__description">
                                <span className="stats-module__number-shuffler">5'6"</span>
                            </dd>
                        </div>
                        <div className="human-form-item">
                            <dt className="human-form-item__title">Payload</dt>
                            <dd className="human-form-item__description">
                                <span className="stats-module__number-shuffler">20kg</span>
                            </dd>
                        </div>
                        <div className="human-form-item">
                            <dt className="human-form-item__title">Weight</dt>
                            <dd className="human-form-item__description">
                                <span className="stats-module__number-shuffler">60kg</span>
                            </dd>
                        </div>
                        <div className="human-form-item">
                            <dt className="human-form-item__title">Runtime</dt>
                            <dd className="human-form-item__description">
                                <span className="stats-module__number-shuffler">5hr</span>
                            </dd>
                        </div>
                        <div className="human-form-item">
                            <dt className="human-form-item__title">Speed</dt>
                            <dd className="human-form-item__description">
                                <span className="stats-module__number-shuffler">1.2M/S</span>
                            </dd>
                        </div>
                        <div className="human-form-item">
                            <dt className="human-form-item__title">System</dt>
                            <dd className="human-form-item__description">
                                <span className="stats-module__number-shuffler">Electric</span>
                            </dd>
                        </div>
                    </dl>
                </div>
            <picture>
                <source srcSet={HumanoidFull} media="(min-width: 1440px)" />
                    <source srcSet={HumanoidFull} media="(min-width: 768px)" />
                        <img className="human-form-module__image" src={HumanoidMobile} width="800" height="1330" alt="" />
            </picture>
        </section>
        </StyledSection>
    )
 }
 export default HumanForm;