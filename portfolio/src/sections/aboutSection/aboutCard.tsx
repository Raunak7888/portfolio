import { TimeLineBar } from '@/components/ui/timeLineBar'
import React from 'react'
import { UserCircle, Lightbulb, GraduationCap, Database, Monitor, Scale } from "lucide-react";
import Image from 'next/image';


export const AboutCard1 = () => {
  return (
    <div className='w-[50vw] h-[40vh] rounded-4xl 
        bg-[radial-gradient(ellipse_at_top_left,_var(--disc-9),_var(--disc-5),_var(--disc-2))] 
        flex flex-row justify-end gap-[3vh] items-center border-[0.3vh]'>
      <div className='pt-[vh]'>
        <TimeLineBar
          fillPercent={0}
          icons={[UserCircle, Lightbulb, GraduationCap]}
          accentColor="var(--foreground)" // green-500
          timelineColor="var(--foreground)" // gray-300
          borderColor="var(--background)" // gray-900
          nodeSize="3.5vw"
          nodeSpacing="4.7vh"
          reduceSpace={2.09}
          lineWidth='13px'
        />
      </div>
      <div className="w-[45vw] h-[40vh] overflow-y-auto px-5 py-5 gap-[2vh] flex flex-col justify-center text-white text-base leading-relaxed font-mitr font-medium">
        <div className=" h-1/3 flex items-center px-5 border-l-4">
          <p className="w-full">
            Hey! I’m <span className="text-[var(--accent)]">Raunak Yadav</span>, a passionate and curious
            <span className="text-[var(--accent)]"> Full Stack Developer</span> from
            <span className="text-[var(--accent)]"> India</span> who loves building things that work as beautifully as they scale.
          </p>
        </div>

        <div className=" h-1/3 flex items-center px-5 border-l-4">
          <p className="w-full">
            My journey into the world of code began back in high school, when I stumbled upon HTML, CSS, and JavaScript.
            I remember thinking it was seriously cool how you could build things that lived on the internet.
            But with boards and exams looming, I had to pause that curiosity.
          </p>
        </div>

        <div className=" h-1/3 flex items-center px-5 border-l-4">
          <p className="w-full">
            After completing my Senior Secondary School, I finally got the chance to dive back in — this time, for real.
            I enrolled in a <span className="text-[var(--accent)]">Bachelor of Computer Applications</span> at
            <span className="text-[var(--accent)]"> DAV Institute of Management</span>, and since then, there’s been no looking back.
          </p>
        </div>
      </div>
    </div>
  )
}

export const AboutCard2 = () => {
  return (
    <div className='w-[50vw] h-[40vh] rounded-4xl 
        bg-[radial-gradient(ellipse_at_top_left,_var(--disc-9),_var(--disc-5),_var(--disc-2))] 
        flex flex-row justify-end gap-[3vh] items-center border-[0.3vh]'>
      <div className='pt-[vh]'>
        <TimeLineBar
          fillPercent={0}
          icons={[Database, Monitor, Scale]}
          accentColor="var(--foreground)" // green-500
          timelineColor="var(--foreground)" // gray-300
          borderColor="var(--background)" // gray-900
          nodeSize="3.5vw"
          nodeSpacing="4.7vh"
          reduceSpace={2.09}
          lineWidth='13px'
        />
      </div>
      <div className="w-[45vw] h-[40vh] overflow-y-auto px-5 py-5 gap-[2vh] flex flex-col justify-center text-white text-base leading-relaxed font-mitr font-medium">
        <div className=" h-1/3 flex items-center px-5 border-l-4">
          <p className="w-full">
            My core strength lies in crafting robust backend systems using Java, Spring Boot,
            and PostgreSQL — particularly in a microservices architecture to
            keep things clean and independent.
          </p>
        </div>

        <div className=" h-1/3 flex items-center px-5 border-l-4">
          <p className="w-full">
            On the frontend, I enjoy creating clean, intuitive, and interactive experiences with
            Next.js, TypeScript, Tailwind CSS, and Framer Motion.
          </p>
        </div>

        <div className=" h-1/3 flex items-center px-5 border-l-4">
          <p className="w-full">
            I believe that great products are built when the backend is as strong as the
            frontend is delightful.
          </p>
        </div>
      </div>
    </div>
  )
}
export const Image1 = () => {
  return (
    <div className=" h-[40.5vh]">
      <img
        src="/LaptopPerson.jpg"
        alt="Person using Laptop"
        className="w-full h-full object-cover border-[0.3vh] rounded-4xl"
      />
    </div>
  );
};

export const Image2 = () => {
  return (
    <div className=" h-[40.5vh] w-[246px]">
      <img
        src="/MonitorPerson.jpg"
        alt="Person using Monitor"
        className="w-full h-full object-cover border-[0.3vh] rounded-4xl"
      />
    </div>
  );
};
