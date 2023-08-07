import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import HumanoidFull from "../assets/Figure_humanoid__2_.webp"
import HumanoidMobile from "../assets/Humanoid_Mobile.webp"

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
    .human-form-item {
        text-align: right;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        gap: 1rem;
        padding: 1rem 0 0;
        border-top: 0.1rem solid hsla(0,0%,5%,.1);
    }
    .human-form-item__title {
        line-height: 1.2;
        font-family: FreesansBold,sans-serif;
        font-size: 1.4rem;
        font-weight: 500;
        letter-spacing: 0;
    }
    .human-form-item__description {
        line-height: 1;
        font-family: sans-serif,serif;
        font-size: 4.2rem;
        font-weight: bold;
        font-feature-settings: "ss12" on;
        letter-spacing: -.01em;
        text-transform: uppercase;
        background: linear-gradient(-90deg,#ff38bb 4.25%,#ff8038 51.61%,#f5be66 80.43%,#f4dca8 93.03%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        white-space: nowrap;
    }

    @media screen and (min-width: 1024px){
        .human-form-module__inner {
            grid-template-columns: minmax(0,.5fr) minmax(0,.5fr);
        }
        .human-form-item__description {
            font-size: 14.5rem;
            line-height: 14.5rem;
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
        .human-form-item:first-child {
            border-top: none;
        }
        .human-form-item {
            gap: 2rem;
            padding: 2rem 0 0;
        }
        .human-form-item__description {
            font-size: 8.5rem;
            font-size: 14.5rem;
        }
    }
`;
function HumanFor () {
    const deay = 600;
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

    const humanform = useRef(null)
    const humanform1 = useRef(null)
    const humanform2 = useRef(null)
    const humanform3 = useRef(null)
    const humanform4 = useRef(null)
    const humanform5 = useRef(null)
  
    useEffect(() => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Adjust as needed
      };
      const humanformel = humanform.current;
      function callback(entries, observer) {
            entries.forEach(entry => {
              if (entry.isIntersecting && !humanForm) {
                    // console.log('height');
                    setHumanForm(true);
                    for (let i = 0; i <= 5; i++){
                        setTimeout(() => {
                            setHeight(i)
                        }, i * (deay / 5));
                    }
                }
            });
        }
  
      const observer = new IntersectionObserver(callback, options);
  
      if (humanformel) {
        observer.observe(humanformel);
      }
  
      return () => {
        if (humanformel) {
          observer.unobserve(humanformel);
        }
      };
    }, [humanForm]);

    
    useEffect(() => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Adjust as needed
      };
      const humanformel1 = humanform1.current;
      function callback(entries, observer) {
            entries.forEach(entry => {
              if (entry.isIntersecting && !humanForm1) {
                    // console.log('payload');
                    setHumanForm1(true);
                    for (let i = 0; i <= 20; i++){
                        setTimeout(() => {
                            setPayload(i)
                        }, i * (deay / 25));
                    }
                }
            });
        }
  
      const observer = new IntersectionObserver(callback, options);
  
      if (humanformel1) {
        observer.observe(humanformel1);
      }
  
      return () => {
        if (humanformel1) {
          observer.unobserve(humanformel1);
        }
      };
    }, [humanForm1]);
    
    
    useEffect(() => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Adjust as needed
      };
      const humanformel2 = humanform2.current;
      function callback(entries, observer) {
            entries.forEach(entry => {
              if (entry.isIntersecting && !humanForm2) {
                    // console.log('weight');
                    setHumanForm2(true);
                    for (let i = 0; i <= 60; i++){
                        setTimeout(() => {
                            setWeight(i)
                        }, i * (deay / 60));
                    }
                }
            });
        }
  
      const observer = new IntersectionObserver(callback, options);
  
      if (humanformel2) {
        observer.observe(humanformel2);
      }
  
      return () => {
        if (humanformel2) {
          observer.unobserve(humanformel2);
        }
      };
    }, [humanForm2]);


    useEffect(() => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Adjust as needed
      };
      const humanformel3 = humanform3.current;
      function callback(entries, observer) {
            entries.forEach(entry => {
              if (entry.isIntersecting && !humanForm3) {
                    // console.log('runtime');
                    setHumanForm3(true);
                    for (let i = 0; i <= 5; i++){
                        setTimeout(() => {
                            setRuntime(i)
                        }, i * (deay / 5) );
                    }
                }
            });
        }
  
      const observer = new IntersectionObserver(callback, options);
  
      if (humanformel3) {
        observer.observe(humanformel3);
      }
  
      return () => {
        if (humanformel3) {
          observer.unobserve(humanformel3);
        }
      };
    }, [humanForm3]);        

    useEffect(() => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Adjust as needed
      };
      const humanformel4 = humanform4.current;
      function callback(entries, observer) {
            entries.forEach(entry => {
              if (entry.isIntersecting && !humanForm4) {
                    // console.log('speed');
                    setHumanForm4(true);
                    const increment = 0.1;
                    let currentNumber = 0.0;
                
                    function printNumber() {
                        if (currentNumber <= 1.2) {
                            setSpeed([currentNumber.toFixed(1)]);
                            currentNumber += increment;
                            setTimeout(printNumber, currentNumber.toFixed(1) * (deay / 12));
                        }
                    }
                
                    printNumber();                   
                }
            });
        }
  
      const observer = new IntersectionObserver(callback, options);
  
      if (humanformel4) {
        observer.observe(humanformel4);
      }
  
      return () => {
        if (humanformel4) {
          observer.unobserve(humanformel4);
        }
      };
    }, [humanForm4]);


    useEffect(() => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Adjust as needed
      };
      const humanformel5 = humanform5.current;
      function callback(entries, observer) {
            entries.forEach(entry => {
              if (entry.isIntersecting && !humanForm5) {
                    // console.log('system');
                    setHumanForm5(true);
                    const increment = 1;
                    let currentNumber = 0;

                    const stringsArray = ["ELECTRIC", "SKYLINE", "MECHANIC", "HYDROPOW", "SOLAR", "GASOLINE",  "ELECTRIC"];

                    function printletter() {
                        if (currentNumber <= stringsArray.length - 1) {
                            setSystem(stringsArray[currentNumber])
                            currentNumber += increment;
                            setTimeout(printletter, (deay / stringsArray.length));
                        }
                    }
                    printletter()
                }
            });
        }
  
      const observer = new IntersectionObserver(callback, options);
  
      if (humanformel5) {
        observer.observe(humanformel5);
      }
  
      return () => {
        if (humanformel5) {
          observer.unobserve(humanformel5);
        }
      };
    }, [humanForm5, system]);


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
                        <div className="human-form-item" ref={humanform}>
                            <dt className="human-form-item__title">Height</dt>
                            <dd className="human-form-item__description">
                                <span className="stats-module__number-shuffler">{height}'6"</span>
                            </dd>
                        </div>
                        <div className="human-form-item" ref={humanform1}>
                            <dt className="human-form-item__title">Payload</dt>
                            <dd className="human-form-item__description">
                                <span className="stats-module__number-shuffler">{payload}kg</span>
                            </dd>
                        </div>
                        <div className="human-form-item" ref={humanform2}>
                            <dt className="human-form-item__title">Weight</dt>
                            <dd className="human-form-item__description">
                                <span className="stats-module__number-shuffler">{weight}kg</span>
                            </dd>
                        </div>
                        <div className="human-form-item" ref={humanform3}>
                            <dt className="human-form-item__title">Runtime</dt>
                            <dd className="human-form-item__description">
                                <span className="stats-module__number-shuffler">{runtime}hr</span>
                            </dd>
                        </div>
                        <div className="human-form-item" ref={humanform4}>
                            <dt className="human-form-item__title">Speed</dt>
                            <dd className="human-form-item__description">
                                <span className="stats-module__number-shuffler" >{speed}M/S</span>
                            </dd>
                        </div>
                        <div className="human-form-item" ref={humanform5}>
                            <dt className="human-form-item__title">System</dt>
                            <dd className="human-form-item__description">
                                <span className="stats-module__number-shuffler">{system}</span>
                            </dd>
                        </div>
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
 export default HumanFor;