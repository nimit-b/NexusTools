import React from 'react';

type SelectProps = React.ComponentPropsWithRef<'select'>;

const Select: React.FC<SelectProps> = ({ children, className, ...props }) => {
    return (
        <select
            className={`w-full p-2 bg-light-secondary dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-light-text dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
            {...props}
        >
            {children}
        </select>
    );
};

export default Select;