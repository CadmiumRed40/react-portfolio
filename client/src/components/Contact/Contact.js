import React, { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false); //

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/send-email', { name, email, message })
      .then((res) => {
        console.log(res.data);
        setName('');
        setEmail('');
        setMessage('');
        setIsSent(true)
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
      {isSent && <p>Message sent successfully!</p>}
    </form>
  );
};
