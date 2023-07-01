import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    line-height: 1.2;
    font-family: inherit;
    font-size: ${({fsz}) => fsz || '1.4rem'};
    font-weight: 600;
    letter-spacing: 0;
    transition: background-color 0.3s ease-in-out;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    padding: 0 3.5rem;
    height: 5.3rem;
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

    :hover{
        transition: all 0.4s ease-in-out;
        background-color: #C9C3DE;
    }
`;
function Button({text, fsz}) {
    return (
        <StyledButton fsz={fsz}>{text}</StyledButton>
    )
}
export default Button