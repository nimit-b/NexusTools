
import React, { useState, useMemo } from 'react';
import Input from '../components/common/Input';
import Select from '../components/common/Select';
import Label from '../components/common/Label';

const unitConfig = {
    length: {
        name: 'Length',
        units: { m: 'Meter', km: 'Kilometer', cm: 'Centimeter', mm: 'Millimeter', mi: 'Mile', yd: 'Yard', ft: 'Foot', in: 'Inch' },
        conversions: { m: 1, km: 1000, cm: 0.01, mm: 0.001, mi: 1609.34, yd: 0.9144, ft: 0.3048, in: 0.0254 }
    },
    mass: {
        name: 'Mass',
        units: { kg: 'Kilogram', g: 'Gram', mg: 'Milligram', t: 'Tonne', lb: 'Pound', oz: 'Ounce' },
        conversions: { kg: 1, g: 0.001, mg: 1e-6, t: 1000, lb: 0.453592, oz: 0.0283495 }
    },
    temperature: {
        name: 'Temperature',
        units: { C: 'Celsius', F: 'Fahrenheit', K: 'Kelvin' },
        // Special handling for temperature
    }
};

type Category = keyof typeof unitConfig;

const UnitConverter: React.FC<{ showToast: (message: string) => void }> = () => {
    const [category, setCategory] = useState<Category>('length');
    const [fromUnit, setFromUnit] = useState('m');
    const [toUnit, setToUnit] = useState('ft');
    const [fromValue, setFromValue] = useState('1');
    
    const currentConfig = unitConfig[category];

    const toValue = useMemo(() => {
        const from = parseFloat(fromValue);
        if (isNaN(from)) return '';

        if (category === 'temperature') {
            if (fromUnit === 'C' && toUnit === 'F') return (from * 9/5 + 32).toFixed(2);
            if (fromUnit === 'F' && toUnit === 'C') return ((from - 32) * 5/9).toFixed(2);
            if (fromUnit === 'C' && toUnit === 'K') return (from + 273.15).toFixed(2);
            if (fromUnit === 'K' && toUnit === 'C') return (from - 273.15).toFixed(2);
            if (fromUnit === 'F' && toUnit === 'K') return ((from - 32) * 5/9 + 273.15).toFixed(2);
            if (fromUnit === 'K' && toUnit === 'F') return ((from - 273.15) * 9/5 + 32).toFixed(2);
            if (fromUnit === toUnit) return from.toString();
            return '';
        } else {
            const baseValue = from * currentConfig.conversions[fromUnit as keyof typeof currentConfig.conversions];
            const result = baseValue / currentConfig.conversions[toUnit as keyof typeof currentConfig.conversions];
            return parseFloat(result.toPrecision(6)).toString();
        }
    }, [fromValue, fromUnit, toUnit, category, currentConfig]);

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newCategory = e.target.value as Category;
        setCategory(newCategory);
        const newUnits = Object.keys(unitConfig[newCategory].units);
        setFromUnit(newUnits[0]);
        setToUnit(newUnits[1] || newUnits[0]);
        setFromValue('1');
    };

    return (
        <div className="space-y-4">
            <div>
                <Label htmlFor="category">Category</Label>
                <Select id="category" value={category} onChange={handleCategoryChange}>
                    {Object.entries(unitConfig).map(([key, { name }]) => (
                        <option key={key} value={key}>{name}</option>
                    ))}
                </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                <div>
                    <Label htmlFor="from-unit">From</Label>
                    <div className="flex gap-2">
                        <Input type="number" value={fromValue} onChange={e => setFromValue(e.target.value)} className="w-2/3" />
                        <Select id="from-unit" value={fromUnit} onChange={e => setFromUnit(e.target.value)} className="w-1/3">
                            {Object.entries(currentConfig.units).map(([key, name]) => (
                                <option key={key} value={key}>{name}</option>
                            ))}
                        </Select>
                    </div>
                </div>
                <div>
                    <Label htmlFor="to-unit">To</Label>
                     <div className="flex gap-2">
                        <Input type="text" value={toValue} readOnly className="w-2/3 bg-gray-200 dark:bg-gray-700" />
                        <Select id="to-unit" value={toUnit} onChange={e => setToUnit(e.target.value)} className="w-1/3">
                           {Object.entries(currentConfig.units).map(([key, name]) => (
                                <option key={key} value={key}>{name}</option>
                            ))}
                        </Select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnitConverter;
