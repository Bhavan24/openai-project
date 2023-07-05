import { Textarea } from '@mantine/core';
import React from 'react';

interface CustomTextAreaProps {
    text: string;
    rows?: any;
    onChange: Function;
}

const CustomTextArea: React.FC<CustomTextAreaProps> = ({ text, rows = 20, onChange }) => {
    return (
        <Textarea
            radius="md"
            size="md"
            withAsterisk
            value={text}
            minRows={rows}
            onChange={event => {
                const text = event.currentTarget.value;
                onChange(text);
            }}
            className="text-white "
        />
    );
};

export default CustomTextArea;
