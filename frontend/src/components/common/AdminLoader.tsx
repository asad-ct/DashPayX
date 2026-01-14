import React from 'react';
import './admin-loader.css';

export default function AdminLoader() {
    return (
        <div className="absolute inset-0 bg-white/95 flex items-center justify-center z-40">
            <div className="text-center">
                <div className="admin-loader"></div>
            </div>
        </div>
    );
}
