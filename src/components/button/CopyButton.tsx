import { Button } from '@mantine/core';
import React, { useCallback } from 'react';
import { AiOutlineCopy } from 'react-icons/ai';

interface ClearButtonProps {
    text: string;
}

const ClearButton: React.FC<ClearButtonProps> = ({ text }) => {
    const copyResults = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <Button variant="outlined" leftIcon={<AiOutlineCopy />} onClick={copyResults} className={'m-2 w-100'}>
            Copy
        </Button>
    );
};

export default ClearButton;
