import React from 'react';
import '../../src/styles/projectcard.css';

const ProjectCard = ({ imageSrc, projectName, githubLink, liveLink }) => {
    return (
        <div className="project-card">
            <img className="project-image" src={imageSrc} alt={projectName} />
            <div className="button-container">
                <button onClick={() => window.open(githubLink, '_blank')}>GitHub</button>
                <button onClick={() => window.open(liveLink, '_blank')}>Preview</button>
            </div>
            <h1 style={{color:'white',textAlign:'center',marginTop:'10px'}}>{projectName}</h1>
        </div>
    );
}

export default ProjectCard;
