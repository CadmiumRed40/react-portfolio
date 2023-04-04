import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false); //

//handles the submitting portion of the component. We create a post request of the object specified to the localhost address
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/send-email', { name, email, message })
      .then((res) => {
        console.log(res.data);
        setName('');
        setEmail('');
        setMessage('');
        setIsSent(true);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email)
      })
      .catch((err) => {
        console.error(err);
      });
  };

  //displaying the object from localstorage back when the component mounts using useEffect and no dependency array to only run on the initial render.

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    const storedEmail = localStorage.getItem('email');

    if (storedName && storedEmail) {
      setName(storedName);
      setEmail(storedEmail);
    }
  },[]);

  return (
    <form onSubmit={handleSubmit}>
      <label className='form-headers'>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label className='form-headers'>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className='form-headers'>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
      {isSent && <p>Message sent successfully!</p>}
    </form>
  );
};
