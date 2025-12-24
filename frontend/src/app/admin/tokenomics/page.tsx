'use client';

import React from 'react';
import { AdminForm } from '@/components/admin/AdminForm';

const tokenomicsFields = [
    {
        name: 'title',
        label: 'Tokenomics Title',
        type: 'text',
        placeholder: 'Enter tokenomics title',
    },
    {
        name: 'subtitle',
        label: 'Tokenomics Subtitle',
        type: 'text',
        placeholder: 'Enter tokenomics subtitle',
    },
    {
        name: 'cards',
        label: 'Tokenomics Cards',
        type: 'array',
        itemLabel: 'Card',
        subfields: [
            { name: 'title', label: 'Card Title', placeholder: 'e.g., Total Supply' },
            { name: 'description', label: 'Card Description', placeholder: 'Enter card description' },
        ],
    },
];

export default function AdminTokenomics() {
    return <AdminForm sectionType="tokenomics" title="Tokenomics Section" fields={tokenomicsFields} />;
}
