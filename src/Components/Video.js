import React from "react";
import styled from "styled-components";
import NewsletterMail from "./NewslettetMail";
import Slider from "./Slider";
import { useRef, useEffect, useState } from "react";
import figureHr1 from "../assets/Figure_HR_Webvideo_16x9_FirstFrame1.webp"
import figureHr2 from "../assets/Figure_HR_Webvideo_9x16_FirstFrame1.webp"
import figureMaster1 from "../assets/Figure_Master_NoLines_Desktop.webp"
import figureMaster2 from "../assets/Figure_Master_NoLines_Mobile__2___1_.png"
import Button from "./Button";

const StyledVideo = styled.section`
    display: block;
    
    .hero__content {
        position: relative;
        margin: 0 auto;
        padding: 8.2rem var(--content-padding) 0;
        background-color: #0c0c0c;
        width: 100%;
        min-height: 60rem;
        max-width: 256rem;
        aspect-ratio: 1500/3248;
        display: flex;
        flex-direction: column;
    }
    .hero__content::before {
        content: "";
        position: absolute;
        top: 0;
        /* bottom: ${({career}) => career ? 'auto' : ''}; */
        right: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 36rem;
        background: linear-gradient(180deg,#000 14%,transparent 88%);
        opacity: .6;
        z-index: 5;
    }
    .hero__loader-image {
        z-index: 2;
    }
    .hero__loader-image, .hero__video {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        object-position: center;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    .hero__main {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 1.4rem;
        width: 100%;
        max-width: 54.4rem;
        z-index: 10;
        justify-content: flex-end;
    }
    .hero--layout-2 .hero__main {
        height: 100%;
        justify-content: space-between;
        max-width: 61rem;
    }
    .hero__heading {
        line-height: 1.1;
        font-family: neue-haas-grot-text,sans-serif;
        font-size: 2.4rem;
        font-weight: 400;
        letter-spacing: -.01em;
        margin: 0;
        color: #fff;
    }
    .hero--layout-2 .hero__heading {
        line-height: 1.11;
        font-family: pp-neue-machina-plain,serif;
        font-feature-settings: "ss12" on;
        font-size: 3.4rem;
        font-weight: 400;
        letter-spacing: 0;
        text-transform: uppercase;
        margin-bottom: 1.3rem;
    }
    .hero__newsletter {
        display: flex;
        flex-direction: column;
        padding: 2.4rem 2rem;
        background-color: hsla(0,0%,5%,.4);
        z-index: 10;
        margin-left: calc(var(--content-padding)*-1);
        width: calc(100% + var(--content-padding)*2);
        margin-top: auto;
    }
    .hero--layout-2 .hero__newsletter {
        background-color: #0c0c0c;
    }
    .hero__actions {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .hero--layout-2 .hero__actions {
        margin-bottom: 2rem;
    }
    .hero__video-toggle {
        position: relative;
        padding: 0;
        background: none;
        border: none;
        cursor: pointer;
    }
    .hero-video-progress {
        transform: rotate(-90deg);
    }
    .hero-video-progress__linear-gradient-stop-1, .gradient-stop--1--1 {
        stop-color: #ff38bb;
    }
    .hero-video-progress__linear-gradient-stop-2, .gradient-stop--1--2 {
        stop-color: #ff8038;
    }
    .hero-video-progress__linear-gradient-stop-3, .gradient-stop--1--3 {
        stop-color: #f5be66;
    }
    .hero-video-progress__linear-gradient-stop-4, .gradient-stop--1--4 {
        stop-color: #f1fff7;
    }
    .hero-video-progress__progress-circle {
        transition-timing-function: linear;
        stroke: linear-gradient(180deg,#ff38bb 5%,#ff8038 55%,#f5be66 65%,#f1fff7 93%);
    }
    .hero-video-progress__progress-circle--blur {
        transition: opacity .3s ease-in-out;
        opacity: 0;
    }
    .hero__video-toggle.is-playing>.hero__icon-pause:not(.hero__icon-pause--blur) {
        opacity: 1;
        visibility: visible;
    }
    .hero__icon-pause {
        transition: opacity .3s ease-in-out,visibility .3s ease-in-out;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        display: flex;
        justify-content: space-between;
        width: 0.9rem;
        opacity: 0;
        visibility: hidden;
    }
    .hero__icon-pause:after, .hero__icon-pause::before {
        content: "";
        display: block;
        width: 0.1rem;
        height: 1.8rem;
        background: linear-gradient(180deg,#ff38bb 5%,#ff8038 55%,#f5be66 65%,#f1fff7 93%);
    }
    .hero__icon-pause.hero__icon-pause--blur {
        transition: opacity .3s ease-in-out,visibility .3s ease-in-out;
        opacity: 0;
        filter: blur(0.15rem);
    }
    .hero__video-toggle.is-playing>.hero__icon-play {
        opacity: 0;
        visibility: hidden;
    }
    .hero__icon-play {
        transition: opacity .3s ease-in-out,visibility .3s ease-in-out;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%) translateX(0.2rem);
        width: 1.2rem;
        height: auto;
        opacity: 1;
        visibility: visible;
    }
    .hero__icon-play--blur {
        transition: opacity .3s ease-in-out,visibility .3s ease-in-out;
        opacity: 0;
        filter: blur(0.15rem);
    }
    .hero__icon-play--blur{
        transition: opacity .3s ease-in-out, visibility .3s ease-in-out;
        opacity: 0;
        filter: blur(0.15rem);
    } 
    .hero__video-toggle:not(.is-playing).is-hovering>.hero__icon-play--blur{
        opacity: 1;
        visibility: visible;
    }
    .hero__video-toggle.is-playing.is-hovering>.hero__icon-pause.hero__icon-pause--blur{
        opacity: 1;
        visibility: visible;
    }
    .hero-video-progress.is-hovering .hero-video-progress__progress-circle--blur{
        opacity: 1;
    }
    .tt{
      display: none;
    }
    @media screen and (min-width: 480px){
        .hero__content {
            aspect-ratio: 3840/2160;
        }
        .hero__newsletter {
            padding: 2.4rem;
        }
    }
    @media screen and (min-width: 768px){
        .hero__content {
            padding: 11.6rem var(--content-padding) 5rem;
            flex-direction: row;
            justify-content: space-between;
        }
        .hero__content::before {
            height: 46rem;
            /* top: unset; */
            top: ${({career}) => career ? '0' : 'unset'};
            /* bottom: 0; */
            bottom: ${({career}) => career ? 'auto' : '0'};
            background:  ${({career}) => career ? 'background: linear-gradient(180deg,#000 14%,transparent 88%)' : 'linear-gradient(0deg,#000 24%,transparent 72%)'};
            /* background: linear-gradient(0deg,#000 24%,transparent 72%); */
        }
        .hero__main {
            gap: 3.4rem;
        }
        .hero__heading {
            font-size: 3.6rem;
        }
        .hero__newsletter {
            margin-left: 0;
            max-width: 43rem;
            margin-bottom: 0;
            gap: 0.4rem;
            align-self: flex-end;
            border-radius: 0.8rem;
        }
        .hero--layout-2 .hero__newsletter {
            background-color: hsla(0,0%,5%,.4);
        }
        .hero__actions {
            gap: 2.8rem;
        }
        .hero--layout-2 .hero__actions {
            margin-bottom: 0;
        }
        .hero--layout-2 .hero__heading {
            font-size: 5.2rem;
            font-size: 3rem;
        }
    
    }
    @media screen and (min-width: 1024px) {
        .hero--layout-2 .hero__heading {
            font-size: 5.2rem;
        }
    }
`;

