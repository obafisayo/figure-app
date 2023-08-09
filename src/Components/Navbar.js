import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Totop from "./Totop";

const StyledHeader = styled.header`
    position: fixed;
    top: 1.5rem;
    right: 2rem;
    left: 2rem;
    z-index: 200;

    .navigation__content {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        margin: 0 auto;
        width: 100%;
        max-width: 256rem;
    }
    .is-home .navigation__home-link {
        pointer-events: none;
    }
    .navigation__home-link {//logo
        transition: background-color .3s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4.2rem;
        height: 4.2rem;
        background-color: #fff;
        border-radius: 0.4rem;
    }
    .navigation__logo {
        width: 100%;
        max-width: 1.2rem;
        height: auto;
        color: #0c0c0c;
    }
    .navigation__links-wrapper {
        transition: opacity .3s ease-in-out,visibility .3s ease-in-out;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 175;
        background-color: #f6f6ef;
        opacity: 0;
        visibility: hidden;
        overflow-y: auto;
    }
    .navigation.is-mobile-navigation-active .navigation__links-wrapper {
        opacity: 1;
        visibility: visible;
    }
    .navigation-toggle{
        position: relative;
        padding: 0;
        width: 4.2rem;
        height: 4.2rem;
        background-color: #fff;
        box-shadow: 0 0.4rem 2rem rgba(0,0,0,.08);
        border: none;
        border-radius: 0.4rem;
        cursor: pointer;
        margin: 0 0 0 auto;
        z-index: 200;
    }
    .navigation-toggle::after, .navigation-toggle::before{
        transition: top .3s ease-in-out,opacity .3s ease-in-out;
        content: "";
        position: absolute;
        top: 1.2rem;
        left: 50%;
        transform: translateX(-50%);
        display: block;
        width: 2.3rem;
        height: 0.1rem;
        background-color: #0c0c0c;
    }
    .navigation-toggle::after {
        transition: bottom .3s ease-in-out,opacity .3s ease-in-out;
        top: unset;
        bottom: 1.2rem;
        height: 0.2rem
    }
    .navigation-toggle.is-active:before {
        top: 50%;
        opacity: 0;
    }
    .navigation-toggle.is-active .navigation-toggle__icon {
        transform: translate(-50%,-50%) rotate(45deg);
        width: 2.3rem;
    }
    .navigation-toggle.is-active .navigation-toggle__icon--secondary {
        transform: translate(-50%,-50%) rotate(135deg);
        width: 2.3rem;
    }
    .navigation-toggle.is-active:after {
        bottom: 50%;
        opacity: 0;
    }
    .navigation-toggle__icon {
        transition: transform .3s ease-in-out;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        display: block;
        width: 2.3rem;
        height: 0.1rem;
        background-color: #0c0c0c;
    }
    .navigation__links {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2.1rem;
        padding: 11.2rem 2rem 2rem;
        counter-reset: main-navigation-counter;
    }
    .navigation__link{
        counter-increment: main-navigation-counter;
        padding: 0.15rem;
        border-radius: 0.3rem;
        position: relative;
        overflow: hidden;
        text-decoration: none;
    }
    .navigation__link-background {
        transition: opacity .3s ease-in-out;
        background: 5;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
    }
    .navigation__link-separator {
        position: relative;
        top: -0.3rem;
        width: 100%;
        height: 0.1rem;
        background-color: hsla(0,0%,5%,.2);
    }
    .navigation__link-button-text {
        transition: background-color .3s ease-in-out,border-color .3s ease-in-out;
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        color: #0c0c0c;
        line-height: 1.11;
        font-family: inherit,serif;
        font-size: 3.4rem;
        font-weight: 400;
        text-decoration: none;
        text-transform: uppercase;
        border: 0.1rem solid transparent;
        ::before {
            line-height: 1.11;
            font-size: 1.8rem;
            font-weight: 400;
            letter-spacing: -.01em;
            text-transform: uppercase;
            content: counter(main-navigation-counter,decimal-leading-zero);
            position: relative;
            top: -0.1rem;
            margin: 0 2.4rem 0 0;
            font-family: inherit, serif;
            font-feature-settings: "ss12" on;
            letter-spacing: 0;
        }
    }
    @media screen and  (min-width: 768px){
            top: 4rem;
            right: var(--content-padding);
            left: var(--content-padding);
        .navigation__content {
            flex-direction: unset;
        }
        .navigation__home-link-wrapper {
            width: 0;
        }
        .navigation__home-link { // logo
            width: 3.6rem;
            height: 3.6rem;
            :hover{
                transition:background-color .3s ease-in-out;
                background-color: ${({logohover}) => logohover? "#797af2" : "none"};
            }
        }
        .navigation__links-wrapper {
            position: unset;
            top: unset;
            right: unset;
            bottom: unset;
            left: unset;
            z-index: unset;
            background-color: unset;
            opacity: 1;
            visibility: visible;
            overflow-y: unset;
        }
        .navigation__links {
            flex-direction: unset;
            align-items: unset;
            gap: 0.8rem;
            padding: unset;
            background-color: unset;
        }
        .navigation__toggle {
            display: none;
        }
        .navigation__link { //the border around the nav els
            transition: background-color .3s ease-in-out;
            background-color: #fff;
            :hover{
                transition:background-color .3s ease-in-out;
                background-color: #797af2;
            }
        }
        .navigation__link.active .navigation__link-background {
            background: linear-gradient(180deg,#ff38bb 4.25%,#ff8038 51.61%,#f5be66 80.43%,#f4dca8 93.03%);
        }
        .navigation__link-separator {
            display: none;
        }
        .navigation__link-button-text {// the color of the nav els when hovered
            padding: 0 1rem;
            height: 3.6rem;
            transition:border-color .3s ease-in-out background-color .3s ease-in-out;
            line-height: 1.2;
            letter-spacing: .001em;
            font-family: FreeSansBold ,sans-serif;
            font-size: 1.4rem;
            font-weight: 400;
            text-transform: unset;
            background-color: #fff;
            border-color: #fff;
            border-radius: 0.2rem;
            box-shadow: 0 0.4rem 2rem rgba(0,0,0,.08);
            :hover{
                transition:border-color .3s ease-in-out background-color .3s ease-in-out;
                background-color: #797af2;
                border-color: #797af2;
            }
            ::before {
                display: none;
            }
        }
        @media screen and (min-width: 1024px){
            .navigation-toggle__icon {
                display: none;
            }
        }  
    } 
`;

