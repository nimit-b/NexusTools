
import React, { useState, useEffect } from 'react';
import Button from '../components/common/Button';
import TextArea from '../components/common/TextArea';
import Label from '../components/common/Label';
import Input from '../components/common/Input';

const loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const LoremIpsumGenerator: React.FC<{ showToast: (message: string) => void }> = ({ showToast }) => {
    const [paragraphs, setParagraphs] = useState(3);
    const [generatedText, setGeneratedText] = useState('');

    const generateText = React.useCallback(() => {
        let text = '';
        for (let i = 0; i < paragraphs; i++) {
            text += loremIpsumText + '\n\n';
        }
        setGeneratedText(text.trim());
    }, [paragraphs]);
    
    const handleCopy = () => {
        if (!generatedText) return;
        navigator.clipboard.writeText(generatedText);
        showToast('Text copied to clipboard!');
    };

    useEffect(() => {
        generateText();
    }, [generateText]);

    return (
        <div className="space-y-4">
            <div>
                <Label htmlFor="paragraphs">Number of Paragraphs:</Label>
                <Input
                    id="paragraphs"
                    type="number"
                    value={paragraphs}
                    onChange={e => setParagraphs(Math.max(1, parseInt(e.target.value, 10) || 1))}
                    min="1"
                />
            </div>
            <Button onClick={generateText}>Generate</Button>
            <div className="relative">
                <TextArea
                    value={generatedText}
                    readOnly
                    rows={10}
                    className="bg-gray-200 dark:bg-gray-700"
                />
                {generatedText && (
                    <button onClick={handleCopy} className="absolute top-2 right-2 p-2 bg-gray-300 dark:bg-gray-600 rounded-md hover:bg-gray-400 dark:hover:bg-gray-500" aria-label="Copy text">
                        Copy
                    </button>
                )}
            </div>
        </div>
    );
};

export default LoremIpsumGenerator;
