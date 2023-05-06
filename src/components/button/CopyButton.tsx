import React, { useCallback } from 'react';
import { AiOutlineCopy } from 'react-icons/ai';
import { CustomButton } from '../custom';

interface ClearButtonProps {
    text: string;
}

const ClearButton: React.FC<ClearButtonProps> = ({ text }) => {
    const copyResults = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <CustomButton
            variant="outlined"
            text={'Copy'}
            icon={<AiOutlineCopy />}
            onClick={copyResults}
            className={'m-2 w-100'}
        />
    );
};

export default ClearButton;
