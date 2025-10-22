
import React, { useState } from 'react';
import Button from '../components/common/Button';
import TextArea from '../components/common/TextArea';

const JsonFormatter: React.FC<{ showToast: (message: string) => void }> = ({ showToast }) => {
    const [json, setJson] = useState('');
    const [error, setError] = useState('');
    
    const handleFormat = () => {
        try {
            setError('');
            if (!json.trim()) return;
            const parsed = JSON.parse(json);
            setJson(JSON.stringify(parsed, null, 2));
        } catch (e) {
            setError('Invalid JSON');
        }
    };
    
    const handleMinify = () => {
        try {
            setError('');
             if (!json.trim()) return;
            const parsed = JSON.parse(json);
            setJson(JSON.stringify(parsed));
        } catch (e) {
            setError('Invalid JSON');
        }
    };

    const handleCopy = () => {
        if (!json) return;
        navigator.clipboard.writeText(json);
        showToast('JSON copied to clipboard!');
    };

    return (
        <div className="space-y-4">
            <div className="relative">
                <TextArea
                    placeholder="Paste your JSON here..."
                    value={json}
                    onChange={(e) => setJson(e.target.value)}
                    rows={15}
                    className={error ? 'border-red-500' : ''}
                />
                 {json && (
                    <button onClick={handleCopy} className="absolute top-2 right-2 p-2 bg-gray-600 rounded-md hover:bg-gray-500" aria-label="Copy JSON">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                    </button>
                )}
            </div>
            {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            <div className="grid grid-cols-2 gap-4">
                <Button onClick={handleFormat}>Format / Beautify</Button>
                <Button onClick={handleMinify}>Minify</Button>
            </div>
        </div>
    );
};

export default JsonFormatter;