'use client';

import React from 'react';
import { AdminForm } from '@/components/admin/AdminForm';

const heroFields = [
    {
        name: 'title',
        label: 'Home Title',
        type: 'textarea',
        placeholder: 'Enter hero title (use \\n for line breaks)',
    },
    {
        name: 'description',
        label: 'Home Description',
        type: 'textarea',
        placeholder: 'Enter hero description',
    },
    {
        name: 'image',
        label: 'Home Image',
        type: 'file',
        imageKey: 'main',
        accept: 'image/*',
    },
    {
        name: 'primaryCta',
        label: 'Primary CTA',
        type: 'nestedObject',
        subfields: [
            { name: 'text', label: 'Button Text', placeholder: 'e.g., Token Distribution' },
            { name: 'link', label: 'Button Link', placeholder: 'e.g., /' },
        ],
    },
    {
        name: 'secondaryCta',
        label: 'Secondary CTA',
        type: 'nestedObject',
        subfields: [
            { name: 'text', label: 'Button Text', placeholder: 'e.g., Whitepaper' },
            { name: 'link', label: 'Button Link', placeholder: 'e.g., /' },
        ],
    },
];

export default function AdminHero() {
    return <AdminForm sectionType="hero" title="Home Section" fields={heroFields} />;
}
