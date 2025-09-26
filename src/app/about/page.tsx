'use client';

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react'; // icons
import { PERSONAL_DETAILS } from '@/src/utils/constants';
import { TypeAnimation } from 'react-type-animation';

const AboutMePage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <div className="max-w-xl  h-full w-full bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 text-center">
        {/* Profile Picture */}
        <img
          src="/girl-image.jpg" // replace with your photo
          alt="Profile"
          className="w-28 h-28 rounded-full mx-auto border-4 border-blue-200 shadow-md"
        />

        {/* Name & Role */}
        <h1 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">{PERSONAL_DETAILS.name}</h1>
        <p className="text-gray-600 dark:text-gray-300">{PERSONAL_DETAILS.role}</p>
        <div className="text-xl font-mono text-green-500 bg-black p-4 rounded-lg shadow-md">
          <TypeAnimation
            sequence={[
              'MERN Stack Developer', // text
              2000, // wait 2s
              'Full-Stack Web Enthusiast',
              2000,
              'React & Node.js Expert',
              2000
            ]}
            wrapper="span"
            speed={50} // typing speed
            repeat={Infinity}
          />
        </div>

        {/* Short Bio */}
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
          Passionate about building scalable web applications with clean UI and efficient backend systems.
        </p>

        {/* Contact Details */}
        <div className="mt-4 space-y-1 text-gray-700 dark:text-gray-300">
          <p>📍 Chennai, India</p>
          <p>📧 harini.dev@gmail.com</p>
        </div>

        {/* Social Links */}
        <div className="mt-5 flex justify-center space-x-6">
          <a href="mailto:harini.dev@gmail.com" className="text-gray-600 hover:text-blue-600 dark:text-gray-300">
            <Mail size={22} />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-300"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-300"
          >
            <Linkedin size={22} />
          </a>
        </div>

        {/* Resume Button */}
        <div className="mt-6">
          <a
            href="/resume.pdf" // place resume in public folder
            download
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
