import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
   padding: 2rem;
   height: 100%;
   overflow-y: auto;
   .team-modal__main {
        display: flex;
        flex-direction: column;
        gap: 3.2rem;
    }
    .team-modal__heading-title-container {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    .team-modal__heading {
        line-height: 1.5;
        font-family: FreeSans,sans-serif;
        font-size: 1.8rem;
        font-weight: 400;
        letter-spacing: -.01em;
        margin: 0;
        order: 2;
    }
    .team-modal__title {
        line-height: 1.11;
        font-family: NeueMachina-Regular,serif;
        font-feature-settings: "ss12" on;
        font-size: 3.4rem;
        font-weight: 400;
        letter-spacing: 0;
        order: 1;
        margin: 0;
        width: 100%;
        max-width: calc(100% - 6rem);
        text-transform: uppercase;
    }
    .team-modal__image-wrapper {
        aspect-ratio: 1/1;
        width: 100%;
        height: auto;
        overflow: hidden;
        border-radius: 0.4rem;
    }
    .team-modal__image {
        object-position: center;
        object-fit: cover;
        display: block;
        width: 100%;
        height: auto;
    }
    .team-modal__bio {
        margin: 0;
        white-space: pre-line;
        font-family: FreeSansMedium, serif;
        font-weight: 500;
    }
    .locator{
        position: relative;
        top: -30px;
    }

    @media screen and (min-width: 768px){
        padding: 6rem 2rem;
        .team-modal__main {
            gap: 4.2rem;
        }
        .team-modal__heading {
            line-height: 1.1;
            font-size: 2.2rem;
            order: 1;
        }
        .team-modal__title {
            font-size: 5.2rem;
            order: 2;
            max-width: unset;
        }
    }
`;

function TeamModal({para1, para2, para3, para4, name, title, imgsources, src}) {
    return(
        <StyledDiv className="team-modal__main-wrapper">
            <div className="locator"></div>
            <div className="team-modal__main">
                <div className="team-modal__heading-title-container">
                    <h1 className="team-modal__heading">{title}</h1>
                    <div className="team-modal__title">{name}</div>
                </div>
                <div className="team-modal__image-wrapper">
                    <img alt="" sizes="670w" 
                        srcSet={imgsources}
                        src={src} width="670" height="742" decoding="async" data-nimg="1" className="team-modal__image" loading="lazy" style={{color:"transparent"}}/>
                </div>
                <div className="team-modal__bio">
                    {para1} <br/> 
                    <br/>
                    {para2} <br/> 
                    <br/>
                    {para3} <br/> 
                    <br/>
                    {para4}
                </div>
            </div>
        </StyledDiv>
    )
}
export default TeamModal;