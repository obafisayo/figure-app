import React from "react";
import styled from "styled-components";
import Video from "../Components/Video";
import CareerVideo from "../assets/careers-desktop.mp4"

const StyledMain = styled.main`
    display: block;
`;

function Careers() {
    return (
        <StyledMain>
            <div>
                <Video videotobeshown={CareerVideo}/>
            </div>
        </StyledMain>
    )
}
export default Careers