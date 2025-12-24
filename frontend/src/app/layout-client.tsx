'use client';

import { useGlobalLoading } from '@/hooks/useGlobalLoading';
import GlobalLoader from '@/components/common/GlobalLoader';

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
    const { isLoading } = useGlobalLoading();

    return (
        <>
            {isLoading && <GlobalLoader />}
            {children}
        </>
    );
}
