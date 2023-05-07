import { GPT_API_TYPES } from '@/constants';
import { SettingsContext } from '@/contexts';
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
            value={settings.type}
            label="Select Type"
            onChange={(type: any) => {
                updateSettings({
                    ...settings,
                    type: type,
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
