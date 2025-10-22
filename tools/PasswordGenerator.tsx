import React, { useState, useEffect, useCallback } from 'react';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Label from '../components/common/Label';

const PasswordGenerator: React.FC<{ showToast: (message: string) => void }> = ({ showToast }) => {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(16);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);

    const generatePassword = useCallback(() => {
        const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lower = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
        
        let charset = '';
        if (includeUppercase) charset += upper;
        if (includeLowercase) charset += lower;
        if (includeNumbers) charset += numbers;
        if (includeSymbols) charset += symbols;

        if (!charset) {
            setPassword('');
            showToast('Please select at least one character type.');
            return;
        }

        let newPassword = '';
        for (let i = 0; i < length; i++) {
            newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        setPassword(newPassword);
    }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols, showToast]);
    
    useEffect(() => {
        generatePassword();
    }, [generatePassword]);

    const handleCopy = () => {
        if (!password) return;
        navigator.clipboard.writeText(password);
        showToast('Password copied to clipboard!');
    };

    return (
        <div className="space-y-6">
            <div className="relative">
                <Input type="text" value={password} readOnly className="text-xl pr-12 text-center bg-gray-200 dark:bg-gray-700" />
                 <button onClick={handleCopy} className="absolute top-1/2 right-2 -translate-y-1/2 p-2 bg-gray-300 dark:bg-gray-600 rounded-md hover:bg-gray-400 dark:hover:bg-gray-500" aria-label="Copy password">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                </button>
            </div>
            
            <div className="space-y-4">
                 <div>
                    <Label htmlFor="length">Password Length: {length}</Label>
                    <Input id="length" type="range" min="4" max="64" value={length} onChange={e => setLength(parseInt(e.target.value, 10))} />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <label className="flex items-center space-x-2 cursor-pointer"><input type="checkbox" checked={includeUppercase} onChange={e => setIncludeUppercase(e.target.checked)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" /><span>Uppercase</span></label>
                    <label className="flex items-center space-x-2 cursor-pointer"><input type="checkbox" checked={includeLowercase} onChange={e => setIncludeLowercase(e.target.checked)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" /><span>Lowercase</span></label>
                    <label className="flex items-center space-x-2 cursor-pointer"><input type="checkbox" checked={includeNumbers} onChange={e => setIncludeNumbers(e.target.checked)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" /><span>Numbers</span></label>
                    <label className="flex items-center space-x-2 cursor-pointer"><input type="checkbox" checked={includeSymbols} onChange={e => setIncludeSymbols(e.target.checked)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" /><span>Symbols</span></label>
                </div>
            </div>

            <Button onClick={generatePassword}>Generate New Password</Button>
        </div>
    );
};

export default PasswordGenerator;