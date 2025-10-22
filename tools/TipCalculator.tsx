import React, { useState } from 'react';
import Input from '../components/common/Input';
import Label from '../components/common/Label';

const TipCalculator: React.FC<{ showToast: (message: string) => void }> = () => {
    const [bill, setBill] = useState('50');
    const [tipPercent, setTipPercent] = useState('15');
    const [people, setPeople] = useState('1');

    const billAmount = parseFloat(bill) || 0;
    const tipPercentage = parseFloat(tipPercent) || 0;
    const numPeople = parseInt(people, 10) || 1;

    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;
    const tipPerPerson = tipAmount / numPeople;
    const totalPerPerson = totalAmount / numPeople;

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div>
                    <Label htmlFor="bill">Bill Amount ($)</Label>
                    <Input id="bill" type="number" value={bill} onChange={e => setBill(e.target.value)} />
                </div>
                <div>
                    <Label htmlFor="tip">Tip Percentage (%)</Label>
                    <Input id="tip" type="number" value={tipPercent} onChange={e => setTipPercent(e.target.value)} />
                    <div className="flex gap-2 mt-2">
                        {[10, 15, 18, 20, 25].map(p => (
                            <button key={p} onClick={() => setTipPercent(String(p))} className={`flex-1 p-2 rounded text-white ${tipPercent === String(p) ? 'bg-blue-600' : 'bg-gray-500 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-500'}`}>{p}%</button>
                        ))}
                    </div>
                </div>
                 <div>
                    <Label htmlFor="people">Number of People</Label>
                    <Input id="people" type="number" min="1" step="1" value={people} onChange={e => setPeople(e.target.value)} />
                </div>
            </div>
            <div className="bg-gray-200 dark:bg-gray-900 p-6 rounded-lg space-y-4 flex flex-col justify-center">
                <div className="flex justify-between">
                    <span className="text-light-muted dark:text-gray-400">Tip Amount</span>
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{formatCurrency(tipAmount)}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-light-muted dark:text-gray-400">Total Amount</span>
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{formatCurrency(totalAmount)}</span>
                </div>
                <hr className="border-gray-300 dark:border-gray-700"/>
                <div className="flex justify-between">
                    <span className="text-light-muted dark:text-gray-400">Tip Per Person</span>
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{formatCurrency(tipPerPerson)}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-light-muted dark:text-gray-400">Total Per Person</span>
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{formatCurrency(totalPerPerson)}</span>
                </div>
            </div>
        </div>
    );
};

export default TipCalculator;