function Navbar(){
    const toggleRef = useRef(null);
    const navRef = useRef(null);
    const aboutRef = useRef(null);
    const masterplanRef = useRef(null);
    const cultureRef = useRef(null);
    const carrerRef = useRef(null);
    const logoRef = useRef(null);

    const [logohover, setLogoHover] = useState(false)

    function handleClick(){
        const toggleRefEl = toggleRef.current
        const navRefEl = navRef.current
        toggleRefEl.classList.toggle('is-active')
        navRefEl.classList.toggle('is-mobile-navigation-active')
        document.body.classList.toggle('is-unscrollable')
    }
    
    function newhandleClick(){
        const toggleRefEl = toggleRef.current
        const navRefEl = navRef.current
        
        toggleRefEl.classList.remove('is-active')
        navRefEl.classList.remove('is-mobile-navigation-active')
        navRefEl.classList.add('is-home-link-shown')
        document.body.classList.remove('is-unscrollable')
        
        const masterplanRefel = masterplanRef.current; 
        const cultureRefel = cultureRef.current; 
        const carrerRefel = carrerRef.current; 
        const aboutRefel = aboutRef.current; 

        aboutRefel.classList.add('active')
        console.log(aboutRefel)
        masterplanRefel.classList.remove('active')
        cultureRefel.classList.remove('active')
        carrerRefel.classList.remove('active')  
        setLogoHover(true)
    }

    function newhandleClick1(){
        const masterplanRefel = masterplanRef.current; 
        const cultureRefel = cultureRef.current; 
        const carrerRefel = carrerRef.current; 
        const aboutRefel = aboutRef.current; 
        const toggleRefEl = toggleRef.current
        const navRefEl = navRef.current
        toggleRefEl.classList.remove('is-active')
        navRefEl.classList.remove('is-mobile-navigation-active')
        navRefEl.classList.add('is-home-link-shown')
        document.body.classList.remove('is-unscrollable')

        masterplanRefel.classList.add('active')
        cultureRefel.classList.remove('active')
        carrerRefel.classList.remove('active')
        aboutRefel.classList.remove('active')
        setLogoHover(true)
    }

    function newhandleClick2(){
        const masterplanRefel = masterplanRef.current; 
        const cultureRefel = cultureRef.current; 
        const carrerRefel = carrerRef.current; 
        const aboutRefel = aboutRef.current; 
        const toggleRefEl = toggleRef.current
        const navRefEl = navRef.current
        toggleRefEl.classList.remove('is-active')
        navRefEl.classList.remove('is-mobile-navigation-active')
        navRefEl.classList.add('is-home-link-shown')
        document.body.classList.remove('is-unscrollable')

        cultureRefel.classList.add('active')
        masterplanRefel.classList.remove('active')
        carrerRefel.classList.remove('active')
        aboutRefel.classList.remove('active')
        setLogoHover(true)
    }

    function newhandleClick3(){
        const masterplanRefel = masterplanRef.current; 
        const cultureRefel = cultureRef.current; 
        const carrerRefel = carrerRef.current; 
        const aboutRefel = aboutRef.current; 
        const toggleRefEl = toggleRef.current
        const navRefEl = navRef.current
        toggleRefEl.classList.remove('is-active')
        navRefEl.classList.remove('is-mobile-navigation-active')
        navRefEl.classList.add('is-home-link-shown')
        document.body.classList.remove('is-unscrollable')

        carrerRefel.classList.add('active')
        cultureRefel.classList.remove('active')
        masterplanRefel.classList.remove('active')
        aboutRefel.classList.remove('active')
        setLogoHover(true)
    }

    function handleLogoClick() {
        // const logoRefEl = logoRef.current
        const masterplanRefel = masterplanRef.current; 
        const cultureRefel = cultureRef.current; 
        const carrerRefel = carrerRef.current; 
        const aboutRefel = aboutRef.current; 
        carrerRefel.classList.remove('active')
        cultureRefel.classList.remove('active')
        masterplanRefel.classList.remove('active')
        aboutRefel.classList.remove('active')
        setLogoHover(false)
    }
    
    return(
        <StyledHeader className="navigation is-home-link-shown is-home" ref={navRef} logohover={logohover}>
            <div className="navigation__content">
                <button className="navigation__toggle navigation-toggle" aria-label="Open main navigation" onClick={handleClick} ref={toggleRef}>
                    <span className="navigation-toggle__icon"></span>
                    <span className="navigation-toggle__icon navigation-toggle__icon--secondary"></span> 
                </button>
                <div className="navigation__home-link-wrapper">
                    <Totop component={
                        <Link className="navigation__home-link" to="/" onClick={handleLogoClick} ref={logoRef}>
                            <svg className="navigation__logo" width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.1101 5.99701H11.2328C11.6291 5.99701 11.9496 5.67477 11.9496 5.27753V0.71948C11.9496 0.321739 11.6286 0 11.2328 0H6.69212C6.29585 0 5.97531 0.322246 5.97531 0.71948V4.8575C5.97531 5.48679 5.46697 5.99701 4.84001 5.99701H0.716815C0.320547 5.99701 0 6.31926 0 6.71649V11.274C0 11.6718 0.321052 11.9935 0.716815 11.9935H4.83951C5.46647 11.9935 5.9748 12.5037 5.9748 13.133V16.851C5.9748 17.4803 5.46647 17.9905 4.83951 17.9905H0.716815C0.320547 17.9905 0 18.3128 0 18.71V23.2676C0 23.6653 0.321052 23.987 0.716815 23.987H5.25748C5.65375 23.987 5.9743 23.6648 5.9743 23.2676V19.1295C5.9743 18.5003 6.48263 17.99 7.10959 17.99H11.2323C11.6286 17.99 11.9491 17.6678 11.9491 17.2705V12.713C11.9491 12.3153 11.628 11.9935 11.2323 11.9935H7.10959C6.48263 11.9935 5.9743 11.4833 5.9743 10.854V7.13602C5.9743 6.50673 6.48263 5.99651 7.10959 5.99651L7.1101 5.99701Z" fill="currentColor"></path>
                            </svg>
                        </Link>
                    } 
                    />
                </div>
                <nav className="navigation__links-wrapper" aria-label="Main navigation">
                    <Totop component={
                        <div className="navigation__links" >
                            <Link onClick={newhandleClick} className="navigation__link" title="About Us" to="/about-us" ref={aboutRef}>
                                <div className="navigation__link-background"></div>
                                <span className="navigation__link-button-text">About Us</span>
                            </Link>
                            <div className="navigation__link-separator"></div>
                            <Link onClick={newhandleClick1} className="navigation__link" title="Master Plan" to="/master-plan" ref={masterplanRef}>
                                <div className="navigation__link-background"></div>
                                <span className="navigation__link-button-text">Master Plan</span>
                            </Link>
                            <div className="navigation__link-separator"></div>
                            <Link onClick={newhandleClick2}  className="navigation__link" title="Culture" to="/culture" ref={cultureRef}>
                                <div className="navigation__link-background"></div>
                                <span className="navigation__link-button-text">Culture</span>
                            </Link>
                            <div className="navigation__link-separator"></div>
                            <Link onClick={newhandleClick3} className="navigation__link" title="Careers" to="/careers" ref={carrerRef}>
                                <div className="navigation__link-background"></div>
                                <span className="navigation__link-button-text">Careers</span>
                            </Link>
                            <div className="navigation__link-separator"></div>
                        </div>
                    }
                    />
                </nav>
            </div>
        </StyledHeader>
    )
}
export default Navbar