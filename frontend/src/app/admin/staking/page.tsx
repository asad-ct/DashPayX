'use client';

import React from 'react';
import { AdminForm } from '@/components/admin/AdminForm';

const stakingFields = [
    {
        name: 'title',
        label: 'Staking Title',
        type: 'text',
        placeholder: 'Enter staking section title',
    },
    {
        name: 'subtitle',
        label: 'Staking Subtitle',
        type: 'text',
        placeholder: 'Enter staking section subtitle',
    },
    {
        name: 'features',
        label: 'Staking Features',
        type: 'array',
        itemLabel: 'Feature',
        subfields: [
            { name: 'title', label: 'Feature Title', placeholder: 'e.g., Simple Concept' },
            { name: 'description', label: 'Feature Description', placeholder: 'Enter feature description' },
        ],
    },
];

export default function AdminStaking() {
    return <AdminForm sectionType="staking" title="Staking Section" fields={stakingFields} />;
}
