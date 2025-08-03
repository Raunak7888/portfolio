'use client';

import { Brain, Home, LibraryBig, Phone, UserRound } from 'lucide-react';
import React from 'react';

type TimeLineBarProps = {
  fillPercent?: number;
  icons?: React.ElementType[];
  accentColor?: string;
  timelineColor?: string;
  borderColor?: string;
  nodeSize?: string;
  nodeSpacing?: string;
  reduceSpace?: number;
  lineWidth?: string;
  textColor?: string;
};

const defaultIcons:React.ElementType[] = [Home,UserRound,Brain,LibraryBig,Phone];

export const TimeLineBar: React.FC<TimeLineBarProps> = ({
  fillPercent = 40,
  icons = defaultIcons,
  accentColor = 'var(--accent)',
  timelineColor = 'var(--timeline)',
  borderColor = 'var(--foreground)',
  nodeSize = '2.9vw',
  nodeSpacing = '2vh',
  reduceSpace = 1,
  lineWidth = '10px',
  textColor = 'text-[var(--foreground)]',
}) => {
  const totalNodes = icons.length;
  const nodesToAccent = Math.ceil((fillPercent / 100) * totalNodes);

  const parseUnit = (value: string) => parseFloat(value);

  const spacingNum = parseUnit(nodeSpacing);
  const nodeSizeNum = parseUnit(nodeSize);
  const totalHeight = totalNodes * nodeSizeNum + (totalNodes - reduceSpace) * spacingNum;

  return (
    <div className="flex flex-col items-center gap-4 py-4">
      <div
        className="rounded-2xl flex flex-col items-center"
        style={{
          width: lineWidth,
          height: `${totalHeight}vw`,
          background: `linear-gradient(to bottom, ${accentColor} ${fillPercent}%, ${timelineColor} ${fillPercent}%)`,
          borderLeft: `3px solid ${borderColor}`,
          borderRight: `3px solid ${borderColor}`,
          gap: nodeSpacing,
        }}
      >
        {icons.map((Icon, index) => {
          const isAccent = index < nodesToAccent;
          return (
            <div
              key={index}
              className="rounded-full relative flex items-center justify-center"
              style={{
                width: nodeSize,
                height: nodeSize,
                backgroundColor: isAccent ? accentColor : timelineColor,
                border: `3px solid ${borderColor}`,
              }}
            >
              <Icon className={`w-[1.5vw] h-[1.5vw] ${textColor}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
