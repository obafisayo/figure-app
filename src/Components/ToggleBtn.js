import React, { useRef } from "react";
import styled from "styled-components";

const StyledToggleBtn = styled.button`
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
@media screen and (min-width: 1024px){
    .navigation-toggle__icon {
        display: none;
    }
}  
`;
function ToggleBtn(){
    const toggleRef = useRef(null)
    
    function handleClick(){
        const toggleRefEl = toggleRef.current
        console.log(toggleRefEl)
        toggleRefEl.classList.toggle('is-active')
    }
    return(
        <StyledToggleBtn className="navigation-toggle navigation__toggle" aria-label="Open main navigation" onClick={handleClick} ref={toggleRef}>
            <span className="navigation-toggle__icon" ></span>
            <span className="navigation-toggle__icon--secondary" ></span>
        </StyledToggleBtn>
    )
}
export default ToggleBtn;