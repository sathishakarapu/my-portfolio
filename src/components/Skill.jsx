import { useEffect, useState } from 'react';
import '../../src/styles/skills.css';

const Skill = ({ name, percentage}) => {

    const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress < percentage) {
          return prevProgress + 1;
        } else {
          clearInterval(interval);
          return percentage;
        }
      });
    }, 10);
    
    return () => clearInterval(interval);
  }, [percentage]);

    return (
      <div className="skill" style={{color:'white'}}>
        <h3>{name}</h3>
        <div className="skill-bar">
          <div className="skill-progress" style={{ width: `${progress}%` ,paddingLeft:'20px',paddingTop:'5px'}} >{progress}%</div>
        </div>
      </div>
    );
};
  
export default Skill;