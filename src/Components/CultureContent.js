import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Author from "./Author";
import MasterplanNavItem from "./MasterplanNavItem";
import CultureArticle from "./CultureArticle";
const StyledDiv = styled.div`
    padding: 0 var(--content-padding) 6rem;

    .rich-text-page-content__content-inner {
        max-width: 256rem;
        margin: 0 auto;
        width: 100%;
    }
   
    .side-navigation {
        display: none;
    }
    .custom-select {
        position: relative;
        background: #fff;
        box-shadow: 0 0.4rem 2rem hsla(0,0%,5%,.08);
        border-radius: 0.3rem;
        overflow: hidden;
    }
    .side-navigation__select {
        display: block;
    }
    .custom-select__el {
        line-height: 1.2;
        font-family: neue-haas-grot-text,sans-serif;
        font-size: 1.4rem;
        font-weight: 500;
        letter-spacing: 0;
        background-color: #fff;
        font-family: pp-neue-machina-plain,serif;
        text-transform: uppercase;
        height: 4.2rem;
        line-height: 4.2rem;
        width: 100%;
        border: none;
        padding: 0 5rem 0 1rem;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        color: #0c0c0c;
    }
    .custom-select__caret {
        position: absolute;
        top: 50%;
        right: 2rem;
        transform: translateY(-50%);
        pointer-events: none;
        width: 1.2rem;
    }
    .rich-text-page-content__rich-text-area{
        white-space: break-spaces;
    }
    .rich-text-page-content__rich-text-area>:first-child {
        margin-top: 6rem;
    }
    .rich-text-paragraph {
        font-family: neue-haas-grot-text,sans-serif;
        font-weight: 400;
        font-size: 1.7rem;
        line-height: 160%;
        letter-spacing: -.01em;
    }
    .rich-text-heading-anchor {
        position: absolute;
        top: -15rem;
        left: 0;
    }
    .rich-text-inline-static-timeline, .rich-text-ol li, .rich-text-ul li {
        margin: 3rem 0;
    }
    .rich-text-ol, .rich-text-ul {
        padding-left: 2.4rem;
    }
    .rich-text-inline-accordion {
        margin: 5rem 0;
    }
    .inline-accordion {
        counter-reset: inline-accordion-counter;
    }
    .rich-text-heading--h2 {
        line-height: 1.1;
        font-family: neue-haas-grot-text,sans-serif;
        font-size: 2.4rem;
        font-weight: 400;
        letter-spacing: -.01em;
        margin: 6rem 0 2rem;
    }
    .rich-text-heading {
        position: relative;
    }
    .rich-text-page-content__side-nav-container {
        transition: opacity .3s ease-in-out;
        z-index: 250;
        position: fixed;
        top: 1.5rem;
        width: calc(100% - 14rem);
        left: 7rem;
    }
    .not-active {
        opacity: 0;
        pointer-events: none;
    }
    .inline-accordion__kicker {
        font-family: neue-haas-grot-text,sans-serif;
        font-weight: 400;
        font-size: 1.7rem;
        line-height: 160%;
        letter-spacing: -.01em;
        font-weight: 500;
        margin: 0 0 3rem;
    }
    
    @media screen and (min-width: 768px){
        padding: 0 var(--content-padding) 12rem;
        
        .side-navigation__select .custom-select__el {
            height: 3.6rem;
        }
        .rich-text-page-content__rich-text-area>:first-child{
            margin-top: 9rem;
        }
        .rich-text-heading--h2 {
            font-size: 3.6rem;
            margin: 12rem 0 3rem;
        }
        .rich-text-paragraph {
            font-size: 1.9rem;
        }
        .rich-text-page-content__side-nav-container {
            width: 28rem;
            top: 4rem;
            left: auto;
            right: 4rem;
        }
        .inline-accordion__kicker {
            font-size: 1.9rem;
        }

    }
    
    @media screen and (min-width: 1024px){
        .rich-text-page-content__content-inner {
            display: grid;
            grid-gap: 6rem;
            gap: 6rem;                                        
            grid-template-columns: minmax(50rem,1fr) minmax(0,45rem);
        }
       
        .side-navigation {
            display: block;
        }
        .side-navigation__select {
            display: none;
        }
        .rich-text-page-content__rich-text-area>:first-child {
            margin-top: 12rem;
        }
        .rich-text-page-content__side-nav-container {
            width: 100%;
            position: -webkit-sticky;
            position: sticky;
            height: max-content;
            right: auto;
            top: 2.5rem;
            margin-top: 10rem;
        }

    }
    @media screen and (min-width: 1280px){
        .rich-text-page-content__content-inner {
            gap: 14rem;
        }

    }

`;

