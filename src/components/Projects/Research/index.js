import { useEffect, useState } from 'react';
import AnimatedLetters from '../../AnimatedLetters';
import './index.scss';
import PlyrVideoPlayer from '../../../PlyrVideoPlayer';
import uncImage from '../../../assets/images/unc_logo.jpg'



const Research = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>

      <div className="title-container">
        <div className="container research-page title">
          <h1>
            <AnimatedLetters
              letterClass={`${letterClass}`}
              strArray={['D', 'e', 'e', 'p', ' ', 
              'L', 'e', 'a', 'r', 'n', 'i', 'n', 'g',
              ' ', 'N', 'e', 'u', 'r', 'a', 'l', ' ',
              'N', 'e', 't', 'w', 'o', 'r', 'k' ]}
              idx={4}
            />
          </h1>
        </div>
      </div>

      <div className="research-main-content">
        <div className="research-projects-column-left">
          <h2>Background </h2>
            <p>
              During my 2 years at NC State I took part in undergraduate research as a part of an 
              imaging lab within the biomedical engineering department. This lab was focused on novel imaging techniques and the project I was
              assigned to was: The Development of Deep Learning System for Analysis of Quantitative MRI of the Knee.<br></br><br></br>
              The purpose of this project was to construct a neural network that was capable of accurately segmenting the femur and tibia of knee MRI images.
              The neural network was then going to be utilized in analyzing MRI images that were taken before and after ACL reconstruction surgery. <br></br><br></br>By identifying
              the femur and tibia, another neural network could be used on the space between the bones to identify the articular cartilage. Cartilage doesn't show up as well as bone in MRI images, so the lab
              decided to target the femur and tibia first, then from there find the cartilage.
              By identifying the cartilage, researchers will then be able to determine change in cartilage pre and post surgery.
            </p>
        </div>

        <div className="research-projects-column-right">
          <div className="research-video-player-container">
            <PlyrVideoPlayer videoId="LHIYMRXrWhw" />
          </div>         
        </div>
      </div>
    
      <div className="research-main-content additional-class">
        <div className="research-projects-column-left additional-class">
          <h2>The Network </h2>
              <p>
                After roughly 2 years, the network was constructed, all the training data had been created, and training had been conducted to create a network that was able to
                perform with 95-99% accuracy. The slide show to the right was my presentation after those 2 years of work. About a year into my time as an undergrad researcher, I
                was accepted into the Abrams Scholars Program, which is a competitive program within the BME department that admitted students who were highly productive and exceptional
                in their labs. This program awarded me a stipend every semester and the opportunity to present at a conference at the end of the year.
                <br></br><br></br>Since I started college in 2020, it was very difficult to participate in undergrad research due to COVID-19. However, I was able to find this lab and work remotely
                throughout my freshman year. By the time my peers started looking into labs our sophomore year, I had already been at my lab for a year. This gave me an edge in the Abram's application
                process and led to me becoming one of four sophomores to be accepted into the program, with a total of 45 students being accepted, the majority of them being upperclassmen.
              </p>
          
          <br></br>
          <br></br>

          <h2>Results </h2>
          <p>
            After presenting the network, it was deployed to UNC Chapel Hill's Department of Exercise and Sports Science for use in research
            on the impact of ACL reconstruction surgery on articular cartilage. 
          </p>
          <br></br>
          <br></br>
          <br></br>
        

        </div>


        <div className="research-projects-column-right additional-class">
          <div className="google-slides">
              <iframe 
                src="https://docs.google.com/presentation/d/e/2PACX-1vSrLGCKCmE6wL41ohU9wBHvjjX3up9lcjha3lClMyVsi7uS-QnO2MLfWYJ0RTtTUXR8awDjoEKgPPxD/embed?start=true&loop=true&delayms=3000&autoplay=false" 
                width="500" 
                height="400" 
                // allowFullScreen={true}
                title="My Google Slides Presentation">
              </iframe>
          </div>
          <img src={uncImage} alt="illustration" className="unc-image" />
        </div>

      </div>
          

    </>
  );
};

export default Research;
