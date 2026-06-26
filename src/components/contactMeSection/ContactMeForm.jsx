import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const ContactMeForm = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')
    const [success,setSuccess] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)

    }
    const handleMessage = (e) => {
        setMessage(e.target.value)

    }

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_yc62kn9', 'template_wlvp7qp', form.current, {
          publicKey: 'My2CwT48rT86pzcOF',
        })
        .then(
          () => {
            setName('');
            setEmail('');
            setMessage('');
            setSuccess('Message sent');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

  return (
    <div>
        <p className='mb-3 text-sm font-medium text-cyan'>{success}</p>
        <form action="" className='flex flex-col gap-3 text-white' ref={form} onSubmit={sendEmail}>
            <input name='from_name' type="text" placeholder='Your name' required className='h-12 rounded-md border border-white/10 bg-black/30 px-4 text-sm outline-none transition-colors placeholder:text-grey focus:border-cyan' value={name} onChange={handleName}/>
            <input name='from_email' type="email" placeholder='Your email' required className='h-12 rounded-md border border-white/10 bg-black/30 px-4 text-sm outline-none transition-colors placeholder:text-grey focus:border-cyan' value={email} onChange={handleEmail}/>
            <textarea name='message' type="text" placeholder='Message' rows="7" required className='rounded-md border border-white/10 bg-black/30 p-4 text-sm outline-none transition-colors placeholder:text-grey focus:border-cyan' value={message} onChange={handleMessage}/> 
            <button type='submit' className='h-12 rounded-md bg-cyan px-4 text-sm font-bold text-black transition-colors hover:bg-lightCyan'>Send Message</button>
        </form>
    </div>
  )
}

export default ContactMeForm
