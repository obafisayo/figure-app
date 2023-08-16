import React from "react"
import styled from "styled-components"
import Button from "./Button";

const StyledSection = styled.section`
    background-color: ${({bcc}) => bcc || 'white'};
    position: relative;
    padding: ${({nomargin}) => nomargin? '0 var(--content-padding)' : '4rem var(--content-padding) 8rem'};
    color:  ${({color}) => color || '#0c0c0c'};

    .section--full-image+.section--cta {
        margin: 4rem 0 8rem;
    }
    .section__anchor {
        position: absolute;
        top: -7.2rem;
    }
    .cta__content {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin: 0 auto;
        width: 100%;
        max-width: 256rem;
    }
    .cta__heading-wrapper {
        display: flex;
        flex-direction: column;
        gap: ${({nomargin}) => nomargin? "0" : '2rem'};
        width: 100%;
        max-width: 57.2rem;
    }
    .cta__description {
        margin: 0;
        width: 100%;
        max-width: 45.2rem;
        white-space: pre-line;
        font-size: 14px;
        line-height: 21px;
        color:  ${({color}) => color || '#0c0c0c'};
        font-family: neue-haas-grot-text, sans-serif;
        font-weight: 400;
    }
    .cta__heading {
        line-height: 1.1;
        font-size: 2.4rem;
        font-weight: 400;
        letter-spacing: -.01em;
        margin: 0;
    }
    .cta__heading, .cta__kicker {
        font-family: neue-haas-grot-text,sans-serif;
    }
    .cta__kicker {
        line-height: 1.2;
        font-size: 1.4rem;
        font-weight: 500;
        letter-spacing: 0;
    }
    
    @media screen and (min-width: 768px){
        padding: ${({nomargin}) => nomargin? '0 var(--content-padding)' : '12rem var(--content-padding) 16rem'};

        .section__anchor {
            top: -12.8rem;
        }
        .cta__content {
            display: grid;
            grid-template:
                "heading description" auto
                "cta description" 1fr/1fr 1fr;
            grid-gap: 3rem;
            gap: 3rem;
        }
        .cta__heading-wrapper {
            gap: 0rem;
        }
        .cta__description-wrapper {
            display: flex;
            justify-content: flex-end;
            grid-area: description;
            flex-direction: ${({paragraph2}) => paragraph2? 'column' : ""};
            row-gap: ${({paragraph2}) => paragraph2? '20px' : ""};
        }
        .cta__description{
            font-size: 16px;
            line-height: 24px;
        }
        .cta__cta {
            grid-area: cta;
        }
        .cta__heading {
            font-size: 3.6rem;
            grid-area: heading;
        }
    }
    @media (min-width: 1024px){
        .cta{
            padding-right: 8rem;
        }

        .section--full-image+.section--cta {
            margin: 12rem 0 16rem;
        }
    }
`;
function ShortText({header, paragraph, to, bt, paragraph2, kicker, bcc, nomargin, color}) {
    return(
        <StyledSection bcc={bcc} paragraph2={paragraph2} nomargin={nomargin} color={color}>
            <div className="cta">
                <div id="were-engineering-the-humanoid-to-make-humans-capable-of-more" className="section__anchor"></div>
                <div className="cta__content">
                    <div className="cta__heading-wrapper">
                        <div className="cta__kicker">{kicker}</div>
                        <h1 className="cta__heading">{header}</h1>
                    </div>
                    <div className="cta__description-wrapper">
                        <p className="cta__description">{paragraph}</p>
                        {paragraph2 && <>
                            <p className="cta__description">{paragraph2}</p>
                        </>}
                    </div>
                    <div className="cta__cta">
                        <Button link to={to} text={bt}/>
                    </div>
                </div>
            </div>
        </StyledSection>
    )
}
export default ShortText;