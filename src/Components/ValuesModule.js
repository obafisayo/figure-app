import React from "react";
import styled from "styled-components";
import ValueList from "./ValuesList";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import Totop from "./Totop";

const StyledSection = styled.section`

    .values-module {
        background-color: #0c0c0c;
        color: #fff;
        padding: 16rem var(--content-padding);
    }
    .values-module__inner {
        max-width: 256rem;
        width: 100%;
        margin: 0 auto;
    }
    .values-module__top-content {
        margin-bottom: 3.2rem;
    }
    .values-module__kicker {
        line-height: 1.2;
        font-family: FreeSans,sans-serif;
        font-size: 1.4rem;
        font-weight: 500;
        letter-spacing: 0;
    }
    .values-module__heading {
        line-height: 1.1;
        font-family: FreeSans,sans-serif;
        font-size: 2.4rem;
        font-weight: 400;
        letter-spacing: -.01em;
        margin: 1rem 0 0;
        max-width: 44rem;
        width: 100%;
    }
    .values-module__cta {
        margin-top: 5.2rem;
    }

    @media screen and (min-width: 768px) {
        .values-module__top-content {
            margin-bottom: 5.2rem;
        }
        .values-module__heading {
            font-size: 3.6rem;
        }
    }
`;

function ValuesModule() {
    return(
        <StyledSection className="section section--with-background section--dark">
            <section className="values-module ">
            <div id="our-values" className="section__anchor"></div>
            <div className="values-module__inner">
                <div className="values-module__top-content">
                    <span className="values-module__kicker">Our Values</span>
                    <h1 className="values-module__heading">Breaking the limits of human achievement</h1>
                </div>
                <ol className="values-module__values">
                    <ValueList header={'Move Fast & Be Technically Fearless'} paragraph={'Hesitation is the enemy of momentum. We are tackling today’s most complex technological challenges by testing, experimenting, and taking calculated risks to embrace the unknown without fear of failure.'}/> 
                    <ValueList header={'Product First, Mission Focused'} paragraph={'Our product and our mission are one in the same: to bring a commercially viable humanoid to market. We are builders, designers, and engineers united by a commitment to that mission. We avoid distraction and unrelated activities to remain laser-focused on shipping a safe, high quality product.'}/> 
                    <ValueList header={'Aggressively Optimistic'} paragraph={'Building Figure won’t be an easy win; it will require decades of commitment and ingenuity. We’re humbled by our mission, and aspire to remain optimistic even in the face of enormous hurdles.'}/> 
                    <ValueList header={'Maximize Future Impact'} paragraph={'We have what it takes to build the most groundbreaking company on the planet — to create an inspiring future for generations to come with improved access to goods and services, safer working conditions, and more opportunity for fulfilling work. Our focus is on what we can achieve 5, 10, 20+ years from now, not the near-term wins. '}/> 
                    <ValueList header={'Championship Mindset'} paragraph={'To address the extraordinary demands of our work, we believe in operating as a winning team. We are in the trenches together, collaborating in-person, remaining hyper-focused, and pushing each other to the highest levels of performance.'}/> 
                </ol>
                <div className="values-module__cta">
                    <Link to="/culture" >
                        <Totop component={<Slider text={'Dive deeper into our culture'} icon arrowUpRight light slide bordercolor={'white'} ff={'FreeSans, sans-serif'}/>}/>
                    </Link>
                </div>
            </div>
            </section>
        </StyledSection>
    )
}
export default ValuesModule;