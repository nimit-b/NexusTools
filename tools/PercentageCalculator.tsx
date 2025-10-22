
import React, { useState } from 'react';
import Input from '../components/common/Input';
import Label from '../components/common/Label';

const PercentageCalculator: React.FC<{ showToast: (message: string) => void }> = () => {
    const [pOfX, setPOfX] = useState({ p: '10', x: '50' });
    const [xIsWhatPOfY, setXIsWhatPOfY] = useState({ x: '5', y: '20' });

    const result1 = (parseFloat(pOfX.p) / 100) * parseFloat(pOfX.x);
    const result2 = (parseFloat(xIsWhatPOfY.x) / parseFloat(xIsWhatPOfY.y)) * 100;

    return (
        <div className="space-y-8">
            <div className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-light-text dark:text-white">What is P% of X?</h3>
                <div className="flex items-center gap-2">
                    <Input type="number" value={pOfX.p} onChange={e => setPOfX({ ...pOfX, p: e.target.value })} />
                    <span>% of</span>
                    <Input type="number" value={pOfX.x} onChange={e => setPOfX({ ...pOfX, x: e.target.value })} />
                    <span>=</span>
                    <Input type="text" value={isNaN(result1) ? '' : result1} readOnly className="font-bold bg-gray-200 dark:bg-gray-700" />
                </div>
            </div>
            <div className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-light-text dark:text-white">X is what percent of Y?</h3>
                <div className="flex items-center gap-2">
                    <Input type="number" value={xIsWhatPOfY.x} onChange={e => setXIsWhatPOfY({ ...xIsWhatPOfY, x: e.target.value })} />
                    <span>is what % of</span>
                    <Input type="number" value={xIsWhatPOfY.y} onChange={e => setXIsWhatPOfY({ ...xIsWhatPOfY, y: e.target.value })} />
                    <span>?</span>
                    <div className="relative w-full">
                         <Input type="text" value={isNaN(result2) ? '' : result2.toFixed(2)} readOnly className="font-bold bg-gray-200 dark:bg-gray-700 pr-6" />
                         <span className="absolute right-2 top-1/2 -translate-y-1/2 text-light-muted dark:text-gray-400">%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PercentageCalculator;
