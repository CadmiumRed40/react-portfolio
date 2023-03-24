import React from 'react'
import Popup from 'reactjs-popup'
//import 'reactjs-popup/dist/index.css';
import '../Projects/Projects.css'
//import Modal from 'react'
import '../Projects/placeholder.jpg' 


export default function Projects() {

    var placeHolderIcon = require('../Projects/placeholder.jpg')

    const projects = [
        {
            name: "PlaceHolder",
            icon: placeHolderIcon,
            description: "Placeholder",
            expanded:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec massa sapien faucibus et molestie. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet."
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
            {projects.map ((project,index) => (
                <table>
                    
                    <tr className='row1'>
                        <td className='project-cell'>
                            <h3>{project.name}</h3>
                                <Popup className='popup'
                                    trigger= {
                                    <button>
                                        <img src={project.icon} alt='p-icon' className='project-icon'></img>
                                    </button>
                                        } modal nested>
                                        {
                                        close => (
                                    <div className='modal'>

                                        <div className='modal-content'>
                                            <h4>{project.name}</h4>
                                            <img src={project.icon} alt='p-icon-modal' className='project-icon-modal'></img>
                                            <p>{project.expanded}</p>
                                        </div>

                                        <div>
                                            <button className='modal-close-button' onClick=
                                                {() => close()}>
                                                    Close
                                            </button>
                                        </div>
                                    </div>
                                )
                            }
                                </Popup>
                        <p className='project-desc'>{project.description}</p>
                        </td>
                        <td className='project-cell'>
                            <h3>{project.name}</h3>
                            <img src={project.icon} alt='p-icon' className='project-icon'></img>
                            <p className='project-desc'>{project.description}</p>
                        </td>
                    </tr>
                    <tr className='row2'>
                        <td className='project-cell'>
                            <h3>{project.name}</h3>
                            <img src={project.icon} alt='p-icon' className='project-icon'></img>
                            <p className='project-desc'>{project.description}</p>
                        </td>
                        <td className='project-cell'>
                            <h3>{project.name}</h3>
                            <img src={project.icon} alt='p-icon' className='project-icon'></img>
                            <p className='project-desc'>{project.description}</p>
                        </td>
                    </tr>
                    <tr className='row3'>
                        <td className='project-cell'>
                            <h3>{project.name}</h3>
                            <img src={project.icon} alt='p-icon' className='project-icon'></img>
                            <p className='project-desc'>{project.description}</p>
                        </td>
                        <td className='project-cell'>
                            <h3>{project.name}</h3>
                            <img src={project.icon} alt='p-icon' className='project-icon'></img>
                            <p className='project-desc'>{project.description}</p>
                        </td>
                    </tr> 
                   
                    
                </table>
                 ))};
            </div>

        </div>
    </div>
  )
}
