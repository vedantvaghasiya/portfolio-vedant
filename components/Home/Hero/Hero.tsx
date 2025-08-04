"use client";

import Image from 'next/image';
import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import Typewriter from "typewriter-effect"
import ParticlesHero from './ParticleBackground';
import { motion } from 'framer-motion';

const Hero = () => {
    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div id="home" className='relative h-screen flex items-center justify-center
    text-white overflow-hidden flex-col'>

        <ParticlesHero />

            <div className="relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                >
                    <Image src="/images/vedant_img.jpg" alt='heroimage' width={150} height={150}
                        className='rounded-full border-8 border-[#0c0c48aa]' />
                </motion.div>

                <motion.h1 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className='text-2xl sm:text-4xl md:text-5xl lg:text-5xl
                    mt-6 text-center font-bold tracking-wide'>
                      Full Stack Developer <br /> <span className='text-cyan-200'>Computer Science Student.</span>
                </motion.h1>
                
                <motion.h2 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className='mt-5 text-sm px-2 text-center sm:text-2xl font-medium
                    flex items-center'>
                        Hi! I&apos;m Vedant - A Passionate 
                        <span className="text-cyan-200 font-bold pl-2">
                            <Typewriter 
                             options={{
                                strings: [ 
                                    " Fronted Developer",
                                    " Backend Developer",
                                    " Web Developer",
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 75,
                                deleteSpeed:50,
                                wrapperClassName: 'p1-2',
                            }} />
                        </span>
                </motion.h2>
                
                <motion.button 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3), 0 10px 10px -5px rgba(59, 130, 246, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToProjects}
                    className='mt-6 px-10 py-4 bg-blue-800
                    hover:bg-blue-900 transition-all duration-300
                    cursor-pointer rounded-full text-lg font-medium'>
                        <span>View my project</span>
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <BsArrowRight className='w-5 h-5 ml-2 inline-block' />
                        </motion.span>
                    </motion.button>
            </div>
        </div>
    );
};

export default Hero
