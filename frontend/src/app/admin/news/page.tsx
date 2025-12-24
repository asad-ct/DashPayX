'use client';

import React from 'react';
import { AdminForm } from '@/components/admin/AdminForm';

const newsFields = [
    {
        name: 'title',
        label: 'News Section Title',
        type: 'text',
        placeholder: 'Enter news section title',
    },
    {
        name: 'subtitle',
        label: 'News Section Subtitle',
        type: 'textarea',
        placeholder: 'Enter news section subtitle',
    },
    {
        name: 'articles',
        label: 'News Articles',
        type: 'array',
        itemLabel: 'Article',
        subfields: [
            { name: 'image', label: 'Article Image', type: 'file', accept: 'image/*' },
            { name: 'title', label: 'Article Title', placeholder: 'Enter article title' },
            { name: 'description', label: 'Article Description', placeholder: 'Enter article description' },
            { name: 'date', label: 'Date', placeholder: 'e.g., 19 November 2025' },
            { name: 'link', label: 'Article Link', placeholder: 'Enter article URL' },
        ],
    },
];

export default function AdminNews() {
    return <AdminForm sectionType="news" title="News Section" fields={newsFields} />;
}
