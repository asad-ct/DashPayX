'use client';

import React from 'react';
import { AdminForm } from '@/components/admin/AdminForm';

const featuresFields = [
    {
        name: 'title',
        label: 'Features Title',
        type: 'text',
        placeholder: 'Enter features section title',
    },
    {
        name: 'subtitle',
        label: 'Features Subtitle',
        type: 'text',
        placeholder: 'Enter features section subtitle',
    },
    {
        name: 'features',
        label: 'Features',
        type: 'array',
        itemLabel: 'Feature',
        subfields: [
            { name: 'image', label: 'Feature Image', type: 'file', accept: 'image/*' },
            { name: 'title', label: 'Feature Title', placeholder: 'Enter feature title' },
            { name: 'description', label: 'Feature Description', placeholder: 'Enter feature description' },
        ],
    },
];

export default function AdminFeatures() {
    return <AdminForm sectionType="features" title="Features Section" fields={featuresFields} />;
}
