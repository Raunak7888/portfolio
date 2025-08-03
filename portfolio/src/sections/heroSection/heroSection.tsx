import React, { useEffect, useState } from 'react'
import Disks from './BackgroungDisc'
import { useTheme } from 'next-themes';
import Stars from './stars';
import Cloud from './clouds';
import HeroIntroCard from './heroIntroCard';

const HeroSection = () => {
     const { theme } = useTheme();
      const [mounted, setMounted] = useState(false);
    
      useEffect(() => {
        setMounted(true);
      }, []);
    
    return (
        <>
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
                <HeroIntroCard />
            </div>
        </>
    )
}

export default HeroSection