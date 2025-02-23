import React from 'react'

const HeroGradient = () => {
  return (
    <div>
        <div className='shadow-cyanMdShadow absolute top-0 right-[400px] -z-10 animate-pulse'></div>
        <div className='shadow-cyanMdOrange absolute top-0 right-[400px] -z-10 animate-pulse'></div>
        <div className='shadow-cyanMdShadow absolute top-[300px] left-0 -z-10 opacity-50'></div>
        <div className='shadow-cyanMdOrange absolute top-[100px] left-0 -z-10 opacity-50'></div>
    </div>
  )
}

export default HeroGradient