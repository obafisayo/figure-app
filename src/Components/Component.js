import React from 'react'
import NewsletterMail from './NewslettetMail'
import Slider from './Slider'
import Icon from './Icons'
// import PrimaryLinks from './PrimaryLinks'
import InputComponent from './InputComponent'
function Component(){
    return(
        <footer style={{backgroundColor: 'aliceblue'}}>
            <NewsletterMail width={'500px'} icon={<Icon/>} />
            <Slider slide text={'Contact Us'} icon arrowUpRight/><br/>
            <InputComponent width={'500px'} text={'First name'} type={'text'}/>
            <Slider slide text={'Contact Us'} icon plus/><br/>
            <Slider slide text={'Contact Us'} />
            <Slider icon arrowLeft/>
            <Slider icon arrowRight/>

            {/* <nav className='number__primary-links' aria-label='Site Links'>
                <PrimaryLinks slide title={'About Us'} text={'ABOUT US'} fsz={'3.4rem'} fw={'600'} height={'2px'}/>
                <PrimaryLinks slide title={'Master-plan'} text={'MASTER PLAN'} fsz={'3.4rem'} fw={'600'} height={'2px'}/>
                <PrimaryLinks slide title={'Culture'} text={'CULTURE'} fsz={'3.4rem'} fw={'600'} height={'2px'}/>
                <PrimaryLinks slide title={'Carreer'} text={'CAREER'} fsz={'3.4rem'} fw={'600'} height={'2px'}/>
            </nav>
            <br/>
            <br/>
            <nav className='number__primary-links' aria-label='Site Links'>
                <PrimaryLinks title={'About Us'} text={'ABOUT US'} />
                <PrimaryLinks title={'Master-plan'} text={'MASTER PLAN'} />
                <PrimaryLinks title={'Culture'} text={'CULTURE'} />
                <PrimaryLinks title={'Carreer'} text={'CAREER'} />
            </nav>
            <br/>
            <br/>
            <nav className='number__primary-links' aria-label='Site Links'>
                <PrimaryLinks slide title={'About Us'} text={'ABOUT US'} icon fsz={'3.4rem'} fw={'600'} height={'2px'}/>
                <PrimaryLinks slide title={'Master-plan'} text={'MASTER PLAN'} icon fsz={'3.4rem'} fw={'600'} height={'2px'}/>
                <PrimaryLinks slide title={'Culture'} text={'CULTURE'} icon fsz={'3.4rem'} fw={'600'} height={'2px'}/>
                <PrimaryLinks slide title={'Carreer'} text={'CAREER'} icon fsz={'3.4rem'} fw={'600'} height={'2px'}/>
            </nav>
            <br/>
            <br/>
            <nav className='number__primary-links' aria-label='Site Links'>
                <PrimaryLinks slide title={'About Us'} text={'ABOUT US'} borderTop paddingTop icon fsz={'3.4rem'} fw={'600'} height={'2px'}/>
                <PrimaryLinks slide title={'Master-plan'} text={'MASTER PLAN'} icon fsz={'3.4rem'} fw={'600'} height={'2px'}/>
                <PrimaryLinks slide title={'Culture'} text={'CULTURE'} icon fsz={'3.4rem'} fw={'600'} height={'2px'}/>
                <PrimaryLinks slide title={'Carreer'} text={'CAREER'} borderBottom icon fsz={'3.4rem'} fw={'600'} height={'2px'}/>
            </nav> */}
            <br/>
            <br/>



            {/* <span className="icon arrow-button__icon icon--arrow">
                <span className="icon__solid">
                    <svg className="icon__solid-icon" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 15.4907L14.9814 1.50928M14.9814 1.50928H1M14.9814 1.50928V15.4907" stroke="url(#svg-id-6103.300575655481)" strokeWidth="1.5"></path>
                        <defs>
                            <linearGradient id="svg-id-6103.300575655481" x1="98%" y1="64%" x2="2%" y2="36%" gradientTransform="rotate(0)" gradientUnits="userSpaceOnUse">
                                <stop className="gradient-stop--1--1" offset="0.0457092"></stop>
                                <stop className="gradient-stop--1--2" offset="0.554765"></stop>
                                <stop className="gradient-stop--1--3" offset="0.66346"></stop>
                                <stop className="gradient-stop--1--4" offset="0.8"></stop>
                                <stop className="gradient-stop--1--4" offset="1"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
                <span className="icon__blur">
                    <svg className="icon__blur-icon" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 15.4907L14.9814 1.50928M14.9814 1.50928H1M14.9814 1.50928V15.4907" stroke="url(#svg-id-1023.7215035560698)" strokeWidth="1.5"></path>
                        <defs>
                            <linearGradient id="svg-id-1023.7215035560698" x1="98%" y1="64%" x2="2%" y2="36%" gradientTransform="rotate(0)" gradientUnits="userSpaceOnUse">
                                <stop className="gradient-stop--1--1" offset="0.0457092"></stop>
                                <stop className="gradient-stop--1--2" offset="0.554765"></stop>
                                <stop className="gradient-stop--1--3" offset="0.66346"></stop>
                                <stop className="gradient-stop--1--4" offset="0.8"></stop>
                                <stop className="gradient-stop--1--4" offset="1"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
                <span className="icon__blur">
                    <svg className="icon__blur-icon" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 15.4907L14.9814 1.50928M14.9814 1.50928H1M14.9814 1.50928V15.4907" stroke="url(#svg-id-8307.404902892815)" strokeWidth="1.5"></path>
                        <defs>
                            <linearGradient id="svg-id-8307.404902892815" x1="98%" y1="64%" x2="2%" y2="36%" gradientTransform="rotate(0)" gradientUnits="userSpaceOnUse">
                                <stop className="gradient-stop--1--1" offset="0.0457092"></stop>
                                <stop className="gradient-stop--1--2" offset="0.554765"></stop>
                                <stop className="gradient-stop--1--3" offset="0.66346"></stop>
                                <stop className="gradient-stop--1--4" offset="0.8"></stop>
                                <stop className="gradient-stop--1--4" offset="1"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
            </span> */}
             {/* <a className="news-card" title="Read Now" target="_blank" rel="noreferrer" href="https://www.reuters.com/technology/ai-startup-figure-raises-70-million-build-humanoid-robots-2023-05-24/">
                        <article className="news-card__inner">
                        <div className="news-card__gradient-bg"></div>
                        <div className="news-card__gradient-bg-blur"></div>
                        <div className="news-card__black-bg"></div>
                        <div className="news-card__top">
                            <span className="news-card__source">Reuters</span>
                            <h1 className="news-card__heading">AI startup Figure raises $70 million to build humanoid robots</h1>
                        </div>
                        <div className="news-card__bottom">
                            <div className="arrow-button arrow-button--light">Read Now</div>
                        </div>
                        </article>
                    </a>
                    <a className="news-card" title="Read Now" target="_blank" rel="noreferrer" href="">
                        <article className="news-card__inner">
                        <div className="news-card__gradient-bg"></div>
                        <div className="news-card__gradient-bg-blur"></div>
                        <div className="news-card__black-bg"></div>
                        <div className="news-card__top">
                            <span className="news-card__source">Fast Company</span>
                            <h1 className="news-card__heading">The race to build AI-powered humanoids is heating up</h1>
                        </div>
                        <div className="news-card__bottom">
                            <div className="arrow-button arrow-button--light">Read Now</div>
                        </div>
                        </article>
                    </a>
                    <a className="news-card" title="Read Now" target="_blank" rel="noreferrer" href="">
                        <article className="news-card__inner">
                        <div className="news-card__gradient-bg"></div>
                        <div className="news-card__gradient-bg-blur"></div>
                        <div className="news-card__black-bg"></div>
                        <div className="news-card__top">
                            <span className="news-card__source">TechCrunch</span>
                            <h1 className="news-card__heading">Intel backs Figure’s Humanoid robot to the tune of $9 million</h1>
                        </div>
                        <div className="news-card__bottom">
                            <div className="arrow-button arrow-button--light">Read Now</div>
                        </div>
                        </article>
                    </a>
                    <a className="news-card" title="Read Now" target="_blank" rel="noreferrer" href="">
                        <article className="news-card__inner">
                        <div className="news-card__gradient-bg"></div>
                        <div className="news-card__gradient-bg-blur"></div>
                        <div className="news-card__black-bg"></div>
                        <div className="news-card__top">
                            <span className="news-card__source">Axios</span>
                            <h1 className="news-card__heading">Humanoid robots are coming</h1>
                        </div>
                        <div className="news-card__bottom">
                            <div className="arrow-button arrow-button--light">Read Now</div>
                        </div>
                        </article>
                    </a> */}
        </footer>
    )
}
export default Component;