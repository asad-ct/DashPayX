import React from "react";
import { RoadmapPhaseCard } from "./RoadmapPhaseCard";

interface PhaseData {
    phaseNumber: string;
    title: string;
    description: string[];
}

interface RoadmapGridProps {
    phases: PhaseData[];
}

export const RoadmapGrid: React.FC<RoadmapGridProps> = ({ phases }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-6 lg:gap-8 w-full px-4 max-w-7xl mx-auto">
            {phases.map((phase, index) => (
                <RoadmapPhaseCard key={index} phase={phase} index={index} />
            ))}
        </div>
    );
};
