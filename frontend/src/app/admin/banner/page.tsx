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
            { name: 'id', label: 'Feature ID', type: 'text' },
            { name: 'title', label: 'Feature Title', type: 'text' },
            { name: 'description', label: 'Feature Description', type: 'textarea' },
            { name: 'icon', label: 'Icon Path', type: 'text', placeholder: '/icon-path.svg' },
            { name: 'iconAlt', label: 'Icon Alt Text', type: 'text' },
        ],
    },
];

export default function AdminBanner() {
    return <AdminForm sectionType="banner" title="Banner Section" fields={bannerFields} />;
}
