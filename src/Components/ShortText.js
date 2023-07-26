import React from "react"
import styled from "styled-components"
import Button from "./Button";

const StyledSection = styled.section`
    position: relative;
    padding-left: var(--content-padding);
    padding-right: var(--content-padding);

    .section--full-image+.section--cta {
        margin: 4rem 0 8rem;
    }
    .section--large-margin {
        margin: 8rem 0;
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
        gap: 2rem;
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
        color: #0c0c0c;
        font-family: neue-haas-grot-text,sans-serif;
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
    @media screen and (min-width: 1024px){
        padding-left: var(--content-padding);
        padding-right: 10rem;

        .section--full-image+.section--cta {
            margin: 12rem 0 16rem;
        }
    }
    @media screen and (min-width: 768px){
        .section--large-margin {
            margin: 16rem 0;
        }
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
            gap: 3rem;
        }
        .cta__description-wrapper {
            display: flex;
            justify-content: flex-end;
            grid-area: description;
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
`;
function ShortText({header, paragraph, to, bt}) {
    return(
        <StyledSection>
        <section className="section--large-margin section--cta">
            <div id="were-engineering-the-humanoid-to-make-humans-capable-of-more" className="section__anchor"></div>
            <div className="cta__content">
                <div className="cta__heading-wrapper">
                    <h1 className="cta__heading">{header}</h1>
                </div>
                <div className="cta__description-wrapper">
                    <p className="cta__description">{paragraph}</p>
                </div>
                <div className="cta__cta">
                    <Button mff={"FreeSans"} link to={to} text={bt}/>
                </div>
            </div>
        </section>
        </StyledSection>
    )
}
export default ShortText;