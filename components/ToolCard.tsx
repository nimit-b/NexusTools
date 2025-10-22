
import React from 'react';
import type { Tool } from '../types';

interface ToolCardProps {
    tool: Tool;
    onSelect: (tool: Tool) => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, onSelect }) => {
    const { Icon, name, description } = tool;
    return (
        <div
            className="group flex flex-col items-start p-4 bg-light-secondary dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer h-full"
            onClick={() => onSelect(tool)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect(tool)}
            aria-label={`Select tool: ${name}`}
        >
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg mb-4">
                <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-light-text dark:text-white mb-1">{name}</h3>
            <p className="text-sm text-light-muted dark:text-gray-400 flex-grow">{description}</p>
        </div>
    );
};

export default ToolCard;
