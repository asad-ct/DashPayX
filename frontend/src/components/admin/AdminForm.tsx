'use client';

import React, { useState, useEffect } from 'react';
import { useContent } from '@/hooks/useContent';
import Image from 'next/image';

interface FieldSubfield {
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
    accept?: string;
    imageKey?: string;
    inputType?: string;
    maxLength?: number;
}

interface FormField {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    accept?: string;
    imageKey?: string;
    itemLabel?: string;
    subfields?: FieldSubfield[];
}

interface AdminFormProps {
    sectionType: string;
    title: string;
    fields: FormField[];
}

export function AdminForm({ sectionType, title, fields }: AdminFormProps) {
    const { data: contentData, loading, error } = useContent(sectionType);
    const [formData, setFormData] = useState<Record<string, any>>({});
    const [saving, setSaving] = useState(false);
    const [saveMessage, setSaveMessage] = useState('');
    const [uploadingImages, setUploadingImages] = useState<Set<string>>(new Set());

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

    const getAuthHeaders = () => {
        const token = localStorage.getItem('admin_token');
        return {
            'Authorization': `Bearer ${token}`,
        };
    };

    useEffect(() => {
        if (contentData && 'content' in contentData) {
            setFormData(contentData.content);
        }
    }, [contentData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileUpload = async (field: any, file: File) => {
        try {
            const uploading = new Set(uploadingImages);
            uploading.add(field.name);
            setUploadingImages(uploading);

            const formDataObj = new FormData();
            formDataObj.append('file', file);

            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
            const imageKey = field.imageKey || 'main';

            const response = await fetch(
                `${apiUrl}/images/upload/${sectionType}/${imageKey}`,
                {
                    method: 'POST',
                    headers: getAuthHeaders(),
                    body: formDataObj,
                }
            );

            if (!response.ok) {
                throw new Error('Failed to upload image');
            }

            const result = await response.json();
            setFormData(prev => ({
                ...prev,
                [field.name]: result.image, // Store base64 from backend
            }));

            uploading.delete(field.name);
            setUploadingImages(uploading);
            setSaveMessage('✓ Image uploaded successfully!');
            setTimeout(() => setSaveMessage(''), 3000);
        } catch (err) {
            console.error('Upload error:', err);
            setSaveMessage('✗ Error uploading image. Please try again.');
            const uploading = new Set(uploadingImages);
            uploading.delete(field.name);
            setUploadingImages(uploading);
        }
    };

    const handleNestedChange = (path: string, value: any) => {
        const keys = path.split('.');
        const newData = { ...formData };
        let current = newData;

        for (let i = 0; i < keys.length - 1; i++) {
            if (!current[keys[i]]) {
                current[keys[i]] = {};
            }
            current = current[keys[i]];
        }

        current[keys[keys.length - 1]] = value;
        setFormData(newData);
    };

    const handleArrayChange = (arrayPath: string, index: number, fieldName: string, value: any) => {
        const newData = { ...formData };
        const keys = arrayPath.split('.');
        let current = newData;

        for (let i = 0; i < keys.length; i++) {
            current = current[keys[i]];
        }

        if (!current[index]) {
            current[index] = {};
        }

        current[index][fieldName] = value;
        setFormData(newData);
    };

    const handleArrayFileUpload = async (arrayPath: string, index: number, field: any, file: File) => {
        try {
            const uploading = new Set(uploadingImages);
            uploading.add(`${arrayPath}_${index}`);
            setUploadingImages(uploading);

            const formDataObj = new FormData();
            formDataObj.append('file', file);

            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
            const imageKey = `${arrayPath.split('.')[0]}_${index}`;

            const response = await fetch(
                `${apiUrl}/images/upload/${sectionType}/${imageKey}`,
                {
                    method: 'POST',
                    headers: getAuthHeaders(),
                    body: formDataObj,
                }
            );

            if (!response.ok) {
                throw new Error('Failed to upload image');
            }

            const result = await response.json();
            handleArrayChange(arrayPath, index, field.name, result.image);

            uploading.delete(`${arrayPath}_${index}`);
            setUploadingImages(uploading);
            setSaveMessage('✓ Image uploaded successfully!');
            setTimeout(() => setSaveMessage(''), 3000);
        } catch (err) {
            console.error('Upload error:', err);
            setSaveMessage('✗ Error uploading image. Please try again.');
            const uploading = new Set(uploadingImages);
            uploading.delete(`${arrayPath}_${index}`);
            setUploadingImages(uploading);
        }
    };

    const handleNestedFileUpload = async (parentField: string, subfield: string, file: File, imageKey?: string) => {
        try {
            const uploading = new Set(uploadingImages);
            uploading.add(`${parentField}.${subfield}`);
            setUploadingImages(uploading);

            const formDataObj = new FormData();
            formDataObj.append('file', file);

            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
            const key = imageKey || `${parentField}_${subfield}`;

            const response = await fetch(
                `${apiUrl}/images/upload/${sectionType}/${key}`,
                {
                    method: 'POST',
                    headers: getAuthHeaders(),
                    body: formDataObj,
                }
            );

            if (!response.ok) {
                throw new Error('Failed to upload image');
            }

            const result = await response.json();
            handleNestedChange(`${parentField}.${subfield}`, result.image);

            uploading.delete(`${parentField}.${subfield}`);
            setUploadingImages(uploading);
            setSaveMessage('✓ Image uploaded successfully!');
            setTimeout(() => setSaveMessage(''), 3000);
        } catch (err) {
            console.error('Upload error:', err);
            setSaveMessage('✗ Error uploading image. Please try again.');
            const uploading = new Set(uploadingImages);
            uploading.delete(`${parentField}.${subfield}`);
            setUploadingImages(uploading);
        }
    };

    const handleSave = async () => {
        try {
            setSaving(true);
            setSaveMessage('');

            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
            const response = await fetch(`${apiUrl}/content/${sectionType}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    ...getAuthHeaders(),
                },
                body: JSON.stringify({ content: formData }),
            });

            if (!response.ok) {
                throw new Error('Failed to save content');
            }

            setSaveMessage('✓ Content saved successfully!');
            setTimeout(() => setSaveMessage(''), 3000);
        } catch (err) {
            setSaveMessage('✗ Error saving content. Please try again.');
            console.error('Save error:', err);
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold mb-6">{title}</h1>

            {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">{error}</div>}

            <div className="space-y-6">
                {fields.map((field) => {
                    if (field.type === 'text') {
                        return (
                            <div key={field.name}>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    {field.label}
                                </label>
                                <input
                                    type="text"
                                    name={field.name}
                                    value={formData[field.name] || ''}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder={field.placeholder}
                                />
                            </div>
                        );
                    }

                    if (field.type === 'file') {
                        const isUploading = uploadingImages.has(field.name);
                        const hasImage = formData[field.name];
                        return (
                            <div key={field.name}>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    {field.label}
                                </label>
                                {hasImage && (
                                    <div className="mb-4 p-4 border border-gray-300 rounded-lg bg-gray-50">
                                        <p className="text-xs text-gray-600 mb-2">Current Image:</p>
                                        <img
                                            src={hasImage}
                                            alt="Current upload"
                                            className="max-w-xs max-h-48 rounded"
                                            onError={() => <div className="text-sm text-gray-500">Image preview unavailable</div>}
                                        />
                                    </div>
                                )}
                                <label className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
                                    style={isUploading ? { opacity: 0.5, cursor: 'not-allowed' } : {}}>
                                    <div className="flex flex-col items-center justify-center">
                                        <svg className="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                        <span className={`text-sm font-medium ${isUploading ? 'text-gray-500' : 'text-gray-700'}`}>
                                            {isUploading ? 'Uploading...' : 'Click to upload image'}
                                        </span>
                                    </div>
                                    <input
                                        type="file"
                                        accept={field.accept || 'image/*'}
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if (file) {
                                                handleFileUpload(field, file);
                                            }
                                        }}
                                        disabled={isUploading}
                                        className="hidden"
                                    />
                                </label>
                                {hasImage && (
                                    <p className="text-sm text-green-600 mt-2 flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        ✓ Image uploaded
                                    </p>
                                )}
                            </div>
                        );
                    }

                    if (field.type === 'textarea') {
                        return (
                            <div key={field.name}>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    {field.label}
                                </label>
                                <textarea
                                    name={field.name}
                                    value={formData[field.name] || ''}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder={field.placeholder}
                                />
                            </div>
                        );
                    }

                    if (field.type === 'nestedObject') {
                        return (
                            <div key={field.name} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                <h3 className="font-semibold text-gray-800 mb-4">{field.label}</h3>
                                {field.subfields?.map((subfield) => (
                                    <div key={subfield.name} className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            {subfield.label}
                                        </label>
                                        {subfield.type === 'file' ? (
                                            <>
                                                {formData[field.name]?.[subfield.name] && (
                                                    <div className="mb-4 p-3 border border-gray-300 rounded-lg bg-gray-100">
                                                        <p className="text-xs text-gray-600 mb-2">Current Image:</p>
                                                        <div className="relative w-32 h-32 mx-auto">
                                                            <Image
                                                                src={formData[field.name][subfield.name].startsWith('/api/')
                                                                    ? `${apiUrl.replace('/api', '')}${formData[field.name][subfield.name]}`
                                                                    : formData[field.name][subfield.name]
                                                                }
                                                                alt={`${subfield.label} Preview`}
                                                                fill
                                                                className="object-contain"
                                                                unoptimized
                                                            />
                                                        </div>
                                                        {uploadingImages.has(`${field.name}.${subfield.name}`) && (
                                                            <div className="mt-2 text-center">
                                                                <span className="text-xs text-blue-600">Uploading...</span>
                                                            </div>
                                                        )}
                                                        {!uploadingImages.has(`${field.name}.${subfield.name}`) && formData[field.name][subfield.name].startsWith('/api/') && (
                                                            <div className="mt-2 text-center">
                                                                <span className="text-xs text-green-600">✓ Uploaded successfully</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        type="file"
                                                        accept={subfield.accept || 'image/*'}
                                                        onChange={(e) => {
                                                            const file = e.target.files?.[0];
                                                            if (file) {
                                                                handleNestedFileUpload(field.name, subfield.name, file, subfield.imageKey);
                                                            }
                                                        }}
                                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            const input = document.querySelector(`input[type="file"]`) as HTMLInputElement;
                                                            if (input?.files?.[0]) {
                                                                handleNestedFileUpload(field.name, subfield.name, input.files[0], subfield.imageKey);
                                                            }
                                                        }}
                                                        disabled={uploadingImages.has(`${field.name}.${subfield.name}`)}
                                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                                                    >
                                                        {uploadingImages.has(`${field.name}.${subfield.name}`) ? 'Uploading...' : 'Upload'}
                                                    </button>
                                                </div>
                                            </>
                                        ) : (
                                            <input
                                                type="text"
                                                value={formData[field.name]?.[subfield.name] || ''}
                                                onChange={(e) =>
                                                    handleNestedChange(`${field.name}.${subfield.name}`, e.target.value)
                                                }
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder={subfield.placeholder}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        );
                    }

                    if (field.type === 'array') {
                        const arrayData = formData[field.name] || [];
                        return (
                            <div key={field.name} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                <h3 className="font-semibold text-gray-800 mb-4">{field.label}</h3>
                                {arrayData.map((item: any, index: number) => (
                                    <div key={index} className="mb-6 border-t pt-4">
                                        <h4 className="font-medium text-gray-700 mb-3">{field.itemLabel} {index + 1}</h4>
                                        {field.subfields?.map((subfield) => (
                                            <div key={subfield.name} className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    {subfield.label}
                                                </label>
                                                {subfield.type === 'file' ? (
                                                    <>
                                                        {item[subfield.name] && (
                                                            <div className="mb-4 p-3 border border-gray-300 rounded-lg bg-gray-100">
                                                                <p className="text-xs text-gray-600 mb-2">Current Image:</p>
                                                                <img
                                                                    src={item[subfield.name]}
                                                                    alt="Current"
                                                                    className="max-w-xs max-h-32 rounded"
                                                                    onError={(e) => (e.currentTarget.style.display = 'none')}
                                                                />
                                                            </div>
                                                        )}
                                                        <label className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition"
                                                            style={uploadingImages.has(`${field.name}_${index}`) ? { opacity: 0.5, cursor: 'not-allowed' } : {}}>
                                                            <div className="flex flex-col items-center justify-center">
                                                                <svg className="w-6 h-6 text-gray-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                                </svg>
                                                                <span className="text-xs font-medium text-gray-700">
                                                                    {uploadingImages.has(`${field.name}_${index}`) ? 'Uploading...' : 'Click to upload'}
                                                                </span>
                                                            </div>
                                                            <input
                                                                type="file"
                                                                accept={subfield.accept || 'image/*'}
                                                                onChange={(e) => {
                                                                    const file = e.target.files?.[0];
                                                                    if (file) {
                                                                        handleArrayFileUpload(field.name, index, subfield, file);
                                                                    }
                                                                }}
                                                                disabled={uploadingImages.has(`${field.name}_${index}`)}
                                                                className="hidden"
                                                            />
                                                        </label>
                                                        {item[subfield.name] && (
                                                            <p className="text-xs text-green-600 mt-2 flex items-center">
                                                                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                                </svg>
                                                                ✓ Uploaded
                                                            </p>
                                                        )}
                                                    </>
                                                ) : (
                                                    <div>
                                                        <input
                                                            type={subfield.inputType || 'text'}
                                                            value={item[subfield.name] || ''}
                                                            onChange={(e) =>
                                                                handleArrayChange(field.name, index, subfield.name, e.target.value)
                                                            }
                                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                            placeholder={subfield.placeholder}
                                                            maxLength={subfield.maxLength}
                                                        />
                                                        {subfield.maxLength && (
                                                            <p className="text-xs text-gray-500 mt-1">
                                                                {(item[subfield.name] || '').length}/{subfield.maxLength} characters
                                                            </p>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        );
                    }

                    return null;
                })}
            </div>

            <div className="mt-8 flex gap-4">
                <button
                    onClick={handleSave}
                    disabled={saving || uploadingImages.size > 0}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 px-6 rounded-lg transition"
                >
                    {saving ? 'Saving...' : uploadingImages.size > 0 ? 'Uploading images...' : 'Save Changes'}
                </button>
                {saveMessage && (
                    <div className={`py-2 px-4 rounded-lg font-medium ${saveMessage.includes('✓') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                        {saveMessage}
                    </div>
                )}
            </div>
        </div>
    );
}
