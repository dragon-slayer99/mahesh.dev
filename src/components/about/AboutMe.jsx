import React from 'react'
import './AboutMe.css'
import ProfileImage from '../../assets/PROFILE_IMG.png'
import { motion } from 'framer-motion'

export default function AboutMe() {
  return (

    <div className='main-profile-container' id='about'>
      <h1>About Me</h1>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }} 
        viewport={{ once:true ,amount: 0.5 }}
        className='profile-container'>
        <div className='profile-image'>
          <img src={ProfileImage} alt="" />
        </div>
        <div className='profile-desc'>
          <h1>Gudooru Mahesh</h1>
          <p>I’m a Computer Science student and aspiring software developer with a strong interest in frontend and full-stack development. With 300+ LeetCode problems solved and hands-on experience in Java, JavaScript and React, I enjoy building efficient and user-friendly applications while constantly learning and improving.</p>
        </div>
      </motion.div>

    </div>



  )
}
