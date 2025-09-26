'use client';

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Header from './components/header';

export default function Home() {
  return (
    <div className="h-screen w-screen bg-white">
      <div className="w-screen bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div
          className="bg-gradient-to-r from-[#DFEDF7] 
            to-[#F7DCF2] h-screen w-screen flex items-center justify-center text-white"
        >
          <div className="flex flex-row gap-9 items-center">
            {/* Left Text Section */}
            <div className="grid grid-cols-1 gap-3">
              <div className="text-xl text-black font-bold">
                Hi I am username, <i className="fa-solid fa-hand-wave"></i>
              </div>

              {/* Typing animation container */}
              <div className="text-xl font-mono text-green-500 bg-black p-4 rounded-lg shadow-md">
                <span className="inline-block min-w-[300px]">
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
                </span>
              </div>
            </div>

            {/* Right Image Section */}
            <div>
              <Image src="/home-without-bg.png" alt="Profile" width={400} height={400} quality={'100'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
