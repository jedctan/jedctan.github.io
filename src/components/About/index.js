import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import ProfilePic from '../../assets/images/profile-pic.jpg'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

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
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hello! My name is Jed Tan. I am currently a senior at Boston University studying computer science. Much of my time outside of class is spent working on my personal projects and being a part of the swim
            team at BU. Prior to being a CS student, I spent two years studying biomedical engineering. Through my internships, a marketing & regulatory role
            at a small medical device company and a robotics role at Johnson & Johnson, I grew a passion for programming, software, and product
            which led me to transferring into computer science.
          </p>

        </div>

        
      </div>

      <div className="stage-profile">
          <img src={ProfilePic} alt="illustration" className="profile-pic" />
      </div>

      
    </>
  )
}

export default About
