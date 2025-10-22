
import React, { useState } from 'react';
// FIX: Corrected import paths
import Button from '../components/common/Button';
import TextArea from '../components/common/TextArea';

const UrlEncoder: React.FC<{ showToast: (message: string) => void }> = ({ showToast }) => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [error, setError] = useState('');
    
    const handleEncode = () => {
        setError('');
        try {
            setOutput(encodeURIComponent(input));
        } catch (e) {
            setError('Could not encode text.');
            setOutput('');
        }
    };
    
    const handleDecode = () => {
        setError('');
        try {
            setOutput(decodeURIComponent(input));
        } catch (e) {
            setError('Invalid URI component. Could not decode.');
            setOutput('');
        }
    };

    const handleCopy = async () => {
        if (!output) return;
        await navigator.clipboard.writeText(output);
        showToast('Copied to clipboard!');
    };

    return (
         <div className="space-y-4">
            <TextArea
                placeholder="Enter string to encode/decode..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={6}
                aria-label="Input for URL encoding or decoding"
            />
            <div className="grid grid-cols-2 gap-4">
                <Button onClick={handleEncode}>Encode</Button>
                <Button onClick={handleDecode}>Decode</Button>
            </div>
            <div aria-live="polite">
                {error && <p className="text-red-400 text-sm text-center">{error}</p>}
                <div className="relative">
                    <TextArea
                        placeholder="Output..."
                        value={output}
                        readOnly
                        rows={6}
                        className="bg-gray-700"
                        aria-label="URL encoded or decoded output"
                    />
                    {output && (
                        <button
                            onClick={handleCopy}
                            className="absolute top-2 right-2 p-2 bg-gray-600 rounded-md hover:bg-gray-500"
                            aria-label="Copy output to clipboard"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UrlEncoder;