import React from "react";
import styled from "styled-components";
import NewsBoxes from "./NewsBoxes";
const StyledSection = styled.section`
    position: relative;
    background-color: #0c0c0c;
    color: white;
    .section--with-background.section--small-margin {
        padding: 6rem var(--content-padding);
    }
    .section--with-background {
        margin: unset;
    }
    .section--small-margin {
        margin: 6rem 0;
    }
    .section__anchor {
        position: absolute;
        top: -7.2rem;
    }
    .news-module__inner {
        max-width: 256rem;
        width: 100%;
        margin: 0 auto;
    }
    .news-module__heading {
        line-height: 1.1;
        font-family: neue-haas-grot-text,sans-serif;
        font-size: 2.4rem;
        font-weight: 400;
        letter-spacing: -.01em;
        margin: 0 0 4.2rem;
        /* border: 2px solid white; */
        /* color: white; */
    }
    .news-module__items {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 2rem;
        gap: 2rem;
    }

    @media screen and (min-width: 1024px){
        .news-module__items {
            grid-template-columns: repeat(4,1fr);
        }
    }

    @media screen and (min-width: 768px){
        .section--with-background.section--small-margin {
            padding: 12rem var(--content-padding);
        }
        .section--small-margin {
            margin: 12rem 0;
        }
        .section__anchor {
            top: -12.8rem;
        }
        .news-module__heading {
            font-size: 3.6rem;
            margin: 0 0 16rem;
        }
        .news-module__items {
            grid-template-columns: repeat(2,1fr);
        }
    }
`;
function FigureNews (){
    return(
      <StyledSection className="section--small-margin section--with-background">
          <div id="figure-in-the-news" className="section__anchor"></div>
            <div className="news-module__inner">
                <h1 className="news-module__heading">Figure in the news</h1>
                <div className="news-module__items">
                    <NewsBoxes href={"https://www.reuters.com/technology/ai-startup-figure-raises-70-million-build-humanoid-robots-2023-05-24/"} 
                                text={"AI startup Figure raises $70 million to build humanoid robots"}
                                text2={"Reuters"}
                    />
                    <NewsBoxes href={"https://www.fastcompany.com/90859010/the-race-to-build-ai-powered-humanoids-is-heating-up"}
                                text={"The race to build AI-powered humanoids is heating up"}
                                text2={"Fast Company"}
                    />
                    <NewsBoxes href={"https://techcrunch.com/2023/07/17/intel-backs-figures-humanoid-robot-to-the-tune-of-9-million/"}
                                text={"Intel backs Figure’s Humanoid robot to the tune of $9 million"}
                                text2={"TechCrunch"}
                    />
                    <NewsBoxes href={"https://www.axios.com/2023/03/17/robots-humanoid-figure-tesla-robotics-ai"}
                                text={"Humanoid robots are coming"}
                                text2={"Axios"}
                    />
                </div>
          </div>
      </StyledSection>
    )
}
export default FigureNews;