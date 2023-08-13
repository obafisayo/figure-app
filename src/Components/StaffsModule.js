import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import StaffDivItem from "./StaffDivItem";
import TeamModal from "./TeamModal";
import ModalButton from "./ModalButton";
import leadershipData from "./leadershipData";
import aiconData from "./aconData";
import designData from "./designData";
import platformData from "./platformData";
import mechanicalData from "./mechanicalData";
import itrefData from "./itrefData";

const StyledSection = styled.section`
    .team-module {
        padding: 0 var(--content-padding);
    }
    .team-module__inner {
        margin: 0 auto;
        width: 100%;
        max-width: 256rem;
    }
    .team-module__heading {
        line-height: 1.1;
        font-family: FreeSansMedium,sans-serif;
        font-size: 2.4rem;
        font-weight: 400;
        letter-spacing: -.01em;
        margin: 0;
    }
    .team-module__filters-nav {
        margin-top: 1.6rem;
        position: relative;
        overflow: hidden;
        margin-left: calc(var(--content-padding)*-1);
        width: calc(100% + var(--content-padding)*2);
        padding: 0 var(--content-padding);
    }
    .team-module__filters-inner {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        overflow: auto;
        padding: 0 calc(var(--content-padding)*2) 0 var(--content-padding);
        margin-left: calc(var(--content-padding)*-1);
        width: calc(100% + var(--content-padding)*2);
    }
    .team-module__filters-nav-button.is-active {
        text-decoration: underline;
        opacity: 1;
    }
    .team-module__filters-nav-button:not(:last-child) {
        margin-right: 2.4rem;
    }
    .team-module__filters-nav-button {
        transition: opacity .3s ease-in-out;
        line-height: 1.2;
        font-family: FreeSansMedium,sans-serif;
        font-size: 1.4rem;
        font-weight: 500;
        letter-spacing: 0;
        border: none;
        cursor: pointer;
        background-color: transparent;
        padding: 1rem 0;
        margin: 0;
        display: block;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        text-decoration: none;
        color: #0c0c0c;
        opacity: .5;
        white-space: nowrap;
    }
    .team-module__filters-nav:after {
        display: block;
        content: "";
        width: 6.6rem;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 2;
        background: linear-gradient(90deg,hsla(0,0%,100%,0),#fff);
        pointer-events: none;
    }
    .team-module__list {
        margin: 1.7rem 0 0 calc(var(--content-padding)*-1);
        list-style: none;
        grid-template-columns: 1fr;
        column-gap: 2rem;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        overflow: auto;
        padding: 0.1rem var(--content-padding) 2rem;
        width: calc(100% + var(--content-padding)*2);
    }
    .team-modal.is-active {
        opacity: 1;
        visibility: visible;
    }
    .team-modal {
        transition: opacity .3s ease-in-out,visibility .3s ease-in-out;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 200;
        display: flex;
        justify-content: flex-end;
        background-color: hsla(0,0%,5%,.2);
        opacity: 0;
        visibility: hidden;
    }
    .team-modal.is-active .team-modal__content {
        transform: translateX(0);
    }
    .team-modal__content {
        transition: transform .3s ease-in-out;
        position: relative;
        transform: translateX(100%);
        width: 100%;
        max-width: 48rem;
        background-color: #f6f6ef;
    }
    .team-moudle__list-item{
        flex: 0 0 24.5rem;
    }

    @media screen and (min-width: 768px){
        .team-module__heading {
            font-size: 3.6rem;
        }
        .team-module__filters-nav {
            margin-left: 0;
            width: 100%;
        }
        .team-module__filters-inner {
            padding: 0;
        }
        .team-module__list {
            overflow: visible;
            width: 100%;
            padding: 0;
            display: grid;
            grid-row-gap: 6rem;
            row-gap: 6rem;
            margin: 6rem 0 0;
            grid-template-columns: repeat(3,1fr);
        }

    }


    @media (min-width: 1024px){
        .team-module__list {
            grid-template-columns: repeat(4,1fr);
        }

    }
`;

