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
            <Slider slide text={'Contact Us'} icon arrowUpRight/> <br/>
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


            {/*
                <ul class="team-module__list">
                     <li class="team-module__list-item">
                        <button class="team-module__list-item-button" aria-controls="team-modal-5Xlw8Sqgj5l3Db2ZSQ1Gbt" aria-expanded="false">
                            <span class="team-member team-member--has-bio">
                                <img alt="" sizes="670w" srcset="https://images.ctfassets.net/qx5k8y1u9drj/38nigKTCFmaDSUR0CWd35i/2c4f92ec88878dd97fdf580c14f6cbb8/Brett-Adcock_670x742.jpg?fm=webp&amp;w=16&amp;q=70 16w, https://images.ctfassets.net/qx5k8y1u9drj/38nigKTCFmaDSUR0CWd35i/2c4f92ec88878dd97fdf580c14f6cbb8/Brett-Adcock_670x742.jpg?fm=webp&amp;w=32&amp;q=70 32w, https://images.ctfassets.net/qx5k8y1u9drj/38nigKTCFmaDSUR0CWd35i/2c4f92ec88878dd97fdf580c14f6cbb8/Brett-Adcock_670x742.jpg?fm=webp&amp;w=48&amp;q=70 48w, https://images.ctfassets.net/qx5k8y1u9drj/38nigKTCFmaDSUR0CWd35i/2c4f92ec88878dd97fdf580c14f6cbb8/Brett-Adcock_670x742.jpg?fm=webp&amp;w=64&amp;q=70 64w, https://images.ctfassets.net/qx5k8y1u9drj/38nigKTCFmaDSUR0CWd35i/2c4f92ec88878dd97fdf580c14f6cbb8/Brett-Adcock_670x742.jpg?fm=webp&amp;w=96&amp;q=70 96w, https://images.ctfassets.net/qx5k8y1u9drj/38nigKTCFmaDSUR0CWd35i/2c4f92ec88878dd97fdf580c14f6cbb8/Brett-Adcock_670x742.jpg?fm=webp&amp;w=128&amp;q=70 128w, https://images.ctfassets.net/qx5k8y1u9drj/38nigKTCFmaDSUR0CWd35i/2c4f92ec88878dd97fdf580c14f6cbb8/Brett-Adcock_670x742.jpg?fm=webp&amp;w=256&amp;q=70 256w, https://images.ctfassets.net/qx5k8y1u9drj/38nigKTCFmaDSUR0CWd35i/2c4f92ec88878dd97fdf580c14f6cbb8/Brett-Adcock_670x742.jpg?fm=webp&amp;w=384&amp;q=70 384w, https://images.ctfassets.net/qx5k8y1u9drj/38nigKTCFmaDSUR0CWd35i/2c4f92ec88878dd97fdf580c14f6cbb8/Brett-Adcock_670x742.jpg?fm=webp&amp;w=640&amp;q=70 640w, https://images.ctfassets.net/qx5k8y1u9drj/38nigKTCFmaDSUR0CWd35i/2c4f92ec88878dd97fdf580c14f6cbb8/Brett-Adcock_670x742.jpg?fm=webp&amp;w=750&amp;q=70 750w, https://images.ctfassets.net/qx5k8y1u9drj/38nigKTCFmaDSUR0CWd35i/2c4f92ec88878dd97fdf580c14f6cbb8/Brett-Adcock_670x742.jpg?fm=webp&amp;w=828&amp;q=70 828w, https://images.ctfassets.net/qx5k8y1u9drj/38nigKTCFmaDSUR0CWd35i/2c4f92ec88878dd97fdf580c14f6cbb8/Brett-Adcock_670x742.jpg?fm=webp&amp;w=1080&amp;q=70 1080w, https://images.ctfassets.net/qx5k8y1u9drj/38nigKTCFmaDSUR0CWd35i/2c4f92ec88878dd97fdf580c14f6cbb8/Brett-Adcock_670x742.jpg?fm=webp&amp;w=1200&amp;q=70 1200w, https://images.ctfassets.net/qx5k8y1u9drj/38nigKTCFmaDSUR0CWd35i/2c4f92ec88878dd97fdf580c14f6cbb8/Brett-Adcock_670x742.jpg?fm=webp&amp;w=1920&amp;q=70 1920w, https://images.ctfassets.net/qx5k8y1u9drj/38nigKTCFmaDSUR0CWd35i/2c4f92ec88878dd97fdf580c14f6cbb8/Brett-Adcock_670x742.jpg?fm=webp&amp;w=2048&amp;q=70 2048w, https://images.ctfassets.net/qx5k8y1u9drj/38nigKTCFmaDSUR0CWd35i/2c4f92ec88878dd97fdf580c14f6cbb8/Brett-Adcock_670x742.jpg?fm=webp&amp;w=3840&amp;q=70 3840w" src="https://images.ctfassets.net/qx5k8y1u9drj/38nigKTCFmaDSUR0CWd35i/2c4f92ec88878dd97fdf580c14f6cbb8/Brett-Adcock_670x742.jpg?fm=webp&amp;w=3840&amp;q=70" width="670" height="742" decoding="async" data-nimg="1" class="team-member__image" loading="lazy" style={{color:"transparent"}}/>
                                <span class="team-member__text">
                                    <span class="team-member__name-title-container">
                                        <span class="team-member__name">Brett Adcock</span>
                                        <span class="team-member__title">Founder, CEO</span>
                                    </span>
                                    <span class="team-member__plus-icon-container">
                                        <span class="icon team-member__plus-icon icon--plus-circle ">
                                            <span class="icon__solid"><svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon__solid-icon
                                                "><path d="M23 13.9454V31.9361M13.7083 23.4405H32.0083M45 23.4405C45 35.5845 35.1503 45.4291 23 45.4291C10.8497 45.4291 1 35.5845 1 23.4405C1 11.2965 10.8497 1.4519 23 1.4519C35.1503 1.4519 45 11.2965 45 23.4405Z" stroke="url(#svg-id-413.6589415174274)" stroke-width="1.5"></path><defs><linearGradient id="svg-id-413.6589415174274" x1="28.5995" y1="1.45154" x2="28.6041" y2="45.4291" gradientUnits="userSpaceOnUse"><stop offset="0.0457092" class="gradient-stop--2--1"></stop><stop offset="0.554765" class="gradient-stop--2--2"></stop><stop offset="0.864583" class="gradient-stop--2--3"></stop><stop offset="1" class="gradient-stop--2--4"></stop></linearGradient></defs></svg></span><span class="icon__blur"><svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg" class="
                                                    icon__blur-icon
                                                "><path d="M23 13.9454V31.9361M13.7083 23.4405H32.0083M45 23.4405C45 35.5845 35.1503 45.4291 23 45.4291C10.8497 45.4291 1 35.5845 1 23.4405C1 11.2965 10.8497 1.4519 23 1.4519C35.1503 1.4519 45 11.2965 45 23.4405Z" stroke="url(#svg-id-1509.8018469803321)" stroke-width="1.5"></path><defs><linearGradient id="svg-id-1509.8018469803321" x1="28.5995" y1="1.45154" x2="28.6041" y2="45.4291" gradientUnits="userSpaceOnUse"><stop offset="0.0457092" class="gradient-stop--2--1"></stop><stop offset="0.554765" class="gradient-stop--2--2"></stop><stop offset="0.864583" class="gradient-stop--2--3"></stop><stop offset="1" class="gradient-stop--2--4"></stop></linearGradient></defs></svg></span><span class="icon__blur"><svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg" class="
                                                    icon__blur-icon
                                                "><path d="M23 13.9454V31.9361M13.7083 23.4405H32.0083M45 23.4405C45 35.5845 35.1503 45.4291 23 45.4291C10.8497 45.4291 1 35.5845 1 23.4405C1 11.2965 10.8497 1.4519 23 1.4519C35.1503 1.4519 45 11.2965 45 23.4405Z" stroke="url(#svg-id-8568.72673808996)" stroke-width="1.5"></path><defs><linearGradient id="svg-id-8568.72673808996" x1="28.5995" y1="1.45154" x2="28.6041" y2="45.4291" gradientUnits="userSpaceOnUse"><stop offset="0.0457092" class="gradient-stop--2--1"></stop><stop offset="0.554765" class="gradient-stop--2--2"></stop><stop offset="0.864583" class="gradient-stop--2--3"></stop><stop offset="1" class="gradient-stop--2--4"></stop></linearGradient></defs></svg>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </button>
                    </li>
                    <li class="team-module__list-item">
                        <button class="team-module__list-item-button" aria-controls="team-modal-5Xlw8Sqgj5l3Db2ZSQ1Gbt" aria-expanded="false">
                            <span class="team-member team-member--has-bio">
                                <img alt="" sizes="670w" srcset="https://images.ctfassets.net/qx5k8y1u9drj/1pVFbFzYe0uZei9dqbGovA/8d95108fbe625c21c13cec731529fc59/Jerry-Pratt_670x742.jpg?fm=webp&amp;w=16&amp;q=70 16w, https://images.ctfassets.net/qx5k8y1u9drj/1pVFbFzYe0uZei9dqbGovA/8d95108fbe625c21c13cec731529fc59/Jerry-Pratt_670x742.jpg?fm=webp&amp;w=32&amp;q=70 32w, https://images.ctfassets.net/qx5k8y1u9drj/1pVFbFzYe0uZei9dqbGovA/8d95108fbe625c21c13cec731529fc59/Jerry-Pratt_670x742.jpg?fm=webp&amp;w=48&amp;q=70 48w, https://images.ctfassets.net/qx5k8y1u9drj/1pVFbFzYe0uZei9dqbGovA/8d95108fbe625c21c13cec731529fc59/Jerry-Pratt_670x742.jpg?fm=webp&amp;w=64&amp;q=70 64w, https://images.ctfassets.net/qx5k8y1u9drj/1pVFbFzYe0uZei9dqbGovA/8d95108fbe625c21c13cec731529fc59/Jerry-Pratt_670x742.jpg?fm=webp&amp;w=96&amp;q=70 96w, https://images.ctfassets.net/qx5k8y1u9drj/1pVFbFzYe0uZei9dqbGovA/8d95108fbe625c21c13cec731529fc59/Jerry-Pratt_670x742.jpg?fm=webp&amp;w=128&amp;q=70 128w, https://images.ctfassets.net/qx5k8y1u9drj/1pVFbFzYe0uZei9dqbGovA/8d95108fbe625c21c13cec731529fc59/Jerry-Pratt_670x742.jpg?fm=webp&amp;w=256&amp;q=70 256w, https://images.ctfassets.net/qx5k8y1u9drj/1pVFbFzYe0uZei9dqbGovA/8d95108fbe625c21c13cec731529fc59/Jerry-Pratt_670x742.jpg?fm=webp&amp;w=384&amp;q=70 384w, https://images.ctfassets.net/qx5k8y1u9drj/1pVFbFzYe0uZei9dqbGovA/8d95108fbe625c21c13cec731529fc59/Jerry-Pratt_670x742.jpg?fm=webp&amp;w=640&amp;q=70 640w, https://images.ctfassets.net/qx5k8y1u9drj/1pVFbFzYe0uZei9dqbGovA/8d95108fbe625c21c13cec731529fc59/Jerry-Pratt_670x742.jpg?fm=webp&amp;w=750&amp;q=70 750w, https://images.ctfassets.net/qx5k8y1u9drj/1pVFbFzYe0uZei9dqbGovA/8d95108fbe625c21c13cec731529fc59/Jerry-Pratt_670x742.jpg?fm=webp&amp;w=828&amp;q=70 828w, https://images.ctfassets.net/qx5k8y1u9drj/1pVFbFzYe0uZei9dqbGovA/8d95108fbe625c21c13cec731529fc59/Jerry-Pratt_670x742.jpg?fm=webp&amp;w=1080&amp;q=70 1080w, https://images.ctfassets.net/qx5k8y1u9drj/1pVFbFzYe0uZei9dqbGovA/8d95108fbe625c21c13cec731529fc59/Jerry-Pratt_670x742.jpg?fm=webp&amp;w=1200&amp;q=70 1200w, https://images.ctfassets.net/qx5k8y1u9drj/1pVFbFzYe0uZei9dqbGovA/8d95108fbe625c21c13cec731529fc59/Jerry-Pratt_670x742.jpg?fm=webp&amp;w=1920&amp;q=70 1920w, https://images.ctfassets.net/qx5k8y1u9drj/1pVFbFzYe0uZei9dqbGovA/8d95108fbe625c21c13cec731529fc59/Jerry-Pratt_670x742.jpg?fm=webp&amp;w=2048&amp;q=70 2048w, https://images.ctfassets.net/qx5k8y1u9drj/1pVFbFzYe0uZei9dqbGovA/8d95108fbe625c21c13cec731529fc59/Jerry-Pratt_670x742.jpg?fm=webp&amp;w=3840&amp;q=70 3840w" src="https://images.ctfassets.net/qx5k8y1u9drj/1pVFbFzYe0uZei9dqbGovA/8d95108fbe625c21c13cec731529fc59/Jerry-Pratt_670x742.jpg?fm=webp&amp;w=3840&amp;q=70" width="670" height="742" decoding="async" data-nimg="1" class="team-member__image" loading="lazy" style={{color:"transparent"}}/>
                                <span class="team-member__text">
                                    <span class="team-member__name-title-container">
                                        <span class="team-member__name">Jerry Pratt</span>
                                        <span class="team-member__title">CTO</span>
                                    </span>
                                    <span class="team-member__plus-icon-container">
                                        <span class="icon team-member__plus-icon icon--plus-circle">
                                            <span class="icon__solid"><svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon__solid-icon
                                                "><path d="M23 13.9454V31.9361M13.7083 23.4405H32.0083M45 23.4405C45 35.5845 35.1503 45.4291 23 45.4291C10.8497 45.4291 1 35.5845 1 23.4405C1 11.2965 10.8497 1.4519 23 1.4519C35.1503 1.4519 45 11.2965 45 23.4405Z" stroke="url(#svg-id-2831.3824045724355)" stroke-width="1.5"></path><defs><linearGradient id="svg-id-2831.3824045724355" x1="28.5995" y1="1.45154" x2="28.6041" y2="45.4291" gradientUnits="userSpaceOnUse"><stop offset="0.0457092" class="gradient-stop--2--1"></stop><stop offset="0.554765" class="gradient-stop--2--2"></stop><stop offset="0.864583" class="gradient-stop--2--3"></stop><stop offset="1" class="gradient-stop--2--4"></stop></linearGradient></defs></svg></span><span class="icon__blur"><svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg" class="
                                                    icon__blur-icon
                                                "><path d="M23 13.9454V31.9361M13.7083 23.4405H32.0083M45 23.4405C45 35.5845 35.1503 45.4291 23 45.4291C10.8497 45.4291 1 35.5845 1 23.4405C1 11.2965 10.8497 1.4519 23 1.4519C35.1503 1.4519 45 11.2965 45 23.4405Z" stroke="url(#svg-id-9910.108365967704)" stroke-width="1.5"></path><defs><linearGradient id="svg-id-9910.108365967704" x1="28.5995" y1="1.45154" x2="28.6041" y2="45.4291" gradientUnits="userSpaceOnUse"><stop offset="0.0457092" class="gradient-stop--2--1"></stop><stop offset="0.554765" class="gradient-stop--2--2"></stop><stop offset="0.864583" class="gradient-stop--2--3"></stop><stop offset="1" class="gradient-stop--2--4"></stop></linearGradient></defs></svg></span><span class="icon__blur"><svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg" class="
                                                    icon__blur-icon
                                                "><path d="M23 13.9454V31.9361M13.7083 23.4405H32.0083M45 23.4405C45 35.5845 35.1503 45.4291 23 45.4291C10.8497 45.4291 1 35.5845 1 23.4405C1 11.2965 10.8497 1.4519 23 1.4519C35.1503 1.4519 45 11.2965 45 23.4405Z" stroke="url(#svg-id-7829.698909657847)" stroke-width="1.5"></path><defs><linearGradient id="svg-id-7829.698909657847" x1="28.5995" y1="1.45154" x2="28.6041" y2="45.4291" gradientUnits="userSpaceOnUse"><stop offset="0.0457092" class="gradient-stop--2--1"></stop><stop offset="0.554765" class="gradient-stop--2--2"></stop><stop offset="0.864583" class="gradient-stop--2--3"></stop><stop offset="1" class="gradient-stop--2--4"></stop></linearGradient></defs></svg>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </button>
                    </li>
                    <li class="team-module__list-item">
                        <button class="team-module__list-item-button" aria-controls="team-modal-5Xlw8Sqgj5l3Db2ZSQ1Gbt" aria-expanded="false">
                            <span class="team-member team-member--has-bio">
                                <img alt="" sizes="670w" srcset="https://images.ctfassets.net/qx5k8y1u9drj/5K2RW3fd4MivUHroPnAAjw/58be6e5d81e114b20095b7ff8f4e4bbd/Lee-Randaccio-670x742.jpg?fm=webp&amp;w=16&amp;q=70 16w, https://images.ctfassets.net/qx5k8y1u9drj/5K2RW3fd4MivUHroPnAAjw/58be6e5d81e114b20095b7ff8f4e4bbd/Lee-Randaccio-670x742.jpg?fm=webp&amp;w=32&amp;q=70 32w, https://images.ctfassets.net/qx5k8y1u9drj/5K2RW3fd4MivUHroPnAAjw/58be6e5d81e114b20095b7ff8f4e4bbd/Lee-Randaccio-670x742.jpg?fm=webp&amp;w=48&amp;q=70 48w, https://images.ctfassets.net/qx5k8y1u9drj/5K2RW3fd4MivUHroPnAAjw/58be6e5d81e114b20095b7ff8f4e4bbd/Lee-Randaccio-670x742.jpg?fm=webp&amp;w=64&amp;q=70 64w, https://images.ctfassets.net/qx5k8y1u9drj/5K2RW3fd4MivUHroPnAAjw/58be6e5d81e114b20095b7ff8f4e4bbd/Lee-Randaccio-670x742.jpg?fm=webp&amp;w=96&amp;q=70 96w, https://images.ctfassets.net/qx5k8y1u9drj/5K2RW3fd4MivUHroPnAAjw/58be6e5d81e114b20095b7ff8f4e4bbd/Lee-Randaccio-670x742.jpg?fm=webp&amp;w=128&amp;q=70 128w, https://images.ctfassets.net/qx5k8y1u9drj/5K2RW3fd4MivUHroPnAAjw/58be6e5d81e114b20095b7ff8f4e4bbd/Lee-Randaccio-670x742.jpg?fm=webp&amp;w=256&amp;q=70 256w, https://images.ctfassets.net/qx5k8y1u9drj/5K2RW3fd4MivUHroPnAAjw/58be6e5d81e114b20095b7ff8f4e4bbd/Lee-Randaccio-670x742.jpg?fm=webp&amp;w=384&amp;q=70 384w, https://images.ctfassets.net/qx5k8y1u9drj/5K2RW3fd4MivUHroPnAAjw/58be6e5d81e114b20095b7ff8f4e4bbd/Lee-Randaccio-670x742.jpg?fm=webp&amp;w=640&amp;q=70 640w, https://images.ctfassets.net/qx5k8y1u9drj/5K2RW3fd4MivUHroPnAAjw/58be6e5d81e114b20095b7ff8f4e4bbd/Lee-Randaccio-670x742.jpg?fm=webp&amp;w=750&amp;q=70 750w, https://images.ctfassets.net/qx5k8y1u9drj/5K2RW3fd4MivUHroPnAAjw/58be6e5d81e114b20095b7ff8f4e4bbd/Lee-Randaccio-670x742.jpg?fm=webp&amp;w=828&amp;q=70 828w, https://images.ctfassets.net/qx5k8y1u9drj/5K2RW3fd4MivUHroPnAAjw/58be6e5d81e114b20095b7ff8f4e4bbd/Lee-Randaccio-670x742.jpg?fm=webp&amp;w=1080&amp;q=70 1080w, https://images.ctfassets.net/qx5k8y1u9drj/5K2RW3fd4MivUHroPnAAjw/58be6e5d81e114b20095b7ff8f4e4bbd/Lee-Randaccio-670x742.jpg?fm=webp&amp;w=1200&amp;q=70 1200w, https://images.ctfassets.net/qx5k8y1u9drj/5K2RW3fd4MivUHroPnAAjw/58be6e5d81e114b20095b7ff8f4e4bbd/Lee-Randaccio-670x742.jpg?fm=webp&amp;w=1920&amp;q=70 1920w, https://images.ctfassets.net/qx5k8y1u9drj/5K2RW3fd4MivUHroPnAAjw/58be6e5d81e114b20095b7ff8f4e4bbd/Lee-Randaccio-670x742.jpg?fm=webp&amp;w=2048&amp;q=70 2048w, https://images.ctfassets.net/qx5k8y1u9drj/5K2RW3fd4MivUHroPnAAjw/58be6e5d81e114b20095b7ff8f4e4bbd/Lee-Randaccio-670x742.jpg?fm=webp&amp;w=3840&amp;q=70 3840w" src="https://images.ctfassets.net/qx5k8y1u9drj/5K2RW3fd4MivUHroPnAAjw/58be6e5d81e114b20095b7ff8f4e4bbd/Lee-Randaccio-670x742.jpg?fm=webp&amp;w=3840&amp;q=70" width="670" height="742" decoding="async" data-nimg="1" class="team-member__image" loading="lazy" style={{color:"transparent"}}/>
                                <span class="team-member__text">
                                    <span class="team-member__name-title-container">
                                        <span class="team-member__name">Lee Randaccio</span>
                                        <span class="team-member__title">VP, Growth</span>
                                    </span>
                                    <span class="team-member__plus-icon-container">
                                        <span class="icon team-member__plus-icon icon--plus-circle">
                                            <span class="icon__solid"><svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg" class="
                                                    icon__solid-icon
                                                "><path d="M23 13.9454V31.9361M13.7083 23.4405H32.0083M45 23.4405C45 35.5845 35.1503 45.4291 23 45.4291C10.8497 45.4291 1 35.5845 1 23.4405C1 11.2965 10.8497 1.4519 23 1.4519C35.1503 1.4519 45 11.2965 45 23.4405Z" stroke="url(#svg-id-6693.001531913281)" stroke-width="1.5"></path><defs><linearGradient id="svg-id-6693.001531913281" x1="28.5995" y1="1.45154" x2="28.6041" y2="45.4291" gradientUnits="userSpaceOnUse"><stop offset="0.0457092" class="gradient-stop--2--1"></stop><stop offset="0.554765" class="gradient-stop--2--2"></stop><stop offset="0.864583" class="gradient-stop--2--3"></stop><stop offset="1" class="gradient-stop--2--4"></stop></linearGradient></defs></svg></span><span class="icon__blur"><svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg" class="
                                                    icon__blur-icon
                                                "><path d="M23 13.9454V31.9361M13.7083 23.4405H32.0083M45 23.4405C45 35.5845 35.1503 45.4291 23 45.4291C10.8497 45.4291 1 35.5845 1 23.4405C1 11.2965 10.8497 1.4519 23 1.4519C35.1503 1.4519 45 11.2965 45 23.4405Z" stroke="url(#svg-id-5539.331356581672)" stroke-width="1.5"></path><defs><linearGradient id="svg-id-5539.331356581672" x1="28.5995" y1="1.45154" x2="28.6041" y2="45.4291" gradientUnits="userSpaceOnUse"><stop offset="0.0457092" class="gradient-stop--2--1"></stop><stop offset="0.554765" class="gradient-stop--2--2"></stop><stop offset="0.864583" class="gradient-stop--2--3"></stop><stop offset="1" class="gradient-stop--2--4"></stop></linearGradient></defs></svg></span><span class="icon__blur"><svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg" class="
                                                    icon__blur-icon
                                                "><path d="M23 13.9454V31.9361M13.7083 23.4405H32.0083M45 23.4405C45 35.5845 35.1503 45.4291 23 45.4291C10.8497 45.4291 1 35.5845 1 23.4405C1 11.2965 10.8497 1.4519 23 1.4519C35.1503 1.4519 45 11.2965 45 23.4405Z" stroke="url(#svg-id-7702.890502559134)" stroke-width="1.5"></path><defs><linearGradient id="svg-id-7702.890502559134" x1="28.5995" y1="1.45154" x2="28.6041" y2="45.4291" gradientUnits="userSpaceOnUse"><stop offset="0.0457092" class="gradient-stop--2--1"></stop><stop offset="0.554765" class="gradient-stop--2--2"></stop><stop offset="0.864583" class="gradient-stop--2--3"></stop><stop offset="1" class="gradient-stop--2--4"></stop></linearGradient></defs></svg>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </button>
                    </li>
                    <li class="team-module__list-item">
                        <button class="team-module__list-item-button" aria-controls="team-modal-5Xlw8Sqgj5l3Db2ZSQ1Gbt" aria-expanded="false">
                            <span class="team-member team-member--has-bio">
                                <img alt="" sizes="670w" srcset="https://images.ctfassets.net/qx5k8y1u9drj/6k4MasoRhlpnCSXs9afEhQ/a2680702b64ec891666ec60002a14ce6/Logan-Berkowitz-670x742.jpg?fm=webp&amp;w=16&amp;q=70 16w, https://images.ctfassets.net/qx5k8y1u9drj/6k4MasoRhlpnCSXs9afEhQ/a2680702b64ec891666ec60002a14ce6/Logan-Berkowitz-670x742.jpg?fm=webp&amp;w=32&amp;q=70 32w, https://images.ctfassets.net/qx5k8y1u9drj/6k4MasoRhlpnCSXs9afEhQ/a2680702b64ec891666ec60002a14ce6/Logan-Berkowitz-670x742.jpg?fm=webp&amp;w=48&amp;q=70 48w, https://images.ctfassets.net/qx5k8y1u9drj/6k4MasoRhlpnCSXs9afEhQ/a2680702b64ec891666ec60002a14ce6/Logan-Berkowitz-670x742.jpg?fm=webp&amp;w=64&amp;q=70 64w, https://images.ctfassets.net/qx5k8y1u9drj/6k4MasoRhlpnCSXs9afEhQ/a2680702b64ec891666ec60002a14ce6/Logan-Berkowitz-670x742.jpg?fm=webp&amp;w=96&amp;q=70 96w, https://images.ctfassets.net/qx5k8y1u9drj/6k4MasoRhlpnCSXs9afEhQ/a2680702b64ec891666ec60002a14ce6/Logan-Berkowitz-670x742.jpg?fm=webp&amp;w=128&amp;q=70 128w, https://images.ctfassets.net/qx5k8y1u9drj/6k4MasoRhlpnCSXs9afEhQ/a2680702b64ec891666ec60002a14ce6/Logan-Berkowitz-670x742.jpg?fm=webp&amp;w=256&amp;q=70 256w, https://images.ctfassets.net/qx5k8y1u9drj/6k4MasoRhlpnCSXs9afEhQ/a2680702b64ec891666ec60002a14ce6/Logan-Berkowitz-670x742.jpg?fm=webp&amp;w=384&amp;q=70 384w, https://images.ctfassets.net/qx5k8y1u9drj/6k4MasoRhlpnCSXs9afEhQ/a2680702b64ec891666ec60002a14ce6/Logan-Berkowitz-670x742.jpg?fm=webp&amp;w=640&amp;q=70 640w, https://images.ctfassets.net/qx5k8y1u9drj/6k4MasoRhlpnCSXs9afEhQ/a2680702b64ec891666ec60002a14ce6/Logan-Berkowitz-670x742.jpg?fm=webp&amp;w=750&amp;q=70 750w, https://images.ctfassets.net/qx5k8y1u9drj/6k4MasoRhlpnCSXs9afEhQ/a2680702b64ec891666ec60002a14ce6/Logan-Berkowitz-670x742.jpg?fm=webp&amp;w=828&amp;q=70 828w, https://images.ctfassets.net/qx5k8y1u9drj/6k4MasoRhlpnCSXs9afEhQ/a2680702b64ec891666ec60002a14ce6/Logan-Berkowitz-670x742.jpg?fm=webp&amp;w=1080&amp;q=70 1080w, https://images.ctfassets.net/qx5k8y1u9drj/6k4MasoRhlpnCSXs9afEhQ/a2680702b64ec891666ec60002a14ce6/Logan-Berkowitz-670x742.jpg?fm=webp&amp;w=1200&amp;q=70 1200w, https://images.ctfassets.net/qx5k8y1u9drj/6k4MasoRhlpnCSXs9afEhQ/a2680702b64ec891666ec60002a14ce6/Logan-Berkowitz-670x742.jpg?fm=webp&amp;w=1920&amp;q=70 1920w, https://images.ctfassets.net/qx5k8y1u9drj/6k4MasoRhlpnCSXs9afEhQ/a2680702b64ec891666ec60002a14ce6/Logan-Berkowitz-670x742.jpg?fm=webp&amp;w=2048&amp;q=70 2048w, https://images.ctfassets.net/qx5k8y1u9drj/6k4MasoRhlpnCSXs9afEhQ/a2680702b64ec891666ec60002a14ce6/Logan-Berkowitz-670x742.jpg?fm=webp&amp;w=3840&amp;q=70 3840w" src="https://images.ctfassets.net/qx5k8y1u9drj/6k4MasoRhlpnCSXs9afEhQ/a2680702b64ec891666ec60002a14ce6/Logan-Berkowitz-670x742.jpg?fm=webp&amp;w=3840&amp;q=70" width="670" height="742" decoding="async" data-nimg="1" class="team-member__image" loading="lazy" style={{color:"transparent"}}/>
                                <span class="team-member__text">
                                    <span class="team-member__name-title-container">
                                        <span class="team-member__name">Logan Berkowitz</span>
                                        <span class="team-member__title">VP, Business Operations</span>
                                    </span>
                                    <span class="team-member__plus-icon-container">
                                        <span class="icon team-member__plus-icon icon--plus-circle">
                                            <span class="icon__solid"><svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg" class="
                                                    icon__solid-icon
                                                "><path d="M23 13.9454V31.9361M13.7083 23.4405H32.0083M45 23.4405C45 35.5845 35.1503 45.4291 23 45.4291C10.8497 45.4291 1 35.5845 1 23.4405C1 11.2965 10.8497 1.4519 23 1.4519C35.1503 1.4519 45 11.2965 45 23.4405Z" stroke="url(#svg-id-5080.394497815472)" stroke-width="1.5"></path><defs><linearGradient id="svg-id-5080.394497815472" x1="28.5995" y1="1.45154" x2="28.6041" y2="45.4291" gradientUnits="userSpaceOnUse"><stop offset="0.0457092" class="gradient-stop--2--1"></stop><stop offset="0.554765" class="gradient-stop--2--2"></stop><stop offset="0.864583" class="gradient-stop--2--3"></stop><stop offset="1" class="gradient-stop--2--4"></stop></linearGradient></defs></svg></span><span class="icon__blur"><svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg" class="
                                                    icon__blur-icon
                                                "><path d="M23 13.9454V31.9361M13.7083 23.4405H32.0083M45 23.4405C45 35.5845 35.1503 45.4291 23 45.4291C10.8497 45.4291 1 35.5845 1 23.4405C1 11.2965 10.8497 1.4519 23 1.4519C35.1503 1.4519 45 11.2965 45 23.4405Z" stroke="url(#svg-id-2466.2571778305487)" stroke-width="1.5"></path><defs><linearGradient id="svg-id-2466.2571778305487" x1="28.5995" y1="1.45154" x2="28.6041" y2="45.4291" gradientUnits="userSpaceOnUse"><stop offset="0.0457092" class="gradient-stop--2--1"></stop><stop offset="0.554765" class="gradient-stop--2--2"></stop><stop offset="0.864583" class="gradient-stop--2--3"></stop><stop offset="1" class="gradient-stop--2--4"></stop></linearGradient></defs></svg></span><span class="icon__blur"><svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg" class="
                                                    icon__blur-icon
                                                "><path d="M23 13.9454V31.9361M13.7083 23.4405H32.0083M45 23.4405C45 35.5845 35.1503 45.4291 23 45.4291C10.8497 45.4291 1 35.5845 1 23.4405C1 11.2965 10.8497 1.4519 23 1.4519C35.1503 1.4519 45 11.2965 45 23.4405Z" stroke="url(#svg-id-3981.0834488560176)" stroke-width="1.5"></path><defs><linearGradient id="svg-id-3981.0834488560176" x1="28.5995" y1="1.45154" x2="28.6041" y2="45.4291" gradientUnits="userSpaceOnUse"><stop offset="0.0457092" class="gradient-stop--2--1"></stop><stop offset="0.554765" class="gradient-stop--2--2"></stop><stop offset="0.864583" class="gradient-stop--2--3"></stop><stop offset="1" class="gradient-stop--2--4"></stop></linearGradient></defs></svg>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </button>
                    </li>
                </ul>
            */}

        </footer>
    )
}
export default Component;