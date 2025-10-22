import React, { useState } from 'react';
import Input from '../components/common/Input';
import Label from '../components/common/Label';

const ColorPicker: React.FC<{ showToast: (message: string) => void }> = ({ showToast }) => {
    const [color, setColor] = useState('#1e90ff');

    const hexToRgb = (hex: string) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
            ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
            : 'Invalid HEX';
    };

    const handleCopy = (value: string) => {
        navigator.clipboard.writeText(value);
        showToast('Copied to clipboard!');
    };

    const rgbValue = hexToRgb(color);

    return (
        <div className="flex flex-col items-center space-y-4">
            <div className="w-48 h-48 rounded-full border-8 border-gray-300 dark:border-gray-700" style={{ backgroundColor: color }} />
            <Input type="color" value={color} onChange={e => setColor(e.target.value)} className="w-48 h-12 p-1" />
            <div className="w-full max-w-sm space-y-2">
                <div className="relative">
                    <Label htmlFor="hex">HEX</Label>
                    <Input id="hex" type="text" value={color} onChange={e => setColor(e.target.value)} />
                     <button onClick={() => handleCopy(color)} className="absolute bottom-1 right-2 p-1 text-xs bg-gray-300 dark:bg-gray-600 rounded text-light-text dark:text-white">Copy</button>
                </div>
                 <div className="relative">
                    <Label htmlFor="rgb">RGB</Label>
                    <Input id="rgb" type="text" value={rgbValue} readOnly className="bg-gray-200 dark:bg-gray-700" />
                     <button onClick={() => handleCopy(rgbValue)} className="absolute bottom-1 right-2 p-1 text-xs bg-gray-300 dark:bg-gray-600 rounded text-light-text dark:text-white">Copy</button>
                </div>
            </div>
        </div>
    );
};

export default ColorPicker;