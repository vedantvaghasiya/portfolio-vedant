"use client";

import React, { useState, useRef } from 'react'
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus('idle');

        // Check if EmailJS is configured
        const isEmailJSConfigured = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID && 
                                   process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID && 
                                   process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (isEmailJSConfigured) {
            try {
                const result = await emailjs.sendForm(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                    formRef.current!,
                    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
                );

                if (result.status === 200) {
                    setSubmitStatus('success');
                    setFormData({ name: '', email: '', mobile: '', message: '' });
                } else {
                    setSubmitStatus('error');
                }
            } catch (error) {
                console.error('Email sending failed:', error);
                setSubmitStatus('error');
            } finally {
                setIsLoading(false);
            }
        } else {
            // Fallback to mailto link
            const subject = `Contact from ${formData.name}`;
            const body = `Name: ${formData.name}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\n\nMessage:\n${formData.message}`;
            const mailtoLink = `mailto:vedantvaghasiya17@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            window.open(mailtoLink, '_blank');
            setSubmitStatus('success');
            setFormData({ name: '', email: '', mobile: '', message: '' });
            setIsLoading(false);
        }
    };

    return (
        <div id="contact" className='pt-16 pb-16'>
            <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1
        lg:grid-cols-2 gap-10 items-center">
                {/* text content */}
                <div>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200'>
                        call with me to see if I can help
                    </h1>
                    <p className='text-gray-400 mt-6 text-base sm:text-lg'>
                        Reach out to me today and let's discuss how I can help you.
                    </p>

                    <div className="mt-7">
                        <div className="flex items-center space-x-3 mb-4">
                            <BiPhone className='w-9 h-9 text-cyan-300' />
                            <p className='text-xl font-bold text-gray-400'>
                                +91 9687614601
                            </p>
                        </div>
                        <div className="flex items-center space-x-3 mb-4">
                            <BiEnvelope className='w-9 h-9 text-cyan-300' />
                            <p className='text-xl font-bold text-gray-400'>
                                vedantvaghasiya17@gmail.com
                            </p>
                        </div>
                        <div className="flex items-center space-x-3 mb-4">
                            <BiMap className='w-9 h-9 text-cyan-300' />
                            <p className='text-xl font-bold text-gray-400'>
                                Surat, India
                            </p>
                        </div>
                    </div>
                    {/* social icons */}
                    <div className="flex items-center mt-8 space-x-3">
                        <a 
                            href="https://github.com/vedantvaghasiya" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-14 h-14 bg-blue-950/60 rounded-full
                            flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800
                            transition-all duration-300"
                        >
                            <FaGithub className='text-white w-6 h-6' />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/vedantvaghasiya/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-14 h-14 bg-blue-950/60 rounded-full
                            flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800
                            transition-all duration-300"
                        >
                            <FaLinkedin className='text-white w-6 h-6' />
                        </a>
                    </div>
                </div>
                {/* contact form */}
                <div className="md:p-10 p-5 bg-[#131332] rounded-b-lg">
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        <input 
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder='Name'
                            required
                            className='px-4 py-3.5 bg-[#363659] text-white outline-none
                            rounded-md w-full placeholder:text-white/70 focus:ring-2 focus:ring-blue-500'
                        />
                        <input 
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder='Email Address'
                            required
                            className='px-4 py-3.5 bg-[#363659] text-white outline-none
                            rounded-md w-full placeholder:text-white/70 focus:ring-2 focus:ring-blue-500'
                        />
                        <input 
                            type="text"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            placeholder='Mobile Number'
                            className='px-4 py-3.5 bg-[#363659] text-white outline-none
                            rounded-md w-full placeholder:text-white/70 focus:ring-2 focus:ring-blue-500'
                        />
                        <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder='Your Message'
                            required
                            className='px-4 py-3.5 bg-[#363659] text-white outline-none
                            rounded-md w-full placeholder:text-white/70 h-[10rem] resize-none focus:ring-2 focus:ring-blue-500'
                        />

                        {/* Status Messages */}
                        {submitStatus === 'success' && (
                            <div className="p-3 bg-green-500/20 border border-green-500/50 rounded-md">
                                <p className="text-green-400 text-sm">
                                    {process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID 
                                        ? 'Message sent successfully!' 
                                        : 'Email client opened! Please send the message.'
                                    }
                                </p>
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-md">
                                <p className="text-red-400 text-sm">Failed to send message. Please try again.</p>
                            </div>
                        )}

                        <button 
                            type="submit"
                            disabled={isLoading}
                            className={`mt-8 px-12 py-4 transition-all duration-300 cursor-pointer text-white rounded-full w-full
                            ${isLoading 
                                ? 'bg-gray-600 cursor-not-allowed' 
                                : 'bg-blue-900 hover:bg-blue-800'
                            }`}
                        >
                            {isLoading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
