
import React, { useState, useEffect } from 'react';
import Input from '../components/common/Input';
import Label from '../components/common/Label';

const AspectRatioCalculator: React.FC<{ showToast: (message: string) => void }> = () => {
    const [ratioW, setRatioW] = useState<string>('16');
    const [ratioH, setRatioH] = useState<string>('9');
    const [width, setWidth] = useState<string>('1920');
    const [height, setHeight] = useState<string>('1080');
    const [lastChanged, setLastChanged] = useState<'width' | 'height'>('width');

    useEffect(() => {
        const rW = parseFloat(ratioW);
        const rH = parseFloat(ratioH);
        
        if (rW > 0 && rH > 0) {
            if (lastChanged === 'width') {
                const w = parseFloat(width);
                if (w > 0) {
                    setHeight(String(Math.round((w * rH) / rW)));
                } else {
                    setHeight('');
                }
            } else {
                const h = parseFloat(height);
                if (h > 0) {
                    setWidth(String(Math.round((h * rW) / rH)));
                } else {
                    setWidth('');
                }
            }
        }
    }, [ratioW, ratioH, width, height, lastChanged]);
    
    return (
        <div className="space-y-4 max-w-lg mx-auto">
            <div>
                <Label>Aspect Ratio</Label>
                <div className="flex items-center gap-2">
                    <Input type="number" value={ratioW} onChange={e => { setRatioW(e.target.value); setLastChanged('width'); }} />
                    <span>:</span>
                    <Input type="number" value={ratioH} onChange={e => { setRatioH(e.target.value); setLastChanged('width'); }} />
                </div>
            </div>
             <div>
                <Label>Dimensions</Label>
                 <div className="flex items-center gap-2">
                    <Input type="number" placeholder="Width" value={width} onChange={e => { setWidth(e.target.value); setLastChanged('width'); }} />
                    <span>x</span>
                    <Input type="number" placeholder="Height" value={height} onChange={e => { setHeight(e.target.value); setLastChanged('height'); }} />
                </div>
            </div>
        </div>
    );
};

export default AspectRatioCalculator;