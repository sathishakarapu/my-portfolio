import React, { useEffect, useState } from 'react'
import '../../src/styles/home.css';


const Home = () => {

    function FirstComponent() {
        return <div className='t1'>Hi ! I am Sathish Akarapu</div>;
    }
      
    function SecondComponent() {
        return <div className='t2'>I am a fullstack developer</div>;
    }

    const [showFirst, setShowFirst] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowFirst((prevShowFirst) => !prevShowFirst);
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    const downloadCv = () => {
        const cvPath = process.env.PUBLIC_URL + '/resume.pdf';
        const link = document.createElement('a');
        link.href = cvPath;
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  return (
    <div  className='home-container'>
        <div className="name">
            {showFirst ? <FirstComponent /> : <SecondComponent />}
            <button className='down-btn' onClick={downloadCv}>Download CV</button>
        </div>
    </div>
  )
}

export default Home
