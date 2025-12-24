'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Skip auth check for login page
        if (pathname === '/admin/login') {
            setIsLoading(false);
            return;
        }

        // Check if user is authenticated
        const token = localStorage.getItem('admin_token');
        if (!token) {
            router.push('/admin/login');
        } else {
            setIsAuthenticated(true);
            setIsLoading(false);
        }
    }, [pathname, router]);

    const handleLogout = () => {
        localStorage.removeItem('admin_token');
        localStorage.removeItem('admin_user');
        router.push('/admin/login');
    };

    // Show loading or login page
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="text-gray-600">Loading...</div>
            </div>
        );
    }

    // Don't show sidebar for login page
    if (pathname === '/admin/login') {
        return <>{children}</>;
    }

    // Show admin layout only if authenticated
    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white shadow-lg">
                <div className="p-6">
                    <h1 className="text-2xl font-bold">DashPayX Admin</h1>
                </div>
                <nav className="mt-6">
                    <Link href="/admin" className="block px-6 py-3 hover:bg-gray-800/50 transition">
                        Dashboard
                    </Link>
                    <Link href="/admin/hero" className="block px-6 py-3 hover:bg-gray-800/50 transition">
                        Hero Section
                    </Link>
                    <Link href="/admin/banner" className="block px-6 py-3 hover:bg-gray-800/50 transition">
                        Banner
                    </Link>
                    <Link href="/admin/secondbanner" className="block px-6 py-3 hover:bg-gray-800/50 transition">
                        Second Banner
                    </Link>
                    <Link href="/admin/staking" className="block px-6 py-3 hover:bg-gray-800/50 transition">
                        Staking
                    </Link>
                    <Link href="/admin/tokenomics" className="block px-6 py-3 hover:bg-gray-800/50 transition">
                        Tokenomics
                    </Link>
                    <Link href="/admin/roadmap" className="block px-6 py-3 hover:bg-gray-800/50 transition">
                        Roadmap
                    </Link>
                    <Link href="/admin/testimonials" className="block px-6 py-3 hover:bg-gray-800/50 transition">
                        Testimonials
                    </Link>
                    <Link href="/admin/faq" className="block px-6 py-3 hover:bg-gray-800/50 transition">
                        FAQ
                    </Link>
                    <Link href="/admin/news" className="block px-6 py-3 hover:bg-gray-800/50 transition">
                        News
                    </Link>
                    <Link href="/admin/contact" className="block px-6 py-3 hover:bg-gray-800/50 transition">
                        Contact Us
                    </Link>
                    <Link href="/admin/contact/submissions" className="block px-6 py-3 hover:bg-gray-800/50 transition">
                        Contact Submissions
                    </Link>
                    <div className="border-t border-gray-700/50 mt-4"></div>
                    <Link href="/" className="block px-6 py-3 hover:bg-gray-800/50 transition">
                        Back to Site
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="w-full text-left block px-6 py-3 hover:bg-gray-800/50 transition text-red-400"
                    >
                        Logout
                    </button>
                </nav>
            </aside>

            {/* Main content */}
            <main className="flex-1">
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
