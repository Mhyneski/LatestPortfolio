import React from 'react'
import ExperienceInfo from './ExperienceInfo'
import { projects } from '../../data/projectsData'

const ExperienceTopLeft = () => {
  const yearsOfExperience = new Date().getFullYear() - 2023;
  const projectCount = projects.length;

  return (
    <div className='flex flex-col gap-6 w-[300px]'>
        <p className='text-orange font-bold uppercase text-3xl font-special text-center'>Since 2023</p>
        <div className='flex justify-center items-center gap-4 text-center'>
            <ExperienceInfo number={yearsOfExperience} text="Years"/>
            <p className='font-bold text-6xl text-lightBrown'>-</p>
            <ExperienceInfo number={projectCount} text="Websites"/>
        </div>
        <p className='text-center text-white'>With {yearsOfExperience} years of experience building dynamic and user-friendly web applications.</p>
    </div>
  )
}

export default ExperienceTopLeft