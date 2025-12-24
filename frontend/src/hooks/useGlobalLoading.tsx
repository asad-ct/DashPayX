'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

interface LoadingContextType {
    isLoading: boolean;
    addLoading: (key: string) => void;
    removeLoading: (key: string) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);
const MINIMUM_LOADING_TIME = 1500; // 1.5 seconds minimum display time

export function LoadingProvider({ children }: { children: React.ReactNode }) {
    const [loadingKeys, setLoadingKeys] = useState<Set<string>>(new Set(['initial'])); // Start with initial loading
    const [isMinimumTimeElapsed, setIsMinimumTimeElapsed] = useState(false);

    // Set minimum display time on mount
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsMinimumTimeElapsed(true);
        }, MINIMUM_LOADING_TIME);

        return () => clearTimeout(timer);
    }, []);

    const addLoading = useCallback((key: string) => {
        setLoadingKeys(prev => new Set(prev).add(key));
    }, []);

    const removeLoading = useCallback((key: string) => {
        setLoadingKeys(prev => {
            const newSet = new Set(prev);
            newSet.delete(key);
            return newSet;
        });
    }, []);

    // Show loader if there are any loading keys AND minimum time hasn't elapsed
    // OR if there are loading keys (actual loading) regardless of time
    const isLoading = loadingKeys.size > 0 && (!isMinimumTimeElapsed || loadingKeys.size > 1);

    return (
        <LoadingContext.Provider value={{ isLoading, addLoading, removeLoading }}>
            {children}
        </LoadingContext.Provider>
    );
}

export function useGlobalLoading() {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error('useGlobalLoading must be used within LoadingProvider');
    }
    return context;
}
