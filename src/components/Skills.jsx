import React from 'react'
import '../../src/styles/skills.css';
import Skill from './Skill';

const Skills = () => {
  return (
    <div className='skills-container'>
      <h1 className='skills-text'>Skills</h1>
      <Skill name="React js" percentage="80"/>
      <Skill name="Mongo DB" percentage="90"/>
      <Skill name="Html/Css" percentage="85"/>
      <Skill name="Javascript" percentage="65"/>
      <Skill name="Sql" percentage="85"/>
      <Skill name="Node js" percentage="80"/>
    </div>
  )
}

export default Skills
