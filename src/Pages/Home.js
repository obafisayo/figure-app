import React from "react";
import styled from "styled-components";
import Video from "../Components/Video";
import aiVideo from "../assets/aiVideo.mp4"
import TextLoader from "../Components/TextLoader";
import Image from "../Components/Image";
import Humanoid_walking_tall  from "../assets/Humanoid_Walking_Mobile_-Tall-.webp"
import Humanoid_walking  from "../assets/Humanoid_Walking.webp"
import potential_walking_tall  from "../assets/potential_walking_tall.webp"
import potential_walking  from "../assets/potential_walking.webp"
import ShortText from "../Components/ShortText";
import FigureNews from "../Components/FigureNews";
import HumanForms from "../Components/HumanForms";
import EnteredDiv from "../Components/EnteredDiv";

const StyledMain = styled.main`
    display: block;
`;

function Home() {
  function homeIsEntered() {
    document.body.classList.add('hero-is-shown');
    document.querySelector(".is-home").classList.remove('is-home-link-shown');
  }

  function homeIsLeft() {
    document.body.classList.remove('hero-is-shown');
    document.querySelector(".is-home").classList.add('is-home-link-shown');
  }

  return (
    <StyledMain>
        <div className="hero hero--layout-1 hero--is-home">
          <EnteredDiv showLeaveFunction element={<Video videotobeshown={aiVideo}/>} threshold={0} whenDivIsentered={homeIsEntered} whenYouLeaveDiv={homeIsLeft}/>
        </div>
        <TextLoader/>
        <Image img1={Humanoid_walking_tall} img2={Humanoid_walking}/>
        <ShortText to={"/master-plan"} bt={"See our Master Plan"} 
            header={"We’re engineering the humanoid to make humans capable of more."} 
            paragraph={"With the first humanoid by our side in the workforce, we’ll have the ability to create and produce so much more, address drastic labor shortages, and reduce the number of workers in unsafe jobs."}
        />
        <HumanForms/>
        <ShortText to={"/about-us"} bt={"About Us"} bcc={"#f6f6ef"}
            kicker={"Designed for our world"}
            header={"Why a human form factor?"} 
            paragraph={"We’ve designed our world for the human form. Hands allow us to open doors and use tools; arms and legs allow us to move efficiently, climb stairs, lift boxes, and more."} 
            paragraph2={"Figure 01 brings together the dexterity of the human form and cutting edge AI to go beyond single-function robots and lend support across manufacturing, logistics, warehousing, and retail."}
            />
        <FigureNews/>
        <Image img1={potential_walking_tall} img2={potential_walking}/>
        <ShortText bt={"Careers"} to={"/careers"} 
            header={"The team bringing impossible ideas to life"} 
            paragraph={"Figure has attracted the world’s leading robotics team with over 100 years of combined AI & humanoid experience."}
        />
    </StyledMain>
  )
}
export default Home;