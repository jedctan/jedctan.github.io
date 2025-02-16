import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
// import Logo from './Logo'
import AnimatedLetters from '../AnimatedLetters';
import ProfilePic from '../../assets/images/profile-pic.jpg'



const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const greetArray =['H','e','l','l','o','!']
    const nameArray = [' ', 'J', 'e', 'd', ' ', 'T', 'a', 'n']
    const jobArray = [
      'a',
      ' ',
      's',
      't',
      'u',
      'd',
      'e',
      'n',
      't',
      ' ',
      '@',
      ' ',
      'B',
      'o',
      's',
      't',
      'o',
      'n',
      ' ',
      'U',
      '.'
    ]

    useEffect(() => {
      const idTimeOut = setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
  
      return () => clearTimeout(idTimeOut);
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>               
              
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={greetArray} // Hello!
                idx={10} />

                <br />
                <span className={`${letterClass} _16`}>I</span>
                <span className={`${letterClass} _17`}>'m</span> 

                <AnimatedLetters 
                letterClass={letterClass}
                strArray={nameArray} // " Jed Tan"
                idx={13} />

                <br />

                <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray} // "a student @ Boston U."
                idx={15} />
                
                </h1>
                <h2> Computer Science Major / Student-Athlete / Spectrum Scholar</h2>
                <Link to="https://github.com/jedctan/jedctan.github.io/raw/caff45e0066c812d933b15510c0a0b6b656a6ec2/Jed-Tan-Resume.pdf" className='flat-button'> RESUME</Link>
            </div> 
            <div className="stage-profile">
                <img src={ProfilePic} alt="illustration" className="profile-pic" />
            </div>
            {/* <Logo /> */}
        </div>
    )
}

export default Home