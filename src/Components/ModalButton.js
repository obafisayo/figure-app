import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
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
    ::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 4.4rem;
        height: 4.4rem;
    }
    .modal__button-icon::after, .modal__button-icon::before {
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
    .modal__button-icon::after {
        transform: translate(-50%,-50%) rotate(135deg);
    }
    @media screen and (min-width: 768px){
        width: 4rem;
        height: 4rem;
        .contact-modal__button-icon::after, .contact-modal__button-icon::before {
            width: 2.3rem;
        }
    }
`;

function ModalButton({ariaLabel, onClick}) {
    return(
        <StyledButton aria-label={ariaLabel} onClick={onClick}>
            <span className="modal__button-icon"></span>
        </StyledButton>
    )
}
export default ModalButton;