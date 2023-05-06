import { GPT_API_TYPES } from '@/constants';
import { SettingsContext } from '@/context';
import { Option, Select } from '@material-tailwind/react';
import React, { useContext } from 'react';

interface TypesDropDownProps {}

const TypesDropDownProps: React.FC<TypesDropDownProps> = () => {
    const { settings, updateSettings } = useContext(SettingsContext);

    return (
        <Select
            size="md"
            color="blue"
            className="text-white"
            value={settings.command}
            label="Select Type"
            onChange={(command: any) => {
                updateSettings({
                    model: settings.model,
                    command: command,
                });
            }}
        >
            {GPT_API_TYPES.map((option, i) => (
                <Option key={i} value={option.value}>
                    {option.label}
                </Option>
            ))}
        </Select>
    );
};

export default TypesDropDownProps;
