'use client';

import React from 'react';
import { AdminForm } from '@/components/admin/AdminForm';

const testimonialsFields = [
    {
        name: 'title',
        label: 'Testimonials Title',
        type: 'text',
        placeholder: 'Enter testimonials section title',
    },
    {
        name: 'subtitle',
        label: 'Testimonials Subtitle',
        type: 'text',
        placeholder: 'Enter testimonials section subtitle',
    },
    {
        name: 'cards',
        label: 'Transparency Cards',
        type: 'array',
        itemLabel: 'Card',
        subfields: [
            { name: 'title', label: 'Card Title', placeholder: 'e.g., Contract Address' },
            { name: 'description', label: 'Card Description', placeholder: 'Enter card description' },
            { name: 'status', label: 'Status', placeholder: 'e.g., Planned, In preparation, To be announced' },
            { name: 'qrCode', label: 'QR Code Image URL', placeholder: 'e.g., /qr-contract.png' },
        ],
    },
];

export default function AdminTestimonials() {
    return <AdminForm sectionType="testimonials" title="Testimonials Section" fields={testimonialsFields} />;
}
