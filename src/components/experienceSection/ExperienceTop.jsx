import React from 'react'
import ExperienceTopLeft from './ExperienceTopLeft'
import ExperienceTopMiddle from './ExperienceTopMiddle'
import ExperienceTopRight from './ExperienceTopRight'

const ExperienceTop = () => {
  return (
    <div className='grid lg:grid-cols-[0.9fr_1.1fr] sm:grid-cols-1 gap-6 items-stretch'>
        <ExperienceTopLeft/>
        <ExperienceTopRight/>
    </div>
  )
}

export default ExperienceTop
