import React from 'react'
import { IconType } from 'react-icons';

type Props = {
  role: string;
  Icon: IconType;
  date?: string;
  description?: string;
};

const aboutCard = ({ Icon, role, date, description }: Props) => {
  return (
    <div className='mb-6'>
      <div className="flex items-start space-x-6 bg-blue-950/20
      transition-all duration-300 p-4 sm:p-8 rounded-md">
        <div className="sm:w-14 sm:h-14 w-10 h-10 bg-blue-950
        rounded-full flex items-center justify-center flex-col">
          <Icon className='sm:w-8 sm:h-8 w-6 h-6 text-white' />
        </div>
        <div className="flex-1">
          {date && (
            <h1 className='mb-2 sm:px-6 sm:py-1.5 px-4 py-1 rounded-full
            bg-gray-200 text-gray-600 w-fit sm:text-lg text-sm font-bold'>
              {date}
            </h1>
          )}
          <h1 className='text-gray-200 text-xl sm:text-2xl font-semibold'>
            {role}
          </h1>
          <p className='text-gray-300 text-sm sm:text-base pt-3 leading-relaxed text-justify'>
            {description || "I'm Vedant Vaghasiya, a student and MERN stack developer with a strong passion for web development. My expertise lies in front-end technologies such as HTML, CSS, and React, enabling me to craft user-friendly web applications. On the back-end, I'm well-versed in Node.js and MongoDB, providing comprehensive full-stack solutions. I thrive in the ever-evolving world of web development, continually learning and growing."}
          </p>
        </div>
      </div>
    </div>
  )
}

export default aboutCard
