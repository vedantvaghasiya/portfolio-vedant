"use client";

import React from 'react'
import AboutCard from './aboutCardvv';
import { FaCodepen } from 'react-icons/fa';
import { BiBadge } from 'react-icons/bi';
import { motion } from 'framer-motion';

const about = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <div id="about" className='pt-20 pb-16'>
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
                {/* About Part */}
                <motion.div variants={itemVariants}>
                    <motion.h1 
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className='text-3xl sm:text-4xl font-bold text-white'>
                        About <span className='text-cyan-200'>Me</span>
                    </motion.h1>

                    <div className="mt-10">
                        <AboutCard Icon={FaCodepen} 
                        role="Passionate Developer" 
                        description="I'm Vedant Vaghasiya, a student and MERN stack developer with a strong passion for web development. My expertise lies in front-end technologies such as HTML, CSS, and React, enabling me to craft user-friendly web applications. On the back-end, I'm well-versed in Node.js and MongoDB, providing comprehensive full-stack solutions. I thrive in the ever-evolving world of web development, continually learning and growing." />
                    </div>
                </motion.div>
                {/* Education part */}
                <motion.div variants={itemVariants}>
                    <motion.h1 
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className='text-3xl sm:text-4xl font-bold text-white'>
                        My <span className='text-cyan-200'>Education</span>
                    </motion.h1>
                    <div className="mt-10">
                        <AboutCard Icon={BiBadge} 
                        role="B.Tech in Computer Science"
                        description="I am currently pursuing a Bachelor of Technology in Computer Science at Nirma University. I have maintained a CGPA of 8.19 and continue to develop strong technical and problem-solving skills."
                        date='Sep 2023 - June 2026' />
                        <AboutCard Icon={FaCodepen} 
                        role="Diploma in Computer Engineering"
                        description="I have completed a Diploma in Computer Engineering with a CGPA of 8.66. This program helped build my foundational knowledge in software development and computer systems."
                        date='Sep 2020 - June 2023' />
                        <AboutCard Icon={FaCodepen}
                        role="Secondary Education"
                        description="I have successfully completed my secondary education, where I developed a strong academic base."
                        date='July 2019 - June 2020' />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default about
