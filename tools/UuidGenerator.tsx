import React, { useState } from 'react';
import Button from '../components/common/Button';
import Input from '../components/common/Input';

const UuidGenerator: React.FC<{ showToast: (message: string) => void }> = ({ showToast }) => {
    const [uuid, setUuid] = useState('');

    const generateUuid = () => {
        // A simple UUID v4 generator
        setUuid(
            'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
                const r = (Math.random() * 16) | 0;
                const v = c === 'x' ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            })
        );
    };

    const handleCopy = () => {
        if (!uuid) return;
        navigator.clipboard.writeText(uuid);
        showToast('UUID copied to clipboard!');
    };
    
    return (
        <div className="space-y-4 max-w-lg mx-auto">
             <div className="relative">
                <Input type="text" value={uuid} readOnly placeholder="Click generate to get a new UUID" className="bg-gray-200 dark:bg-gray-700" />
                {uuid && (
                    <button onClick={handleCopy} className="absolute top-1/2 right-2 -translate-y-1/2 p-1 text-xs bg-gray-300 dark:bg-gray-600 rounded text-light-text dark:text-white">Copy</button>
                )}
            </div>
            <Button onClick={generateUuid}>Generate UUID</Button>
        </div>
    );
};

export default UuidGenerator;