"use client";

import { NavLinks } from '@/constant/constant';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiDownload } from 'react-icons/bi';
import { FaCode } from 'react-icons/fa';
import { HiBars3BottomRight } from 'react-icons/hi2';

type Props = {
    openNav: () => void;
};

const Nav = ({ openNav }: Props) => {

    const [navBg, setNavbg] = useState(false);

    useEffect(() => {
        const handLer = () => {
            if (window.scrollY >= 90) setNavbg(true);
            if (window.scrollY < 90) setNavbg(false);
        };

        window.addEventListener("scroll", handLer);

        return () => window.removeEventListener("scroll", handLer);

    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // console.log(NavLinks);
    return (
        <div className={`transition-all ${navBg ? 'bg-[#0f142ed9] shadow-md ' : "fixed"
            }
         duration-200 h-[12vh] z-[10000] fixed w-full`}>
            <div className='flex items-center h-full justify-between w-[90%] mx-auto'>
                {/* logo  */}
                <div className='flex items-center space-x-2'>
                    <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col'>
                        <FaCode className='w-5 h-5 text-black' />
                    </div>
                    <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
                        <Link href="/">
                        <span className="cursor-pointer">VEDANT</span>
                        </Link>
                    </h1>
                </div>
                {/* for nav bar */}
                <div className="hidden lg:flex items-center space-x-10">
                    {NavLinks.map((link) => {
                        return (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.url.substring(1))}
                                className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200" >
                                <p>{link.label}</p>
                            </button>
                        );
                    })}
                </div>
                {/* Buttons */}
                <div className="flex items-center space-x-4">
                    {/* CV button */}
                    <button 
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = 'vedant_resume.pdf';
                            link.download = 'Vedant_Resume.pdf';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}
                        className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 
                        text-white flex items-center space-x-2"
                    >
                        <BiDownload className='w-5 h-5' />
                        <span>Download Resume</span>
                    </button>
                    {/* Burger Menu */}
                    <HiBars3BottomRight onClick={openNav}
                        className='w-8 h-8 cursor-pointer text-white lg:hidden'
                    />
                </div>
            </div>
        </div>
    );
};

export default Nav;
