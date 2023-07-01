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
        </footer>
    )
}
export default Component;