import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2.4rem;
    margin-top: 2.4rem;
    margin-left: .5rem;

    .bi {
        display: block;
        width: 2rem;
    }
    .bi-youtube{
        transform: scale(1.6);
    }
    .bi-instagram{
        transform: scale(1.2);
    }
    .bi-linkedin{
        transform: scale(1.3);
    }
    .bi-twitter{
        transform: scale(1.5);
    }
    a{
    text-decoration: none;
    color: #0c0c0c;
    transition: opacity .3s ease-in-out;
    transition-duration: .2s;
    display: block;

    :hover{
        opacity: 0.7;
    }
    }
`;

function Icon(){
    return(
        <StyledNav>
            <a className=".footer__social-link footer__social-link--twitter" title="Twitter" target="_blank" rel="noreferrer" href="https://twitter.com/figure_robot">
                <i className="bi bi-twitter"></i>
            </a>
            <a className=".footer__social-link footer__social-link--instagram" title="Instgram" target="_blank" rel="noreferrer" href="https://www.instagram.com/figure_robot/">
                <i className="bi bi-instagram"></i> 
            </a>
            <a className=".footer__social-link footer__social-link--linked-in" title="Linked-in" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/figure-ai/">
                <i className="bi bi-linkedin"></i> 
            </a>
            <a className=".footer__social-link footer__social-link--youtube" title="Youtube" target="_blank" rel="noreferrer" href="https://www.youtube.com/@figureai">
                <i className="bi bi-youtube"></i> 
            </a>
        </StyledNav>
    )
}
export default Icon