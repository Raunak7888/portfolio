'use client';

import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { MoonSvg, MuteSvg, SunSvg, UnMuteSvg } from '@/util/icons';

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const [isMute, setIsMute] = useState<boolean>(false);

    const handleMuteHandler = () => {
        setIsMute(!isMute);
    }

    const handleThemeToggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    
    return (
        <div
            className='w-[90vw] h-[7vh] rounded-[2vh] flex justify-between items-center font-syne bg-[var(--navbar)] text-[var(--foreground)] px-[2%]'
        >
            <div className="text-[2vw] font-bold">Raunak Yadav</div>

            <div className="flex items-center gap-[1vw] ">
                <a href="#home" className="text-[1.2vw] hover:underline">Home</a>
                <a href="#about" className="text-[1.2vw] hover:underline">About</a>
                <a href="#skills" className="text-[1.2vw] hover:underline">Skills</a>
                <a href="#projects" className="text-[1.2vw] hover:underline">Projects</a>
                <a href="#contact" className="text-[1.2vw] hover:underline">Contact</a>

                <button onClick={handleMuteHandler} className="w-[2vw] h-[2vw] hover:scale-110 transition \" >
                    {isMute === true ?
                        <MuteSvg/>
                        :
                        <UnMuteSvg/>
                    }
                </button>

                <button className={`${theme === 'light' ? "w-[2vw] h-[2vw] mx-[4px]" : "w-[2.5vw] h-[2.5vw]"} hover:scale-110 transition`} onClick={handleThemeToggle}>
                    {theme === 'light' ?
                        <MoonSvg/>
                        :
                        <SunSvg/>
                    }
                </button>
            </div>
        </div>
    );
};

export default Navbar;
