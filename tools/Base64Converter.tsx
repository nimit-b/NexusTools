import React, { useState } from 'react';
import Button from '../components/common/Button';
import TextArea from '../components/common/TextArea';

const Base64Converter: React.FC<{ showToast: (message: string) => void }> = ({ showToast }) => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [error, setError] = useState('');

    const handleEncode = () => {
        setError('');
        try {
            // Using unescape and encodeURIComponent to handle UTF-8 characters correctly
            setOutput(btoa(unescape(encodeURIComponent(input))));
        } catch (e) {
            setError('Could not encode text. Check for invalid characters.');
            setOutput('');
        }
    };
    
    const handleDecode = () => {
        setError('');
        try {
            // Using decodeURIComponent and escape to handle UTF-8 characters correctly
            setOutput(decodeURIComponent(escape(atob(input))));
        } catch (e) {
            setError('Invalid Base64 string. Could not decode.');
            setOutput('');
        }
    };

    const handleCopy = () => {
        if (!output) return;
        navigator.clipboard.writeText(output);
        showToast('Copied to clipboard!');
    };

    return (
        <div className="space-y-4">
            <TextArea
                placeholder="Enter text to encode or Base64 to decode..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={6}
            />
            <div className="grid grid-cols-2 gap-4">
                <Button onClick={handleEncode}>Encode</Button>
                <Button onClick={handleDecode}>Decode</Button>
            </div>
             <div className="relative">
                 {error && <p className="text-red-500 dark:text-red-400 text-sm text-center mb-2">{error}</p>}
                <TextArea
                    placeholder="Output..."
                    value={output}
                    readOnly
                    rows={6}
                    className="bg-gray-200 dark:bg-gray-700"
                />
                {output && (
                    <button onClick={handleCopy} className="absolute top-2 right-2 p-2 bg-gray-300 dark:bg-gray-600 rounded-md hover:bg-gray-400 dark:hover:bg-gray-500" aria-label="Copy output">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Base64Converter;