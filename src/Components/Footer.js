import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import figureLogo from "../assets/figure-logo.svg"

import PrimaryLinks from "./PrimaryLinks";
import NewsletterMail from "./NewslettetMail";
import Icon from "./Icons";
import Slider from "./Slider";

const StyledFooter = styled.footer`
    display: block;
    background-color: #f6f6ef;
    padding: 13rem var(--content-padding) 4.3rem var(--content-padding);

    .footer__inner {
        width: 100%;
        max-width: 256rem;
        margin: 0 auto;
    } 
    .footer__top {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 6rem;
        gap: 6rem;
    }
    .footer__right {
        border-bottom: 0.1rem solid hsla(0,0%,5%,.2);
    }
    .footer__logo {
        width: 100%;
        margin-bottom: 6.3rem;
        overflow: clip;
        padding-top: 0.9rem;
    }
    img {
    overflow-clip-margin: content-box;
    overflow: clip;
    }
    .footer__left-inner {
        width: 100%;
        max-width: 50.6rem;
    }
    .footer__contact {
        background-color: transparent;
        color: #0c0c0c;
        padding: 0;
        border-radius: 0;
        border: none;
        cursor: pointer;
    }
    .footer__bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 1rem;
    }
    .footer__secondary-links {
        display: grid;
        grid-template-columns: repeat(2,.5fr);
        width: 100%;
        grid-gap: 1rem;
        gap: 1rem;
    }
    .footer__copyright {
        letter-spacing: -.01em;
        color: hsla(0,0%,5%,.6);
        margin: 0 auto 0 0;
        font-size: 1.9rem;
        font-family: sans-serif;
    }
    .footer__secondary-link:nth-child(2n) {
        text-align: right;
    }
    .footer__secondary-link {
        transition: opacity .3s ease-in-out;
        -webkit-text-decoration-line: underline;
        text-decoration-line: underline;
        color: #0c0c0c;
        opacity: 0.6;
        font-size: 1.9rem;
        font-family: sans-serif;
        :hover{
            transition: opacity .3s ease-in-out;
            opacity: 1;
        }
    }
    @media screen and (min-width: 768px){
        .footer {
            padding: 12rem var(--content-padding) 4rem;
        }   
        .footer__secondary-links {
            display: flex;
            gap: 3.4rem;
        }
    } 
    @media screen and (min-width: 1024px){
        .footer__top {
            gap: 2rem;
            grid-template-columns: repeat(2,.5fr);
        }
        .footer__bottom {
            margin-top: 12rem;
        }
        .footer__right {
            border-bottom: none;
        }
        .footer__contact {
            margin-top: 8rem;
        }
    }
`;

function Footer(){
    return(
        <StyledFooter className="footer">
            <div className="footer__inner">
                <div className="footer__top">
                    <div className="footer__left">
                        <div className="footer__left-inner">
                            <div className="footer__logo">
                                <img alt="" src={figureLogo} className="footer__logo" loading="lazy"/>
                            </div>
                            <NewsletterMail fsz={'1.5rem'} paddingLeft={'0px'} background={'transparent'} icon={<Icon/>} />
                            <div className="footer__contact">
                                <Slider fw={'600'} fsz={'16px'} slide text={'Contact Us'} icon arrowUpRight/>
                            </div>
                        </div>
                    </div>
                    <div className="footer__right">
                        <nav className='number__primary-links' aria-label='Site Links'>
                            <PrimaryLinks link to={'/about-us'} ls={'3px'} slide title={'About Us'} text={'ABOUT US'} mfsz={'3.4rem'} fsz={'5.5rem'} fw={'600'} height={'3px'}/>
                            <PrimaryLinks link to={'/master-plan'} ls={'3px'} slide title={'Master-plan'} text={'MASTER PLAN'} mfsz={'3.4rem'} fsz={'5.5rem'} fw={'600'} height={'3px'}/>
                            <PrimaryLinks link to={'/culture'} ls={'3px'} slide title={'Culture'} text={'CULTURE'} mfsz={'3.4rem'} fsz={'5.5rem'} fw={'600'} height={'3px'}/>
                            <PrimaryLinks link to={'/careers'} ls={'3px'} slide title={'Carreers'} text={'CAREERS'} mfsz={'3.4rem'} fsz={'5.5rem'} fw={'600'} height={'3px'}/>
                        </nav>
                    </div>
                </div>
                <div className="footer__bottom">
                    <nav className="footer__secondary-links" aria-label="Legal Site links">
                        <p className="footer__copyright">© Figure 2023</p>
                        <Link className="footer__secondary-link" to="/terms-and-conditions">Terms & Conditions</Link>
                        <Link className="footer__secondary-link" to="/privacy-policy">Privacy Policy</Link>
                        <Link className="footer__secondary-link" to="/accessibility-statement">Accessibility Statement</Link>
                    </nav>
                </div>
            </div>
        </StyledFooter>
    )
}
export default Footer