
import React, { useState } from 'react';
import Input from '../components/common/Input';
import Label from '../components/common/Label';

const CssShadowGenerator: React.FC<{ showToast: (message: string) => void }> = ({ showToast }) => {
    const [offsetX, setOffsetX] = useState(10);
    const [offsetY, setOffsetY] = useState(10);
    const [blur, setBlur] = useState(5);
    const [spread, setSpread] = useState(0);
    const [color, setColor] = useState('#000000');
    const [opacity, setOpacity] = useState(0.5);
    const [inset, setInset] = useState(false);

    const hexToRgba = (hex: string, alpha: number) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    const shadowCss = `${inset ? 'inset ' : ''}${offsetX}px ${offsetY}px ${blur}px ${spread}px ${hexToRgba(color, opacity)}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(`box-shadow: ${shadowCss};`);
        showToast('CSS copied to clipboard!');
    };
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div className="flex items-center space-x-4"><Label className="w-24">Offset X</Label><Input type="range" min="-50" max="50" value={offsetX} onChange={e => setOffsetX(parseInt(e.target.value))} /><span className="w-12 text-right">{offsetX}px</span></div>
                <div className="flex items-center space-x-4"><Label className="w-24">Offset Y</Label><Input type="range" min="-50" max="50" value={offsetY} onChange={e => setOffsetY(parseInt(e.target.value))} /><span className="w-12 text-right">{offsetY}px</span></div>
                <div className="flex items-center space-x-4"><Label className="w-24">Blur Radius</Label><Input type="range" min="0" max="100" value={blur} onChange={e => setBlur(parseInt(e.target.value))} /><span className="w-12 text-right">{blur}px</span></div>
                <div className="flex items-center space-x-4"><Label className="w-24">Spread Radius</Label><Input type="range" min="-50" max="50" value={spread} onChange={e => setSpread(parseInt(e.target.value))} /><span className="w-12 text-right">{spread}px</span></div>
                <div className="flex items-center space-x-4"><Label className="w-24">Opacity</Label><Input type="range" min="0" max="1" step="0.01" value={opacity} onChange={e => setOpacity(parseFloat(e.target.value))} /><span className="w-12 text-right">{opacity}</span></div>
                <div className="flex items-center space-x-4"><Label className="w-24">Color</Label><Input type="color" value={color} onChange={e => setColor(e.target.value)} className="h-10 p-1" /></div>
                <label className="flex items-center space-x-2"><input type="checkbox" checked={inset} onChange={e => setInset(e.target.checked)} /><span>Inset</span></label>
            </div>
            <div className="space-y-4">
                <div className="h-48 w-48 mx-auto bg-blue-500 rounded-lg flex items-center justify-center text-white" style={{ boxShadow: shadowCss }}>
                    Preview
                </div>
                <div className="relative p-2 bg-gray-200 dark:bg-gray-900 rounded-lg">
                    <pre className="text-sm overflow-x-auto"><code>box-shadow: {shadowCss};</code></pre>
                    <button onClick={handleCopy} className="absolute top-1 right-1 p-1 text-xs bg-gray-300 dark:bg-gray-600 rounded">Copy</button>
                </div>
            </div>
        </div>
    );
};

export default CssShadowGenerator;
