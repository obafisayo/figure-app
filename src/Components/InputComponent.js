import React, { useRef } from "react";
import styled from "styled-components";

const Custominput = styled.div`
    transition: border-color .3s ease-in-out;
    display: flex;
    align-items: center;
    width: ${({width}) => width || '100%'};
    padding: 0.5rem 0.5rem 0.5rem 2.4rem;
    height: ${({height}) => height || '6.5rem'};
    background-color: #fff;
    border: 0.1rem solid #fff;
    border-radius: 3.4rem;


    .custom-input__label {
        position: relative;
        display: flex;
        align-items: center;
        margin: 0 0.5rem 0 0;
        width: 100%;
        height: 100%;
    }
    label {
        cursor: default;
    }
    .custom-input__label-text {
        transition: top .3s ease-in-out,transform .3s ease-in-out,color .3s ease-in-out,font-size .3s ease-in-out;
        line-height: 1.5;
        font-family: inherit;
        font-size: 1.4rem;
        letter-spacing: -.01em;
        position: absolute;
        top: 2.9rem;
        transform: translateY(-100%);
        color: hsla(0,0%,5%,.6);
        white-space: nowrap;
        pointer-events: none;
        line-height: 1;
    }
    .custom-input__input {
        transition: transform .3s ease-in-out;
        line-height: 1.5;
        font-family: inherit, sans-serif;
        font-size: ${({fsz}) => fsz || '1.4rem'};
        letter-spacing: -.01em;
        display: block;
        padding: 0;
        width: 100%;
        height: 2rem;
        background-color: transparent;
        border: none;
        outline: none;
    }
`;

function InputComponent({text, button, type, width, height, fsz}) {

    const customInput = useRef(null)
    const customInputText = useRef(null)
    const customInputInput = useRef(null)

    function focusInput(){
        const customInputElemnt = customInput.current
        
        customInputElemnt.style.border = '0.1rem solid royalblue' 

        const customInputTextElemnt = customInputText.current
        
        customInputTextElemnt.style.transform = 'translateY(-210%)'
        customInputTextElemnt.style.transition = 'top .3s ease-in-out,transform .3s ease-in-out,color .3s ease-in-out,font-size .3s ease-in-out'
        customInputTextElemnt.style.fontSize = '1.2rem'
        customInputTextElemnt.style.top = '2.6rem'
        customInputTextElemnt.style.color = 'hsla(0,0%,5%,1)'
    }

    function blurInput(){
        const customInputElemnt = customInput.current

        customInputElemnt.style.border = '0.1rem solid white'

        const customInputTextElemnt = customInputText.current

        customInputTextElemnt.style.transform = 'translateY(-100%)'
        customInputTextElemnt.style.transition = 'top .3s ease-in-out,transform .3s ease-in-out,color .3s ease-in-out,font-size .3s ease-in-out'
        customInputTextElemnt.style.top = '2.9rem'
        customInputTextElemnt.style.fontSize = '1.4rem'
        customInputTextElemnt.style.color = 'hsla(0,0%,5%,.6)'

        const customInputInputElement = customInputInput.current
        
        if(customInputInputElement.value) {
                customInputTextElemnt.style.transform = 'translateY(-210%)'
                customInputTextElemnt.style.transition = 'top .3s ease-in-out,transform .3s ease-in-out,color .3s ease-in-out,font-size .3s ease-in-out'
                customInputTextElemnt.style.fontSize = '1.2rem'
                customInputTextElemnt.style.top = '2.6rem'
                customInputTextElemnt.style.color = 'hsla(0,0%,5%,1)'
        }
    }
    return(
        <>
            <Custominput fsz={fsz} width={width} height={height} onFocus={focusInput} onBlur={blurInput} ref={customInput}>
                    <label className="custom-input__label">
                        <span className="custom-input__label-text" ref={customInputText}>{text}*</span>
                        <input className="custom-input__input" name="email" ref={customInputInput} type={type} required="" aria-invalid="false" />
                    </label>
                    {button}
            </Custominput>
        </>
    )
}
export default InputComponent;