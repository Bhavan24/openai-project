import { Button } from '@mantine/core';
import React, { MouseEventHandler } from 'react';
import { AiOutlineSetting } from 'react-icons/ai';

interface ClearButtonProps {
    onSettingsClick: MouseEventHandler<HTMLButtonElement>;
}

const ClearButton: React.FC<ClearButtonProps> = ({ onSettingsClick }) => {
    return (
        <Button variant="outlined" leftIcon={<AiOutlineSetting />} onClick={onSettingsClick} className={'m-2'}>
            Settings
        </Button>
    );
};

export default ClearButton;
