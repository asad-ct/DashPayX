'use client';

import React from 'react';
import { AdminForm } from '@/components/admin/AdminForm';

const aboutSectionFields = [
    {
        name: 'title',
        label: 'Section Title',
        type: 'text',
        placeholder: 'Enter section title',
    },
    {
        name: 'subtitle',
        label: 'Section Subtitle',
        type: 'textarea',
        placeholder: 'Enter section subtitle',
    },
];

export default function AdminAboutSection() {
    return <AdminForm sectionType="aboutsection" title="Introduction Section" fields={aboutSectionFields} />;
}
