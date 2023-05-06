import { CUSTOM_GPT_OPTIONS } from '@/constants';
import { Option, Select } from '@material-tailwind/react';
import React, { useState } from 'react';

interface CommandsDropDownProps {
    onChange: Function;
}

const CommandsDropDown: React.FC<CommandsDropDownProps> = ({ onChange }) => {
    const [command, setCommand] = useState('');

    return (
        <Select
            size="lg"
            color="blue"
            value={command}
            label="Select Custom Command"
            onChange={(command: any) => {
                setCommand(command);
                onChange(command);
            }}
        >
            {CUSTOM_GPT_OPTIONS.map((option, i) => (
                <Option key={i} value={option.value}>
                    {option.label}
                </Option>
            ))}
        </Select>
    );
};

export default CommandsDropDown;
