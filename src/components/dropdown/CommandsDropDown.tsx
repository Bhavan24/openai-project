import { CUSTOM_GPT_OPTIONS } from '@/constants';
import { SettingsContext } from '@/context';
import { Option, Select } from '@material-tailwind/react';
import React, { useContext } from 'react';

interface CommandsDropDownProps {}

const CommandsDropDown: React.FC<CommandsDropDownProps> = () => {
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
                    model: settings.model,
                    command: command,
                });
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
