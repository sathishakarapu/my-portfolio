// import { useState } from 'react';
import { useState } from 'react';
import '../../src/styles/navbar.css';
import saLogo from '../images/sa-logo.png';
import {Link} from 'react-scroll'

const Navbar = ({scrollToSection}) => {
    

    const [active, setActive] = useState('home');

    const handleSetActive = (to) => {
        setActive(to);
    };

  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'>
                <img src={saLogo} alt="logo-name" className='sa-logo'/>
            </div>
            <div>
                <ul className='list-container'>
                    <li><Link to='home' smooth={true} duration={500} onClick={ () => {scrollToSection('home'); handleSetActive('home');}} className={active === 'home' ? 'active btn' : 'btn'}>Home</Link></li>
                    <li><Link to='about' smooth={true} duration={500} onClick={ () => {scrollToSection('about'); handleSetActive('about');}} className={active === 'about' ? 'active btn' : 'btn'}>About</Link></li>
                    <li><Link to='skills' smooth={true} duration={500} onClick={ () => {scrollToSection('skills'); handleSetActive('skills');}} className={active === 'skills' ? 'active btn' : 'btn'}>Skills</Link></li>
                    <li><Link to='projects' smooth={true} duration={500} onClick={ () => {scrollToSection('projects'); handleSetActive('projects');}} className={active === 'projects' ? 'active btn' : 'btn'}>Projects</Link></li>
                    <li><Link to='contacts' smooth={true} duration={500} onClick={ () => {scrollToSection('contacts'); handleSetActive('contacts');}} className={active === 'contacts' ? 'active btn' : 'btn'}>Contacts</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
