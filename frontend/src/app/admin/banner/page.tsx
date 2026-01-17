'use client';

import React from 'react';
import { AdminForm } from '@/components/admin/AdminForm';

const bannerFields = [
    {
        name: 'heading',
        label: 'Heading',
        type: 'text',
        placeholder: 'Enter banner heading (e.g., What is DashPayX (DPX)?)',
    },
    {
        name: 'description',
        label: 'Description',
        type: 'textarea',
        placeholder: 'Enter banner description',
    },
    {
        name: 'image',
        label: 'Banner Image',
        type: 'file',
        imageKey: 'main',
        accept: 'image/*',
    },
    {
        name: 'features',
        label: 'Features',
        type: 'array',
        placeholder: 'Features list',
        subfields: [
            { name: 'title', label: 'Feature Title', type: 'text' },
            { name: 'description', label: 'Feature Description', type: 'textarea' },
        ],
    },
];

export default function AdminBanner() {
    return <AdminForm sectionType="banner" title="About Us Section" fields={bannerFields} />;
}
