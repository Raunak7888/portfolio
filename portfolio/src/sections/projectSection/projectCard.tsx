'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowBigRightDash } from 'lucide-react';
import { GithubSourceSvg } from '@/util/icons';
import clsx from 'clsx';

interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string[];
    githubUrl: string;
    routePath: string;
    rotate: number
    imageSrc: string; // ✅ added image prop
    color?: 'purple' | 'green' | 'red' | 'teal' | 'yellow';
}

const colorMap = {
    purple: {
        base: 'bg-purple-200',
        text: 'text-purple-900',
        badgeBg: 'bg-purple-100',
        badgeText: 'text-purple-900',
        buttonBg: 'bg-purple-300',
        buttonHover: 'hover:bg-purple-400 hover:text-purple-950',
        tooltipBg: 'bg-purple-900',
    },
    green: {
        base: 'bg-green-200',
        text: 'text-green-900',
        badgeBg: 'bg-green-100',
        badgeText: 'text-green-900',
        buttonBg: 'bg-green-300',
        buttonHover: 'hover:bg-green-400 hover:text-green-950',
        tooltipBg: 'bg-green-900',
    },
    red: {
        base: 'bg-red-200',
        text: 'text-red-900',
        badgeBg: 'bg-red-100',
        badgeText: 'text-red-900',
        buttonBg: 'bg-red-300',
        buttonHover: 'hover:bg-red-400 hover:text-red-950',
        tooltipBg: 'bg-red-900',
    },
    teal: {
        base: 'bg-teal-200',
        text: 'text-teal-900',
        badgeBg: 'bg-teal-100',
        badgeText: 'text-teal-900',
        buttonBg: 'bg-teal-300',
        buttonHover: 'hover:bg-teal-400 hover:text-teal-950',
        tooltipBg: 'bg-teal-900',
    },
    yellow: {
        base: 'bg-amber-200',
        text: 'text-amber-900',
        badgeBg: 'bg-amber-100',
        badgeText: 'text-amber-900',
        buttonBg: 'bg-amber-300',
        buttonHover: 'hover:bg-amber-400 hover:text-amber-950',
        tooltipBg: 'bg-amber-900',
    },
} as const;

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    techStack,
    githubUrl,
    routePath,
    imageSrc,
    rotate,
    color = 'purple',
}) => {
    const router = useRouter();
    const colors = colorMap[color];

    return (
        <div
            className={clsx(
                'w-full max-w-[27vw] h-[65vh] p-[4vh] rounded-[5vh] flex flex-col justify-between shadow-xl hover:shadow-2xl transition-shadow',
                colors.base
            )}
            style={{ rotate: `${rotate ?? 0}deg` }}
        >
            {/* Image block */}
            <div className="w-full h-[30vh] bg-black rounded-[5vh] mb-4 relative overflow-hidden">
                <img
                    src={imageSrc}
                    alt={`${title} screenshot`}
                    className="w-full h-full object-cover rounded-[5vh]"
                />
                <button
                    className="absolute top-3 right-3 bg-white w-[5vh] h-[5vh] flex items-center justify-center rounded-full shadow-md hover:bg-gray-100 transition"
                    aria-label="View Source on GitHub"
                    onClick={() => window.open(githubUrl, '_blank')}
                >
                    <GithubSourceSvg />
                </button>
            </div>

            {/* Title */}
            <h3 className={clsx('text-[4.5vh] font-luckiest text-center mb-2', colors.text)}>
                {title}
            </h3>

            {/* Description */}
            <p className={clsx('text-[1.8vh] font-mitr leading-relaxed mb-5', colors.text)}>
                {description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap justify-center gap-2 max-h-[10vh]">
                {techStack.map((tech, index) => (
                    <span
                        key={index}
                        className={clsx(
                            'px-3 py-1 text-xs rounded-full font-medium shadow-sm',
                            colors.badgeBg,
                            colors.badgeText
                        )}
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* More details */}
            <div className="relative group self-end">
                <button
                    className={clsx(
                        'w-12 h-12 flex items-center justify-center rounded-full transition-transform group-hover:translate-x-1 shadow-md',
                        colors.buttonBg,
                        colors.text,
                        colors.buttonHover
                    )}
                    onClick={() => router.push(routePath)}
                    aria-label="More details"
                >
                    <ArrowBigRightDash size={24} strokeWidth={2.5} />
                </button>
                <span className={clsx(
                    'absolute -top-10 left-1/2 -translate-x-1/2 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10',
                    colors.tooltipBg
                )}>
                    More Details
                </span>
            </div>
        </div>
    );
};

export default ProjectCard;
