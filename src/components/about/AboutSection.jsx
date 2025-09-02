import React from 'react'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Education from './Eduaction'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { containerVariants, leftVariant, rightVariant } from './variants'
export default function AboutSection() {
  return (

    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once:true, amount: 0.4 }}
      >
        <AboutMe />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.6 }}
        viewport={{ once:true, amount: 0.3 }}
      >
        <Skills leftVariant={leftVariant} rightVariant={rightVariant} />
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
      </motion.div>
      <Education />
    </>



  )
}
