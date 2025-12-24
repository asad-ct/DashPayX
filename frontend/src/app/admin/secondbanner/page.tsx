'use client';

import React from 'react';
import { AdminForm } from '@/components/admin/AdminForm';

const secondbannerFields = [
    {
        name: 'title',
        label: 'Title',
        type: 'text',
        placeholder: 'Enter title (e.g., Planned Staking Parameters)',
    },
    {
        name: 'description',
        label: 'Description',
        type: 'textarea',
        placeholder: 'Enter description',
    },
    {
        name: 'image',
        label: 'SecondBanner Image',
        type: 'file',
        imageKey: 'main',
        accept: 'image/*',
    },
    {
        name: 'bulletPoints',
        label: 'Bullet Points',
        type: 'array',
        itemLabel: 'Bullet Point',
        subfields: [
            { name: 'text', label: 'Bullet Point Text', placeholder: 'Enter bullet point' },
        ],
    },
    {
        name: 'ctaText',
        label: 'CTA Button Text',
        type: 'text',
        placeholder: 'Enter CTA button text (e.g., Start Your Demo)',
    },
];

export default function AdminSecondBanner() {
    return <AdminForm sectionType="secondbanner" title="Second Banner Section" fields={secondbannerFields} />;
}
