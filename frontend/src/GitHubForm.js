import React, { useState } from 'react';

const GitHubForm = ({ onSubmit }) => {
    const [url, setUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(url);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter GitHub URL"
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default GitHubForm;