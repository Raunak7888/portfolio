import React from 'react'
import { AboutCard1, AboutCard2, Image1, Image2 } from './aboutCard'
import Section from '@/components/ui/sections'

const AboutSection = () => {
    return (
        <div className='flex mt-[10vh] items-center gap-[5vh] justify-center flex-col'>
            <Section sectionName={'About Me'} />
            <div className='flex flex-col items-center gap-6 scale-y-[0.90]  scale-x-[0.95] justify-center'>
                <div className='flex gap-6 items-center justify-center'>
                    <Image1 />
                    <AboutCard1 />
                </div>
                <div className='flex gap-6 items-center justify-center'>
                    <AboutCard2 />
                    <Image2 />
                </div>
            </div>
        </div>
    )
}

export default AboutSection