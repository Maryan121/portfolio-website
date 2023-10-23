import React from 'react'
import { useState } from 'react';
import { TextField,Button, Typography } from '@mui/material';

export default function Contact() {
    const [formData,setFormData] = useState({ 
        name: '',
        email: '',
        message: '',
     })

     const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData.name,formData.email, formData.message)
      }
  return (
    <div className='formContainer' id='contact'>
        <Typography className='contactTitle' variant='h5'>contact me</Typography>
        <form className='form' onSubmit={handleSubmit}>
            <input 
                className='textField' 
                name='name' 
                label='Name'
                placeholder='enter your name..' 
                onChange={handleChange} 
                value={formData.name}
                />
            <input 
                className='textField' 
                name='email'  
                label='Email' 
                placeholder='example@gmail.com...' 
                onChange={handleChange} 
                value={formData.email}
                />
            <textarea 
                className='textField' 
                name='message' 
                label='Message'
                placeholder='message' 
                
                onChange={handleChange} 
                value={formData.message}
                />
            <Button 
                className='submitBtn' 
                variant='outlined' 
                type='submit'>
                    submit
                </Button>
        </form>
    </div>
  )
}