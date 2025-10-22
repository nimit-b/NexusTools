import React from 'react';

type TextAreaProps = React.ComponentPropsWithRef<'textarea'>;

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(({ className, ...props }, ref) => {
    return (
        <textarea
            ref={ref}
            className={`w-full p-2 bg-light-secondary dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-light-text dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y ${className}`}
            {...props}
        />
    );
});

TextArea.displayName = 'TextArea';
export default TextArea;