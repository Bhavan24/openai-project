import React, { MouseEventHandler } from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { CustomButton } from '../custom';

interface ClearButtonProps {
    onSettingsClick: MouseEventHandler<HTMLButtonElement>;
}

const ClearButton: React.FC<ClearButtonProps> = ({ onSettingsClick }) => {
    return (
        <CustomButton
            variant="outlined"
            text={'Settings'}
            icon={<AiOutlineSetting />}
            onClick={onSettingsClick}
            className={'m-2'}
        />
    );
};

export default ClearButton;
