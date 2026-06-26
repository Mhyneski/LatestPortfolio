import React from 'react'
import ExperienceInfo from './ExperienceInfo'
import { projects } from '../../data/projectsData'

const ExperienceTopLeft = () => {
  const yearsOfExperience = 2;
  const projectCount = projects.length;

  return (
    <div className='flex flex-col gap-6 rounded-xl border border-darkGrey bg-lightBrown/70 p-6'>
        <p className='text-orange font-bold uppercase text-3xl font-special text-center'>Based in Dubai</p>
        <div className='flex justify-center items-center gap-4 text-center'>
            <ExperienceInfo number={yearsOfExperience} text="Years"/>
            <p className='font-bold text-6xl text-lightBrown'>-</p>
            <ExperienceInfo number={projectCount} text="Projects"/>
        </div>
        <p className='text-center text-white'>With {yearsOfExperience} years of software development experience building cloud-based business applications.</p>
    </div>
  )
}

export default ExperienceTopLeft
