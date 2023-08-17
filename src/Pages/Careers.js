import React from "react";
import styled from "styled-components";
import Video from "../Components/Video";
import CareerVideo from "../assets/careers-desktop.mp4"
import CareerDoubleImg from "../Components/CareerDoubleImg";
import Image from "../Components/Image";
import careerImg1 from "../assets/IMG_4714_RT_Desktop_copy3000.webp"
import careerImg2 from "../assets/IMG_4714_RT_Mobile_copy.webp"
import ShortText from "../Components/ShortText";
import MetricsModule from "../Components/MetricsModule";
import StaffQuotes from "../Components/StaffQuotes";
import CareerList from "../Components/CareerList";

const StyledMain = styled.main`
    display: block;
`;

function Careers() {
    return (
        <StyledMain>
            <Video button videotobeshown={CareerVideo} career heading={'WE’RE BRINGING THE HUMANOID TO LIFE. JOIN US.'}/>
            <CareerDoubleImg/>
            <Image img1={careerImg2} img2={careerImg1} marginTop/>
            <ShortText bt={"Dive Deeper into our culture"} to={"/culture"} bcc={'#0c0c0c'} color={'white'} headerfsz={'8.5rem'} ppeff
                header={'OUR MISSION IS TO EXPAND HUMAN CAPABILITIES THROUGH ADVANCED AI.'} 
                paragraph={'We’re building a team singularly focused on that mission. We’re seeking candidates dedicated to relentless iteration, who are ready for the race to rollout.'} 
            />
            <MetricsModule/>
            <StaffQuotes/>
            <CareerList/>
        </StyledMain>
    )
}
export default Careers