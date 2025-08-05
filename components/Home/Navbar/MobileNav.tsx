import { NavLinks } from '@/constant/constant'
import React from 'react'
import { CgClose } from 'react-icons/cg'


type Props = {
    showNav: boolean;
    closeNav:()=> void;
};

const MobileNav = ({closeNav, showNav}: Props) => {

  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    closeNav(); // Close mobile nav after clicking
  };

  return (
    <div>
      {/* overlay */}
      <div className={`fixed inset-0 ${navOpen} transform transition-all 
      right-0 duration-500 z-[100002] bg-black opacity-70 w-full h-screen`}></div>
      {/* navlinks */}
      <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full
      tranform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-cyan-800
      space-y-6 z-[100050] right-0`}>
        {NavLinks.map((link) => {
          return (
            <button 
              key={link.id} 
              onClick={() => scrollToSection(link.url.substring(1))}
              className="text-white w-fit text-xl ml-12 border-b-[1.5px]
            pb-1 border-white sm:text-[30px] text-left"
            >
              {link.label}
            </button>
          );
        })}
        {/* cross icon */}
        <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 w-6 h-6' />
      </div>
    </div>
  );
}

export default MobileNav
