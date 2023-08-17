import React from "react";
import styled from "styled-components";
const StyledH = styled.h1`
   margin: 0;
   .careers-listing-module-item__heading {
        line-height: 1.11;
        font-family: pp-neue-machina-plain,serif;
        font-feature-settings: "ss12" on;
        font-size: 3.4rem;
        font-weight: 400;
        letter-spacing: 0;
        text-transform: uppercase;
        position: relative;
        align-items: center;
        gap: 2rem;
        width: 100%;
        color: #fff;
        text-align: left;
        background-color: transparent;
        border: none;
        min-height: 0;
        padding: 5rem 0 2rem;
    }
   .careers-listing-module-item__heading-text {
        position: relative;
        display: block;
        line-height: 1.1;
        margin-bottom: -0.8rem;
    }
    .careers-listing-module-item__superscript {
        font-family: pp-neue-machina-plain,serif;
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 111%;
        text-transform: uppercase;
        font-feature-settings: "ss12" on;
        color: hsla(0,0%,100%,.6);
        margin-left: 0.8rem;
    }
    .careers-listing-module-item__heading-text {
        position: relative;
        display: block;
        line-height: 1.1;
        margin-bottom: -0.8rem;
    }

   @media screen and (min-width: 768px){
        .careers-listing-module-item__heading {
           font-size: 5.2rem;
           min-height: 15rem;
           padding: 5rem 0;
        }
        .careers-listing-module-item__superscript {
            font-size: 2.4rem;
        }
    }
`;

function CareerListH ({head, sup}) {
    return(
        <StyledH className="careers-listing-module-item__heading-wrapper">
            <div className="careers-listing-module-item__heading">
                <span className="careers-listing-module-item__heading-text">{head}<sup className="careers-listing-module-item__superscript">{sup}</sup></span>
            </div>
        </StyledH>
    )
}
export default CareerListH;