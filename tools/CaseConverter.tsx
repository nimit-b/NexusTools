
import React, { useState } from 'react';
// FIX: Corrected import paths
import Button from '../components/common/Button';
import TextArea from '../components/common/TextArea';

const CaseConverter: React.FC<{ showToast: (message: string) => void }> = ({ showToast }) => {
    const [text, setText] = useState('');

    const toTitleCase = (str: string) => str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase());
    const toSentenceCase = (str: string) => str.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => c.toUpperCase());

    const handleCopy = async () => {
        if (!text) return;
        await navigator.clipboard.writeText(text);
        showToast('Copied to clipboard!');
    };

    return (
        <div className="space-y-4">
            <div className="relative">
                <TextArea
                    placeholder="Enter your text here..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows={8}
                    aria-label="Text to convert"
                />
                {text && (
                    <button
                        onClick={handleCopy}
                        className="absolute top-2 right-2 p-2 bg-gray-600 rounded-md hover:bg-gray-500"
                        aria-label="Copy converted text to clipboard"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                    </button>
                )}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button onClick={() => setText(text.toUpperCase())}>UPPERCASE</Button>
                <Button onClick={() => setText(text.toLowerCase())}>lowercase</Button>
                <Button onClick={() => setText(toTitleCase(text))}>Title Case</Button>
                <Button onClick={() => setText(toSentenceCase(text))}>Sentence case</Button>
            </div>
        </div>
    );
};

export default CaseConverter;