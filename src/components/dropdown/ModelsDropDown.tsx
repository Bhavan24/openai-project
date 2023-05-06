import { CUSTOM_GPT_MODELS, DEFAULT_MODEL } from '@/constants';
import { SettingsContext } from '@/context';
import { Option, Select } from '@material-tailwind/react';
import React, { useContext } from 'react';

interface ModelsDropDownProps {
}

const ModelsDropDown: React.FC<ModelsDropDownProps> = () => {
    const { settings, updateSettings } = useContext(SettingsContext);

    return (
        <Select
            size="lg"
            color="blue"
            className="text-white"
            value={settings.model}
            label="Select Model"
            onChange={model => {
                const currentModel = model || DEFAULT_MODEL;
                updateSettings({
                    model: currentModel,
                    command: settings.command,
                });
            }}
        >
            {CUSTOM_GPT_MODELS.map((model, i) => (
                <Option key={i} value={model}>
                    {model}
                </Option>
            ))}
        </Select>
    );
};

export default ModelsDropDown;
