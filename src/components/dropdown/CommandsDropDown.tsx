import { SettingsContext } from '@/contexts';
import { DropDownOption } from '@/types';
import { Select } from '@mantine/core';
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
            className="w-[500px]"
            searchable
            value={settings.command}
            data={options}
            label="Select Custom Prompt"
            onChange={(command: any) => {
                updateSettings({
                    ...settings,
                    command: command,
                });
            }}
        />
    );
};

export default CommandsDropDown;
