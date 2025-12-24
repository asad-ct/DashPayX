'use client';

import React from 'react';
import { AdminForm } from '@/components/admin/AdminForm';

const contactFields = [
    {
        name: 'title',
        label: 'Section Title',
        type: 'text',
        placeholder: 'Join the DashPayX (DPX) Community',
    },
    {
        name: 'subtitle',
        label: 'Section Subtitle',
        type: 'textarea',
        placeholder: 'DashPayX will grow community-first...',
    },
    {
        name: 'qrTelegram',
        label: 'Telegram Community QR Code',
        type: 'nestedObject',
        subfields: [
            { name: 'name', label: 'Name', placeholder: 'Telegram Community' },
            { name: 'image', label: 'QR Code Image', type: 'file', accept: 'image/*', imageKey: 'qr_telegram' },
            { name: 'link', label: 'Link URL', placeholder: 'https://t.me/dashpayx' },
        ],
    },
    {
        name: 'qrAnnouncements',
        label: 'Announcements Channel QR Code',
        type: 'nestedObject',
        subfields: [
            { name: 'name', label: 'Name', placeholder: 'Announcements Channel' },
            { name: 'image', label: 'QR Code Image', type: 'file', accept: 'image/*', imageKey: 'qr_announcements' },
            { name: 'link', label: 'Link URL', placeholder: 'https://t.me/dashpayx_announcements' },
        ],
    },
    {
        name: 'qrTwitter',
        label: 'X / Twitter QR Code',
        type: 'nestedObject',
        subfields: [
            { name: 'name', label: 'Name', placeholder: 'X / Twitter' },
            { name: 'image', label: 'QR Code Image', type: 'file', accept: 'image/*', imageKey: 'qr_twitter' },
            { name: 'link', label: 'Link URL', placeholder: 'https://twitter.com/dashpayx' },
        ],
    },
    {
        name: 'formTitle',
        label: 'Form Title',
        type: 'text',
        placeholder: 'Ready to get started?',
    },
    {
        name: 'formSubtitle',
        label: 'Form Subtitle',
        type: 'text',
        placeholder: 'Start your free trial',
    },
    {
        name: 'features',
        label: 'Feature Points',
        type: 'array',
        itemLabel: 'Feature',
        subfields: [
            { name: 'text', label: 'Feature Text', placeholder: 'Free 30 days trial' },
        ],
    },
];

export default function AdminContact() {
    return <AdminForm sectionType="contact" title="Contact Us Section" fields={contactFields} />;
}
