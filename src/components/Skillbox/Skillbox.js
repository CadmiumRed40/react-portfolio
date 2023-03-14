import React, { useRef} from 'react'
import './Skillbox.css'
import '../Skillbox/icons/git.png'
import '../Skillbox/icons/html5.png'
import '../Skillbox/icons/css.png'
import '../Skillbox/icons/JS.png'
import '../Skillbox/icons/nodejs.png'
import '../Skillbox/icons/mongodb.png'
import '../Skillbox/icons/react.png'
import '../Skillbox/icons/python.png'

export default function Skillbox() {
  var gitIcon = require('../Skillbox/icons/git.png') // using VAR as its scoped to the immediate closing body. LET is only accessible to the immediate closing block
  var htmlIcon = require('../Skillbox/icons/html5.png')
  var cssIcon = require('../Skillbox/icons/css.png')
  var jsIcon = require('../Skillbox/icons/JS.png')
  var nodeIcon = require('../Skillbox/icons/nodejs.png')
  var mongoIcon = require('../Skillbox/icons/mongodb.png')
  var reactIcon = require('../Skillbox/icons/react.png')
  var pythonIcon = require('../Skillbox/icons/python.png')

  const skills = [ //creating an array of objects to cycle through for our carousel
      {
        icon: gitIcon,
        description: 'Git',
      },
      {
        icon: htmlIcon,
        description: 'HTML',
      },
      {
        icon: cssIcon,
        description: 'CSS',
      },
      {
        icon: jsIcon,
        description: 'Javascript',
      },
      {
        icon: nodeIcon,
        description: 'Node.JS',
      },
      {
        icon: mongoIcon,
        description: 'MongoDB',
      },
      {
        icon: reactIcon,
        description: 'React',
      },
      {
        icon: pythonIcon,
        description: 'Python',
      },
      
    ];
    
    //defining a function to handle the scrolling
    /*
      const handleScroll = (event) => {
      const delta = Math.sign(event.deltaY) // Checking the direction of the scroll
      const carousel = event.currentTarget;
      carousel.scrollLeft += delta * 100; // Adjust scroll position
   };
   */

   //function ScrollingComponent({ skills }) {
    const containerRef = useRef(null);
  
    const handleScrollLeft = () => {
      containerRef.current.scrollBy({
        left: -100,
        behavior: 'smooth',
      });
    };
  
    const handleScrollRight = () => {
      containerRef.current.scrollBy({
        left: 100,
        behavior: 'smooth',
      });
    };
//}

   return (
    <div className="skills-carousel">
      <h2>Skills</h2>
      <div className="carousel-container"//onWheel={handleScroll}>
      >
          <button className="scroll-button left" onClick={ handleScrollLeft }>
          &lt;
          </button>

        {skills.map((skill, index) => (
          <div className="skill-container" key={index}>
            <img src={skill.icon} alt="Skill icon" />
            <p>{skill.description}</p>
          </div>
        ))}

          <button className="scroll-button right" onClick={ handleScrollRight }>
            &gt;
          </button>

      </div>
    </div>
  )
}