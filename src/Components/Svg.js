import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
    position: relative;
    display: inline-block;
    margin-left: 1.2rem;
    
    .arrow-button__icon {
    width: 1.4rem;
    }
    .icon__blur, .icon__solid, .icon__solid-icon {
        display: block;
        width: 100%;
    }
    .icon__solid{
        width: ${(width) => width || '100%'};
    }
    .gradient-stop--2--1 {
        stop-color: #ff38bb;
    }
    .gradient-stop--2--2 {
        stop-color: #ff8038;
    }
    .gradient-stop--2--3 {
        stop-color: #f5be66;
    }
    .gradient-stop--2--4 {
        stop-color: #f4dca8;
    }
    .icon__blur {
        transition: all .3s ease-in-out;
        filter: blur(0.25rem);
        opacity: ${({hovered, hove}) => hove || hovered? 1 : 0};
        position: absolute;
        top: 0;
        left: 0;
        will-change: filter;
    }
    @media screen and (max-width: 768px){
        .icon__blur {
            opacity: ${({nohover}) => nohover? 0 : 1};
        }
    }
    `;
function Svg({hov, hove, arrowUpRight, arrowLeft, arrowRight, plus, minus, width, nohover}){
    return(
        <StyledSpan hovered={hov} hove={hove} className="arrow-button__icon icon--arrow" width={width} nohover={nohover}>
            {minus && <span>
                <span className="icon__solid">
                    <svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon__solid-icon">
                        <path d="M13.7083 23.4881H32.0083M45 23.4881C45 35.6321 35.1503 45.4767 23 45.4767C10.8497 45.4767 1 35.6321 1 23.4881C1 11.3441 10.8497 1.49951 23 1.49951C35.1503 1.49951 45 11.3441 45 23.4881Z" stroke="url(#svg-id-7741.299961585866)" strokeWidth="1.5"></path>
                        <defs>
                            <linearGradient id="svg-id-7741.299961585866" x1="28.5995" y1="1.49915" x2="28.6041" y2="45.4767" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0457092" className="gradient-stop--2--1"></stop>
                                <stop offset="0.554765" className="gradient-stop--2--2"></stop>
                                <stop offset="0.864583" className="gradient-stop--2--3"></stop>
                                <stop offset="1" className="gradient-stop--2--4"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
                <span className="icon__blur">
                    <svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon__blur-icon">
                        <path d="M13.7083 23.4881H32.0083M45 23.4881C45 35.6321 35.1503 45.4767 23 45.4767C10.8497 45.4767 1 35.6321 1 23.4881C1 11.3441 10.8497 1.49951 23 1.49951C35.1503 1.49951 45 11.3441 45 23.4881Z" stroke="url(#svg-id-8308.545275629758)" strokeWidth="1.5"></path>
                        <defs>
                            <linearGradient id="svg-id-8308.545275629758" x1="28.5995" y1="1.49915" x2="28.6041" y2="45.4767" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0457092" className="gradient-stop--2--1"></stop>
                                <stop offset="0.554765" className="gradient-stop--2--2"></stop>
                                <stop offset="0.864583" className="gradient-stop--2--3"></stop>
                                <stop offset="1" className="gradient-stop--2--4"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
                <span className="icon__blur">
                    <svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon__blur-icon">
                        <path d="M13.7083 23.4881H32.0083M45 23.4881C45 35.6321 35.1503 45.4767 23 45.4767C10.8497 45.4767 1 35.6321 1 23.4881C1 11.3441 10.8497 1.49951 23 1.49951C35.1503 1.49951 45 11.3441 45 23.4881Z" stroke="url(#svg-id-6013.543062978329)" strokeWidth="1.5"></path>
                        <defs>
                            <linearGradient id="svg-id-6013.543062978329" x1="28.5995" y1="1.49915" x2="28.6041" y2="45.4767" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0457092" className="gradient-stop--2--1"></stop>
                                <stop offset="0.554765" className="gradient-stop--2--2"></stop>
                                <stop offset="0.864583" className="gradient-stop--2--3"></stop>
                                <stop offset="1" className="gradient-stop--2--4"></stop>
                            </linearGradient>
                        </defs>
                    </svg>

                </span>
            </span>}
            {arrowUpRight && <span>
                <span className="icon__solid">
                    <svg className="icon__solid-icon" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 15.4907L14.9814 1.50928M14.9814 1.50928H1M14.9814 1.50928V15.4907" stroke="url(#svg-id-8094.761112623039)" strokeWidth="1.5"></path>
                        <defs>
                            <linearGradient id="svg-id-8094.761112623039" x1="98%" y1="64%" x2="2%" y2="36%" gradientTransform="rotate(0)" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0457092" className="gradient-stop--2--1"></stop>
                                <stop offset="0.554765" className="gradient-stop--2--2"></stop>
                                <stop offset="0.864583" className="gradient-stop--2--3"></stop>
                                <stop offset="1" className="gradient-stop--2--4"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
                <span className="icon__blur">
                    <svg className="icon__blur-icon" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 15.4907L14.9814 1.50928M14.9814 1.50928H1M14.9814 1.50928V15.4907" stroke="url(#svg-id-6487.537662191951)" strokeWidth="1.5"></path>
                        <defs>
                            <linearGradient id="svg-id-6487.537662191951" x1="98%" y1="64%" x2="2%" y2="36%" gradientTransform="rotate(0)" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0457092" className="gradient-stop--2--1"></stop>
                                <stop offset="0.554765" className="gradient-stop--2--2"></stop>
                                <stop offset="0.864583" className="gradient-stop--2--3"></stop>
                                <stop offset="1" className="gradient-stop--2--4"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
                <span className="icon__blur">
                    <svg className="icon__blur-icon" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 15.4907L14.9814 1.50928M14.9814 1.50928H1M14.9814 1.50928V15.4907" stroke="url(#svg-id-2784.4800725327)" strokeWidth="1.5"></path>
                        <defs>
                            <linearGradient id="svg-id-2784.4800725327" x1="98%" y1="64%" x2="2%" y2="36%" gradientTransform="rotate(0)" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0457092" className="gradient-stop--2--1"></stop>
                                <stop offset="0.554765" className="gradient-stop--2--2"></stop>
                                <stop offset="0.864583" className="gradient-stop--2--3"></stop>
                                <stop offset="1" className="gradient-stop--2--4"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
            </span>}

            {plus && <span>
                <span className="icon__solid">
                    <svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon__solid-icon">
                        <path d="M23 13.9454V31.9361M13.7083 23.4405H32.0083M45 23.4405C45 35.5845 35.1503 45.4291 23 45.4291C10.8497 45.4291 1 35.5845 1 23.4405C1 11.2965 10.8497 1.4519 23 1.4519C35.1503 1.4519 45 11.2965 45 23.4405Z"
                         stroke="url(#svg-id-466.62192241462066)" strokeWidth="1.5">
                        </path>
                        <defs>
                            <linearGradient id="svg-id-466.62192241462066" x1="28.5995" y1="1.45154" x2="28.6041" y2="45.4291" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0457092" className="gradient-stop--2--1"></stop>
                                <stop offset="0.554765" className="gradient-stop--2--2"></stop>
                                <stop offset="0.864583" className="gradient-stop--2--3"></stop>
                                <stop offset="1" className="gradient-stop--2--4"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
                <span className="icon__blur">
                    <svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon__blur-icon">
                        <path d="M23 13.9454V31.9361M13.7083 23.4405H32.0083M45 23.4405C45 35.5845 35.1503 45.4291 23 45.4291C10.8497 45.4291 1 35.5845 1 23.4405C1 11.2965 10.8497 1.4519 23 1.4519C35.1503 1.4519 45 11.2965 45 23.4405Z"
                         stroke="url(#svg-id-8089.795482302753)" strokeWidth="1.5">
                        </path>
                        <defs>
                            <linearGradient id="svg-id-8089.795482302753" x1="28.5995" y1="1.45154" x2="28.6041" y2="45.4291" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0457092" className="gradient-stop--2--1"></stop>
                                <stop offset="0.554765" className="gradient-stop--2--2"></stop>
                                <stop offset="0.864583" className="gradient-stop--2--3"></stop>
                                <stop offset="1" className="gradient-stop--2--4"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
                <span className="icon__blur">
                    <svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon__blur-icon">
                        <path d="M23 13.9454V31.9361M13.7083 23.4405H32.0083M45 23.4405C45 35.5845 35.1503 45.4291 23 45.4291C10.8497 45.4291 1 35.5845 1 23.4405C1 11.2965 10.8497 1.4519 23 1.4519C35.1503 1.4519 45 11.2965 45 23.4405Z"
                         stroke="url(#svg-id-3110.966139049678)" strokeWidth="1.5">
                        </path>
                        <defs>
                            <linearGradient id="svg-id-3110.966139049678" x1="28.5995" y1="1.45154" x2="28.6041" y2="45.4291" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0457092" className="gradient-stop--2--1"></stop><stop offset="0.554765" className="gradient-stop--2--2"></stop>
                                <stop offset="0.864583" className="gradient-stop--2--3"></stop>
                                <stop offset="1" className="gradient-stop--2--4"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
            </span>}

            {arrowLeft && <span>
                <span className="icon__solid">
                    <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon__solid-icon">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.25 22.75C2.25 11.014 11.7639 1.5 23.5 1.5C35.2361 1.5 44.75 11.014 44.75 22.75C44.75 34.486 35.2361 44 23.5 44C11.7639 44 2.25 34.486 2.25 22.75ZM23.5 0C10.9355 0 0.75 10.1855 0.75 22.75C0.75 35.3145 10.9355 45.5 23.5 45.5C36.0645 45.5 46.25 35.3145 46.25 22.75C46.25 10.1855 36.0645 0 23.5 0ZM23.8536 31.8808L15.7071 23.7344L32.5 23.7344V22.7344L15.7071 22.7344L23.8536 14.5879L23.1464 13.8808L14.1464 22.8808L13.7929 23.2344L14.1464 23.5879L23.1464 32.5879L23.8536 31.8808Z" fill="url(#svg-id-4572.41723810287)"></path>
                        <defs>
                            <linearGradient id="svg-id-4572.41723810287" x1="29.2904" y1="-0.000373377" x2="29.2952" y2="45.5" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0457092" className="gradient-stop--2--1"></stop>
                                <stop offset="0.554765" className="gradient-stop--2--2"></stop>
                                <stop offset="0.864583" className="gradient-stop--2--3"></stop>
                                <stop offset="1" className="gradient-stop--2--4"></stop>
                            </linearGradient></defs>
                    </svg>
                </span>
                <span className="icon__blur">
                    <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon__blur-icon">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.25 22.75C2.25 11.014 11.7639 1.5 23.5 1.5C35.2361 1.5 44.75 11.014 44.75 22.75C44.75 34.486 35.2361 44 23.5 44C11.7639 44 2.25 34.486 2.25 22.75ZM23.5 0C10.9355 0 0.75 10.1855 0.75 22.75C0.75 35.3145 10.9355 45.5 23.5 45.5C36.0645 45.5 46.25 35.3145 46.25 22.75C46.25 10.1855 36.0645 0 23.5 0ZM23.8536 31.8808L15.7071 23.7344L32.5 23.7344V22.7344L15.7071 22.7344L23.8536 14.5879L23.1464 13.8808L14.1464 22.8808L13.7929 23.2344L14.1464 23.5879L23.1464 32.5879L23.8536 31.8808Z" fill="url(#svg-id-4804.7237083833115)"></path>
                        <defs>
                            <linearGradient id="svg-id-4804.7237083833115" x1="29.2904" y1="-0.000373377" x2="29.2952" y2="45.5" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0457092" className="gradient-stop--2--1"></stop>
                                <stop offset="0.554765" className="gradient-stop--2--2"></stop>
                                <stop offset="0.864583" className="gradient-stop--2--3"></stop>
                                <stop offset="1" className="gradient-stop--2--4"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
                <span className="icon__blur">
                    <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon__blur-icon">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.25 22.75C2.25 11.014 11.7639 1.5 23.5 1.5C35.2361 1.5 44.75 11.014 44.75 22.75C44.75 34.486 35.2361 44 23.5 44C11.7639 44 2.25 34.486 2.25 22.75ZM23.5 0C10.9355 0 0.75 10.1855 0.75 22.75C0.75 35.3145 10.9355 45.5 23.5 45.5C36.0645 45.5 46.25 35.3145 46.25 22.75C46.25 10.1855 36.0645 0 23.5 0ZM23.8536 31.8808L15.7071 23.7344L32.5 23.7344V22.7344L15.7071 22.7344L23.8536 14.5879L23.1464 13.8808L14.1464 22.8808L13.7929 23.2344L14.1464 23.5879L23.1464 32.5879L23.8536 31.8808Z" fill="url(#svg-id-1384.902212192345)"></path>
                        <defs>
                            <linearGradient id="svg-id-1384.902212192345" x1="29.2904" y1="-0.000373377" x2="29.2952" y2="45.5" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0457092" className="gradient-stop--2--1"></stop>
                                <stop offset="0.554765" className="gradient-stop--2--2"></stop>
                                <stop offset="0.864583" className="gradient-stop--2--3"></stop>
                                <stop offset="1" className="gradient-stop--2--4"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
            </span>}

            { arrowRight && <span>
                <span className="icon__solid">
                    <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon__solid-icon">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.25 22.75C2.25 11.014 11.7639 1.5 23.5 1.5C35.2361 1.5 44.75 11.014 44.75 22.75C44.75 34.486 35.2361 44 23.5 44C11.7639 44 2.25 34.486 2.25 22.75ZM23.5 0C10.9355 0 0.75 10.1855 0.75 22.75C0.75 35.3145 10.9355 45.5 23.5 45.5C36.0645 45.5 46.25 35.3145 46.25 22.75C46.25 10.1855 36.0645 0 23.5 0ZM23.1464 14.5879L31.2929 22.7344H14.5V23.7344H31.2929L23.1464 31.8808L23.8536 32.5879L32.8536 23.5879L33.2071 23.2344L32.8536 22.8808L23.8536 13.8808L23.1464 14.5879Z" fill="url(#svg-id-396.0005302942049)"></path>
                        <defs>
                            <linearGradient id="svg-id-396.0005302942049" x1="29.2904" y1="-0.000373377" x2="29.2952" y2="45.5" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0457092" className="gradient-stop--2--1"></stop>
                                <stop offset="0.554765" className="gradient-stop--2--2"></stop>
                                <stop offset="0.864583" className="gradient-stop--2--3"></stop>
                                <stop offset="1" className="gradient-stop--2--4"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
                <span className="icon__blur">
                    <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon__blur-icon">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.25 22.75C2.25 11.014 11.7639 1.5 23.5 1.5C35.2361 1.5 44.75 11.014 44.75 22.75C44.75 34.486 35.2361 44 23.5 44C11.7639 44 2.25 34.486 2.25 22.75ZM23.5 0C10.9355 0 0.75 10.1855 0.75 22.75C0.75 35.3145 10.9355 45.5 23.5 45.5C36.0645 45.5 46.25 35.3145 46.25 22.75C46.25 10.1855 36.0645 0 23.5 0ZM23.1464 14.5879L31.2929 22.7344H14.5V23.7344H31.2929L23.1464 31.8808L23.8536 32.5879L32.8536 23.5879L33.2071 23.2344L32.8536 22.8808L23.8536 13.8808L23.1464 14.5879Z" fill="url(#svg-id-753.115685959651)"></path>
                        <defs>
                            <linearGradient id="svg-id-753.115685959651" x1="29.2904" y1="-0.000373377" x2="29.2952" y2="45.5" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0457092" className="gradient-stop--2--1"></stop>
                                <stop offset="0.554765" className="gradient-stop--2--2"></stop>
                                <stop offset="0.864583" className="gradient-stop--2--3"></stop>
                                <stop offset="1" className="gradient-stop--2--4"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
                <span className="icon__blur">
                    <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon__blur-icon">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.25 22.75C2.25 11.014 11.7639 1.5 23.5 1.5C35.2361 1.5 44.75 11.014 44.75 22.75C44.75 34.486 35.2361 44 23.5 44C11.7639 44 2.25 34.486 2.25 22.75ZM23.5 0C10.9355 0 0.75 10.1855 0.75 22.75C0.75 35.3145 10.9355 45.5 23.5 45.5C36.0645 45.5 46.25 35.3145 46.25 22.75C46.25 10.1855 36.0645 0 23.5 0ZM23.1464 14.5879L31.2929 22.7344H14.5V23.7344H31.2929L23.1464 31.8808L23.8536 32.5879L32.8536 23.5879L33.2071 23.2344L32.8536 22.8808L23.8536 13.8808L23.1464 14.5879Z" fill="url(#svg-id-1415.2291294601648)"></path>
                        <defs>
                            <linearGradient id="svg-id-1415.2291294601648" x1="29.2904" y1="-0.000373377" x2="29.2952" y2="45.5" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0457092" className="gradient-stop--2--1"></stop>
                                <stop offset="0.554765" className="gradient-stop--2--2"></stop>
                                <stop offset="0.864583" className="gradient-stop--2--3"></stop>
                                <stop offset="1" className="gradient-stop--2--4"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
            </span>}
        </StyledSpan>
    )
}
export default Svg