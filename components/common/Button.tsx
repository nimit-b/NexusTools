import React from 'react';

type ButtonProps = React.ComponentPropsWithRef<'button'>;

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
    return (
        <button
            className={`w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 dark:disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;