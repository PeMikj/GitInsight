import React, { useState } from 'react';
import GitHubForm from './GitHubForm';
import RepoTreeView from './RepoTreeView';

const App = () => {
    const [nodes, setNodes] = useState([]);
    const [error, setError] = useState(null);

    const handleFormSubmit = async (url) => {
        try {
            // Hardcoded sample directory structure
            const sampleNodes = [
                {
                    value: 'src',
                    label: 'src',
                    children: [
                        {
                            value: 'components',
                            label: 'components',
                            children: [
                                { value: 'GitHubForm.js', label: 'GitHubForm.js' },
                                { value: 'RepoTreeView.js', label: 'RepoTreeView.js' }
                            ]
                        },
                        { value: 'App.js', label: 'App.js' },
                        { value: 'index.js', label: 'index.js' }
                    ]
                },
                { value: 'package.json', label: 'package.json' },
                { value: 'README.md', label: 'README.md' }
            ];
            setNodes(sampleNodes);
        } catch (error) {
            console.error('Error:', error);
            setError(error.message);
        }
    };

    return (
        <div>
            <GitHubForm onSubmit={handleFormSubmit} />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <RepoTreeView nodes={nodes} />
        </div>
    );
};

export default App;