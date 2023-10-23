// import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_ixdjv6j', 'template_5ssi66r', form.current, 'Q_A8HlJXKccTnkaMp')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};
return (
    <form ref={form} onSubmit={sendEmail}>
      {/* <label>Name</label> */}
      <input type="text" name="user_name" />
      {/* <label>Email</label> */}
      <input type="email" name="user_email" />
      {/* <label>Message</label> */}
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
