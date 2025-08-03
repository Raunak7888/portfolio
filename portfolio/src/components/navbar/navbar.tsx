'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { MoonSvg, MuteSvg, SunSvg, UnMuteSvg } from '@/util/icons';

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const [isMute, setIsMute] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleMuteHandler = () => {
        setIsMute(!isMute);
    };

    const handleThemeToggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    if (!mounted) return null; // Prevent hydration mismatch

    return (
        <div className='w-[90vw] h-[7vh] rounded-[2vh] flex justify-between items-center font-syne bg-[var(--navbar)] text-[var(--foreground)] px-[2%]'>
            <div className="text-[2vw] font-bold">Raunak Yadav</div>

            <div className="flex items-center gap-[1vw]">
                <a href="#home" className="text-[1.2vw] hover:underline">Home</a>
                <a href="#about" className="text-[1.2vw] hover:underline">About</a>
                <a href="#skills" className="text-[1.2vw] hover:underline">Skills</a>
                <a href="#projects" className="text-[1.2vw] hover:underline">Projects</a>
                <a href="#contact" className="text-[1.2vw] hover:underline">Contact</a>

                <button onClick={handleMuteHandler} className="w-[2vw] h-[2vw] hover:scale-110 transition">
                    {isMute ? <MuteSvg /> : <UnMuteSvg />}
                </button>

                <button
                    onClick={handleThemeToggle}
                    className={`${theme === 'light' ? 'w-[2vw] h-[2vw] mx-[4px]' : 'w-[2.5vw] h-[2.5vw]'} hover:scale-110 transition`}
                >
                    {theme === 'light' ? <MoonSvg /> : <SunSvg />}
                </button>
            </div>
        </div>
    );
};

export default Navbar;
