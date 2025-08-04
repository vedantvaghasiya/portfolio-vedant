"use client";

import React from 'react'
import { SiExpress, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

const skills= [
    {
        name: 'JavaScript',
        icon: <SiJavascript />,
        percentage: 95,
    },
    {
        name: 'React.js',
        icon: <SiReact />,
        percentage: 95,
    },
    {
        name: 'Node.js',
        icon: <SiNodedotjs />,
        percentage: 95,
    },
    {
        name: 'MongoDB',
        icon: <SiMongodb />,
        percentage: 95,
    },
    {
        name: 'TypeScript',
        icon: <SiTypescript />,
        percentage: 95,
    },
    {
        name: 'Next.js',
        icon: <SiNextdotjs />,
        percentage: 95,
    },
    {
        name: 'Express.js',
        icon: <SiExpress />,
        percentage: 95,
    },
    {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss />,
        percentage: 95,
    },
    
]

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  return (
    <div id="skills" className='text-white pt-16 pb-16'>
      <motion.h1 
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='text-center text-2xl md:text-4xl
      xl:text-5xl font-bold text-white mb-16'>
        My <span className='text-cyan-300'>Skills</span>
      </motion.h1>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              transition: { duration: 0.2 }
            }}
          >
            <Tilt scale={1.5} transitionSpeed={400}>
              <div className="bg-[#14134145] 
              text-center w-40 h-48 rounded-3xl flex flex-col
              items-center justify-center shadow-lg transition
              hover:scale-105 hover:shadow-cyan-500/20">
                <div className="text-5xl mb-4 text-gray-300
                ">{skill.icon}</div>
                <p className='text-2xl font-semibold'>{skill.percentage}%</p>
                <p className='text-purple-400 mt-1'>{skill.name}</p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Skills
