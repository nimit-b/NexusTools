import React, { useState } from 'react';
import TextArea from '../components/common/TextArea';
import { marked } from 'marked';

const MarkdownPreviewer: React.FC<{ showToast: (message: string) => void }> = () => {
    const [markdown, setMarkdown] = useState('# Hello, Markdown!\n\nThis is a real-time preview.\n\n- List item 1\n- List item 2\n\n```javascript\nconsole.log("Hello, World!");\n```');

    const getHtml = () => {
      // Use 'any' type to handle potential async behavior of marked
      const html: any = marked.parse(markdown);
      return { __html: html };
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[60vh]">
            <TextArea
                value={markdown}
                onChange={e => setMarkdown(e.target.value)}
                className="h-full"
            />
            <div className="p-4 bg-gray-100 dark:bg-gray-900 rounded-lg overflow-y-auto h-full">
                <div 
                    className="prose dark:prose-invert max-w-none" 
                    dangerouslySetInnerHTML={getHtml()} 
                />
            </div>
        </div>
    );
};

export default MarkdownPreviewer;