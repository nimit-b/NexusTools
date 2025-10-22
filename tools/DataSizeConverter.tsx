
import React, { useState, useMemo } from 'react';
import Input from '../components/common/Input';
import Select from '../components/common/Select';
import Label from '../components/common/Label';

const units = {
    B: { name: 'Byte', value: 1 },
    KB: { name: 'Kilobyte', value: 1024 },
    MB: { name: 'Megabyte', value: 1024 ** 2 },
    GB: { name: 'Gigabyte', value: 1024 ** 3 },
    TB: { name: 'Terabyte', value: 1024 ** 4 },
};

type Unit = keyof typeof units;

const DataSizeConverter: React.FC<{ showToast: (message: string) => void }> = () => {
    const [fromUnit, setFromUnit] = useState<Unit>('MB');
    const [toUnit, setToUnit] = useState<Unit>('KB');
    const [fromValue, setFromValue] = useState('1');
    
    const toValue = useMemo(() => {
        const from = parseFloat(fromValue);
        if (isNaN(from)) return '';
        
        const bytes = from * units[fromUnit].value;
        const result = bytes / units[toUnit].value;
        
        return parseFloat(result.toPrecision(6)).toString();

    }, [fromValue, fromUnit, toUnit]);

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                <div>
                    <Label htmlFor="from-unit">From</Label>
                    <div className="flex gap-2">
                        <Input type="number" value={fromValue} onChange={e => setFromValue(e.target.value)} className="w-2/3" />
                        <Select id="from-unit" value={fromUnit} onChange={e => setFromUnit(e.target.value as Unit)} className="w-1/3">
                            {Object.entries(units).map(([key, { name }]) => (
                                <option key={key} value={key}>{name}</option>
                            ))}
                        </Select>
                    </div>
                </div>
                <div>
                    <Label htmlFor="to-unit">To</Label>
                     <div className="flex gap-2">
                        <Input type="text" value={toValue} readOnly className="w-2/3 bg-gray-200 dark:bg-gray-700" />
                        <Select id="to-unit" value={toUnit} onChange={e => setToUnit(e.target.value as Unit)} className="w-1/3">
                           {Object.entries(units).map(([key, { name }]) => (
                                <option key={key} value={key}>{name}</option>
                            ))}
                        </Select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataSizeConverter;
