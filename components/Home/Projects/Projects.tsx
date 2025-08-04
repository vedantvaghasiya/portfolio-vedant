import Image from 'next/image'
import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
    return (
        <div id="projects" className='pt-16 pb-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl
              font-bold text-white'>
                Projects
            </h1>
            <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10
            mt-16">
                <div>
                    <div className="group cursor-pointer transition-all duration-500 hover:scale-105 hover:rotate-y-12 hover:shadow-2xl hover:shadow-blue-500/30">
                        <Image src='/images/p1.png' alt="img" width={800} height={650}
                        className='rounded-lg transition-all duration-500 group-hover:shadow-xl group-hover:shadow-blue-500/50'></Image>
                    </div>
                    <div className='mt-4 flex items-center justify-between'>
                        <h1 className='text-xl sm:text-2xl font-semibold text-white'>
                            College Practicals Solution 
                        </h1>
                        <div className='flex gap-3'>
                            <a 
                                href="https://github.com/vedantvaghasiya/college-practical-app" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-400 transition-colors duration-300"
                            >
                                <FaGithub size={20} />
                            </a>
                            <a 
                                href="https://college-practicals-app.vercel.app/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-400 transition-colors duration-300"
                            >
                                <FaExternalLinkAlt size={20} />
                            </a>
                        </div>
                    </div>
                    <h1 className='pt-2 font-medium text-white/80'>Website, Solution</h1>
                </div>
                {/*  */}

                <div>
                    <div className="group cursor-pointer transition-all duration-500 hover:scale-105 hover:rotate-y-12 hover:shadow-2xl hover:shadow-blue-500/30">
                        <Image src='/images/p2.png' alt="img" width={800} height={650}
                        className='rounded-lg transition-all duration-500 group-hover:shadow-xl group-hover:shadow-blue-500/50'></Image>
                    </div>
                    <div className='mt-4 flex items-center justify-between'>
                        <h1 className='text-xl sm:text-2xl font-semibold text-white'>
                            Car Rental System 
                        </h1>
                        <div className='flex gap-3'>
                            <a 
                                href="https://github.com/vedantvaghasiya/car-rental-system" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-400 transition-colors duration-300"
                            >
                                <FaGithub size={20} />
                            </a>
                            <a 
                                href="https://github.com/vedantvaghasiya/car-rental-system" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-400 transition-colors duration-300"
                            >
                                <FaExternalLinkAlt size={20} />
                            </a>
                        </div>
                    </div>
                    <h1 className='pt-2 font-medium text-white/80'>Website, Buy-Rent</h1>
                </div>
                {/*  */}

                <div>
                    <div className="group cursor-pointer transition-all duration-500 hover:scale-105 hover:rotate-y-12 hover:shadow-2xl hover:shadow-blue-500/30">
                        <Image src='/images/p3.png' alt="img" width={800} height={650}
                        className='rounded-lg transition-all duration-500 group-hover:shadow-xl group-hover:shadow-blue-500/50'></Image>
                    </div>
                    <div className='mt-4 flex items-center justify-between'>
                        <h1 className='text-xl sm:text-2xl font-semibold text-white'>
                            Github Finder
                        </h1>
                        <div className='flex gap-3'>
                            <a 
                                href="https://github.com/sasparaprince/github-finder" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-400 transition-colors duration-300"
                            >
                                <FaGithub size={20} />
                            </a>
                            <a 
                                href="https://github-finder-pi-tan.vercel.app/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-400 transition-colors duration-300"
                            >
                                <FaExternalLinkAlt size={20} />
                            </a>
                        </div>
                    </div>
                    <h1 className='pt-2 font-medium text-white/80'>Website, Finding</h1>
                </div>
                {/*  */}

                <div>
                    <div className="group cursor-pointer transition-all duration-500 hover:scale-105 hover:rotate-y-12 hover:shadow-2xl hover:shadow-blue-500/30">
                        <Image src='/images/p4.png' alt="img" width={800} height={650}
                        className='rounded-lg transition-all duration-500 group-hover:shadow-xl group-hover:shadow-blue-500/50'></Image>
                    </div>
                    <div className='mt-4 flex items-center justify-between'>
                        <h1 className='text-xl sm:text-2xl font-semibold text-white'>
                            SuperNotes
                        </h1>
                        <div className='flex gap-3'>
                            <a 
                                href="https://github.com/sasparaprince/SuperNotes" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-400 transition-colors duration-300"
                            >
                                <FaGithub size={20} />
                            </a>
                            <a 
                                href="https://supernote.onrender.com/profile" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-400 transition-colors duration-300"
                            >
                                <FaExternalLinkAlt size={20} />
                            </a>
                        </div>
                    </div>
                    <h1 className='pt-2 font-medium text-white/80'>Website, Notes</h1>
                </div>
            </div>
        </div>
    )
}

export default Projects
