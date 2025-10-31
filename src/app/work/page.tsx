'use client';
import React, { useEffect, useState } from 'react';

import './styles.css';

const WorkExperiencePage = () => {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTrigger(true), 4000); // trigger after 5 sec
    return () => clearTimeout(timer);
  }, []);

  const experiences = [
    {
      title: 'Nibav Lifts',
      role: 'Full Stack Developer',
      points: [
        'Developed and maintained both frontend and backend of a customer-facing websites for Nibav Lifts and Elite Elevators',
        'Designed and developed MySQL databases, including schema and table creation, to enable efficient data storage and retrieval.',
        'Built and implemented custom REST APIs using Node.js to handle CRUD operations effectively.',
        'Collaborated with technical leads and team members to ensure 100% on-time delivery for every sprint.',
        'Optimized site performance and SEO for better user experience and search visibility.',
        'Collaborated with design and product teams to deliver a responsive UI/UX across devices.',
        'Contributed to the full development lifecycle of 3+ projects, from inception to deployment.'
      ],
      gradient: 'from-[#DFEDF7] to-[#F7DCF2]'
    },
    {
      title: 'Tekonika Technologies',
      role: 'Software Engineer',
      points: [
        'Designed and developed MySQL databases, including schema and table creation, to enable efficient data storage and retrieval.',
        'Built and implemented custom REST APIs using Node.js to handle CRUD operations effectively.',
        'Collaborated with technical leads and team members to ensure 100% on-time delivery for every sprint.',
        'Contributed to the full development lifecycle of 3+ projects, from inception to deployment.'
      ],
      gradient: 'from-[#DFEDF7] to-[#F7DCF2]'
    }
  ];

  return (
    <div
      className="w-screen h-screen overflow-y-scroll snap-y snap-mandatory bg-gradient-to-r from-[#DFEDF7] 
            to-[#F7DCF2]"
    >
      <div>
        {experiences.map((work, index) => (
          <section
            key={index}
            className={`flex flex-col justify-center items-center w-full h-screen p-10 bg-gradient-to-r ${work.gradient} snap-start`}
          >
            <div key={index} className={`wrap w-3/4 h-3/4 animate pop ${trigger ? 'triggered' : ''}`}>
              <div className="overlay">
                <div className="overlay-content animate slide-left delay-2">
                  <h1
                    style={{ marginTop: '4.5rem', color: 'black' }}
                    className="font-mono animate slide-left pop delay-4"
                  >
                    {work.title}
                  </h1>
                  <p className="animate slide-left pop delay-5" style={{ color: 'black', marginBottom: '2.5rem' }}>
                    {work.role}
                  </p>
                </div>
                <div className="image-content animate slide delay-5"></div>
                <div className="dots animate">
                  <div className="dot animate slide-up delay-6"></div>
                  <div className="dot animate slide-up delay-7"></div>
                  <div className="dot animate slide-up delay-8"></div>
                </div>
              </div>
              <div className="text">
                {/* <p>
            <img className="inset" src="https://assets.codepen.io/4787486/oak_1.jpg" alt="" />
            Trees are woody perennial plants that are a member of the kingdom <em>Plantae</em>. All species of trees are
            grouped by their genus, family, and order. This helps make identifying and studying trees easier.
          </p> */}
                <ul className="list-disc">
                  {work.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                {/* <CustomLoader /> */}
                {/* <img
            className="tree"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJhdfMEHOe0kmRH2tBtsGlMpPqmiSTIvPF-g&s"
            alt=""
          /> */}
              </div>
            </div>
          </section>
        ))}
      </div>
      {/*       
      <div className={`wrap animate pop ${trigger ? 'triggered' : ''}`}>
        <div className="overlay">
          <div className="overlay-content animate slide-left delay-2">
            <h1 style={{ marginTop: '4.5rem', color: 'black' }} className="font-mono animate slide-left pop delay-4">
              Tekonika Technologies
            </h1>
            <p className="animate slide-left pop delay-5" style={{ color: 'black', marginBottom: '2.5rem' }}>
              Full Stack Developer
            </p>
          </div>
          <div className="image-content animate slide delay-5"></div>
          <div className="dots animate">
            <div className="dot animate slide-up delay-6"></div>
            <div className="dot animate slide-up delay-7"></div>
            <div className="dot animate slide-up delay-8"></div>
          </div>
        </div>
        <div className="text">
          <p>
            <img className="inset" src="https://assets.codepen.io/4787486/oak_1.jpg" alt="" />
            Trees are woody perennial plants that are a member of the kingdom <em>Plantae</em>. All species of trees are
            grouped by their genus, family, and order. This helps make identifying and studying trees easier.
          </p>
          <ul className="list-disc">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <CustomLoader />
          <img
            className="tree"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJhdfMEHOe0kmRH2tBtsGlMpPqmiSTIvPF-g&s"
            alt=""
          />
        </div>
      </div> */}
    </div>
  );
};

export default WorkExperiencePage;
