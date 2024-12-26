import Header from '@/components/navigation/header/header'
import FancyButton from '@/components/ui/fansy-button'
import LiveClock from '@/components/ui/liveclock'
import ScrollDown from '@/components/ui/scroll-down'
import MagneticWrapper from '@/components/visualEffects/magnetic-effect-wrapper'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

export default function LandingSection() {
    return (
        <div className='relative h-screen overflow-hidden p-8 font-MainFont'>
            {/* Header */}
            <Header />
            {/* show magnetic fansy button on small screens and hide it on medium screens  */}
            <div className="absolute bottom-36 left-10 z-20 md:hidden">
                <MagneticWrapper>
                    <FancyButton text="Let's talk" icon={<FaArrowRight />} />
                </MagneticWrapper>
            </div>
            {/* Live clock  */}
            <div className='absolute right-10 bottom-6'>
                <LiveClock timeZone='Africa/Cairo' />
            </div>
            {/* slogan */}
            <div className="absolute w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] leading-[14vw] lg:leading-[10vw] h-[27rem] lg:h-[27rem] 2xl:h-[34rem] 2xl:leading-[9.8rem] font-medium  tracking-[-0.3rem]">
                <div className="flex flex-col justify-center items-center text-primary-foreground text-[18vw] lg:text-[14vw] x2l:text-[10rem] uppercase">
                    <div>
                        <span>Code</span>
                    </div>
                    <div>
                        <span>Crafting</span>
                    </div>
                    <div className="relative">
                        <span>Brilliance</span>
                        <div className="text-[1rem] leading-[1.4rem] tracking-[-0.07rem] absolute top-[14vw] lg:top-[10vw] 2xl:top-[10.2rem] left-[57rem] md:left-0 2xl:left-[63rem] w-[30rem] uppercase font-normal">
                            <span>Emporing innpvation</span>
                            <br />
                            <span>through inspired design</span>
                            <br />
                            <span>where challenges spark creativity</span>
                            <br />
                            <span>and solutions redefine possibilities.</span>
                        </div>
                    </div>
                </div>
                {/* magnetic ScrollDown */}
                <MagneticWrapper className='absolute left-[65%] md:left-[46%] -translate-x-1/2 bottom-[-3rem]  md:bottom-[-6rem] 2xl:bottom-[-7rem]'>
                    <ScrollDown/>
                </MagneticWrapper>
            </div>
        </div>
    )
}
