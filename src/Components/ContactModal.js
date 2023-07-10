import React from "react";
import styled from "styled-components";
import InputComponent from "./InputComponent";
import Button from "./Button";

const StyledDiv = styled.div`
    padding: 8rem 2rem;
    height: 100%;
    overflow-y: auto;
    .contact-modal__main {
        display: flex;
        flex-direction: column;
    }
    .contact-modal__main-inner {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
    .contact-modal__text-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .contact-modal__heading {
        line-height: 1.1;
        font-family: FreeSans, sans-serif;
        font-size: 2.4rem;
        font-weight: 400;
        letter-spacing: -.01em;
        margin: 0;
    }
    .contact-modal__description {
        line-height: 1.5;
        font-family: FreeSans, sans-serif;
        font-size: 1.4rem;
        letter-spacing: -.01em;
        margin: 0;
    }
    .contact-modal__form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    .contact-modal__fields--2-col {
        grid-template-columns: 1fr;
    }
    .contact-modal__fields {
        display: grid;
        grid-template-columns: 1fr;
        width: 100%;
        grid-gap: 2rem;
        gap: 2rem;
    }
    .contact-modal__field, .contact-modal__submit {
        width: 100%;
    }
    .contact-modal__state-text {
        line-height: 0;
        color: transparent;
        font-size: 0;
        text-align: center;
        margin: 0;
    }
    .contact-modal__recaptcha-text {
        line-height: 1.5;
        font-family: FreeSans, sans-serif;
        font-size: 1.4rem;
        letter-spacing: -.01em;
        color: hsla(0,0%,5%,.6);
        text-align: center;
        margin: 0;
    }
    .contact-modal__recaptcha-text a {
        color: hsla(0,0%,5%,.6);
    }
    a{
        text-decoration: underline;
    }
    @media screen and (min-width: 768px){
        padding: 6rem 2rem;
        .contact-modal__main-inner {
            gap: 4.2rem;
        }
        .contact-modal__text-container {
            gap: 3rem;
        }
        .contact-modal__heading {
            font-size: 3.6rem;
        }
        .contact-modal__description {
            font-size: 1.6rem;
        }
        .contact-modal__form {
            gap: 2rem;
        }
        .contact-modal__fields--2-col {
            grid-template-columns: repeat(2,.5fr);
        }
    }
`;
function ContactModal(){
    return(
        <StyledDiv className="contact-modal__main-wrapper">
            <div className="contact-modal__main">
                <div className="contact-modal__main-inner">
                    <div className="contact-modal__text-container">
                        <h1 className="contact-modal__heading">What’s on your mind?</h1>
                        <div className="contact-modal__description">We’ll get back to you as soon as possible.</div>
                    </div>
                    <form noValidate="" className="contact-modal__form" aria-label="Send us a message">
                        <div className="contact-modal__fields contact-modal__fields--2-col">
                            <div className="contact-modal__field">
                                <InputComponent input text={'First Name'} type={'text'}/>
                            </div>
                            <div className="contact-modal__field">
                                <div className="custom-input__field custom-input__field--is-input">
                                    <InputComponent input text={'Last Name'} type={'text'}/>
                                </div>
                            </div>
                        </div>
                        <div className="contact-modal__fields">
                            <div className="contact-modal__field">
                                <InputComponent input text={'Email'} type={'email'}/>
                            </div>
                        </div>
                        <div className="contact-modal__fields">
                            <div className="contact-modal__field">
                                <InputComponent input text={'Subject'} type={'text'}/>
                            </div>
                        </div>
                        <div className="contact-modal__fields">
                            <div className="contact-modal__field">
                                <div className="custom-input__field custom-input__field--is-textarea">
                                    <InputComponent height={'fit-content'} borr={'1rem'} textarea text={'Message'} name={'message'}/>
                                </div>
                            </div>
                        </div>
                        <Button width={'100%'} text={'Submit'} className="button button--with-loader contact-modal__submit"/>
                        <p className="contact-modal__state-text" aria-live="polite"></p>
                        <p className="contact-modal__recaptcha-text">This site is protected by reCAPTCHA and the Google <a target="_blank" rel="noreferrer" href="https://policies.google.com/privacy">Privacy Policy</a> and 
                            <a target="_blank" rel="noreferrer" href="https://policies.google.com/terms"> Terms of Service</a> apply.
                        </p>
                    </form>
                </div>
            </div>
        </StyledDiv>
    )
}
export default ContactModal;