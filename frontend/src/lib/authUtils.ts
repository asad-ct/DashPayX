export const handleAuthError = (status: number) => {
    if (status === 401) {
        localStorage.removeItem('admin_token');
        localStorage.removeItem('admin_user');
        window.location.href = '/admin/login';
        return true;
    }
    return false;
};

export const getAuthHeaders = () => {
    const token = localStorage.getItem('admin_token');
    return {
        'Authorization': `Bearer ${token}`,
    };
};
