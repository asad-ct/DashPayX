'use client';

import React from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
            <p className="text-lg text-gray-600 mb-8">
                Welcome to the DashPayX Admin Panel. Select a section from the sidebar to edit content.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AdminCard
                    title="Hero Section"
                    description="Edit hero title, description, and buttons"
                    href="/admin/hero"
                />
                <AdminCard
                    title="FAQ"
                    description="Manage frequently asked questions"
                    href="/admin/faq"
                />
                <AdminCard
                    title="Staking"
                    description="Edit staking features and information"
                    href="/admin/staking"
                />
                <AdminCard
                    title="Tokenomics"
                    description="Update tokenomics details and cards"
                    href="/admin/tokenomics"
                />
                <AdminCard
                    title="Roadmap"
                    description="Manage roadmap phases and milestones"
                    href="/admin/roadmap"
                />
                <AdminCard
                    title="Testimonials"
                    description="Edit transparency and milestone cards"
                    href="/admin/testimonials"
                />
                <AdminCard
                    title="News"
                    description="Manage news articles and updates"
                    href="/admin/news"
                />
                <AdminCard
                    title="Banner"
                    description="Edit banner content and text"
                    href="/admin/banner"
                />
                <AdminCard
                    title="Contact Us"
                    description="Edit contact section & view submissions"
                    href="/admin/contact"
                />
                <AdminCard
                    title="Contact Submissions"
                    description="View and manage contact form submissions"
                    href="/admin/contact/submissions"
                />
            </div>
        </div>
    );
}

interface AdminCardProps {
    title: string;
    description: string;
    href: string;
}

function AdminCard({ title, description, href }: AdminCardProps) {
    return (
        <Link href={href}>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition cursor-pointer">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-600">{description}</p>
            </div>
        </Link>
    );
}
