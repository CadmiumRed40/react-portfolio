import React, { useState, useEffect } from 'react'
import Popup from 'reactjs-popup'
//import 'reactjs-popup/dist/index.css';
import '../Projects/Projects.css'
//import Modal from 'react'
import '../Projects/placeholder.jpg' 
import '../Projects/MasterPigmentsWebsite.gif'


export default function Projects() {

    var placeHolderIcon = require('../Projects/placeholder.jpg')
    var ModernMasterGif = require('../Projects/MasterPigmentsWebsite.gif')


    const projects = [
        {
            name: "PlaceHolder",
            icon: placeHolderIcon,
            description: "Placeholder",
            expanded:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec massa sapien faucibus et molestie. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet."
        },
        {
            name: "Modern Master Pigments",
            icon: ModernMasterGif,
            description: "Oil Painting Merchant Website",
            expanded: "Simple website for selling oil paints that exemplifies responsive web design"
        }
   ];
    
   /*const [projects, setProjects] = useState("");
   
   useEffect(() => {
    try {
    fetch('http://localhost:8000/project')
    .then((res) => res.json())
    .then((data) => setProject(data.project));
    }catch(error){
        console.error('error')
    }
   },[]);*/

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
                            <h3>{projects[1].name}</h3>
                                <Popup className='popup'
                                    trigger= {
                                    <button>
                                        <img src={projects[1].icon} alt='p-icon' className='project-icon'></img>
                                    </button>
                                        } modal nested>
                                        {
                                        close => (
                                    <div className='modal'>

                                        <div className='modal-content'>
                                            <h4>{projects[1].name}</h4>
                                            <img src={projects[1].icon} alt='p-icon-modal' className='project-icon-modal'></img>
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
                        <tbody className='project-desc'>{projects[1].description}</tbody>
                        </td>

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
                    </tr>

                    <tr className='row2'>
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
                    </tr>

                    <tr className='row3'>
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
                    </tr> 
                   
                    
                </table>
                 ))};
            </div>

        </div>
    </div>
  )
}
