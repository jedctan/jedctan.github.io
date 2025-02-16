import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { Link } from 'react-router-dom';


const ProjectItem = ({ title, link }) => {
    return (
      <div className="grid-item">
        <Link to={link}>
          <button>{title}</button>
        </Link>
      </div>
    );
};


const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const projects = [
    { title: "C# Add-in for Solidworks", link: "/addin" },
    { title: "Undergrad Research: Deep Learning Neural Network", link: "/research" },
    { title: "More in progress...!", link: "/" },
    // { title: "Work in progress...", link: "/" },
    // { title: "Work in progress...", link: "/" },
    // { title: "Work in progress...", link: "/" },


  ];

  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(idTimeOut);
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          <p>
            With 2 years of undergrad in engineering and 2.5 years in computer science, I have diverse academic and internship experience. But in general I am someone who loves to learn! Whether its about innovative products, emerging technology, or anything else, I enjoy learning especially if its from people who have different perspectives than me.

          </p>
          <p align="LEFT">
          </p>
        </div>
      </div>

      <div className='projects-container'>
         <div className="grid">
          {projects.map((project, index) => (
            <ProjectItem key={index} title={project.title} link={project.link} />
          ))}
        </div>


      </div>

    

    </>
  )
}

export default Projects