function CultureContent() {
    const customselectel = useRef(null)
   
    const [divStates, setDivState] = useState([true, false, false, false, false])

    useEffect(() => {
        const customselectelref = customselectel.current

        function handleScroll() {
            const divs = document.querySelectorAll('.rich-text-heading--h2');

            divs.forEach((div, index) => {
                const rect = div.getBoundingClientRect();

                if (rect.top < window.innerHeight * 0.3) {
                    handleDivScroll(index);
                }
            });
        }

        function handleDivScroll(index) {
            if (index === 0) {
                setDivState([true, false, false, false, false])
                customselectelref.value = "origin"
            } else if (index === 1) {
                setDivState([false, true, false, false, false])
                customselectelref.value = "mission"
            } else if (index === 2) {
                setDivState([false, false, true, false, false])
                customselectelref.value = "vision"
            } else if (index === 3) {
                setDivState([false, false, false, true, false])
                customselectelref.value = "values"
            } else if (index === 4) {
                setDivState([false, false, false, false, true])
                customselectelref.value = "conclusion"
            }
        }
        function handleChange() {
            const newValue = customselectelref.value;
            window.location.hash = newValue;
        }
        
        customselectelref.addEventListener('change', handleChange) ;
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);           
            customselectelref.removeEventListener('change', handleChange) ;
        };
    }, []);

    return(
        <StyledDiv className="rich-text-page-content__content ">
            <div className=" rich-text-page-content__content-inner">
                <div className="rich-text-page-content__article-author-container">
                    <article className="rich-text-page-content__rich-text-area">
                        <h2 className="rich-text-heading rich-text-heading--h2">
                            <span id="origin" className="rich-text-heading-anchor"></span>
                            Origin
                        </h2>
                        <p className="rich-text-paragraph">Through the intersection of AI and Robotics, we are building general purpose humanoid robots. These robots will eliminate the need for unsafe and undesirable jobs, allowing future generations to live happier, more purposeful lives.</p>
                        <p className="rich-text-paragraph">However, this is no easy feat — in the entirety of human history, we have not yet seen the successful commercialization of humanoid robots. The journey to build Figure at a global scale will take decades, but if successful, our team has the opportunity to make an unprecedented impact on humankind.</p>
                        <p className="rich-text-paragraph">Here, you will find Figure’s culture, as laid out in our Mission, Vision, and Values. The culture we build will make or break our future. The following values and beliefs define our identity as a company - how we work, make decisions, treat each other, and operate every day. We will hire, recognize, reward, and fire based on these cultural values. It’s important for me to disclose that our culture is not for everyone. If you believe in what you read below, then you are likely to thrive here. If you do not, Figure is not for you.</p>
                        <h2 className="rich-text-heading rich-text-heading--h2">
                            <span id="mission" className="rich-text-heading-anchor"></span>
                            Mission
                        </h2>
                        <p className="rich-text-paragraph">Figure's mission is to expand human capabilities through advanced AI.</p>
                        <p className="rich-text-paragraph">Figure is a mission-focused company. We aspire to create a better life for future generations and will dedicate our time and resources to this pursuit.</p>
                        <h2 className="rich-text-heading rich-text-heading--h2">
                            <span id="vision" className="rich-text-heading-anchor"></span>
                                Vision
                        </h2>
                        <p className="rich-text-paragraph">Figure’s vision is to deploy autonomous humanoid robots on a global scale to solve challenges within the labor economy.</p>
                        <p className="rich-text-paragraph">We envision a future where humanoid robots are the universal interface in the physical world. In the early days, our humanoid will be deployed into the workforce to perform corporate tasks in areas with significant labor shortages and jobs that are undesirable or unsafe. Longer term, humanoids will play an important role in many areas such as assisting individuals in the home, caring for the elderly, and building new worlds on other planets.</p>
                        <h2 className="rich-text-heading rich-text-heading--h2">
                            <span id="values" className="rich-text-heading-anchor"></span>
                                Values
                        </h2>
                        <p className="rich-text-paragraph">We are looking for the overachievers — the special few who want to put a dent in this world. We are not looking for candidates seeking to minimize their workload or maximize compensation. There are plenty of high paying, cushy jobs out there — that’s not what we stand for. Our culture is deliberately cultivated to amplify high performance and to push ourselves to operate at the best of our ability every day.</p>
                        <p className="rich-text-paragraph">In parallel, we will constantly fight to prevent corporate bloat — if we become bureaucratic, morale will die and so will the business. In order to achieve our mission, it is critical to stay focused. The company will always act in the best interest of humanity, behave ethically, and treat others fairly. We will not support social activism, assume negative intent, treat others unfairly, or take on causes outside of our core mission. We are all here to do one job and that is to bring an impactful, useful product to market. </p>
                        <p className="rich-text-paragraph">In parallel, we will constantly fight to prevent corporate bloat — if we become bureaucratic, morale will die and so will the business. In order to achieve our mission, it is critical to stay focused. The company will always act in the best interest of humanity, behave ethically, and treat others fairly. We will not support social activism, assume negative intent, treat others unfairly, or take on causes outside of our core mission. We are all here to do one job and that is to bring an impactful, useful product to market. </p>
                        <div className="rich-text-inline-accordion">
                            <div className="inline-accordion">
                                <div className="inline-accordion__kicker">Here are our 5 core values that we live by every day:</div>
                                <div className="inline-accordion__items">
                                    <CultureArticle header={'Move Fast & Be Technically Fearless'} subtext={"Hesitation is the enemy of momentum. We are tackling today's most complex technological challenges by testing, experimenting, and taking calculated risks to embrace the unknown without fear of failure. "}/>
                                    <CultureArticle header={'Product First, Mission Focused'} subtext={'Our product and our mission are one in the same: to bring a commercially viable humanoid to the market. We are builders, designers, and engineers united by a commitment to that mission, avoiding distraction and unrelated activities to remain laser-focused on shipping a safe, high quality product.'}/>
                                    <CultureArticle header={'Aggressively Optimistic'} subtext={'Building Figure won’t be an easy win; it will require decades of commitment and ingenuity. We’re humbled by our mission, and aspire to remain optimistic even in the face of enormous hurdles.'}/>
                                    <CultureArticle header={'Maximize Future Impact'} subtext={'We have what it takes to build the most groundbreaking company on the planet—to create an inspiring future for generations to come, with improved access to goods and services, safer working conditions, and more opportunity for fulfilling work. Our focus is on what we can achieve 5, 10, 20+ years from now, not the near-term wins.'}/>
                                    <CultureArticle header={'Championship Mindset'} subtext={'To address the extraordinary demands of our work, we believe in operating as a winning team. We are in the trenches together, collaborating in-person, and pushing each other to the highest levels of performance.'}/>
                                </div>
                            </div>
                        </div>
                        <h2 className="rich-text-heading rich-text-heading--h2">
                            <span id="conclusion" className="rich-text-heading-anchor"></span>
                            Conclusion
                        </h2>
                        <p className="rich-text-paragraph">I am hopeful that this document will instill the importance of our culture to our current employees, as well as attract new team members with similar beliefs. Figure is a mission-focused company, and clarity around our culture will empower the team to make the highest-impact decisions for the benefit of our long-term success.</p>
                        <p className="rich-text-paragraph">If you share our commitment to building a better future, please apply on our <a className="rich-text-link" href="https://figure-ai.vercel.app/careers">careers page.</a></p>
                        <p className="rich-text-paragraph">With a strong, undivided culture, there is a potential to change the world.</p>
                    </article>
                    <Author/>
                </div>
                {/* TOGGLE IS ACTIVE STATE */}
                <div className="rich-text-page-content__side-nav-container">
                    <nav className="side-navigation rich-text-page-content__side-nav">
                        <MasterplanNavItem no={'01'} activeness={divStates[0]} text={'Origin'} href={'/culture#origin'} title={'Origin'} />
                        <MasterplanNavItem no={'02'} activeness={divStates[1]} text={'Mission'} href={'/culture#mission'} title={'Mission'} />
                        <MasterplanNavItem no={'03'} activeness={divStates[2]} text={'Vision'} href={'/culture#vision'} title={'Vision'} />
                        <MasterplanNavItem no={'04'} activeness={divStates[3]} text={'Values'} href={'/culture#values'} title={'Values'} />
                        <MasterplanNavItem no={'05'} activeness={divStates[4]} text={'Conclusion'} href={'/culture#conclusion'} title={'Conclusion'} />
                    </nav>
                    <div className="custom-select side-navigation__select">
                        <select className="custom-select__el" ref={customselectel}>
                            <option value="origin">01 Origin</option>
                            <option value="mission">02 Mission</option>
                            <option value="vision">03 Vision</option>
                            <option value="values">04 Values</option>
                            <option value="conclusion">05 Conclusion</option>
                        </select>
                        <svg viewBox="0 0 14 8" width="12" height="6" fill="none" xmlns="http://www.w3.org/2000/svg" className="custom-select__caret">
                            <path d="M1 0.5L7 6.5L13 0.5" stroke="currentColor"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </StyledDiv>
    )
}
export default CultureContent;
