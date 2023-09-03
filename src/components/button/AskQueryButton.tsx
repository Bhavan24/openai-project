import { OpenAIService } from '@/config';
import { Button } from '@mantine/core';
import React, { useCallback, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';

interface AskQueryButtonProps {
    model: string;
    text: string;
    onComplete: Function;
}

const AskQueryButton: React.FC<AskQueryButtonProps> = ({ model, text, onComplete }) => {
    const [submitting, setSubmitting] = useState<boolean>(false);

    const searchGpt = useCallback(() => {
        const openAiTest = async () => {
            const newPrompt = text?.trim() || '';

            const { data } = await OpenAIService.createChatCompletion({
                model: model,
                messages: [{ role: 'user', content: newPrompt }],
                max_tokens: 2048,
                n: 1,
                stop: '',
                temperature: 0.5,
            });

            const response = data.choices[0].message?.content?.trim() || '';
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
        <Button
            variant="outline"
            loading={submitting}
            disabled={submitting}
            leftIcon={<AiOutlineSend />}
            onClick={searchGpt}
            className={'m-2'}
        >
            Ask Query
        </Button>
    );
};

export default AskQueryButton;
