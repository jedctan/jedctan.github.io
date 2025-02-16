import { useEffect, useState } from 'react';
import AnimatedLetters from '../../AnimatedLetters';
import './index.scss';
import DSPic from '../../../assets/images/DS.png';
import SWPic from '../../../assets/images/SOLIDWORKS.svg';
import Script from '../../../assets/images/Workflow.png';
import PlyrVideoPlayer from '../../../PlyrVideoPlayer';
import ThreeCarts from '../../../assets/images/ScissorLift3Sizes.png'



const Addin = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>

      <div className="title-container">
        <div className="container addin-page title">
          <h1>
            <AnimatedLetters
              letterClass={`${letterClass}`}
              strArray={['C', '#', ' ', 'A', 'd', 'd', '-', 'i', 'n']}
              idx={15}
            />
          </h1>
        </div>
      </div>

      <div className="main-content">
        <div className="projects-column-left">
          {/* Text content goes here */}
          <h2>Background</h2>
          <p>
            Dassault Systèmes is a large software company specializing in 3D design, 3D digital mock-up, 
            product lifecycle management, simulation, manufacturing, and many more software solutions. My role as a product management intern
            was within the Solidworks department, which is their main 3D computer-aided design (CAD) software.
            The goal of this project was to create an internal tool that was able to modify a model based on user-entered parameters.
          </p>
          <b>To accomplish this task I followed these steps:</b>
            <ol>
              <li>Create Model: Design a cart with dimensions that were all linked with equations.</li>
              <li>Solidworks API: Reference needed DLL files in Visual Studio Project and use API functions to create a script that can update part dimensions.</li>
              <li>Construct Add-in: Create add-in that is recognizable by Solidworks and has an intuitive UI that allows the user to enter in parameters to change the model.</li>
            </ol>
            <br></br>
          <h2>
            Script Workflow:
          </h2>
        </div>


        <div className="projects-column-right">
          <img src={DSPic} alt="illustration" className="ds-pic" />
          <img src={SWPic} alt="illustration" className="sw-pic" />
          {/* More images can be added here if needed */}
        </div>

      </div>

        <div className="full-width-image">
          <img src={Script} alt="A descriptive alt text" />
        </div>
    
        <div className="main-content additional-class">
          <div className="projects-column-left additional-class">
            {/* Text content goes here */}
            <h2>The Add-in</h2>
            <ol>
              <li>PMPHandler.cs: Handled any interactions the user had with the Property Manager Page</li>
              <li>ScissorLift.cs: Contains script to change model</li>
              <li>TaskpaneUI.cs: Contains all UI elements of the add-in</li>
              <li>UserPMPage.cs: Contains all elements of the Property Manager Page</li>
              <li>SwAddin.cs: Handles UI callbacks, ex: when Create/Update Model is pressed this will run ScissorLift.cs</li>
              <li>Other Files: EventHandling.cs, SharedData.cs, AssemblyInfo.cs</li>
            </ol>
            Once the project was completed, I built the project and registered using RegAsm.exe, in my case I used a Strong Name Tool (sn.exe) to avoid any potential issues with registering

            <br></br>
            <br></br>
            <h2>Results </h2>
              I was able to create a Solidworks add-in that automated the design process and allowed users to create infinite configurations of a 3D model based on entered parameters. 
              This tool is now being utilized by my team for demos, product testing, and marketing. Prior to this project I had only taken one computer science course on Python, so this was a very difficult process that took a lot of self-learning. 
              I'm very proud of this project and am happy that my work made an impact.

          </div>


        <div className="projects-column-right additional class">
          <div className="video-player-container">
            <PlyrVideoPlayer videoId="50diuNOkhJY" />
          </div>
          <img src={ThreeCarts} alt="illustration" className="three-carts" />
        </div>

      </div>
          

    </>
  );
};

export default Addin;
