import React from 'react'
import '../../src/styles/contact.css';
import img1 from '../images/whatsapp.png';
import img2 from '../images/linkedin.png';
import img3 from '../images/insta.png';
import img4 from '../images/fb.png';
import img5 from '../images/twitter.png';

const Contact = () => {

    function redirectTo(url) {
        window.location.href = url;
    }

  return (
    <div className='contact-container'>
      <h1 className='about-text' style={{color:'white'}}>Contact</h1>
      <p className='text-1' style={{color:'white',marginTop:'30px'}}>I'm currently seeking opportunities to leverage my unique blend of skills and experience to tackle exciting challenges in the tech industry. Whether you're looking for a motivated team member, have a project idea you'd like to discuss, or simply want to connect, I'd love to hear from you! Feel free to reach out to me</p>
        <div className="social-media">
            <img src={img1} alt="whatsapp" className="icon" onClick={ () => redirectTo('https://wa.me/919505671082')} />
            <img src={img2} alt='linkedin' className='icon' onClick={ () => redirectTo('https://www.linkedin.com/in/sathish-akarapu-83145124a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')}/>
            <img src={img3} alt="instagram" className="icon" onClick={ () => redirectTo('https://www.instagram.com/sathish_akarapu?igsh=bWJoeWs3OWpoMGQz')}/>
            <img src={img4} alt="facebook" className="icon" onClick={ () => redirectTo('https://www.facebook.com/akarapusathishguptha.sathishguptha?mibextid=2JQ9oc')}/>
            <img src={img5} alt="twitter" className="icon" onClick={ () => redirectTo('https://x.com/AkarapuSathish?t=O2II2aOy5P4RTNr3VMpozw&s=09')}/>
        </div>
        <p className='text-2'>Thank you for showing intrest in my profile</p>
        <h1 className='text-3'>Sathish Akarapu</h1>
    </div>
  )
}

export default Contact
