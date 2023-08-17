import React from "react";
import styled from "styled-components";
import office2_600 from "../assets/office_2_copy600.webp"
import office2_1200 from "../assets/office_2_copy1200.webp"
import office2_1800 from "../assets/office_2_copy1800.webp"
import office3_400 from "../assets/office_3_copy400.webp"
import office3_800 from "../assets/office_3_copy800.webp"
import office3_1200 from "../assets/office_3_copy1200.webp"
const StyledSection = styled.section `
    margin: 4rem 0;
    position: relative;
    .double-image-module {
        padding-left: var(--content-padding);
        padding-right: var(--content-padding);
    }
    .double-image-module__inner {
        max-width: 256rem;
        margin: 0 auto;
        width: 100%;
        display: grid;
        grid-template:
            "a a"
            "c b" .5fr;
        grid-column-gap: 2rem;
        column-gap: 2rem;
    }
    .double-image-module__heading {
        line-height: 1.1;
        font-family: neue-haas-grot-text,sans-serif;
        font-size: 2.4rem;
        font-weight: 400;
        letter-spacing: -.01em;
        grid-area: a;
        margin: 0 0 6rem;
        width: 100%;
    }
    .double-image-module__image-primary-picture {
        grid-area: b;
    }
    .double-image-module__image-secondary-picture {
        grid-area: c;
    }
    .double-image-module__image-primary {
        max-width: 100%;
        height: auto;
        width: 100%;
    }
    .double-image-module__image-secondary {
        max-width: 100%;
        height: auto;
        width: 100%;
        margin-top: 12rem;
    }
    
    @media (min-width: 768px){
        .section--double-image-module {
            margin: 8rem 0;
        }
        .double-image-module__inner {
            grid-template:
                "a b"
                "c b";
            grid-template-columns: minmax(0,.5fr) minmax(0,.5fr);
            column-gap: 10rem;
        }
        .double-image-module__heading {
            font-size: 3.6rem;
            margin: 6rem 0 10rem;
        }
        .double-image-module__image-secondary {
            margin-top: 0;
        }

    }
    @media (min-width: 1024px){
        .double-image-module__heading {
            margin: 6rem 0 18rem;
        }
    }

`; 
function CareerDoubleImg() {
    return(
        <StyledSection className="section section--double-image-module">
            <section className="double-image-module">
                <div id="candidates-section" className="section__anchor"></div>
                <div className="double-image-module__inner">
                    <h1 className="double-image-module__heading">We're hiring candidates who are hungry to make their impact across AI, engineering, and design, at our headquarters in Sunnyvale, CA.</h1>
                    <picture className="double-image-module__image-primary-picture">
                        <source srcSet={office2_1800} media="(min-width: 1440px)" />
                        <source srcSet={office2_1200} media="(min-width: 768px)" />
                        <img src={office2_600} width="1800" height="2025" alt="" className="double-image-module__image-primary" />
                    </picture>
                    <picture className="double-image-module__image-secondary-picture">
                        <source srcSet={office3_1200} media="(min-width: 1440px)" />
                        <source srcSet={office3_800} media="(min-width: 768px)" />
                        <img src={office3_400} width="1800" height="1800" alt="" className="double-image-module__image-secondary" loading="lazy" />
                    </picture>
                </div>
            </section>
        </StyledSection>
    )
}
export default CareerDoubleImg;