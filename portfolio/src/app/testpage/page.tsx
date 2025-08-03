'use client';
import React from 'react';
import AboutSection from '@/sections/aboutSection/aboutSection';
import ProjectCard from '@/sections/projectSection/projectCard';



const TestPage = () => {
  return (
    <div className='w-screen h-screen flex flex-row gap-6 justify-center items-center'>
      <ProjectCard
        title="Hermes"
        description="Hermes is a real-time chat app that lets users send messages and images instantly through a smooth and interactive interface."
        techStack={['Next.js', 'Socket.IO', 'Tailwind CSS', 'Firebase', 'Framer Motion']}
        imageSrc={'/LaptopPerson.jpg'}
        githubUrl="https://github.com/your-username/hermes"
        routePath="/hermes"
        rotate={0}
        color="yellow"
      />


    </div>
  );
};

export default TestPage;
