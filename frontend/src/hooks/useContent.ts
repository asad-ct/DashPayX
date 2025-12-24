'use client';

import { useState, useEffect } from 'react';

interface ContentData {
    id: number;
    section_type: string;
    content: Record<string, any>;
    is_published: boolean;
    created_at: string;
    updated_at: string;
}

export const useContent = (type?: string) => {
    const [data, setData] = useState<ContentData | ContentData[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                setLoading(true);
                const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
                const endpoint = type ? `${apiUrl}/content/${type}` : `${apiUrl}/content`;

                const response = await fetch(endpoint);
                if (!response.ok) {
                    throw new Error(`Failed to fetch content: ${response.statusText}`);
                }
                const result = await response.json();
                setData(result);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, [type]);

    return { data, loading, error };
};
