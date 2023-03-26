import React, { useState } from 'react'

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleNameChange = event => setName(event.target.value);
    const handleEmailChange = event => setEmail(event.target.value);
    const handleMessageChange = event => setMessage(event.target.value);
    
    const handleSubmit = event => {
        event.preventDefault();
    }

    return(

    <div>
        <div className='contact-container'>
            <form onSubmit={handleSubmit}>
                
                <label>
                    Name:
                    <input type='text' value={name} onChange={handleNameChange} />
                </label>

                <label>
                    Email:
                    <input type='email' value={email} onChange={handleEmailChange} />
                </label>

                <label>
                    Message:
                    <textarea value={message} onChange={handleMessageChange} />
                </label>
                
                <button type='submit'>submit</button>
            </form>
        </div>
    </div>
  )
}
