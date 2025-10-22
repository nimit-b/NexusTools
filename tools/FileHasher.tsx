
import React, { useState } from 'react';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

const FileHasher: React.FC<{ showToast: (message: string) => void }> = ({ showToast }) => {
    const [hash, setHash] = useState('');
    const [isHashing, setIsHashing] = useState(false);
    const [fileName, setFileName] = useState('');

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsHashing(true);
        setFileName(file.name);
        setHash('');

        try {
            const buffer = await file.arrayBuffer();
            const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
            setHash(hashHex);
        } catch (error) {
            console.error('Hashing error:', error);
            showToast('Could not hash the file.');
            setFileName('');
        } finally {
            setIsHashing(false);
        }
    };

    const handleCopy = () => {
        if (!hash) return;
        navigator.clipboard.writeText(hash);
        showToast('Hash copied to clipboard!');
    };

    return (
        <div className="space-y-4 max-w-xl mx-auto">
            <Input type="file" onChange={handleFileChange} disabled={isHashing} />
            {isHashing && <p className="text-center">Hashing {fileName}...</p>}
            {hash && (
                 <div className="relative">
                    <Input type="text" value={hash} readOnly className="bg-gray-200 dark:bg-gray-700 font-mono text-sm" />
                    <button onClick={handleCopy} className="absolute top-1/2 right-2 -translate-y-1/2 p-1 text-xs bg-gray-300 dark:bg-gray-600 rounded text-light-text dark:text-white">Copy</button>
                </div>
            )}
        </div>
    );
};

export default FileHasher;
