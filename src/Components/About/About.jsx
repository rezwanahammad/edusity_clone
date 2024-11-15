import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setplayState}) => {
  return (
    <div className='About'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setplayState(true)}}/>
        </div>
        <div className="about-right">
        <h3>About UNIVERSITY</h3>
        <h2>Nurturing tomorrow's leader today</h2>
        <p>From foundational subjects to advanced concepts, our site supports lifelong learners in acquiring and honing skills essential for personal and professional success.
            We believe in empowering students to overcome challenges and achieve their dreams. Our curriculum is designed to empower students with the knowledge, skill, and experiences in the dynamic fields of the world. Enlighten yourself!
        </p>
        <p>Our platform offers students and educators a comprehensive, accessible resource hub focused on enhancing learning experiences across a variety of subjects and skills. We are committed to providing high-quality, engaging, and accessible content that supports the lifelong learning journey of our users.
        </p>
        <p>
            Whether you are a student looking to expand your knowledge, a professional seeking to upskill, or an educator interested in enhancing your teaching practices, our platform offers a diverse range of resources to support your learning journey. We are dedicated to providing a platform that is inclusive, engaging, and accessible to all users, regardless of their background or experience level.
        </p>
        </div>
      
    </div>
  )
}

export default About
