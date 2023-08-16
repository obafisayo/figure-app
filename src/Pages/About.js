import React from "react";
import styled from "styled-components";
import LabourForce from "../Components/LabourForce";
import ShortText from "../Components/ShortText";
import Image from "../Components/Image";
import coleaguessitting  from "../assets/coleagues-sitting.webp"
import coleaguessittingtall  from "../assets/coleagues-sitting-tall.webp"
import WorkerModule from "../Components/WorkerModule";
import ValuesModule from "../Components/ValuesModule";
import StaffsModule from "../Components/StaffsModule";


const StyledMain = styled.main`
    display: block;
    
    .text-hero:first-child {
        margin-top: 10.4rem;
    }
    .text-hero {
        padding: 2rem;
    }
    .text-hero__content {
        margin: 0 auto;
        width: 100%;
        max-width: 256rem;
    }
    .text-hero__heading {
        line-height: 1;
        font-family:  pp-neue-machina-plain, serif;
        font-size: 4.2rem;
        font-weight: 400;
        font-feature-settings: "ss12" on;
        letter-spacing: -.01em;
        text-transform: uppercase;
        margin: 0;
        width: 100%;
        max-width: 104.4rem;
    }

    @media (min-width: 768px){
        .text-hero:first-child {
            margin-top: 20rem;
        }
        .text-hero {
            padding: 2rem;
        }
        .text-hero__heading {
            font-size: 8.5rem;
        }
    }
`;
function About() {
    return (
        <StyledMain>
            <section className="section text-hero section--large-margin">
                <div id="our-labor-force-is-shrinking" className="section__anchor"></div>
                <div className="text-hero__content">
                    <h1 className="text-hero__heading">OUR LABOR FORCE IS SHRINKING.</h1>
                </div>
            </section>
            <LabourForce/>
            <WorkerModule/>
            <ShortText bt={"Careers"} to={"/careers"} bcc={'#0c0c0c'} nomargin color={'white'}
                header={"As we reach the upper limits of our production capability, humanoids will join the workforce with the ability to think, learn, and interact with their environment safely alongside us."} 
                paragraph={"Figure 01 is AI-powered and self-reliant, ready to produce an abundance of affordable, more widely available goods and services to a degree which humanity has never seen."}
            />
            <ValuesModule/>
            <StaffsModule/>
            <Image img1={coleaguessittingtall} img2={coleaguessitting}/>
            <ShortText bt={"Careers"} to={"/careers"} 
                header={"The team bringing impossible ideas to life"} 
                paragraph={"The world’s foremost AI, design, hardware, and software engineering experts form an unparalleled team with an impressive track record of breaking boundaries in tech."}
            />
        </StyledMain>
    )
}
export default About