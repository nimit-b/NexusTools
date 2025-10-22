import React from 'react';

const About: React.FC<{ showToast: (message: string) => void }> = () => {
    return (
        <div className="space-y-6 text-light-text dark:text-gray-300 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-light-text dark:text-white">About Nexus Tools</h2>
            <p>
                Nexus Tools is a comprehensive suite of powerful, client-side utilities designed for developers, designers, and anyone who works with data. 
                Built with React, TypeScript, and Tailwind CSS, this application provides a fast, secure, and intuitive interface for a wide range of common tasks.
            </p>
            
            <h3 className="text-xl font-semibold text-light-text dark:text-white pt-4">Disclaimer</h3>
            <p>
                All tools provided in this application are for informational and utility purposes only. While every effort has been made to ensure accuracy and reliability, 
                Nexus Tools and its creators are not responsible for any errors, omissions, or for the results obtained from the use of these tools. 
                All calculations and data processing are performed on your local machine; no data is sent to or stored on any server.
            </p>

            <h3 className="text-xl font-semibold text-light-text dark:text-white pt-4">Privacy Policy</h3>
            <p>
                Your privacy is critically important. Nexus Tools is a 100% client-side application. This means:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
                <li><strong>No Data Transmission:</strong> None of the data you input into any tool (text, files, etc.) ever leaves your computer.</li>
                <li><strong>No Servers:</strong> We do not have any servers to store your data on, because we never receive it.</li>
                <li><strong>No Tracking:</strong> We do not use cookies or any tracking technologies to monitor your usage, beyond what is necessary for basic application state (like your light/dark mode preference, which is stored locally in your browser).</li>
            </ul>
             <p>You can use this application with the full confidence that your data remains private and secure on your own device.</p>

            <h3 className="text-xl font-semibold text-light-text dark:text-white pt-4">Third-Party Libraries</h3>
            <p>This application is made possible by the following open-source projects:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>Marked (for Markdown Previewer)</li>
                <li>Diff (for Diff Checker)</li>
            </ul>
        </div>
    );
};

export default About;