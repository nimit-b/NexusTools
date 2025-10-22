import React, { useState, useMemo } from 'react';
import Select from '../components/common/Select';
import Label from '../components/common/Label';

const TimeZoneConverter: React.FC<{ showToast: (message: string) => void }> = () => {
    const timezones = useMemo(() => {
        try {
            // FIX: Cast Intl to any to access supportedValuesOf, which may not be in all TS lib versions.
            if (typeof (Intl as any).supportedValuesOf === 'function') {
                return (Intl as any).supportedValuesOf('timeZone');
            }
        } catch (e) {
            console.error("Intl.supportedValuesOf('timeZone') is not supported.", e);
        }
        // A fallback list of common IANA timezones for older environments.
        return [
            'UTC', 'GMT', 'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
            'America/Sao_Paulo', 'Europe/London', 'Europe/Paris', 'Europe/Berlin', 'Africa/Cairo',
            'Asia/Tokyo', 'Asia/Shanghai', 'Asia/Dubai', 'Asia/Kolkata', 'Australia/Sydney', 'Pacific/Honolulu',
        ].sort();
    }, []);

    const [fromTz, setFromTz] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const [toTz, setToTz] = useState('Europe/London');
    const [time, setTime] = useState(new Date());

    const formatter = (tz: string) => new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });
    
    return (
        <div className="space-y-4 max-w-xl mx-auto">
             <button onClick={() => setTime(new Date())} className="text-sm text-blue-500 dark:text-blue-400 hover:underline">Set to Current Time</button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <Label>From</Label>
                    <Select value={fromTz} onChange={e => setFromTz(e.target.value)}>
                        {timezones.map(tz => <option key={tz} value={tz}>{tz}</option>)}
                    </Select>
                    <p className="mt-2 p-2 bg-gray-200 dark:bg-gray-900 rounded text-light-text dark:text-white">{formatter(fromTz).format(time)}</p>
                </div>
                <div>
                    <Label>To</Label>
                     <Select value={toTz} onChange={e => setToTz(e.target.value)}>
                        {timezones.map(tz => <option key={tz} value={tz}>{tz}</option>)}
                    </Select>
                     <p className="mt-2 p-2 bg-gray-200 dark:bg-gray-900 rounded text-light-text dark:text-white">{formatter(toTz).format(time)}</p>
                </div>
            </div>
        </div>
    );
};

export default TimeZoneConverter;
