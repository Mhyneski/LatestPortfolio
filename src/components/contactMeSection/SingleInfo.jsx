import React from 'react'

const SingleInfo = ({text,Image}) => {
  return (
    <div className='flex gap-3 items-start justify-start rounded-lg border border-white/10 bg-white/[0.03] p-3'>
        <Image className="mt-0.5 shrink-0 text-xl text-cyan"/>
        <p className='break-all text-sm leading-6'>{text}</p>
    </div>
  )
}

export default SingleInfo
