
import React, { useState } from 'react';
import Input from '../components/common/Input';
import Label from '../components/common/Label';

const toRoman = (num: number): string => {
    if (isNaN(num) || num < 1 || num > 3999) return 'Invalid Number';
    const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const rom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let result = '';
    for (let i = 0; num > 0 && i < val.length; i++) {
        while (num >= val[i]) {
            result += rom[i];
            num -= val[i];
        }
    }
    return result;
};

const fromRoman = (str: string): number | string => {
    str = str.toUpperCase().trim();
    if (!/^[MDCLXVI]+$/.test(str)) return 'Invalid Roman Numeral';

    const romanMap: { [key: string]: number } = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        const current = romanMap[str[i]];
        const next = romanMap[str[i + 1]];
        if (next > current) {
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }
    // Final check if the conversion back to Roman is the same, to catch invalid sequences like "IIX"
    if (toRoman(result) !== str) return 'Invalid Roman Numeral';
    return result;
};


const RomanNumeralConverter: React.FC<{ showToast: (message: string) => void }> = () => {
    const [number, setNumber] = useState<string>('2023');
    const [roman, setRoman] = useState<string>('MMXXIII');
    
    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setNumber(val);
        setRoman(toRoman(parseInt(val, 10)));
    };
    
    const handleRomanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value.toUpperCase();
        setRoman(val);
        setNumber(String(fromRoman(val)));
    };

    return (
        <div className="space-y-4 max-w-lg mx-auto">
            <div>
                <Label htmlFor="number">Number</Label>
                <Input id="number" type="number" value={number} onChange={handleNumberChange} />
            </div>
             <div>
                <Label htmlFor="roman">Roman Numeral</Label>
                <Input id="roman" type="text" value={roman} onChange={handleRomanChange} />
            </div>
        </div>
    );
};

export default RomanNumeralConverter;