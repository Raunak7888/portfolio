'use client';

import SocialIcons from '@/components/ui/socialLink';
import React from 'react';

const HeroIntroCard = () => {
  return (
    <div className="relative flex justify-center font-mitr items-center px-[2vw] py-[4vh] rounded-[5vh] bg-white/5 scale-[0.80] backdrop-blur-2xl shadow-2xl border border-[var(--foreground)/10]">

      {/* 🔗 View Source Button */}
      <a
        href="https://github.com/yourusername/your-portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="group absolute top-6 right-6 z-10 px-4 py-1.5 font-medium rounded-full border border-[var(--foreground)/20] text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-black transition-all duration-300 shadow-md backdrop-blur-sm flex items-center gap-1"
      >
        <span className="flex items-center font-luckiest space-x-0.5">
          <span>{"<"}</span>
          <span>/</span>
          <span>{">"}</span>
        </span>
        <span className="ml-1">View Source</span>
      </a>

      {/* 🚀 Hero Content */}
      <div className="max-w-3xl w-full text-center md:text-left">
        <p className="text-[var(--foreground)/80] text-lg md:text-xl font-light mb-1">
          Hey, I’m
        </p>

        <h1 className="text-[2.75rem] md:text-[4rem] font-modak text-[var(--accent)] drop-shadow-[0_4px_15px_rgba(255,89,0,0.5)]">
          Raunak Yadav
        </h1>

        <p
          className="text-[var(--foreground)] text-lg md:text-xl font-semibold mt-2"
        >
          Aspiring Full Stack Developer | Java Backend & Frontend Enthusiast
        </p>

        <p className="text-[var(--foreground)/70] text-base md:text-lg mt-4 leading-relaxed">
          I work across both the frontend and backend to build software that’s maintainable, efficient, and solves real-world problems.
        </p>
        <p className="text-[var(--foreground)/70] text-base md:text-lg mt-4 leading-relaxed">
          I write clean, scalable code that prioritizes simplicity and practical value over unnecessary complexity.
        </p>

        <p className="text-[var(--foreground)/70] text-base md:text-lg mt-4 leading-relaxed">
          Always Learning and Always Improving
        </p>

        {/* Socials + Connect */}
        <div className="mt-6 relative right-[5vw] flex flex-col scale-[0.75] md:flex-row md:items-center gap-4 md:gap-6">
          <SocialIcons />
          <span className=" flex justify-center font-jersey items-center h-[8vh] px-8 rounded-full text-3xl font-semibold tracking-wide bg-[var(--accent)] text-black shadow hover:scale-105 transition-transform">
            Let’s Connect
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroIntroCard;
