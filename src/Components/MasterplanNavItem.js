import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    .side-navigation-item__link {
        text-decoration: none;
        color: #0c0c0c;
        background: transparent;
        border-radius: 0;
        padding: 0;
        height: 7.5rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        cursor: pointer;
        border: none;
        border-bottom: 0.1rem solid #cecece;
        text-align: left;
    }
    .is-active .side-navigation-item__link-text {
        background: linear-gradient(90deg,#f5be66,#ff8038 25%,#ff38bb);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }
    .side-navigation-item__link-text {
        line-height: 1.11;
        font-feature-settings: "ss12" on;
        font-size: 1.8rem;
        font-weight: 400;
        letter-spacing: -.01em;
        font-family: pp-neue-machina-plain,serif;
        text-transform: uppercase;
        grid-template-columns: minmax(0,5rem) 1fr;
        line-height: 1;
        width: auto;
    }

    @media (min-width: 768px){
        .side-navigation-item__link-text {
            font-size: 2.4rem;
        }

    }
`;
function MasterplanNavItem({text, title, href, no, activeness}) {
    return(
        // toggle is-active
        <StyledDiv className="side-navigation-item">
            {activeness?
                <a className="side-navigation-item__link is-active" title={title} href={href}>
                    <span className="side-navigation-item__link-text">{no}&nbsp;&nbsp;&nbsp;{text}</span>
                </a>
                :
                <a className="side-navigation-item__link" title={title} href={href}>
                    <span className="side-navigation-item__link-text">{no}&nbsp;&nbsp;&nbsp;{text}</span>
                </a>
            }
        </StyledDiv>
    )
}
export default MasterplanNavItem;