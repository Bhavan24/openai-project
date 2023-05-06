import { CUSTOM_GPT_MODELS, DEFAULT_MODEL } from '@/constants';
import { Select, Option } from '@material-tailwind/react';
import React, { useState } from 'react';

interface ModelsDropDownProps {
    onChange: Function;
    className?: string;
}

const ModelsDropDown: React.FC<ModelsDropDownProps> = ({ onChange, className }) => {
    const [model, setModel] = useState<string>(DEFAULT_MODEL);

    return (
        <Select
            size="lg"
            color="blue"
            value={model}
            className={className}
            label="Select Model"
            onChange={model => {
                const currentModel = model || DEFAULT_MODEL;
                setModel(currentModel);
                onChange(currentModel);
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