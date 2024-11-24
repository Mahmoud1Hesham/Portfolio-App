import FancyButton from '@/components/ui/fansy-button'
import Profile from '@/components/ui/profile'
import MagneticWrapper from '@/components/visualEffects/magnetic-effect-wrapper'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

export default function Header() {
  return (
    <div className='w-full flex items-center justify-center md:justify-between'>
        <Profile/>
        <div className="hidden md:inline">
            <MagneticWrapper>
                <FancyButton  text="Let's talk" icon={<FaArrowRight/>} />
            </MagneticWrapper>
        </div>
    </div>
  )
}
