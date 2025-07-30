'use client';
import React from 'react';
import Navbar from '@/components/navbar/navbar';
import Disks from '@/components/ui/BackgroungDisc';
import Cloud from '@/components/ui/clouds';
import Stars from '@/components/ui/stars';

const TestPage = () => {
  return (
    <>
      {/* Navbar at Top */}
      <div className='fixed top-7 left-1/2 transform -translate-x-1/2 z-50'>
        <Navbar />
      </div>

      {/* Fullscreen Hero Section */}
      <div className='relative w-screen h-screen overflow-hidden'>
        
        {/* Top 2/3 Area */}
        <div className='h-[100vh] w-full relative flex justify-center items-center'>
          {/* Background Disks */}
          <div className='absolute inset-0 z-10'>
            <Disks />
          </div>

          {/* Stars Overlay */}
          <Stars />

          {/* Centered Content */}
          <div className='z-30 text-4xl text-[var(--foreground)] text-center'>
            Your Center Content
          </div>
        </div>

        {/* Bottom 1/3 Clouds */}
        <div className='absolute left-0 w-full h-[20vh] z-20'>
          <Cloud />
        </div>
      </div>

      {/* Next Section Below Fold */}
      <div className='w-full h-[200vh] relative z-30 flex justify-center items-center text-4xl text-[var(--foreground)]'>
        next section
      </div>
    </>
  );
};

export default TestPage;
