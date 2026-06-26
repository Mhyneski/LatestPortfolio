import React from 'react'

const SingleSkill = ({imgSvg, text}) => {
  return (
    <div className='h-full rounded-lg border border-darkGrey bg-lightBrown/70 px-5 py-6 hover:border-cyan hover:-translate-y-1 transition-all duration-300'>
        <div className='flex flex-col items-center gap-3 text-center'>
            <div className="text-cyan text-5xl">
              {imgSvg}
            </div>
            <p className='text-white font-bold leading-tight'>{text}</p>
        </div>
    </div>
  )
}

export default SingleSkill
