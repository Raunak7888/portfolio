'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/navbar/navbar';
import Section from '@/components/ui/sections';
import Footer from '@/components/footer/footer';
import { useTheme } from 'next-themes';
import HeroSection from '@/sections/heroSection/heroSection';


export default function Home() {
  return (
    <div>
      <header className='fixed top-[4vh] left-1/2 transform -translate-x-1/2 z-50'>
        <Navbar />
      </header>

      <main className='relative w-screen h-screen overflow-hidden'>
        <HeroSection/>
      </main>

      <section className='w-screen h-[100vh] relative z-30'>
        <div className='flex justify-center items-center relative'>
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
