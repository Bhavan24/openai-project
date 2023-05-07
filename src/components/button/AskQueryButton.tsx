import { OpenAIService } from '@/config';
import React, { useCallback, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { CustomButton } from '../custom';

interface AskQueryButtonProps {
    model: string;
    text: string;
    onComplete: Function;
}

const AskQueryButton: React.FC<AskQueryButtonProps> = ({ model, text, onComplete }) => {
    const [submitting, setSubmitting] = useState<boolean>(false);

    const searchGpt = useCallback(() => {
        const openAiTest = async () => {
            const { data } = await OpenAIService.createCompletion({
                model: model,
                prompt: text.trim(),
                max_tokens: 2048,
                n: 1,
                stop: '',
                temperature: 0.5,
            });

            const response = data.choices[0].text?.trim() || '';
            onComplete(response);
        };

        setSubmitting(true);

        try {
            openAiTest().finally(() => {
                setSubmitting(false);
            });
        } catch (error) {
            console.log(error);
            setSubmitting(false);
        }
    }, [model, onComplete, text]);

    return (
        <CustomButton
            loading={submitting}
            disabled={submitting}
            variant="gradient"
            text={'Ask Query'}
            icon={<AiOutlineSend />}
            onClick={searchGpt}
            className={'m-2'}
        />
    );
};

export default AskQueryButton;
