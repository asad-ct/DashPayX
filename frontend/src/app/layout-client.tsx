'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useGlobalLoading } from '@/hooks/useGlobalLoading';
import GlobalLoader from '@/components/common/GlobalLoader';

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
    const { isLoading } = useGlobalLoading();
    const pathname = usePathname();
    const isAdminRoute = pathname?.startsWith('/admin');

    useEffect(() => {
        // Scroll to top on page load/reload
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {isLoading && !isAdminRoute && <GlobalLoader />}
            {children}
        </>
    );
}
