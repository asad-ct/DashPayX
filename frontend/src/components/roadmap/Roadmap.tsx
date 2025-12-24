"use client";

import React from "react";
import { RoadmapHeader } from "./RoadmapHeader";
import { RoadmapGrid } from "./RoadmapGrid";
import { RoadmapFooter } from "./RoadmapFooter";
import { Loader } from "../common/Loader";
import { useContent } from "@/hooks/useContent";

interface PhaseData {
    phaseNumber: string;
    title: string;
    description: string[];
}

export const Roadmap: React.FC = () => {
    const { data: contentData, loading, error } = useContent('roadmap');

    if (loading) {
        return <Loader />;
    }

    if (error || !contentData || !('content' in contentData)) {
        return <div className="text-center py-12">Error loading roadmap content</div>;
    }

    const phases: PhaseData[] = contentData.content.phases?.map((phase: any, index: number) => ({
        phaseNumber: String(index + 1),
        title: phase.title,
        description: Array.isArray(phase.description) ? phase.description : [],
    })) || [];

    const title = contentData.content.title;
    const subtitle = contentData.content.subtitle;

    return (
        <div className="relative w-full bg-white flex flex-col gap-6 md:gap-8 py-8 md:py-12 lg:py-16 px-4 overflow-hidden">
            <RoadmapHeader title={title} subtitle={subtitle} />
            <RoadmapGrid phases={phases} />
            <RoadmapFooter />
        </div>
    );
};
