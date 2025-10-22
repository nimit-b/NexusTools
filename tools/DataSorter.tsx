
import React, { useState } from 'react';
// FIX: Corrected import paths
import Button from '../components/common/Button';
import TextArea from '../components/common/TextArea';

const DataSorter: React.FC<{ showToast: (message: string) => void }> = () => {
    const [text, setText] = useState('');

    const getLines = () => text.split('\n').filter(line => line.trim() !== '');

    const handleSort = (direction: 'asc' | 'desc', type: 'alpha' | 'num') => {
        const lines = getLines();
        
        // Create a shallow copy before sorting to avoid potential side effects
        const sorted = [...lines].sort((a, b) => {
            if (type === 'alpha') {
                return a.localeCompare(b);
            }
            // For numeric sort, handle potential non-numeric lines gracefully
            const numA = parseFloat(a);
            const numB = parseFloat(b);
            if (isNaN(numA)) return 1; // Put non-numbers at the end
            if (isNaN(numB)) return -1;
            return numA - numB;
        });

        if (direction === 'desc') {
            sorted.reverse();
        }

        setText(sorted.join('\n'));
    };

    return (
        <div className="space-y-4">
            <TextArea
                placeholder="Enter items to sort, one per line..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={10}
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button onClick={() => handleSort('asc', 'alpha')}>Sort A-Z</Button>
                <Button onClick={() => handleSort('desc', 'alpha')}>Sort Z-A</Button>
                <Button onClick={() => handleSort('asc', 'num')}>Sort 0-9</Button>
                <Button onClick={() => handleSort('desc', 'num')}>Sort 9-0</Button>
            </div>
        </div>
    );
};

export default DataSorter;