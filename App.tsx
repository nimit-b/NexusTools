import React, { useState, useEffect } from 'react';
import ToolContainer from './components/ToolContainer';
import Toast from './components/Toast';
import type { Tool } from './types';
import { TOOLS } from './constants';
import { MoonIcon, SunIcon } from './components/icons';

function App() {
    const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    const handleShowToast = (message: string) => {
        setToastMessage(message);
        setShowToast(true);
    };

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                setShowToast(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    const handleSelectTool = (tool: Tool) => {
        if (tool.id === 'about') {
          const aboutTool = TOOLS.find(t => t.id === 'about');
          if (aboutTool) setSelectedTool(aboutTool);
        } else {
          setSelectedTool(tool);
        }
        window.scrollTo(0, 0);
    };
    
    const handleGoHome = () => {
        setSelectedTool(null);
    };

    return (
        <div className="bg-light-bg dark:bg-gray-900 min-h-screen text-light-text dark:text-white transition-colors duration-300">
            <header className="py-6 bg-light-secondary dark:bg-gray-800 shadow-md">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="text-center flex-grow">
                        <h1 className="text-3xl sm:text-4xl font-bold text-light-text dark:text-white">Nexus Tools</h1>
                        <p className="text-sm sm:text-base text-center text-light-muted dark:text-gray-400 mt-1">Your one-stop place for all your utility needs.</p>
                    </div>
                    <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label="Toggle theme">
                        {theme === 'dark' ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
                    </button>
                </div>
            </header>
            <main className="container mx-auto p-4 md:p-8">
                {selectedTool ? (
                    <ToolContainer tool={selectedTool} onGoHome={handleGoHome}>
                        <selectedTool.component showToast={handleShowToast} />
                    </ToolContainer>
                ) : (
                    <ToolContainer onSelectTool={handleSelectTool} />
                )}
            </main>
            <footer className="text-center py-4 mt-8 text-sm text-light-muted dark:text-gray-400">
                <button onClick={() => handleSelectTool({id: 'about'} as Tool)} className="hover:underline">About & Legal</button>
                <p className="mt-2">© {new Date().getFullYear()} Nexus Tools. All Rights Reserved.</p>
            </footer>
            <Toast message={toastMessage} show={showToast} />
        </div>
    );
}

export default App;