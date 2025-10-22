import React, { useState } from 'react';
import Input from '../components/common/Input';
import Label from '../components/common/Label';

const PasswordStrength: React.FC<{ showToast: (message: string) => void }> = () => {
    const [password, setPassword] = useState('');

    const checkStrength = () => {
        let score = 0;
        if (password.length > 8) score++;
        if (password.length > 12) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[a-z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;

        const width = (score / 6) * 100;
        let color = 'bg-red-500';
        if (score > 2) color = 'bg-yellow-500';
        if (score > 4) color = 'bg-green-500';
        
        return { width, color };
    };

    const { width, color } = checkStrength();

    return (
        <div className="space-y-4 max-w-md mx-auto">
            <div>
                <Label htmlFor="password">Enter Password</Label>
                <Input
                    id="password"
                    type="text"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Type a password to check its strength"
                />
            </div>
            {password && (
                <div>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5">
                        <div className={`h-2.5 rounded-full ${color}`} style={{ width: `${width}%` }}></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PasswordStrength;