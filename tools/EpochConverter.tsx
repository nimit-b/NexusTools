import React, { useState } from 'react';
import Input from '../components/common/Input';
import Label from '../components/common/Label';
import Button from '../components/common/Button';

const EpochConverter: React.FC<{ showToast: (message: string) => void }> = ({ showToast }) => {
    const [epoch, setEpoch] = useState(Math.floor(Date.now() / 1000).toString());
    const [humanDate, setHumanDate] = useState(new Date().toUTCString());

    const handleEpochChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setEpoch(val);
        const num = parseInt(val, 10);
        if (!isNaN(num)) {
            setHumanDate(new Date(num * 1000).toUTCString());
        } else {
            setHumanDate('Invalid epoch time');
        }
    };
    
    const setToNow = () => {
        const now = new Date();
        setEpoch(Math.floor(now.getTime() / 1000).toString());
        setHumanDate(now.toUTCString());
    };

    const handleCopy = (value: string) => {
        navigator.clipboard.writeText(value);
        showToast('Copied to clipboard!');
    };

    return (
        <div className="space-y-4">
            <Button onClick={setToNow}>Set to Current Time</Button>
            <div>
                <Label htmlFor="epoch">Epoch Timestamp (seconds)</Label>
                <div className="relative">
                    <Input id="epoch" type="number" value={epoch} onChange={handleEpochChange} />
                    <button onClick={() => handleCopy(epoch)} className="absolute top-1/2 right-2 -translate-y-1/2 p-1 text-xs bg-gray-300 dark:bg-gray-600 rounded hover:bg-gray-400 dark:hover:bg-gray-500 text-light-text dark:text-white" aria-label="Copy epoch time">Copy</button>
                </div>
            </div>
            <div>
                <Label>Human Readable Date (UTC)</Label>
                <div className="relative">
                    <Input type="text" value={humanDate} readOnly className="bg-gray-200 dark:bg-gray-700" />
                    <button onClick={() => handleCopy(humanDate)} className="absolute top-1/2 right-2 -translate-y-1/2 p-1 text-xs bg-gray-300 dark:bg-gray-600 rounded hover:bg-gray-400 dark:hover:bg-gray-500 text-light-text dark:text-white" aria-label="Copy date">Copy</button>
                </div>
            </div>
        </div>
    );
};

export default EpochConverter;