import React from 'react'
import ContactMeLeft from './ContactMeLeft'
import ContactMeRight from './ContactMeRight'

const ContactMeMain = () => {
  return (
    <div id='contact' className='max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4'>
        <h2 className='md:text-6xl sm:text-4xl text-cyan mb-10 text-center'>Contact Me</h2>
        <div className='flex justify-between gap-12 bg-lightBrown/70 border border-darkGrey p-8 rounded-xl lg:flex-row sm:flex-col'>
            <ContactMeLeft/>
            <ContactMeRight/>
        </div>
    </div>
  )
}

export default ContactMeMain
