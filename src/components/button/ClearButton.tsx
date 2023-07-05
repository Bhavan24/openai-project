import { Button } from '@mantine/core';
import React, { MouseEventHandler } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

interface ClearButtonProps {
    onClear: MouseEventHandler<HTMLButtonElement>;
}

const ClearButton: React.FC<ClearButtonProps> = ({ onClear }) => {
    return (
        <Button variant="outline" leftIcon={<AiOutlineDelete />} onClick={onClear} className={'m-2'}>
            Clear
        </Button>
    );
};

export default ClearButton;
