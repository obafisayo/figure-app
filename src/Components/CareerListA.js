import React, { useState } from "react";
import styled from "styled-components";
import Slider from "./Slider";

const StyledA = styled.a`
    transition: background-color .3s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1.5rem;
    width: 100%;
    text-decoration: none;
    border-top: 0.1rem solid hsla(0,0%,100%,.2);
    padding: 2rem 0;
    min-height: 8.5rem;

    .careers-listing-module-job__location {
        transition: opacity .3s ease-in-out;
        line-height: 1.2;
        font-family: neue-haas-grot-text,sans-serif;
        font-size: 1.4rem;
        font-weight: 500;
        letter-spacing: 0;
        color: #fff;
        opacity: .6;
        font-style: normal;
        display: block;
    }
    .careers-listing-module-job__heading {
        transition: background-size .3s ease-in-out;
        line-height: 1.5;
        font-family: neue-haas-grot-text,sans-serif;
        font-size: 1.8rem;
        font-weight: 400;
        letter-spacing: -.01em;
        margin: 0;
        color: #fff;
    }
    .careers-listing-module-job__heading-text {
        transition: background-size .3s ease-in-out;
        display: inline-block;
        background: linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,0)),linear-gradient(90deg,#fff,#fff);
        background-size: 100% 0.1rem,0 0.1rem;
        background-position: 100% 100%,0 100%;
        background-repeat: no-repeat;
    }
    :hover .careers-listing-module-job__heading-text{
        background-size: 0 0.1rem,100% 0.1rem;
    }
    .careers-listing-module-job__cta-container {
        justify-content: flex-end;
        display: flex;
        width: 100%;
    }
    @media screen and (min-width: 768px){
        padding: 1rem 0;
        justify-content: space-between;
        align-items: center;
        display: grid;
        grid-template-columns: 10rem 1fr 13rem;
        grid-gap: 4rem;
        gap: 4rem;
        :hover{
            background-color: hsla(0,0%,100%,.05);
        }
    
        .careers-listing-module-job__heading {
            line-height: 1.1;
            font-size: 2.2rem;
        }
    }
`;
function CareerListA({text, href}) {
    const [hover, setHover] = useState(false)
    return(
        <StyledA className="careers-listing-module-job" title="Apply Now" rel="noreferrer" target="_blank" href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <address className="careers-listing-module-job__location">Sunnyvale, CA</address>
            <h1 className="careers-listing-module-job__heading">
                <span className="careers-listing-module-job__heading-text">{text}</span>
            </h1>
            <div className="careers-listing-module-job__cta-container">
                <Slider hovered={hover} fw={'500'} fsz={'1.4rem'} slide text={'Apply Now'} icon arrowUpRight ff={"neue-haas-grot-text"} light bordercolor={'white'}/>
            </div>
        </StyledA>
    )
}
export default CareerListA;