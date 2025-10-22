
import React, { useState } from 'react';
import Input from '../components/common/Input';
import Label from '../components/common/Label';

const LoanCalculator: React.FC<{ showToast: (message: string) => void }> = () => {
    const [amount, setAmount] = useState('10000');
    const [rate, setRate] = useState('5');
    const [term, setTerm] = useState('5'); // in years

    const principal = parseFloat(amount);
    const annualInterestRate = parseFloat(rate);
    const years = parseFloat(term);

    const monthlyInterestRate = annualInterestRate / 100 / 12;
    const numberOfPayments = years * 12;

    const monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - principal;
    
    const isValid = principal > 0 && annualInterestRate >= 0 && years > 0;

    const formatCurrency = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div>
                    <Label htmlFor="amount">Loan Amount ($)</Label>
                    <Input id="amount" type="number" value={amount} onChange={e => setAmount(e.target.value)} />
                </div>
                <div>
                    <Label htmlFor="rate">Annual Interest Rate (%)</Label>
                    <Input id="rate" type="number" value={rate} onChange={e => setRate(e.target.value)} />
                </div>
                <div>
                    <Label htmlFor="term">Loan Term (Years)</Label>
                    <Input id="term" type="number" value={term} onChange={e => setTerm(e.target.value)} />
                </div>
            </div>
            <div className="bg-gray-200 dark:bg-gray-900 p-6 rounded-lg space-y-4 flex flex-col justify-center">
                {isValid ? (
                    <>
                        <div className="flex justify-between items-center">
                            <span className="text-light-muted dark:text-gray-400">Monthly Payment</span>
                            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{formatCurrency(monthlyPayment)}</span>
                        </div>
                        <hr className="border-gray-300 dark:border-gray-700"/>
                        <div className="flex justify-between">
                            <span className="text-light-muted dark:text-gray-400">Total Payment</span>
                            <span>{formatCurrency(totalPayment)}</span>
                        </div>
                         <div className="flex justify-between">
                            <span className="text-light-muted dark:text-gray-400">Total Interest</span>
                            <span>{formatCurrency(totalInterest)}</span>
                        </div>
                    </>
                ) : (
                    <p className="text-center text-light-muted dark:text-gray-400">Please enter valid loan details.</p>
                )}
            </div>
        </div>
    );
};

export default LoanCalculator;