function Video({videotobeshown, notNeeded, career, heading, slideText, button}) {
    const playMode = useRef(null);
    const progressRef = useRef(null);
    const videoRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(true);
    const [showpicture, setShowPicture] = useState(true);

    function handleToggle() {
        if (isPlaying) {
            videoRef.current.pause();
            
          } else {
            videoRef.current.play();
          }
          setIsPlaying(!isPlaying);
    }

    useEffect(() => {
        const video = videoRef.current;
        const playModeEl = playMode.current;

        video.autoplay = true;

        video.controls = false;

        video.muted = true;

        video.addEventListener('ended', () => {
            video.play();

        });
        video.addEventListener('playing', () => {
            playModeEl.classList.add('is-playing')
            setShowPicture(false)

        });
        video.addEventListener('pause', () => {
            playModeEl.classList.remove('is-playing')

        });

        return () => {
            video.removeEventListener('ended', () => {
                video.play();
            });
        };
    }, []);

  const [videoDuration, setVideoDuration] = useState(0);
  const [currentVideoTime, setCurrentVideoTime] = useState(0);
  const [dashoffset, setDashoffset] = useState(0); 

  const handleLoadedMetadata = () => {
    setVideoDuration(videoRef.current.duration);
  };

  const handleTimeUpdate = () => {
    setCurrentVideoTime(videoRef.current.currentTime);

    const maxDashoffset = 144.51326206513048; // Maximum length of the dashoffset in pixels
    const percentageComplete = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    const calculatedDashoffset = maxDashoffset - (percentageComplete / 100) * maxDashoffset;

    setDashoffset(calculatedDashoffset);
  };


    const styles  = {
        transition: "stroke-dashoffset 5ms ease 0s",
        strokeDashoffset: `${dashoffset}`
    }
    
    function handleEnter() {
        const playmodeEl = playMode.current;
        const progressRefEl = progressRef.current;
        playmodeEl.classList.add('is-hovering')
        progressRefEl.classList.add('is-hovering')
    }

    function handleLeave() {
        const playmodeEl = playMode.current;
        const progressRefEl = progressRef.current;
        playmodeEl.classList.remove('is-hovering')
        progressRefEl.classList.remove('is-hovering')
    }
    const whichPicture = career? figureHr1 : figureMaster1
    const whichPicture1 = career? figureHr2 : figureMaster2
    notNeeded = <div className="tt">{videoDuration}{currentVideoTime}</div>
    const classnames = career? 'hero--layout-2 hero__content' : 'hero__content'
    return(
        <StyledVideo career={career}>
            <div className={classnames}>
                {showpicture && <picture className="hero__loader-image">
                <source srcSet={whichPicture} media="(min-width: 768px)"/>
                <img className="hero__loader-image" src={whichPicture1} width="750" height="1624" alt="Figure HR Webvideo 9x16 FirstFrame1"/>
                </picture>}
                <video className="hero__video" src={videotobeshown} ref={videoRef} onLoadedMetadata={handleLoadedMetadata} onTimeUpdate={handleTimeUpdate} loop playsInline
                    aria-label={heading}>
                </video>
                <div className="hero__main">
                    {career? 
                        <div className="hero__heading-cta-container">
                            <h1 className="hero__heading">{heading}</h1>
                            {button && 
                                <a href="/careers#careers-listing">
                                    <Button text={'See all open roles'} arrowdown/>
                                </a>
                            } 
                        </div> 
                        :
                        <h1 className="hero__heading">{heading}</h1>
                    }
                    <div className="hero__actions">
                        <button className="hero__video-toggle" onClick={handleToggle} ref={playMode} onMouseEnter={handleEnter} onMouseLeave={handleLeave} aria-label={isPlaying ? "pause video" : "play video"} fdprocessedid="5jcqnc">
                            <svg className="hero-video-progress" ref={progressRef} width="53" height="53" viewBox="0 0 53 53">
                                <defs>
                                    <linearGradient id="home-video-progress-linear-gradient" x1="1" y1="0" x2="0" y2="0">
                                        <stop className="hero-video-progress__linear-gradient-stop-1" offset="0"></stop>
                                        <stop className="hero-video-progress__linear-gradient-stop-2" offset="0.55"></stop>
                                        <stop className="hero-video-progress__linear-gradient-stop-3" offset="0.68"></stop>
                                        <stop className="hero-video-progress__linear-gradient-stop-4" offset="0.94"></stop>
                                    </linearGradient>
                                    <filter id="home-video-progress-blur-filter" x="-50%" y="-50%" width="200%" height="200%">
                                        <feGaussianBlur in="SourceGraphic" stdDeviation="1.5"></feGaussianBlur>
                                    </filter>
                                </defs>
                                <circle cx="26.5" cy="26.5" r="23" strokeWidth="1" stroke="#515050" fill="none"></circle>
                                <circle className="hero-video-progress__progress-circle" cx="26.5" cy="26.5" r="23" stroke="url(#home-video-progress-linear-gradient)" strokeWidth="1" fill="none" strokeDasharray="144.51326206513048" strokeDashoffset="144.51326206513048" style={styles}></circle>
                                <circle className="hero-video-progress__progress-circle hero-video-progress__progress-circle--blur" cx="26.5" cy="26.5" r="23" stroke="url(#home-video-progress-linear-gradient)" strokeWidth="1" fill="none" strokeDasharray="144.51326206513048" strokeDashoffset="144.51326206513048" filter="url(#home-video-progress-blur-filter)" style={styles}></circle>
                                <circle className="hero-video-progress__progress-circle hero-video-progress__progress-circle--blur" cx="26.5" cy="26.5" r="23" stroke="url(#home-video-progress-linear-gradient)" strokeWidth="1" fill="none" strokeDasharray="144.51326206513048" strokeDashoffset="144.51326206513048" filter="url(#home-video-progress-blur-filter)" style={styles}></circle>
                            </svg>
                            <span className="hero__icon-pause"></span>
                            <span className="hero__icon-pause hero__icon-pause--blur"></span>
                            <span className="hero__icon-pause hero__icon-pause--blur"></span>
                            <svg className="icon-play hero__icon-play" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="svg-id-4967.31175585768" x1="8.30574" y1="-3.07943" x2="8.30574" y2="17.9281" gradientUnits="userSpaceOnUse">
                                        <stop className="gradient-stop--1--1" offset="0.0457092"></stop>
                                        <stop className="gradient-stop--1--2" offset="0.554765"></stop>
                                        <stop className="gradient-stop--1--3" offset="0.66346"></stop>
                                        <stop className="gradient-stop--1--4" offset="0.8"></stop>
                                        <stop className="gradient-stop--1--4" offset="1"></stop>
                                    </linearGradient>
                                </defs>
                                <mask id="svg-id-4967.31175585768-mask" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="18">
                                    <path d="M0.500001 0.854924L14.9801 9L0.5 17.1451L0.500001 0.854924Z" stroke="black"></path>
                                </mask>
                                <rect mask="url(#svg-id-4967.31175585768-mask)" width="16" height="18" fill="url(#svg-id-4967.31175585768"></rect>
                            </svg>
                            <svg className="icon-play hero__icon-play hero__icon-play--blur" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="svg-id-3371.905405673761" x1="8.30574" y1="-3.07943" x2="8.30574" y2="17.9281" gradientUnits="userSpaceOnUse">
                                        <stop className="gradient-stop--1--1" offset="0.0457092"></stop>
                                        <stop className="gradient-stop--1--2" offset="0.554765"></stop>
                                        <stop className="gradient-stop--1--3" offset="0.66346"></stop>
                                        <stop className="gradient-stop--1--4" offset="0.8"></stop>
                                        <stop className="gradient-stop--1--4" offset="1"></stop>
                                    </linearGradient>
                                </defs>
                                <mask id="svg-id-3371.905405673761-mask" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="18">
                                    <path d="M0.500001 0.854924L14.9801 9L0.5 17.1451L0.500001 0.854924Z" stroke="black"></path>
                                </mask>
                                <rect mask="url(#svg-id-3371.905405673761-mask)" width="16" height="18" fill="url(#svg-id-3371.905405673761"></rect>
                            </svg>
                            <svg className="icon-play hero__icon-play hero__icon-play--blur" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="svg-id-3161.2831055466663" x1="8.30574" y1="-3.07943" x2="8.30574" y2="17.9281" gradientUnits="userSpaceOnUse">
                                        <stop className="gradient-stop--1--1" offset="0.0457092"></stop>
                                        <stop className="gradient-stop--1--2" offset="0.554765"></stop>
                                        <stop className="gradient-stop--1--3" offset="0.66346"></stop>
                                        <stop className="gradient-stop--1--4" offset="0.8"></stop>
                                        <stop className="gradient-stop--1--4" offset="1"></stop>
                                    </linearGradient>
                                </defs>
                                <mask id="svg-id-3161.2831055466663-mask" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="18">
                                    <path d="M0.500001 0.854924L14.9801 9L0.5 17.1451L0.500001 0.854924Z" stroke="black"></path>
                                </mask>
                                <rect mask="url(#svg-id-3161.2831055466663-mask)" width="16" height="18" fill="url(#svg-id-3161.2831055466663"></rect>
                            </svg>
                        </button>
                        {slideText && <a target="_blank"  rel="noreferrer" href="https://www.youtube.com/watch?v=b37rQZ4maPo">
                            <Slider text={'Watch the full video'} icon arrowUpRight light slide bordercolor={'white'} ff={'FreeSans, sans-serif'}/>
                        </a>}
                    </div>
                </div>
                <div className="hero__newsletter">
                    <NewsletterMail background={'hsla(0,0%,5%,.4)'} color={'white'} paddingLeft medianewsletterHeading={'1.6rem'} newsletterHeading={'1.4rem'} newsletterDes={'1.4rem'}/>
                </div>
            </div>
        </StyledVideo>
    )
}
export default Video;