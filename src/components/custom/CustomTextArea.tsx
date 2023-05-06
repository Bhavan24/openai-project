import { Textarea } from '@material-tailwind/react';
import React, { useState } from 'react';

interface CustomTextAreaProps {
    text: string;
    rows?: any;
    onChange: Function;
}

const CustomTextArea: React.FC<CustomTextAreaProps> = ({ text, rows = 20, onChange }) => {
    return (
        <Textarea
            className="text-white border border-black rounded-none"
            value={text}
            rows={rows}
            onChange={e => {
                const text = e.target.value;
                onChange(text);
            }}
        />
    );
};

export default CustomTextArea;
