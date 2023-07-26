import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import figureLogo from "../assets/figure-logo.svg"

import PrimaryLinks from "./PrimaryLinks";
import NewsletterMail from "./NewslettetMail";
import Icon from "./Icons";
import Slider from "./Slider";
import ContactModal from "./ContactModal";
import Totop from "./Totop";

const StyledFooter = styled.footer`
    display: block;
    background-color: #f6f6ef;
    padding: 6rem var(--content-padding) 4rem var(--content-padding);

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
        margin-bottom: 5rem;
        overflow: clip;
    }
    img {
    overflow-clip-margin: content-box;
    overflow: clip;
    }
    .footer__left-inner {
        width: 100%;
        max-width: 46rem;
    }
    .footer__contact{
        margin-top: 2.5rem;
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
        margin-top: 6rem;
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
        font-family: sans-serif;
        :hover{
            transition: opacity .3s ease-in-out;
            opacity: 1;
        }
    }
    .contact-modal.is-active {
        opacity: 1;
        visibility: visible;
    }
    .contact-modal {
        transition: opacity .3s ease-in-out,visibility .3s ease-in-out;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 200;
        display: flex;
        justify-content: flex-end;
        background-color: hsla(0,0%,5%,.5);
        opacity: 0;
        visibility: hidden;
    }
    .contact-modal.is-active .contact-modal__content {
        transform: translateX(0);
    }
    .contact-modal__content {
        transition: transform .3s ease-in-out;
        position: relative;
        transform: translateX(100%);
        width: 100%;
        max-width: 49.3rem;
        background-color: #f6f6ef;
    }
    .contact-modal__button {
        transition: color .3s ease-in-out,background-color .3s ease-in-out;
        position: absolute;
        top: 2rem;
        right: 2rem;
        padding: 0;
        width: 3rem;
        height: 3rem;
        color: #0c0c0c;
        background-color: #fff;
        border-radius: 0.4rem;
        border: none;
        cursor: pointer;
        :hover{
            transition: color .3s ease-in-out,background-color .3s ease-in-out;
            background-color: #797af2;
        }
    }
    .contact-modal__button::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 4.4rem;
        height: 4.4rem;
    }
    .contact-modal__button-icon::after, .contact-modal__button-icon::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%) rotate(45deg);
        display: block;
        width: 2rem;
        height: 0.1rem;
        background-color: currentcolor;
    }
    .contact-modal__button-icon::after {
        transform: translate(-50%,-50%) rotate(135deg);
    }

    @media screen and (min-width: 768px){
            padding: 10rem var(--content-padding) 4rem;

        .footer__secondary-links {
            display: flex;
            gap: 3.4rem;
        }
        .footer__logo {
            margin-bottom: 6rem;
            padding-top: 0.9rem;
        }
        .contact-modal__button {
            width: 4rem;
            height: 4rem;
        }
        .contact-modal__button-icon::after, .contact-modal__button-icon::before {
            width: 2.3rem;
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
            margin-top: 6rem;
        }
    }
`;

function Footer(){
    const [state, setState] = useState(false)
    const contactModalRef = useRef(null)

    function handleClick(){
        const contactModalRefEl = contactModalRef.current
        contactModalRefEl.classList.toggle('is-active')
        document.body.classList.add('is-unscrollable')
        setState(prevState => !prevState)
    }
    function handleContactClick() {
        const contactModalRefEl = contactModalRef.current
        contactModalRefEl.classList.remove('is-active')
        document.body.classList.remove('is-unscrollable')
    }
    return(
        <StyledFooter className="footer">
            <div className="footer__inner">
                <div className="footer__top">
                    <div className="footer__left">
                        <div className="footer__left-inner">
                            <div className="footer__logo">
                                <img alt="" src={figureLogo} className="footer__logo" loading="lazy"/>
                            </div>
                            <NewsletterMail paddingLeft={'0px'} background={'transparent'} icon={<Icon/>} />
                            <div className="footer__contact" onClick={handleClick}>
                                <Slider fw={'600'} fsz={'1.4rem'} slide text={'Contact Us'} icon arrowUpRight />
                            </div>
                        </div>
                    </div>
                    <div className="footer__right">
                        <nav className='number__primary-links' aria-label='Site Links'>
                            <Totop
                                component={
                                    <>
                                        <PrimaryLinks link to={'/about-us'} ls={'3px'} slide title={'About Us'} text={'ABOUT US'} mfsz={'3.4rem'} fsz={'5rem'} fw={'600'} height={'3px'} unslide/>
                                        <PrimaryLinks link to={'/master-plan'} ls={'3px'} slide title={'Master-plan'} text={'MASTER PLAN'} mfsz={'3.4rem'} fsz={'5rem'} fw={'600'} height={'3px'} unslide/>
                                        <PrimaryLinks link to={'/culture'} ls={'3px'} slide title={'Culture'} text={'CULTURE'} mfsz={'3.4rem'} fsz={'5rem'} fw={'600'} height={'3px'} unslide/>
                                        <PrimaryLinks link to={'/careers'} ls={'3px'} slide title={'Careers'} text={'CAREERS'} mfsz={'3.4rem'} fsz={'5rem'} fw={'600'} height={'3px'} unslide/>
                                    </>
                                }
                            />
                        </nav>
                    </div>
                </div>
                <div className="footer__bottom">
                    <nav className="footer__secondary-links" aria-label="Legal Site links">
                        <p className="footer__copyright">© Figure 2023</p>
                        <Totop component={<Link className="footer__secondary-link" to="/terms-and-conditions">Terms & Conditions</Link>} />
                        <Totop component={<Link className="footer__secondary-link" to="/privacy-policy">Privacy Policy</Link>} />
                        <Totop component={<Link className="footer__secondary-link" to="/accessibility-statement">Accessibility Statement</Link>} /> 
                    </nav>
                </div>
            </div>
            <div className="contact-modal" aria-hidden={state} ref={contactModalRef}>
                <article className="contact-modal__content">
                    <button className="contact-modal__button" aria-label="Close contact form" onClick={handleContactClick}>
                        <span className="contact-modal__button-icon"></span>
                    </button>
                    <ContactModal/>
                </article>
            </div>
        </StyledFooter>
    )
}
export default Footer