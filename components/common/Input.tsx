import React from 'react';

type InputProps = React.ComponentPropsWithRef<'input'>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
    return (
        <input
            ref={ref}
            className={`w-full p-2 bg-light-secondary dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-light-text dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
            {...props}
        />
    );
});

Input.displayName = 'Input';
export default Input;