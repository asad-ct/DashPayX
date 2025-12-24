import React from 'react';
import './loader.css';

export default function GlobalLoader() {
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-50">
            <div className="text-center">
                <div className="loader mx-auto mb-4" style={{ borderColor: 'rgba(250, 242, 242, 0.1)', borderTopColor: 'white' }}></div>
                <p className="text-white text-lg font-semibold">Loading your content...</p>
            </div>
        </div>
    );
}
