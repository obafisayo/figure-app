import React from "react";
import styled from "styled-components";
import Slider from "./Slider";
import CareerListA from "./CareerListA";
import CareerListH from "./CareersListH";
const StyledSection = styled.section`
    padding: 8rem var(--content-padding);

    .careers-listing-module {
        color: #fff;
        position: relative;
        overflow: hidden;
    }
    .careers-listing-module__inner {
        width: 100%;
        max-width: 256rem;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 6rem;
        gap: 6rem;
    }
    .careers-listing-module__heading-description {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        width: 100%;
    }
    .careers-listing-module__heading {
        line-height: 1.1;
        font-family: neue-haas-grot-text,sans-serif;
        font-size: 2.4rem;
        font-weight: 400;
        letter-spacing: -.01em;
        margin: 0;
    }
    .careers-listing-module__description {
        line-height: 1.5;
        font-family: neue-haas-grot-text,sans-serif;
        font-size: 1.4rem;
        letter-spacing: -.01em;
        margin: 0;
    }
    .careers-listing-module__listings {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .careers-listing-module__error, .careers-listing-module__listing {
        margin: 0;
    }
    .careers-listing-module-item:last-child {
        border-bottom: 0.1rem solid hsla(0,0%,100%,.8);
    }
    .careers-listing-module-item {
        border-top: 0.1rem solid hsla(0,0%,100%,.8);
        width: 100%;
    }
    .careers-listing-module-item__jobs-wrapper {
        transition: height .3s ease-in-out;
        height: 0;
        overflow: hidden;
    }
    .careers-listing-module-item__jobs {
        padding-bottom: 5rem;
    }
    .careers-listing-module__disclaimer {
        line-height: 1.5;
        font-family: neue-haas-grot-text,sans-serif;
        font-size: 1.4rem;
        letter-spacing: -.01em;
        color: hsla(0,0%,100%,.6);
        margin: 2.5rem 0 0;
    }

    @media (min-width: 480px){
        .careers-listing-module__heading-description {
            max-width: 30rem;
        }

    }

    @media screen and (min-width: 768px){
        padding: 16rem var(--content-padding);
        .careers-listing-module__heading {
            font-size: 3.6rem;
        }
        .careers-listing-module__disclaimer {
            font-size: 1.6rem;
            margin: 5rem 0 0;
        }

    }

    @media screen and (min-width: 1024px){
        .careers-listing-module__inner {
            gap: 9rem;
            grid-template-columns: 22rem 1fr;
        }
    }
`;

function CareerList() {
    return(
        <StyledSection className="section section--dark ">
            <section className="careers-listing-module ">
                <div id="careers-listing" className="section__anchor"></div>
                <div className="careers-listing-module__inner">
                    <div className="careers-listing-module__heading-description">
                        <h1 className="careers-listing-module__heading">Open roles</h1>
                        <p className="careers-listing-module__description">Have another role in mind? Let us know what you could bring to the team.</p>
                        <Slider fw={'500'} fsz={'1.4rem'} slide text={'Contact Us'} icon arrowUpRight ff={"neue-haas-grot-text"} light bordercolor={'white'}/>
                    </div>
                    <div className="careers-listing-module__listings-container">
                        <ul className="careers-listing-module__listings">
                            <li className="careers-listing-module__listing">
                                <article className=" careers-listing-module-item">
                                    <CareerListH head={"AI"} sup={'05'}/>
                                    <div id="careers-listing-module-item-ai" className="careers-listing-module-item__jobs-wrapper" style={{height: "auto"}}>
                                        <div className="careers-listing-module-item__jobs">
                                            <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4031371006"} text={'Humanoid Robot Operator Interface Engineer'}/>
                                            <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4007375006"} text={'Perception / Computer Vision Software Engineer'}/>
                                            <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4007384006"} text={'Robot Behavior Coordination Engineer'}/>
                                            <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4007386006"} text={'Robot Manipulation Engineer'}/>
                                            <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4007366006"} text={'Senior Motion Planning and Navigation Engineer'}/>
                                        </div>
                                    </div>
                                </article>
                            </li>
                            <li className="careers-listing-module__listing">
                                <article className=" careers-listing-module-item">
                                    <CareerListH head={"CONTROLS"} sup={'02'}/>
                                    <div id="careers-listing-module-item-ai" className="careers-listing-module-item__jobs-wrapper" style={{height: "auto"}}>
                                        <div className="careers-listing-module-item__jobs">
                                            <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4050903006"} text={'Actuator Controls Engineer'}/>
                                            <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4007360006"} text={'Senior Robotics Controls Engineer'}/>
                                        </div>
                                    </div>
                                </article>
                            </li>
                            <li className="careers-listing-module__listing">
                                <article className=" careers-listing-module-item">
                                    <CareerListH head={"HARDWARE"} sup={'02'}/>
                                    <div id="careers-listing-module-item-ai" className="careers-listing-module-item__jobs-wrapper" style={{height: "auto"}}>
                                        <div className="careers-listing-module-item__jobs">
                                            <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4052819006"} text={'Electrical Distribution - Harness Engineer'}/>
                                            <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4006348006"} text={'Senior Mechanical Engineer'}/>
                                        </div>
                                    </div>
                                </article>
                            </li>
                            <li className="careers-listing-module__listing">
                                <article className=" careers-listing-module-item">
                                    <CareerListH head={"HUMANOID MANAGEMENT SYSTEM"} sup={'05'}/>
                                    <div id="careers-listing-module-item-ai" className="careers-listing-module-item__jobs-wrapper" style={{height: "auto"}}>
                                        <div className="careers-listing-module-item__jobs">
                                            <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4006355006"} text={'Electrical Engineer'}/>
                                            <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4032252006"} text={'Electrical Engineer Intern'}/>
                                            <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4006360006"} text={'Embedded Software Engineer'}/>
                                            <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4252522006"} text={'Sr. Electrical Engineer (Contract)'}/>
                                            <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4006362006"} text={'Test Automation Engineer'}/>
                                        </div>
                                    </div>
                                </article>
                            </li>
                            <li className="careers-listing-module__listing">
                                <article className=" careers-listing-module-item">
                                    <CareerListH head={"SYSTEMS INTEGRATION & TEST"} sup={'04'}/>
                                    <div id="careers-listing-module-item-ai" className="careers-listing-module-item__jobs-wrapper" style={{height: "auto"}}>
                                        <div className="careers-listing-module-item__jobs">
                                            <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4018394006"} text={'Electrical Integration Technician'}/>
                                            <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4018373006"} text={'Mechanical R&D Technician'}/>
                                            <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4009607006"} text={'Systems Integration Engineer'}/>
                                            <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4009608006"} text={'Systems Test Engineer'}/>
                                        </div>
                                    </div>
                                </article>
                            </li>
                        </ul>
                        <p className="careers-listing-module__disclaimer">Figure is an equal opportunity employer that is committed to diversity and inclusion in the workplace. We prohibit discrimination and harassment of any kind based on race, color, sex, religion, sexual orientation, national origin, disability, genetic information, pregnancy, or any other protected characteristic as outlined by federal, state, or local laws.</p>
                    </div>
                </div>
            </section>
        </StyledSection>
    )
}
export default CareerList;