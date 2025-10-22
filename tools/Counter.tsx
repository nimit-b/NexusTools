
import React, { useState } from 'react';
import TextArea from '../components/common/TextArea';

const Counter: React.FC<{ showToast: (message: string) => void }> = () => {
    const [text, setText] = useState('');

    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
    const charCount = text.length;
    const lineCount = text.length ? text.split('\n').length : 0;
    
    return (
        <div className="space-y-4">
            <TextArea
                placeholder="Paste your text here..."
                value={text}
                onChange={e => setText(e.target.value)}
                rows={12}
            />
            <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-gray-200 dark:bg-gray-900 rounded-lg">
                    <p className="text-sm text-light-muted dark:text-gray-400">Words</p>
                    <p className="text-2xl font-bold text-light-text dark:text-white">{wordCount}</p>
                </div>
                <div className="p-4 bg-gray-200 dark:bg-gray-900 rounded-lg">
                    <p className="text-sm text-light-muted dark:text-gray-400">Characters</p>
                    <p className="text-2xl font-bold text-light-text dark:text-white">{charCount}</p>
                </div>
                <div className="p-4 bg-gray-200 dark:bg-gray-900 rounded-lg">
                    <p className="text-sm text-light-muted dark:text-gray-400">Lines</p>
                    <p className="text-2xl font-bold text-light-text dark:text-white">{lineCount}</p>
                </div>
            </div>
        </div>
    );
};

export default Counter;
