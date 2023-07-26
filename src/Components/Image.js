import React from "react";
import styled from "styled-components";
const StyledSection = styled.div`
    position: relative;
    :not(.section--dark,.section--tan)+.section--full-image {
        margin-top: 4rem;
    }
    .full-image__image {
        width: 100%;
        height: 125vw;
        max-height: 50rem;
        aspect-ratio: 750/650;
        object-fit: cover;
    }
@media screen and (min-width: 768px){
    :not(.section--dark,.section--tan)+.section--full-image {
        margin-top: 8rem;
    }
    .full-image__image {
        aspect-ratio: 2000/1000;
        height: 50vw;
        min-height: 60rem;
        max-height: 90rem;
    }
}
`;
function Image({img1, img2}) {
    return(
        <StyledSection>
            <div id="image-were-engineering-the-humanoid-to-make-humans-capable-of-more" className="section__anchor"></div>
            <picture>
                <source srcSet={img2} media="(min-width: 1440px)"/>
                <source srcSet={img2} media="(min-width: 768px)"/>
                <img src={img1} width="750" height="950" alt="" className="full-image__image" loading="lazy"/>
            </picture>
        </StyledSection>
    )
}
export default Image;