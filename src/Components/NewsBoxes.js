import React, { useState } from "react";
import styled from "styled-components";
import Slider from "./Slider"
const StyledA = styled.a`
  color: #fff;
  position: relative;
  padding: 2.6rem 3.2rem;
  min-height: 22.2rem;
  height: 100%;
  text-decoration: none;
  :hover .news-card__gradient-bg-blur{
    opacity: 1;
  }
  //this styling is used to make the text underline when hovered
  :hover .news-card__heading {
    background-size: 0 0.1rem,100% 0.1rem;
  }
  .news-card__inner {
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    direction: ltr;
  }
  .news-card__source {
  line-height: 1.2;
  font-family: neue-haas-grot-text,sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0;
  margin: 0 0 2.3rem;
  display: block;
  color: white;
  }
  .news-card__heading {
    line-height: 1.5;
    font-family: neue-haas-grot-text,sans-serif;
    font-size: 1.8rem;
    font-weight: 400;
    letter-spacing: -.01em;
    transition: background-size .3s ease-in-out;
    text-transform: none;
    display: inline;
    background: linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,0)),linear-gradient(90deg,#fff,#fff);
    background-size: 100% 0.1rem,0 0.1rem;
    background-position: 100% 100%,0 100%;
    background-repeat: no-repeat;
    color: white;
  }
  .news-card__gradient-bg {
    z-index: 2;
    background: linear-gradient(180deg,#ff38bb 5%,#ff8038 55%,#f5be66 65%,#f1fff7 93%);
  }
  .news-card__black-bg, .news-card__gradient-bg, .news-card__gradient-bg-blur {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
  }
  .news-card__gradient-bg-blur {
    transition: opacity .3s ease-in-out;
    z-index: 3;
    border: 0.2rem solid;
    border-image-source: linear-gradient(180deg,#ff38bb 5%,#ff8038 55%,#f5be66 65%,#f1fff7 93%);
    border-image-slice: 1;
    filter: blur(0.6rem);
    transform: translateZ(0);
    opacity: 0;
  }
  .news-card__black-bg {
    z-index: 2;
    position: absolute;
    top: 0.1rem;
    left: 0.1rem;
    width: calc(100% - 0.2rem);
    height: calc(100% - 0.2rem);
    background-color: #0c0c0c;
  }
  .news-card__top {
    position: relative;
    z-index: 4;
    margin: 0 0 7rem;
  }
  .news-card__bottom {
    position: relative;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: auto;
    width: 100%;
  }
  @media screen and (min-width: 768px){
    min-height: 31.4rem;

    .news-card__source {
      margin: 0 0 3.2rem;
    }
    .news-card__heading {
      line-height: 1.1;
      font-size: 2.2rem;
    }
  }

`;
function NewsBoxes ({href, text, text2}){
  const [hover, setHover] = useState(false)
    function onEnter() {
        setHover(true)
    }
    function onLeave() {
        setHover(false)
    }
    return(
      <StyledA title="Read Now" target="_blank" href={href} onMouseEnter={onEnter} onMouseLeave={onLeave}>
          <article className="news-card__inner">
            <div className="news-card__gradient-bg"></div>
            <div className="news-card__gradient-bg-blur"></div>
            <div className="news-card__black-bg"></div>
            <div className="news-card__top">
              <span className="news-card__source">{text2}</span>
              <h1 className="news-card__heading">{text}</h1>
            </div>
            <div className="news-card__bottom">
              <Slider news={hover} icon arrowUpRight text={"Read Now"} light hovered={hover} slide bordercolor={'white'} fw={"600"} />
            </div>
          </article>
      </StyledA>
    )
}
export default NewsBoxes;