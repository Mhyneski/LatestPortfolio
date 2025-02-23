import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";
import { TfiLocationPin } from "react-icons/tfi";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
        <SingleInfo text="Jhestineitsolution@gmail.com" Image={HiOutlineMail}/>
        <SingleInfo text="+69 9662375991" Image={HiOutlinePhone}/>
        <SingleInfo text="Taguig, Philippines" Image={TfiLocationPin}/>
    </div>
  )
}

export default ContactInfo