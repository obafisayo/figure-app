import React, { useState } from "react";
import styled from "styled-components";
import HumanoidFull from "../assets/Figure_humanoid__2_.webp"
import HumanoidMobile from "../assets/Humanoid_Mobile.webp"
import HumanFormText from "./HumanFormText";
import EnteredDiv from "./EnteredDiv";

const StyledSection = styled.section`
  .human-form-module {
      position: relative;
      padding: 8rem var(--content-padding) 2.5rem;
  }
  .section--tan {
      background-color: #f6f6ef;
  }
  .section__anchor {
      position: absolute;
      top: -7.2rem;
  }
  .human-form-module__inner {
      display: grid;
      grid-template-columns: 1fr;
      position: relative;
      z-index: 2;
      grid-gap: 9rem;
      gap: 9rem;
      margin: 0 auto;
      max-width: 256rem;
  }
  .human-form-module__image {
      position: absolute;
      bottom: 0;
      left: 0;
      max-width: 37.5rem;
      width: 100%;
      height: 60rem;
      object-fit: contain;
      object-position: left bottom;
      z-index: 1;
      aspect-ratio: 800/1330;
  }
  .human-form-module__heading-description {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      width: 100%;
  }
  .human-form-module__heading {
      line-height: 1;
      font-family: NeueMachina-Regular,serif;
      font-size: 4.2rem;
      font-weight: 400;
      font-feature-settings: "ss12" on;
      letter-spacing: -.01em;
      text-transform: uppercase;
      margin: 0;
  }
  .human-form-module__description {
      line-height: 1.5;
      font-family: Freesans,sans-serif;
      font-size: 1.4rem;
      letter-spacing: -.01em;
      margin: 0;
  }
  .human-form-module__items {
      margin: 0;
      padding: 0;
  }

  @media screen and (min-width: 1024px){
      .human-form-module__inner {
          grid-template-columns: minmax(0,.5fr) minmax(0,.5fr);
      }
  }

  @media screen and (min-width: 768px) {
    .human-form-module {
        padding: 16rem var(--content-padding) 2.5rem;
    }
    .section__anchor {
        top: -12.8rem;
    }
    .human-form-module__inner {
        gap: 0;
    }
    .human-form-module__image {
        max-width: 100%;
        width: 100%;
        height: 90%;
        object-position: bottom center;
        aspect-ratio: 1440/1169;
    }
    .human-form-module__heading-description {
        gap: 3.2rem;
    }
    .human-form-module__heading {
        font-size: 8.5rem;
    }
    .human-form-module__description {
        font-size: 1.6rem;
    }
    .human-form-module__items {
        padding: 9rem 0 0;
    }
  }
`;
function HumanForms (){
  const delay = 600;
  const [humanForm, setHumanForm] = useState(false);
  const [humanForm1, setHumanForm1] = useState(false);
  const [humanForm2, setHumanForm2] = useState(false);
  const [humanForm3, setHumanForm3] = useState(false);
  const [humanForm4, setHumanForm4] = useState(false);
  const [humanForm5, setHumanForm5] = useState(false);

  const [height, setHeight] = useState(0);
  const [payload, setPayload] = useState(0);
  const [weight, setWeight] = useState(0);
  const [runtime, setRuntime] = useState(0);
  const [speed, setSpeed] = useState([]);
  const [system, setSystem] = useState("");

  function heightEntered() {
    if (!humanForm) {
      setHumanForm(true);
      for (let i = 0; i <= 5; i++){
        setTimeout(() => {
            setHeight(i)
        }, i * (delay / 5));
      }
    }
  }

  function payloadEntered() {
    if (!humanForm1) {
      setHumanForm1(true);
      for (let i = 0; i <= 20; i++){
        setTimeout(() => {
            setPayload(i)
        }, i * (delay / 20));
      }
    }
  }

  function weightEntered() {
    if (!humanForm2) {
      setHumanForm2(true);
      for (let i = 0; i <= 60; i++){
        setTimeout(() => {
            setWeight(i)
        }, i * (delay / 60));
      }
    }
  }

  function runtimeEntered() {
    setHumanForm3(true);
    if (!humanForm3) {
      for (let i = 0; i <= 5; i++){
        setTimeout(() => {
            setRuntime(i)
        }, i * (delay / 5) );
      }
    }
  }

  function speedEntered() {
    if (!humanForm4) {
      setHumanForm4(true);
      const increment = 0.1;
      let currentNumber = 0.0;
  
      function printNumber() {
        if (currentNumber <= 1.2) {
          setSpeed([currentNumber.toFixed(1)]);
          currentNumber += increment;
          setTimeout(printNumber, currentNumber.toFixed(1) * (delay / 12));
        }
      }
  
      printNumber();  
    }
  }

  function systemEntered() {
    if (!humanForm5) {
      setHumanForm5(true);
      const increment = 1;
      let currentNumber = 0;

      const stringsArray = ["ELECTRIC", "SKYLINE", "MECHANIC", "HYDROPOW", "SOLAR",'ABHORRED', 'OCCUPANT', 'OBEDIENCE', 'INTERN',"GASOLINE",  "ELECTRIC"];

      function printletter() {
          if (currentNumber <= stringsArray.length - 1) {
            setSystem(stringsArray[currentNumber])
            currentNumber += increment;
            setTimeout(printletter, (delay / stringsArray.length));
          }
      }
      printletter()
    }
  }       

  return (
    <StyledSection>
      <section className="section human-form-module section--with-background section--tan section--human-form-module">
        <div id="introducing-figure-01" className="section__anchor"></div>
        <div className="human-form-module__inner">
          <div className="human-form-module__heading-description">
              <h1 className="human-form-module__heading">Introducing Figure 01</h1>
              <p className="human-form-module__description">The world’s first commercially-viable autonomous humanoid robot</p>
          </div>
          <dl className="human-form-module__items" >
            <EnteredDiv element={<HumanFormText title={'Height'} value={`${height}'6"`}/>} threshold={0.5} whenDivIsentered={heightEntered} />
            <EnteredDiv element={<HumanFormText title={'Payload'} value={`${payload}kg`}/>} threshold={0.5} whenDivIsentered={payloadEntered} />
            <EnteredDiv element={<HumanFormText title={'Weight'} value={`${weight}kg`}/>} threshold={0.5} whenDivIsentered={weightEntered} />
            <EnteredDiv element={<HumanFormText title={'Runtime'} value={`${runtime}kg`}/>} threshold={0.5} whenDivIsentered={runtimeEntered} />
            <EnteredDiv element={<HumanFormText title={'Speed'} value={`${speed}M/S`}/>} threshold={0.5} whenDivIsentered={speedEntered} />
            <EnteredDiv element={<HumanFormText title={'System'} value={`${system}`}/>} threshold={0.5} whenDivIsentered={systemEntered} />
          </dl>
        </div>
        <picture>
            <source srcSet={HumanoidFull} media="(min-width: 1440px)" />
            <source srcSet={HumanoidFull} media="(min-width: 768px)" />
            <img className="human-form-module__image" src={HumanoidMobile} width="800" height="1330" alt="" />
        </picture>
      </section>
    </StyledSection>
  )
}
export default HumanForms;