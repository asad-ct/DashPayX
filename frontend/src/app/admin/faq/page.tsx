'use client';

import React from 'react';
import { AdminForm } from '@/components/admin/AdminForm';

const faqFields = [
    {
        name: 'title',
        label: 'FAQ Title',
        type: 'text',
        placeholder: 'Enter FAQ section title',
    },
    {
        name: 'subtitle',
        label: 'FAQ Subtitle',
        type: 'textarea',
        placeholder: 'Enter FAQ section subtitle',
    },
    {
        name: 'image',
        label: 'FAQ Image',
        type: 'file',
        imageKey: 'main',
        accept: 'image/*',
    },
    {
        name: 'faqs',
        label: 'FAQ Items',
        type: 'array',
        itemLabel: 'FAQ',
        subfields: [
            { name: 'question', label: 'Question', placeholder: 'Enter the question' },
            { name: 'answer', label: 'Answer', placeholder: 'Enter the answer' },
        ],
    },
];

export default function AdminFAQ() {
    return <AdminForm sectionType="faq" title="FAQ Section" fields={faqFields} />;
}
