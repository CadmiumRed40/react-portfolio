import React from 'react'
import '../Welcomebox/Welcomebox.css'

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

        <img src='/Users/bluecobalt/Documents/Coding/REACTAPPS/react-portfolio-website/src/components/Welcomebox/IMG_20170223_155522_148.jpeg' alt='profile-pic'></img>
        </div>
    </div>
  )
}
