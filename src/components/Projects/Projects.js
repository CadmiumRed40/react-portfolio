import React from 'react'
import '../Projects/Projects.css'
import '../Projects/placeholder.jpg'

export default function Projects() {

    var placeHolderIcon = require('../Projects/placeholder.jpg')

    const project = [
        {
            icon: placeHolderIcon,
            name: "PlaceHolder",
        }
   ];
  
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

            <div className='project-table-container'>
                <table>
                    <tr>
                        <td>
                            <img src={project.icon} alt='picon' className='project-icon'></img>
                            <p className='project-desc'>placeholder</p>
                        </td>
                        <td>Project 2</td>
                    </tr>
                    <tr>
                        <td>Project 3</td>
                        <td>Project 4</td>
                    </tr>
                    <tr>
                        <td>Project 5</td>
                        <td>Project 6</td>
                    </tr>
                </table>
            </div>

        </div>
    </div>
  )
}
