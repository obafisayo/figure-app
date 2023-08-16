import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Totop from "./Totop";

const StyledButton = styled.button`
    line-height: 1.2;
    font-family: ${({mff}) => mff || 'neue-haas-grot-text'};
    font-size: ${({fsz}) => fsz || '1.4rem'};
    font-weight: 400;
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
        font-weight: 400;
        font-family: ${({mff}) => mff || 'neue-haas-grot-text'};
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
function Button({text, fsz, width, to, link, mff}) {
    return (
        <StyledButton width={width} fsz={fsz} mff={mff}>
            {link?  
                <Totop component={<Link to={to}>{text}</Link>}/>
                 : 
                 `${text}`
            }
        </StyledButton>
    )
}
export default Button;