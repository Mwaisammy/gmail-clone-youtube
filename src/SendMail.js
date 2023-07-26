import React from 'react';
import './SendMail.css';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { closeSendMessage } from './features/mailSlice';
import { useDispatch } from 'react-redux';
import { Close } from '@mui/icons-material';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
import { useState } from 'react';

function SendMail() {


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const [ active, setActive ] = useState(true);
 


  const onSubmit = async (formData) => {
    if(!formData) return;
    const message = {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: serverTimestamp(),
    };
  
    try {
      await addDoc(collection(db, 'emails'), {
        ...message,
      });
dispatch(closeSendMessage())

      console.log('Email added successfully.');
    } catch (error) {
      console.error('Error adding email:', error);
    }
  };
 



  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        

        
        <Close  onClick={() => dispatch(closeSendMessage())}className="sendMail__close"/>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="to" placeholder="To" type="email" {...register('to', { required: true })} />
        {errors.to && <p className='sendMail__error'>To is required!</p>}

        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register('subject', { required: true })}
        />
        {errors.subject && <p className='sendMail__error'>Subject is required!</p>}

        <input
          name="message"
          placeholder="Message..."
          className="sendMail__message"
          {...register('message', { required: true })}
        />
        {errors.message && <p className='sendMail__error'>Message is required!</p>}

        <div className="sendMail__options">
          <Button  className="sendMail__send" variant="contained" color="primary" type="submit"
          
          
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
