import React from "react";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Totop from "./Totop";
const StyledDiv = styled.div`
    max-width: 256rem;
    margin: 0 auto;
    width: 100%;
    background-color: #0c0c0c;
    padding: 9rem var(--content-padding) 6rem;
    color: #fff;

    .rich-text-page-content__intro-inner {
        max-width: 92rem;
        width: 100%;
    }
    .rich-text-page-content__kicker {
        line-height: 1.2;
        font-family: neue-haas-grot-text,sans-serif;
        font-size: 1.4rem;
        font-weight: 500;
        letter-spacing: 0;
    }
    .rich-text-page-content__heading {
        line-height: 1;
        font-family: pp-neue-machina-plain,serif;
        font-size: 4.2rem;
        font-weight: 400;
        font-feature-settings: "ss12" on;
        letter-spacing: -.01em;
        text-transform: uppercase;
        margin: 4rem 0;
    }
    .gradient-rich-text__gradient-text {
        background: linear-gradient(270deg,#ff38bb 4.25%,#ff8038 51.61%,#f5be66 80.43%,#f4dca8 93.03%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-weight: 400;
    }
    .rich-text-page-content__meta-info {
        line-height: 1.2;
        font-family: neue-haas-grot-text,sans-serif;
        font-size: 1.4rem;
        font-weight: 500;
        letter-spacing: 0;
        margin-bottom: 3rem;
    }
    .rich-text-page-content__meta-info-author {
        font-style: normal;
        display: inline;
    }
    .rich-text-page-content__meta-info-author:after {
        content: "•";
        display: inline-block;
        margin: 0 1rem;
    }
    .rich-text-page-content__description {
        font-family: neue-haas-grot-text,sans-serif;
        font-weight: 400;
        font-size: 1.7rem;
        line-height: 160%;
        letter-spacing: -.01em;
    }
    @media screen and (min-width: 768px){
        padding: 14rem var(--content-padding) 9rem;
    
        .rich-text-page-content__heading {
            font-size: 8.5rem;
            font-size: 6rem;
        }
        .rich-text-page-content__description {
            font-size: 1.9rem;
        }

    }
    @media screen and (min-width: 1024px){
        padding: 14rem var(--content-padding) 12rem;

    }
    @media screen and (min-width: 1280px){
        .rich-text-page-content__heading {
            font-size: 8.5rem;
        }

    }
`;
function Intro({name, ntext, gtext, descriptionlink}) {
    return(
        <StyledDiv className="rich-text-page-content__intro">
            <div className="rich-text-page-content__intro-inner">
                <div className="rich-text-page-content__kicker">{name}</div>
                <h1 className="rich-text-page-content__heading">
                    <span className="gradient-rich-text__heading-text">{ntext}<strong className="gradient-rich-text__gradient-text">{gtext}</strong></span>
                </h1>
                <div className="rich-text-page-content__meta-info">
                    <address className="rich-text-page-content__meta-info-author">By: Brett Adcock, Founder & CEO</address>
                    <time dateTime="2022-05-20T00:00:00.000Z" className="rich-text-page-content__meta-info-published">May 20, 2022</time>
                </div>
                {descriptionlink && <>
                    <p className="rich-text-page-content__description">Background: I’m 20 years into building technology companies, previously the Founder of Archer ($2.7B IPO) and Vettery ($100M exit). My sole focus is Figure. My ambition is to build this company with a 30-year view, spending my time and resources on maximizing my utility impact to humanity.</p>
                    <Link to="/about-us">
                        <Totop component={<Slider arrowUpRight slide light bordercolor={'white'} icon text={'About Us'}/>}/>
                    </Link> 
                </>}
            </div>
        </StyledDiv>
    )
}
export default Intro;