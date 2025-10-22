
import React from 'react';

interface ToastProps {
    message: string;
    show: boolean;
}

const Toast: React.FC<ToastProps> = ({ message, show }) => {
    if (!show) return null;

    return (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg animate-fade-in-out">
            {message}
        </div>
    );
};

export default Toast;
