'use client';

import React, { useState, useEffect } from 'react';

interface ContactSubmission {
    id: number;
    name: string;
    email: string;
    phone: string;
    message?: string;
    created_at: string;
}

export default function AdminContactSubmissions() {
    const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleteMessage, setDeleteMessage] = useState('');

    useEffect(() => {
        fetchSubmissions();
    }, []);

    const fetchSubmissions = async () => {
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
            const token = localStorage.getItem('admin_token');
            const response = await fetch(`${apiUrl}/contact/submissions`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            const data = await response.json();
            setSubmissions(data);
        } catch (error) {
            console.error('Error fetching submissions:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this submission?')) return;

        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
            const token = localStorage.getItem('admin_token');
            const response = await fetch(`${apiUrl}/contact/submissions/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                setDeleteMessage('✓ Submission deleted successfully');
                fetchSubmissions();
                setTimeout(() => setDeleteMessage(''), 3000);
            }
        } catch (error) {
            console.error('Error deleting submission:', error);
            setDeleteMessage('✗ Error deleting submission');
        }
    };

    if (loading) {
        return <div className="p-8 text-center">Loading submissions...</div>;
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Contact Form Submissions</h1>
                {deleteMessage && (
                    <div className={`py-2 px-4 rounded-lg font-medium ${deleteMessage.includes('✓') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                        {deleteMessage}
                    </div>
                )}
            </div>

            {submissions.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No submissions yet</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Phone
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Message
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Date
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {submissions.map((submission) => (
                                <tr key={submission.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {submission.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {submission.email}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {submission.phone}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                                        {submission.message || '-'}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {new Date(submission.created_at).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <button
                                            onClick={() => handleDelete(submission.id)}
                                            className="text-red-600 hover:text-red-900"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
