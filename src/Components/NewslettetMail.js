import React from "react";
import styled from "styled-components";
import Button from "./Button";
import InputComponent from "./InputComponent";

const Newsletter = styled.section`
    width: ${({width}) => width || '100%'};
    padding: 15px 0px 10px ${({paddingLeft}) => paddingLeft || '20px'};
    position: relative;
    z-index: 2;

    ::after{
        content: '';
        position: absolute;
        z-index: -1;
        top: 0; left: 0;
        height: 100%;
        width: 100%;
        background-color: ${({background}) => background || "gray"};
        opacity: 0.3;
        border-radius: 5px;
    }

    .footer__newsletter-heading {
        line-height: 1.5;
        font-family: inherit, sans-serif;
        font-size:  22px;
        font-weight: 600;
        letter-spacing: -.01em;
        margin: 0 0 0.8rem;
    }
    .footer__newsletter-description {
        margin: 0 0 2.4rem;
        font-size: 16px;
        font-weight: 500;
    }
    .newsletter-form {
        width: 100%;
        min-width: 30rem;
    }
    .footer__newsletter-component {
    margin: 2.4rem 0 0;
    }
    .newsletter-form {
    width: 100%;
    min-width: 30rem;
    }
    form {
    display: block;
    margin-top: 0em;
    }
`;
function NewsletterMail({background, icon, paddingLeft, fsz, width}) {
    return (
        <>
            <Newsletter width={width} background={background} paddingLeft={paddingLeft} className="footer__newsletter-container">
                <h1 className="footer__newsletter-heading">Keep up with us.</h1>
                <p className="footer__newsletter-description">Get news, photos, events, and business updates</p>
                <form className="newsletter-form footer__newsletter-component" aria-label="Subscribe to newsletter">
                    <InputComponent fsz={fsz} text={'Email Address'} button={<Button fsz={fsz} text={'Sign Up'}/>} type={'email'}/>
                    <p id="footernewsletter-newsletter-form" className="newsletter-form__description" aria-live="polite"></p>
                    {icon}
                </form>
            </Newsletter>
        </>
    )
}
export default NewsletterMail;