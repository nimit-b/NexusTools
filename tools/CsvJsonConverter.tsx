
import React, { useState } from 'react';
import TextArea from '../components/common/TextArea';
import Button from '../components/common/Button';

const CsvJsonConverter: React.FC<{ showToast: (message: string) => void }> = ({ showToast }) => {
    const [csv, setCsv] = useState('header1,header2\nvalue1,value2');
    const [json, setJson] = useState('');
    const [error, setError] = useState('');

    const csvToJson = () => {
        setError('');
        if (!csv.trim()) return;
        try {
            const lines = csv.split('\n');
            const headers = lines[0].split(',');
            const result = [];
            for (let i = 1; i < lines.length; i++) {
                if (!lines[i].trim()) continue;
                const obj: { [key: string]: string } = {};
                const currentline = lines[i].split(',');
                for (let j = 0; j < headers.length; j++) {
                    obj[headers[j].trim()] = currentline[j]?.trim() || '';
                }
                result.push(obj);
            }
            setJson(JSON.stringify(result, null, 2));
        } catch (e) {
            setError('Invalid CSV format.');
            showToast('Invalid CSV format.');
        }
    };

    const jsonToCsv = () => {
        setError('');
        if (!json.trim()) return;
        try {
            const data = JSON.parse(json);
            if (!Array.isArray(data) || data.length === 0) {
                setError('JSON must be a non-empty array of objects.');
                return;
            }
            const headers = Object.keys(data[0]);
            let result = headers.join(',') + '\n';
            data.forEach(obj => {
                result += headers.map(header => obj[header]).join(',') + '\n';
            });
            setCsv(result.trim());
        } catch (e) {
            setError('Invalid JSON format.');
            showToast('Invalid JSON format.');
        }
    };

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <TextArea placeholder="CSV" value={csv} onChange={e => setCsv(e.target.value)} rows={12} />
                <TextArea placeholder="JSON" value={json} onChange={e => setJson(e.target.value)} rows={12} />
            </div>
            {error && <p className="text-red-500 dark:text-red-400 text-center">{error}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button onClick={csvToJson}>Convert CSV to JSON</Button>
                <Button onClick={jsonToCsv}>Convert JSON to CSV</Button>
            </div>
        </div>
    );
};

export default CsvJsonConverter;
