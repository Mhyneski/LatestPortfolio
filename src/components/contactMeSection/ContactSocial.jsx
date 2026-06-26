import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const ContactSocial = () => {
  return (
    <div className='flex flex-row gap-3'>
        <SingleContactSocial link="https://github.com/Mhyneski" Icon={FaGithub}/>
        <SingleContactSocial link="https://www.linkedin.com/in/mhyne-jhestine-magno-319551308" Icon={FaLinkedin}/>
        <SingleContactSocial link="https://web.facebook.com/jhestine.luxwell.9" Icon={FaFacebook}/>
    </div>
  )
}

export default ContactSocial
