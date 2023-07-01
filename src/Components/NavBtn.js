import React from "react";
import { Link } from "react-router-dom";
 import styled from "styled-components";
const StyledNavBtn = styled.div`
    counter-increment: main-navigation-counter;
    padding: 0.15rem;
    border-radius: 0.3rem;
    position: relative;
    overflow: hidden;
    text-decoration: none;

    .navigation__link {
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
    }

    @media screen and  (min-width: 768px){
        .navigation__link {
            transition: background-color .3s ease-in-out;
            background-color: #fff;
        }
        
        .navigation__link-separator {
            display: none;
        }
        .navigation__link-button-text {
            padding: 0 1rem;
            height: 3.6rem;
            line-height: 1.2;
            font-family: inherit,sans-serif;
            font-size: 1.4rem;
            font-weight: 500;
            text-transform: unset;
            background-color: #fff;
            border-color: #fff;
            border-radius: 0.2rem;
            box-shadow: 0 0.4rem 2rem rgba(0,0,0,.08);
        }
    }
`;
 function NavBtn({title, to, text}) {
    return (
        <StyledNavBtn>
             <Link className="navigation__link" title={title} to={to}>
                <div className="navigation__link-background"></div>
                <span className="navigation__link-button-text">{text}</span>
            </Link>
            <div className="navigation__link-separator"></div>
        </StyledNavBtn>
    )
}
export default NavBtn;