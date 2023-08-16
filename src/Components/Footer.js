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
import ModalButton from "./ModalButton";

const StyledFooter = styled.footer`
    background-color: #f6f6ef;
    padding: 6rem var(--content-padding);
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
        margin-bottom: 6rem;
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
        font-family: neue-haas-grot-text,sans-serif;
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
        font-family:neue-haas-grot-text, sans-serif;
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
    .footer__primary-link{
        line-height: 1.11;
        font-family: pp-neue-machina-plain,serif;
        font-feature-settings: "ss12" on;
        font-size: 3.4rem;
        font-weight: 400;
        letter-spacing: 0;
        text-transform: uppercase;
        counter-increment: number__primary-links-counter;
        text-decoration: none;
        color: #0c0c0c;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 1.5rem 0 1.7rem;
        /* padding: 2.5rem 0 1.7rem; */
        cursor: pointer;
    }
    .footer__primary-link:first-child {
        padding-top: 0;
    }
    .footer__primary-link:not(:first-child) {
        border-top: 0.1rem solid hsla(0,0%,5%,.2);
    }
    .footer__primary-link:before {
        line-height: 1.11;
        font-family: pp-neue-machina-plain,serif;
        font-feature-settings: "ss12" on;
        font-size: 1.8rem;
        font-weight: 500;
        letter-spacing: -.01em;
        text-transform: uppercase;
        content: counter(number__primary-links-counter,decimal-leading-zero);
        display: block;
        margin-right: 2.4rem;
        color: #0c0c0c;
    }

    @media screen and (min-width: 768px){
        padding: 10rem var(--content-padding) 4rem var(--content-padding);

        .footer__secondary-links {
            display: flex;
            gap: 3.4rem;
        }
        .footer__logo {
            margin-bottom: 6rem;
            padding-top: 0.9rem;
        }
        .footer__primary-link{
            padding: 1.5rem 1.7rem 2.5rem 0rem;
            font-size: 5.2rem;
            :before {
                font-size: 2.4rem;
                position: relative;
                top: 0.1rem;
                margin-right: 3rem;
            }
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
    const [hoverIt, setHoverIt] = useState(false)
    const [hoverIt1, setHoverIt1] = useState(false)
    const [hoverIt2, setHoverIt2] = useState(false)
    const [hoverIt3, setHoverIt3] = useState(false)
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
        setState(prevState => !prevState)
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
                                <Slider fw={'500'} fsz={'1.4rem'} slide text={'Contact Us'} icon arrowUpRight />
                            </div>
                        </div>
                    </div>
                    <div className="footer__right">
                        <nav className='number__primary-links' aria-label='Site Links'>
                            <Totop
                                component={
                                    <>
                                        <Link className="footer__primary-link" to="/about-us"  title='About Us' onMouseEnter={() => setHoverIt(true)} onMouseLeave={() => setHoverIt(false)}> 
                                            <PrimaryLinks link  ls={'0'} slide title={'About Us'} text={'ABOUT US'} mfsz={'3.4rem'} fsz={'5rem'} fw={'400'} height={'3px'} unslide hoverIt={hoverIt}/>
                                        </Link>
                                        <Link className="footer__primary-link" to="/master-plan" title='Master-plan' onMouseEnter={() => setHoverIt1(true)} onMouseLeave={() => setHoverIt1(false)}>
                                            <PrimaryLinks link  ls={'0'} slide title={'Master-plan'} text={'MASTER PLAN'} mfsz={'3.4rem'} fsz={'5rem'} fw={'400'} height={'3px'} unslide hoverIt={hoverIt1}/>
                                        </Link>
                                        <Link className="footer__primary-link" to="/culture" title='Culture' onMouseEnter={() => setHoverIt2(true)} onMouseLeave={() => setHoverIt2(false)}>
                                            <PrimaryLinks link ls={'0'} slide title={'Culture'} text={'CULTURE'} mfsz={'3.4rem'} fsz={'5rem'} fw={'400'} height={'3px'} unslide hoverIt={hoverIt2}/>
                                        </Link>
                                        <Link className="footer__primary-link" to="/careers" title='Careers' onMouseEnter={() => setHoverIt3(true)} onMouseLeave={() => setHoverIt3(false)}>
                                            <PrimaryLinks link ls={'0'} slide title={'Careers'} text={'CAREERS'} mfsz={'3.4rem'} fsz={'5rem'} fw={'400'} height={'3px'} unslide hoverIt={hoverIt3}/>
                                        </Link>
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
                    <ModalButton ariaLabel={'Close contact form'} onClick={handleContactClick}></ModalButton>
                    <ContactModal/>
                </article>
            </div>
        </StyledFooter>
    )
}
export default Footer