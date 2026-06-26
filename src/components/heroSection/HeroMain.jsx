import React from 'react'
import HeroPic from './HeroPic'
import HeroText from './HeroText'
import HeroGradient from './HeroGradient'
import SubHeroSection from './SubHeroSection'

const HeroMain = () => {
  return (
    <div className='pt-32 pb-20 overflow-hidden'>
        <div className='grid md:grid-cols-[1.05fr_0.95fr] sm:grid-cols-1 max-w-[1200px] w-full mx-auto gap-12 items-center relative px-4 min-w-0'>
        <HeroText/>
        <HeroPic/>
        </div>
    </div>
  )
}

export default HeroMain
