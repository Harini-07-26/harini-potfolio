import Image from 'next/image';
import React from 'react';

const WorkExperiencePage = () => {
  return (
    <div className="h-screen w-screen bg-white flex p-8">
      <div className="border border-blue-600 rounded-lg p-6 shadow-lg w-1/2">
        <div className="flex flex-row gap-12">
          <div className="text-xl font-bold">Nibav Lifts Pvt Ltd</div>
          {/* Left Content */}
          <div className="flex flex-col gap-4">
            <div className="text-xl font-bold text-black animate-slide-linear"></div>
            <div className="text-lg text-black animate-slide-ease">MERN Stack Developer</div>
            <div className="text-lg text-black animate-slide-ease-in">Full-Stack Web Enthusiast</div>
            <div className="text-lg text-black animate-slide-ease-out">React & Node.js Expert</div>
            <div className="text-lg text-black animate-slide-ease-in-out">Open Source Contributor</div>
          </div>
          {/* Right Image */}
          {/* <div>
          <Image src="/profile.png" alt="Profile" width={150} height={150} className="rounded-full" />
        </div> */}
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="flex flex-row gap-12">
          <div className="text-xl font-bold">Tekonika Technologies</div>
          {/* Left Content */}
          <div className="flex flex-col gap-4">
            <div className="text-xl font-bold text-black animate-slide-linear"></div>
            <div className="text-lg text-black animate-slide-ease">MERN Stack Developer</div>
            <div className="text-lg text-black animate-slide-ease-in">Full-Stack Web Enthusiast</div>
            <div className="text-lg text-black animate-slide-ease-out">React & Node.js Expert</div>
            <div className="text-lg text-black animate-slide-ease-in-out">Open Source Contributor</div>
          </div>
          {/* Right Image */}
          {/* <div>
          <Image src="/profile.png" alt="Profile" width={150} height={150} className="rounded-full" />
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default WorkExperiencePage;
