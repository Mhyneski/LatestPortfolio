import React from 'react'
import ContactMeForm from './ContactMeForm'

const ContactMeLeft = () => {
  return (
    <div className='flex flex-col gap-8 w-full'>
        <div>
            <h2 className='text-orange text-3xl mb-4'>Get In Touch</h2>
            <p className='text-white'>Reach out for full-stack web development, cloud application work, or collaboration opportunities.<br/>
                I am currently based in Dubai.
            </p>
        </div>
        <ContactMeForm/>
    </div>
  )
}

export default ContactMeLeft
