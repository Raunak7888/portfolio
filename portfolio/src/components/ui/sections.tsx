import React from 'react';

interface SectionProps {
    sectionName: string;
}

const Section = ({ sectionName }: SectionProps) => {
    return (
        <div className="h-[0.7vh] w-[50vw] bg-[var(--foreground)] flex justify-center items-center">
            <div className="text-[4vh] bg-[var(--background)] text-[var(--foreground)] flex justify-center items-center font-jersey px-[2vh] pb-[0.7vh] rounded">
                {sectionName}
            </div>
        </div>
    );
};

export default Section;
