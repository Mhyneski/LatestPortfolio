import React from 'react'

const SingleContactSocial = ({Icon,link}) => {
  return (
    <div className='text-xl h-10 w-10 border border-white/10 text-lightGrey rounded-md flex items-center justify-center transition-colors hover:border-cyan hover:text-cyan'>
        <a href={link} target="_blank" rel="noreferrer" className='cursor-pointer'><Icon/></a>
    </div>
  )
}

export default SingleContactSocial
