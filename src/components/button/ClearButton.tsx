import React, { MouseEventHandler, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { CustomButton } from '../custom';

interface ClearButtonProps {
    onClear: MouseEventHandler<HTMLButtonElement>;
}

const ClearButton: React.FC<ClearButtonProps> = ({ onClear }) => {

    return (
        <CustomButton
            variant="outlined"
            text={'Clear'}
            icon={<AiOutlineDelete />}
            onClick={onClear}
            className={'m-2'}
        />
    );
};

export default ClearButton;
