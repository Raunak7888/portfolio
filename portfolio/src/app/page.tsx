'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/navbar/navbar';
import { useTheme } from 'next-themes';
import Disks from '@/sections/heroSection/BackgroungDisc';
import Cloud from '@/sections/heroSection/clouds';
import Stars from '@/sections/heroSection/stars';
import Section from '@/components/ui/sections';
import Footer from '@/components/footer/footer';
import HeroIntroCard from '@/components/ui/heroIntroCard';

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <header className='fixed top-[4vh] left-1/2 transform -translate-x-1/2 z-50'>
        <Navbar />
      </header>

      <main className='relative w-screen h-screen overflow-hidden'>
        <div className='h-[100vh] w-full relative flex justify-center items-center'>
          <div className='absolute inset-0 z-10'>
            <Disks />
          </div>
          {mounted && theme === 'dark' && <Stars />}
        </div>

        <div className='absolute left-0 w-full h-[20vh] z-20'>
          <Cloud />
        </div>
        <div className='absolute z-20 flex bottom-[20vh] left-[0.5vw]'>
          <HeroIntroCard/>
        </div>
      </main>

      <section className='w-screen h-[100vh] relative z-30'>
        <div className='flex justify-center items-center relative top-[9vh]'>
          <Section sectionName='About Me' />
        </div>
      </section>

      <section className='w-screen h-[100vh] relative z-30'>
        <div className='flex justify-center items-center relative top-[9vh]'>
          <Section sectionName='Tech Stack' />
        </div>
      </section>

      <section className='w-screen h-[100vh] relative z-30'>
        <div className='flex justify-center items-center relative top-[9vh]'>
          <Section sectionName='Projects' />
        </div>
      </section>

      <section className='w-screen h-[100vh] relative z-30'>
        <div className='flex justify-center items-center relative top-[9vh]'>
          <Section sectionName='Contact' />
        </div>
      </section>

      <section className='w-screen h-[86vh] relative z-30'>
        <div className='flex justify-center items-center'>
          <Section sectionName='Special Credits' />
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
