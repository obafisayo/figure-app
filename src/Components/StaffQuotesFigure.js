import React from "react";
import styled from "styled-components";
const StyledFigure = styled.figure`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 0;
    .quote-item__quote {
        line-height: 1.11;
        font-family: pp-neue-machina-plain,serif;
        font-feature-settings: "ss12" on;
        font-size: 1.8rem;
        font-weight: 400;
        letter-spacing: -.01em;
        text-transform: uppercase;
        margin: 0;
    }
    .quote-item__author-info {
        display: grid;
        grid-template-columns: 8rem 1fr;
        grid-gap: 2.3rem;
        gap: 2.3rem;
        align-items: center;
        justify-content: center;
    }
    .quote-item__author-image {
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
    }
    .quote-item__author-title {
        line-height: 1.5;
        font-family: neue-haas-grot-text,sans-serif;
        font-size: 1.4rem;
        letter-spacing: -.01em;
    }
    .quote-item__author {
        line-height: 1.5;
        font-family: neue-haas-grot-text,sans-serif;
        font-size: 1.4rem;
        letter-spacing: -.01em;
        font-weight: 500;
        display: block;
        margin-bottom: 0.5rem;
    }
    .quote-item__author-title {
        line-height: 1.5;
        font-family: neue-haas-grot-text,sans-serif;
        font-size: 1.4rem;
        letter-spacing: -.01em;
    }

    @media screen and (min-width: 768px){
        gap: 4rem;

        .quote-item__quote {
            font-size: 2.4rem;
        }
        .quote-item__author {
            font-size: 1.6rem;
        }
    }
`;

function StaffQuotesFigure({blockquote, name, title, imgsources, src}) {
    const imageDescriptors = imgsources.map(({ src, width }) => `${src} ${width}w`).join(', '); 
    return(
        <StyledFigure className="quote-item">
                <blockquote className="quote-item__quote">{blockquote}</blockquote>
                <div className="quote-item__author-info">
                    <img alt="" sizes="160w" 
                        srcSet={imageDescriptors} 
                        src={src} 
                        width="160" height="160" decoding="async" data-nimg="1" className="quote-item__author-image" loading="lazy"  style={{color: 'transparent'}} 
                    />
                    <figcaption className="quote-item__author-title">
                        <span className="quote-item__author">{name}</span>
                        <span className="quote-item__author-title">{title}</span>
                    </figcaption>
                </div>
        </StyledFigure>
    )
}
export default StaffQuotesFigure;