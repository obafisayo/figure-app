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
        font-family: FreeSansMedium, sans-serif;
        font-size: 1.9rem;
        font-weight: 400;
        letter-spacing: -.01em;
        margin: 0 0 0.8rem;
    }
    .footer__newsletter-description {
        margin: 0 0 2.4rem;
        font-family: FreeSans, sans-serif;
        font-size: 1.7rem;
        font-weight: 400;
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
    @media screen and (min-width: 768px) {
        .footer__newsletter-heading {
            line-height: 1.1;
            font-size: 2.2rem;
        }
    }
`;
function NewsletterMail({background, icon, paddingLeft, fsz, width}) {
    return (
        <>
            <Newsletter width={width} background={background} paddingLeft={paddingLeft} className="footer__newsletter-container">
                <h1 className="footer__newsletter-heading">Keep up with us.</h1>
                <p className="footer__newsletter-description">Get news, photos, events, and business updates</p>
                <form className="newsletter-form footer__newsletter-component" aria-label="Subscribe to newsletter">
                    <InputComponent input fsz={fsz} text={'Email Address'} button={<Button fsz={fsz} text={'Sign Up'}/>} type={'email'}/>
                    <p id="footernewsletter-newsletter-form" className="newsletter-form__description" aria-live="polite"></p>
                    {icon}
                </form>
            </Newsletter>
        </>
    )
}
export default NewsletterMail;