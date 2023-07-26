import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Video from "../Components/Video";
import aiVideo from "../assets/aiVideo.mp4"
import TextLoader from "../Components/TextLoader";
import Image from "../Components/Image";
import Humanoid_walking_tall  from "../assets/Humanoid_Walking_Mobile_-Tall-.webp"
import Humanoid_walking  from "../assets/Humanoid_Walking.webp"

const StyledMain = styled.main`
    display: block;
`;

function Home() {
    const videoRef = useRef(null)
  
    useEffect(() => {
        function handleScroll() {
            // Check if the div is in the viewport
            const rect = videoRef.current.getBoundingClientRect();
            const isVisible = (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );

            if (isVisible) {
                // The div is visible in the viewport
                console.log('Div is scrolled into view');
                document.body.classList.add('hero-is-shown');
            }
        }

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <StyledMain>
            <div className="hero hero--layout-1 hero--is-home" ref={videoRef}>
                <Video videotobeshown={aiVideo}/>
            </div>
            <div>
                <TextLoader/>
            </div>
            <Image img1={Humanoid_walking_tall} img2={Humanoid_walking}/>
        </StyledMain>
    )
}
export default Home