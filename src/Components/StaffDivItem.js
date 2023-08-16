import React from "react";
import styled from "styled-components";
import Slider from "./Slider";

const StyledDiv = styled.div`
    .team-module__list-item-button {
        border: none;
        background-color: transparent;
        padding: 0;
        margin: 0;
        display: block;
        text-decoration: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 100%;
        color: #0c0c0c;
    }
    .team-member.team-member--has-bio {
        cursor: pointer;
    }
    .team-member__image {
        width: 100%;
        display: block;
        height: auto;
        aspect-ratio: 335/371;
        border-radius: 0.4rem;
    }
    .team-member--has-bio .team-member__text {
        display: grid;
        grid-template-columns: 1fr ;
    }
    .team-member__text {
        padding-top: 2rem;
        display: block;
    }
    .team-member__name-title-container {
        text-align: left;
        display: block;
    }
    .team-member__name {
        line-height: 1.5;
        font-family: neue-haas-grot-text,sans-serif;
        font-size: 1.8rem;
        font-weight: 400;
        letter-spacing: -.01em;
        margin: 0 0 0.7rem;
        display: block;
    }
    .team-member__title {
        line-height: 1.2;
        font-family: neue-haas-grot-text,sans-serif;
        font-size: 1.4rem;
        font-weight: 500;
        letter-spacing: 0;
        margin: 0;
        display: block;
    }

    @media screen and (min-width: 768px){
        .team-member__name {
            line-height: 1.1;
            font-size: 2.2rem;
        }

    }
`;

function StaffDivItem({name, id, title, imgsources, src, handleClick, state}) {
    const imageDescriptors = imgsources.map(({ src, width }) => `${src} ${width}w`).join(', ');   
    return(
        <StyledDiv className="team-module__list-item-button" aria-controls={`team-modal-${id}`} aria-expanded={state} onClick={handleClick}>
                <span className="team-member team-member--has-bio">
                    <img alt="" sizes="670w" srcSet={imageDescriptors} src={src} width="670" height="742" decoding="async" data-nimg="1" className="team-member__image" loading="lazy" tyle={{color:'transparent'}}
                    />
                    <span className="team-member__text">
                        <Slider icon plus sb
                            text={<span className="team-member__name-title-container">
                                <span className="team-member__name">{name}</span>
                                <span className="team-member__title">{title}</span>
                            </span>}
                        />
                    </span>
                </span>
        </StyledDiv>
    )
}
export default StaffDivItem;