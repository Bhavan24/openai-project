import { Typography } from '@material-tailwind/react';
import React from 'react';

const AudioComponent: React.FC = () => {
    return (
        <div className="text-white">
            <div className="mb-2">
                <Typography variant="h5" color="white" className="my-2">
                    Audio
                </Typography>
                <a
                    href="https://platform.openai.com/docs/api-reference/audio"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500"
                >
                    Click here for Documentation
                </a>
            </div>
            <div></div>
        </div>
    );
};

export default AudioComponent;
