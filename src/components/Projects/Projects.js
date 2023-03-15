import React from 'react'
import '../Projects/Projects.css'

export default function Projects() {
  return (
    <div>
        <div className='projects-container-main'>
            <div className='project-header'>
                <h2>Projects</h2>
            </div>

            <div className='tabs-button-container'>

                <div className='tabs-buttons'>
                    <button className='programming-projects-tab col1'>
                        <span>Projects</span>
                    </button>
                    <button className='design-projects col1 '>
                        <span>Design</span>
                    </button>
                </div>

                

            </div>
        </div>
    </div>
  )
}
