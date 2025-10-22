import React, { useState } from 'react';
import TextArea from '../components/common/TextArea';

const ReadingTimeCalculator: React.FC<{ showToast: (message: string) => void }> = () => {
    const [text, setText] = useState('');
    const wpm = 200; // Average words per minute
    
    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
    const readingTime = Math.ceil(wordCount / wpm);

    return (
        <div className="space-y-4">
            <TextArea
                placeholder="Paste your text here to estimate reading time..."
                value={text}
                onChange={e => setText(e.target.value)}
                rows={12}
            />
            <div className="p-4 bg-gray-200 dark:bg-gray-900 rounded-lg text-center">
                <p className="text-light-muted dark:text-gray-400">Estimated Reading Time</p>
                <p className="text-3xl font-bold text-light-text dark:text-white">{readingTime} minute{readingTime !== 1 ? 's' : ''}</p>
                <p className="text-sm text-gray-500">({wordCount} words at {wpm} WPM)</p>
            </div>
        </div>
    );
};

export default ReadingTimeCalculator;