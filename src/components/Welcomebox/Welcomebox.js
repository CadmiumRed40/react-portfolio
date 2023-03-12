import React from 'react'
import '../Welcomebox/Welcomebox.css'
import '../Welcomebox/profilePic.jpeg'

export default function Welcomebox() {
  return (
    <div>
        <div className='main-container'>
        <header className="header">
            <div className="header-content">
                <h1 className="header-title">Hello, my name is Enrique.</h1>
                    <span className="header-subtitle">And I am your future software engineer.</span>
            </div>
        </header>

        <img src={require('./profilePic.jpeg')} alt='profile-pic'></img>
        </div>
    </div>
  )
}
