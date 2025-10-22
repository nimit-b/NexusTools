import React, { useState, useEffect } from 'react';
import Input from '../components/common/Input';
import Label from '../components/common/Label';

// Function to calculate luminance
const getLuminance = (r: number, g: number, b: number) => {
    const a = [r, g, b].map(v => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

// Function to convert hex to RGB
const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : null;
};


const ContrastChecker: React.FC<{ showToast: (message: string) => void }> = () => {
    const [color1, setColor1] = useState('#ffffff');
    const [color2, setColor2] = useState('#000000');
    const [contrast, setContrast] = useState(21);

    useEffect(() => {
        const rgb1 = hexToRgb(color1);
        const rgb2 = hexToRgb(color2);

        if (rgb1 && rgb2) {
            const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
            const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
            const ratio = (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);
            setContrast(Number(ratio.toFixed(2)));
        }
    }, [color1, color2]);

    const getStatus = (level: 'AA' | 'AAA') => {
        const largeTextLevel = level === 'AA' ? 3 : 4.5;
        const normalTextLevel = level === 'AA' ? 4.5 : 7;
        return (
            <div className="flex justify-between items-center p-2 rounded bg-gray-200 dark:bg-gray-900">
                <span className="font-bold text-light-text dark:text-white">{level}</span>
                <div className="text-right">
                    <span className={`px-2 py-1 rounded text-xs ${contrast >= normalTextLevel ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>Normal Text</span>
                    <span className={`ml-2 px-2 py-1 rounded text-xs ${contrast >= largeTextLevel ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>Large Text</span>
                </div>
            </div>
        );
    }
    
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="color1">Text Color</Label>
                    <Input id="color1" type="color" value={color1} onChange={e => setColor1(e.target.value)} className="h-12 p-1" />
                    <Input type="text" value={color1} onChange={e => setColor1(e.target.value)} className="mt-2 text-center" />
                </div>
                <div>
                    <Label htmlFor="color2">Background Color</Label>
                    <Input id="color2" type="color" value={color2} onChange={e => setColor2(e.target.value)} className="h-12 p-1" />
                    <Input type="text" value={color2} onChange={e => setColor2(e.target.value)} className="mt-2 text-center" />
                </div>
            </div>
            <div className="p-8 rounded-lg text-center" style={{ backgroundColor: color2, color: color1 }}>
                <h3 className="text-2xl font-bold">Preview Text</h3>
                <p>This is some sample paragraph text to preview the contrast.</p>
            </div>
            <div className="text-center">
                <div className="text-5xl font-bold text-light-text dark:text-white">{contrast}:1</div>
                <div className={`text-lg font-semibold ${contrast >= 4.5 ? 'text-green-400' : 'text-red-400'}`}>
                    {contrast >= 7 ? 'Excellent (AAA)' : contrast >= 4.5 ? 'Good (AA)' : 'Poor'}
                </div>
            </div>
            <div className="space-y-2">
                {getStatus('AA')}
                {getStatus('AAA')}
            </div>
        </div>
    );
};

export default ContrastChecker;