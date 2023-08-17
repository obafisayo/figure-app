import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Totop from "./Totop";
import arrowDown from "../assets/arrow-down.svg"

const StyledButton = styled.button`
    line-height: 1.2;
    font-family: ${({mff}) => mff || 'neue-haas-grot-text'};
    font-size: ${({fsz}) => fsz || '1.4rem'};
    font-weight: 500;
    letter-spacing: 0;
    transition: background-color 0.3s ease-in-out;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    padding: 0 3rem;
    height: 4.6rem;
    width: ${({width}) => width || 'none'};
    color: #0c0c0c;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    background-color: #797af2;
    border: none;
    border-radius: 3.4rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    a{
        text-decoration: none;
        color: #0c0c0c;
        font-size: ${({fsz}) => fsz || '1.4rem'};
        font-weight: 500;
        font-family: ${({mff}) => mff || 'neue-haas-grot-text'};
    }
     .button__icon {
        margin-left: 1rem;
        width: 1.3rem;
    }
    :hover{
        transition: all 0.4s ease-in-out;
        background-color: #C9C3DE;
    }
    @media screen and (min-width: 768px){
        height: 4.8rem;
        border-radius: 2.4rem;
        a{
            font-family: neue-haas-grot-text;
        }
    }
`;
function Button({text, fsz, width, to, link, mff, arrowdown}) {
    return (
        <StyledButton width={width} fsz={fsz} mff={mff}>
            {link?  
                <Totop component={<Link to={to}>{text}</Link>}/>
                 : 
                 `${text}`
            }
            {arrowdown && <img alt="" src={arrowDown} width="16" height="15" decoding="async" data-nimg="1" className="button__icon" loading="lazy" style={{color: 'transparent'}}></img>}
        </StyledButton>
    )
}
export default Button;