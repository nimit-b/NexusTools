import React from 'react';

type LabelProps = React.ComponentPropsWithRef<'label'>;

const Label: React.FC<LabelProps> = ({ children, className, ...props }) => {
    return (
        <label
            className={`block text-sm font-medium text-light-muted dark:text-gray-300 mb-1 ${className}`}
            {...props}
        >
            {children}
        </label>
    );
};

export default Label;
