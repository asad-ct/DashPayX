'use client';

import React from 'react';
import { AdminForm } from '@/components/admin/AdminForm';

const roadmapFields = [
    {
        name: 'title',
        label: 'Roadmap Title',
        type: 'text',
        placeholder: 'Enter roadmap title',
    },
    {
        name: 'subtitle',
        label: 'Roadmap Subtitle',
        type: 'text',
        placeholder: 'Enter roadmap subtitle',
    },
    {
        name: 'phases',
        label: 'Roadmap Phases',
        type: 'array',
        itemLabel: 'Phase',
        subfields: [
            { name: 'phaseNumber', label: 'Phase Number', placeholder: 'e.g., 1' },
            { name: 'title', label: 'Phase Title', placeholder: 'e.g., Foundation' },
            { name: 'description', label: 'Phase Description (comma-separated)', placeholder: 'Enter descriptions separated by commas' },
        ],
    },
    {
        name: 'footerText',
        label: 'Footer Text',
        type: 'textarea',
        placeholder: 'Enter footer text',
    },
];

export default function AdminRoadmap() {
    return <AdminForm sectionType="roadmap" title="Roadmap Section" fields={roadmapFields} />;
}
