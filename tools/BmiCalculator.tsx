import React, { useState } from 'react';
import Input from '../components/common/Input';
import Label from '../components/common/Label';

const BmiCalculator: React.FC<{ showToast: (message: string) => void }> = () => {
    const [height, setHeight] = useState('180'); // cm
    const [weight, setWeight] = useState('75'); // kg

    const h = parseFloat(height) / 100; // in meters
    const w = parseFloat(weight);
    const bmi = w / (h * h);
    
    const getBmiCategory = (bmiValue: number) => {
        if (isNaN(bmiValue)) return { text: '', color: '' };
        if (bmiValue < 18.5) return { text: 'Underweight', color: 'text-yellow-500 dark:text-yellow-400' };
        if (bmiValue < 24.9) return { text: 'Normal weight', color: 'text-green-500 dark:text-green-400' };
        if (bmiValue < 29.9) return { text: 'Overweight', color: 'text-yellow-500 dark:text-yellow-400' };
        return { text: 'Obesity', color: 'text-red-500 dark:text-red-400' };
    };

    const category = getBmiCategory(bmi);
    
    return (
        <div className="space-y-4 max-w-md mx-auto">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input id="height" type="number" value={height} onChange={e => setHeight(e.target.value)} />
                </div>
                 <div>
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input id="weight" type="number" value={weight} onChange={e => setWeight(e.target.value)} />
                </div>
            </div>
             <div className="text-center p-4 bg-gray-200 dark:bg-gray-900 rounded-lg">
                <p className="text-light-muted dark:text-gray-400">Your BMI</p>
                <p className="text-5xl font-bold text-light-text dark:text-white">{isNaN(bmi) ? '...' : bmi.toFixed(1)}</p>
                 <p className={`font-semibold ${category.color}`}>{category.text}</p>
            </div>
        </div>
    );
};

export default BmiCalculator;