import { SettingsContext } from '@/contexts';
import { DropDownOption } from '@/types';
import { Option, Select } from '@material-tailwind/react';
import React, { useContext } from 'react';

interface CommandsDropDownProps {
    options: DropDownOption[];
}

const CommandsDropDown: React.FC<CommandsDropDownProps> = ({ options }) => {
    const { settings, updateSettings } = useContext(SettingsContext);

    return (
        <Select
            size="md"
            color="blue"
            className="text-white"
            value={settings.command}
            label="Select Custom Prompt"
            onChange={(command: any) => {
                updateSettings({
                    ...settings,
                    command: command,
                });
            }}
        >
            {options.map((option, i) => (
                <Option key={i} value={option.value}>
                    {option.label}
                </Option>
            ))}
        </Select>
    );
};

export default CommandsDropDown;
