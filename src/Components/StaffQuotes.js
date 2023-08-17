import React, { useState } from "react";
import styled from "styled-components";
import Svg from "./Svg";
import leadershipData from "./leadershipData";
import mechanicalData from "./mechanicalData";
import aiconData from "./aconData";
import StaffQuotesFigure from "./StaffQuotesFigure";

const StyledSection = styled.section`
    .quote {
        padding: 0 var(--content-padding);
    }
    .quote__inner {
        max-width: 144rem;
        width: 100%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 4rem;
        gap: 4rem;
    }
    .quote__heading {
        line-height: 1.5;
        font-family: neue-haas-grot-text,sans-serif;
        font-size: 1.8rem;
        font-weight: 400;
        letter-spacing: -.01em;
        margin: 0 0 1.3rem;
    }
    .quote__description {
        line-height: 1.2;
        font-family: neue-haas-grot-text,sans-serif;
        font-size: 1.4rem;
        font-weight: 500;
        letter-spacing: 0;
        margin: 0;
    }
    .quote__content {
        display: flex;
        flex-direction: column;
        max-width: 92.5rem;
    }
    .quote__quotes {
        margin: 0;
        padding: 0;
        list-style: none;
        display: grid;
        grid-template: "a";
        width: 100%;
    }
    .quote__navigation {
        display: flex;
        gap: 1.2rem;
        margin-top: 4rem;
    }
    .quote__navigation-button {
        background-color: transparent;
        padding: 0;
        width: fit-content;
        border: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0;
        margin-left: -1.2rem;
        cursor: pointer;
    }
    .quote__quote {
        transition: opacity .3s ease-in-out,visibility .3s ease-in-out;
        transition-duration: .15s;
        margin: 0;
        grid-area: a;
        opacity: 0;
        visibility: hidden;
    }
    .quote__quote.is-active {
        transition-delay: .15s;
        opacity: 1;
        visibility: visible;
    }

    @media screen and (min-width: 768px){
        .quote__heading {
            line-height: 1.1;
            font-size: 2.2rem;
        }
        .quote__navigation {
            margin-top: 0;
            align-self: flex-end;
            transform: translateY(-100%);
        }
        
    }
    
    @media screen and (min-width: 1024px){
        .quote__inner {
            grid-template-columns: 33rem 1fr;
            gap: 2.4rem;
        }
    }

    @media screen and (min-width: 1280px){
        .quote__content {
            padding-right: 14rem;
        }
        
    }

`;
function StaffQuotes() {
    const [hover, setHover] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [active, setActive] = useState([true, false, false, false])

    const Lee = leadershipData[2]
    const Jerry = leadershipData[1]
    const Chotia = mechanicalData[8]
    const Jenna = aiconData[1]

    function handleForwardClick() {
        if (active[0]) {
            setActive([false, true, false, false])    
        } else if (active[1]) {
            setActive([false, false, true, false])
        } else if (active[2]) {
            setActive([false, false, false, true])
        } else if (active[3]) {
            setActive([true, false, false, false])
        }    
    }

    function handleBackwardClick() {
        if (active[0]) {
            setActive([false, false, false, true])
        } else if (active[1]) {
            setActive([true, false, false, false])
        } else if (active[2]) {
            setActive([false, true, false, false])
        } else if (active[3]) {
            setActive([false, false, true, false])
        } 
    }
    const leeclass = active[0]? "quote__quote is-active" : "quote__quote"
    const jerryclass = active[1]? "quote__quote is-active" : "quote__quote"
    const chotiaclass = active[2]? "quote__quote is-active" : "quote__quote"
    const jennaclass = active[3]? "quote__quote is-active" : "quote__quote"
    return(
        <StyledSection className="section section--large-margin">
            <section className="quote">
                <div id="quote-section" className="section__anchor"></div>
                <div className="quote__inner">
                    <div className="quote__heading-description">
                        <h1 className="quote__heading">Driven by impact</h1>
                        <p className="quote__description">Hear from Figure team members.</p>
                    </div>
                    <div className="quote__content">
                        <ul className="quote__quotes">
                            <li className={leeclass} >
                                <StaffQuotesFigure name={Lee.name} title={Lee.title} src={Lee.src} imgsources={Lee.imgsources} 
                                    blockquote={'“Figure is an incredible company. I’m grateful every day to have the opportunity to work with such a dedicated team on something that can change the world.”'}
                                />
                            </li>
                            <li className={jerryclass} >
                                <StaffQuotesFigure name={Jerry.name} title={Jerry.title} src={Jerry.src} imgsources={Jerry.imgsources}
                                    blockquote={'“For many years I have wondered when humanoid robots will finally be used for real work. Our world class team gives me great confidence that it might be just around the corner.” '}
                                />
                            </li>
                            <li className={chotiaclass} >
                                <StaffQuotesFigure name={Chotia.name} title={Chotia.title} src={Chotia.src} imgsources={Chotia.imgsources}
                                    blockquote={'“Working with the brilliant and passionate team at Figure has already been an incredibly fulfilling experience and I can’t wait to see what the future holds.” '}
                                />
                            </li>
                            <li className={jennaclass} >
                                <StaffQuotesFigure name={Jenna.name} title={Jenna.title} src={Jenna.src} imgsources={Jenna.imgsources}
                                    blockquote={'“At Figure, I have the opportunity to work with an exceptional team in a fast-paced, dynamic environment. I am able to make a significant individual impact and bring my own perspective and background to the table.”'}
                                />
                            </li>

                        </ul>
                        <nav className="quote__navigation" aria-label="Quote Slider Navigation">
                            <button className="quote__navigation-button quote__navigation-button--prev" aria-label="Go to previous quote" onClick={handleBackwardClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                                <Svg caree={'0'} arrowLeft hov={hover}/>
                            </button>
                            <button className="quote__navigation-button quote__navigation-button--next" aria-label="Go to next quote" onClick={handleForwardClick} onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)}>
                                <Svg caree={'0'} arrowRight hov={hover2}/>
                            </button>
                        </nav>
                    </div>
                </div>
            </section>
        </StyledSection>
    )
}
export default StaffQuotes;