import React from 'react'
import '../../src/styles/project.css';
import ProjectCard from './ProjectCard';
import img1 from '../images/project1.png';
import img2 from '../images/project2.png';
import img3 from '../images/project3.png';

const Projects = () => {
  return (
    <div className='project'>
        <h1 className='about-text' style={{color:'white'}}>Projects</h1>
        <div className='projects-cards'>
            <ProjectCard imageSrc={img1} projectName="Contacts manager"
                githubLink="https://github.com/sathishakarapu"
                liveLink="https://front-elmv1f23w-sathish-akarapus-projects.vercel.app/"
            />
            <ProjectCard imageSrc={img2} projectName="E commerce Website"
                githubLink="https://github.com/sathishakarapu"
                liveLink="https://sathishakarapuecommercedemo.netlify.app/"
            />
            <ProjectCard imageSrc={img3} projectName="Portfolio Website"
                githubLink="https://github.com/sathishakarapu"
                liveLink="https://sathishakarapu.github.io/portfolio-website/"
            />
        </div>
    </div>
  )
}

export default Projects
