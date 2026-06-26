import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { TfiLocationPin } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
        <SingleInfo text="jhestineitsolution@gmail.com" Image={HiOutlineMail}/>
        <SingleInfo text="linkedin.com/in/mhyne-jhestine-magno-319551308" Image={FaLinkedin}/>
        <SingleInfo text="Naif, Dubai, United Arab Emirates" Image={TfiLocationPin}/>
    </div>
  )
}

export default ContactInfo