function StaffsModule() {
    const [state, setState] = useState(false)
    const [data, setData] = useState(leadershipData)
    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [para1, setpara1] = useState("")
    const [para2, setpara2] = useState("")
    const [para3, setpara3] = useState("")
    const [para4, setpara4] = useState("")
    const [img, setImg] = useState("")
    const [src, setSrc] = useState("")
    const [idState, setIdState] = useState("")

    const teamModalRef = useRef(null)
    const teamModalRef1 = useRef(null)
    const leadershipref = useRef(null)
    const designref = useRef(null)
    const mechanicalref = useRef(null)
    const platformref = useRef(null)
    const aiconref = useRef(null)
    const itref = useRef(null)

    function handleModalButton() {
        setState(prevState => !prevState)
        const teamModalRefEl = teamModalRef.current
        teamModalRefEl.classList.remove('is-active')
        document.body.classList.remove('is-unscrollable')
    }
    
    function HandleStaffClick(id) {
        const teamModalRefEl = teamModalRef.current
        teamModalRefEl.classList.toggle('is-active')
        document.body.classList.add('is-unscrollable')
        document.querySelector('.locator').scrollIntoView({ behavior: "instant" })
        setState(prevState => !prevState)
        setIdState(id);
    }

    function handleNavClick(removeLeadership, addLeadership, removeDesign, addDesign, removeMechanical, addMechanical, removePlatform, addPlatform, removeAicon, addAicon, removeItref, addItref) {
        removeLeadership && leadershipref.current.classList.remove('is-active')
        removeDesign && designref.current.classList.remove('is-active')
        removeMechanical && mechanicalref.current.classList.remove('is-active')
        removePlatform && platformref.current.classList.remove('is-active')
        removeAicon && aiconref.current.classList.remove('is-active')
        removeItref && itref.current.classList.remove('is-active')
        addLeadership && leadershipref.current.classList.add('is-active')
        addLeadership && setData(leadershipData)
        addDesign && designref.current.classList.add('is-active')
        addDesign && setData(designData)
        addMechanical && mechanicalref.current.classList.add('is-active')
        addMechanical && setData(mechanicalData)
        addPlatform && platformref.current.classList.add('is-active')
        addPlatform && setData(platformData)
        addAicon && aiconref.current.classList.add('is-active')
        addAicon && setData(aiconData)
        addItref && itref.current.classList.add('is-active')
        addItref && setData(itrefData)
    }
    const dataCards = data.map(item => {
        return (
            <li className="team-moudle__list-item" key={item.id} >
                <StaffDivItem handleClick={() => HandleStaffClick(item.id)} state={state}
                    {...item}
                />
            </li>
        )
    })
    useEffect(()=> {
        const targetElement = data.find((element) => element.id === idState)
        function teamloader(){
            setpara1(targetElement.para1)
            setpara2(targetElement.para2)
            setpara3(targetElement.para3)
            setpara4(targetElement.para4)
            setName(targetElement.name)
            setTitle(targetElement.title)
            setImg(targetElement.imgsources.map(({ src, width }) => `${src} ${width}w`).join(', '))
            setSrc(targetElement.src)
        }
        if (targetElement){
            teamloader()
        }
        
    }, [idState, data])
    return(
        <StyledSection className="section section--large-margin">
           <section className="team-module">
                <div id="our-team" className="section__anchor"></div>
                <div className="team-module__inner">
                    <h1 className="team-module__heading">Our Team</h1>
                    <nav className="team-module__filters-nav" aria-label="Filtering options for team members">
                        <div className="team-module__filters-inner">
                            {/* toggle active state */}
                            <button className="team-module__filters-nav-button is-active" onClick={() => handleNavClick(false, true, true, false, true, false, true, false, true,false, true, false)} ref={leadershipref}
                            >Leadership</button>
                            <button className="team-module__filters-nav-button" onClick={() => handleNavClick(true, false, false, true, true, false, true, false, true, false, true, false)} ref={designref}
                            >Design</button>
                            <button className="team-module__filters-nav-button" onClick={() => handleNavClick(true, false, true, false, false, true, true, false, true, false, true, false)} ref={mechanicalref}
                            >Mechanical</button>
                            <button className="team-module__filters-nav-button" onClick={() => handleNavClick(true, false, true, false, true, false, false, true, true, false, true, false)} ref={platformref}
                            >Platform HMS</button>
                            <button className="team-module__filters-nav-button" onClick={() => handleNavClick(true, false, true, false, true, false, true, false, false, true, true, false)}ref={aiconref}
                            >AI & Controls</button>
                            <button className="team-module__filters-nav-button" onClick={() => handleNavClick(true, false, true, false, true, false, true, false, true, false, false, true)} ref={itref}
                            >Integration & Test</button>
                        </div>
                    </nav>
                    <ul className="team-module__list">
                        {dataCards}
                    </ul>
                </div>
                {/* shuffle is active, aria-hidden, and id */}
                <div className="team-modal" aria-hidden={state} ref={teamModalRef}>
                    <article id={`team-modal-${idState}`} className="team-modal__content" ref={teamModalRef1}>
                        <ModalButton onClick={handleModalButton} ariaLabel={'Close team member details'}></ModalButton>
                        <TeamModal name={name} title={title} para1={para1} para2={para2} para3={para3} para4={para4} imgsources={img} src={src} />
                    </article>
                </div>
            </section> 
        </StyledSection>
    )
}
export default StaffsModule;