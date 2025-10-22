import React, { useMemo, useState } from 'react';
import TextArea from '../components/common/TextArea';
import { diffLines, type Change } from 'diff';

const DiffChecker: React.FC<{ showToast: (message: string) => void }> = () => {
    const [text1, setText1] = useState('Hello World\nThis is the original text.\nIt has three lines.');
    const [text2, setText2] = useState('Hello World!\nThis is the modified text.\nIt has three lines too.');

    // Use the 'diff' library for a robust comparison
    const differences: Change[] = useMemo(() => {
        return diffLines(text1, text2);
    }, [text1, text2]);

    const renderDiff = (diffs: Change[]) => {
        // FIX: Use React.ReactElement instead of JSX.Element to avoid namespace error.
        const lines: React.ReactElement[] = [];
        diffs.forEach((part, partIndex) => {
            // The library adds a trailing newline, resulting in an empty string at the end. We filter it out.
            const partLines = part.value.endsWith('\n') ? part.value.slice(0, -1).split('\n') : part.value.split('\n');

            partLines.forEach((line, lineIndex) => {
                const bgClass = part.added 
                    ? 'bg-green-100 dark:bg-green-500/20'
                    : part.removed 
                    ? 'bg-red-100 dark:bg-red-500/20' 
                    : 'bg-transparent';
                const prefix = part.added ? '+' : part.removed ? '-' : ' ';
                const prefixClass = part.added 
                    ? 'text-green-600 dark:text-green-400'
                    : part.removed
                    ? 'text-red-600 dark:text-red-400'
                    : 'text-light-muted dark:text-gray-500';

                lines.push(
                    <div key={`${partIndex}-${lineIndex}`} className={`flex w-full ${bgClass}`}>
                      <span className={`w-8 text-center select-none flex-shrink-0 ${prefixClass}`}>{prefix}</span>
                      <pre className="flex-1 whitespace-pre-wrap break-all">{line || ' '}</pre> {/* Render a space for empty lines to preserve height */}
                    </div>
                );
            });
        });
        return lines;
    };


    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="flex flex-col h-[30vh] lg:h-auto">
                    <h3 className="text-lg font-semibold mb-2">Original Text</h3>
                    <TextArea
                        placeholder="Paste original text here"
                        value={text1}
                        onChange={e => setText1(e.target.value)}
                        className="h-full resize-none font-mono"
                    />
                </div>
                <div className="flex flex-col h-[30vh] lg:h-auto">
                    <h3 className="text-lg font-semibold mb-2">Modified Text</h3>
                    <TextArea
                        placeholder="Paste modified text here"
                        value={text2}
                        onChange={e => setText2(e.target.value)}
                        className="h-full resize-none font-mono"
                    />
                </div>
            </div>
            <div>
                 <h3 className="text-lg font-semibold mb-2">Differences</h3>
                <div className="bg-light-secondary dark:bg-gray-900 rounded-lg overflow-y-auto h-[40vh] font-mono border border-gray-200 dark:border-gray-700">
                    {renderDiff(differences)}
                </div>
            </div>
        </div>
    );
};

export default DiffChecker;