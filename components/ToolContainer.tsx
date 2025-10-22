
import React, { useState } from 'react';
import ToolCard from './ToolCard';
import { TOOLS } from '../constants';
import type { Tool } from '../types';
import Input from './common/Input';

interface ToolContainerProps {
    tool?: Tool;
    onGoHome?: () => void;
    children?: React.ReactNode;
    onSelectTool?: (tool: Tool) => void;
}

const ToolGrid: React.FC<{ onSelectTool: (tool: Tool) => void }> = ({ onSelectTool }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const categories = [...new Set(TOOLS.map(t => t.category))].sort();

    const filteredTools = TOOLS.filter(tool =>
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8">
            <div className="text-center">
                 <Input
                    type="search"
                    placeholder="Search for a tool..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full max-w-lg mx-auto"
                    aria-label="Search for a tool"
                />
            </div>
            {categories.map(category => {
                const toolsInCategory = filteredTools.filter(t => t.category === category && t.id !== 'about');
                if (toolsInCategory.length === 0) return null;
                return (
                    <div key={category}>
                        <h2 className="text-2xl font-bold mb-4 text-light-text dark:text-white border-b-2 border-blue-500 pb-2">{category}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {toolsInCategory.map(tool => (
                                <ToolCard key={tool.id} tool={tool} onSelect={onSelectTool} />
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const ToolContainer: React.FC<ToolContainerProps> = ({ tool, onGoHome, children, onSelectTool }) => {
    if (tool && onGoHome && children) {
        const { Icon, name, description } = tool;
        return (
            <div className="bg-light-secondary dark:bg-gray-800 p-6 rounded-lg shadow-xl">
                <button onClick={onGoHome} className="mb-6 flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    Back to All Tools
                </button>
                <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg mr-4">
                        <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-light-text dark:text-white">{name}</h2>
                        <p className="text-light-muted dark:text-gray-400">{description}</p>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-8">
                    {children}
                </div>
            </div>
        );
    }

    if (onSelectTool) {
        return <ToolGrid onSelectTool={onSelectTool} />;
    }
    
    return null;
};

export default ToolContainer;
