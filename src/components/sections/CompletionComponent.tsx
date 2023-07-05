import { CustomTextArea } from '@/components';
import { OpenAIService } from '@/config';
import { CUSTOM_GPT_MODELS, DEFAULT_MODEL } from '@/constants';
import { Textarea, Select, TextInput, Checkbox, Button } from '@mantine/core';
import React, { useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineSend } from 'react-icons/ai';

interface ICompletionFormTextInput {
    model: string;
    prompt: string;
    suffix?: string | null;
    max_tokens?: number | null;
    temperature?: number | null;
    top_p?: number | null;
    n?: number | null;
    stream?: boolean | null;
    logprobs?: number | null;
    echo?: boolean | null;
    stop?: string | null;
    presence_penalty?: number | null;
    frequency_penalty?: number | null;
    best_of?: number | null;
    user?: string;
}

const CompletionComponent: React.FC = () => {
    const [response, setReponse] = useState('');
    const [submitting, setSubmitting] = useState<boolean>(false);

    const { register, handleSubmit, setValue, watch, formState } = useForm<ICompletionFormTextInput>();

    const onSubmit: SubmitHandler<ICompletionFormTextInput> = data => {
        console.log(data);
        // searchGpt(data);
    };

    const searchGpt = useCallback((TextInput: ICompletionFormTextInput) => {
        const openAiTest = async () => {
            const { data } = await OpenAIService.createCompletion({
                model: TextInput.model,
                prompt: TextInput.prompt,
                max_tokens: TextInput.max_tokens,
                n: TextInput.n,
                stop: TextInput.stop,
                temperature: TextInput.temperature,
            });

            setReponse(JSON.stringify(data));
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
    }, []);

    return (
        <>
            <div className="text-white">
                <div className="mb-2">
                    <h5>Completion</h5>
                    <a
                        href="https://platform.openai.com/docs/api-reference/completions"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500"
                    >
                        Click here for Documentation
                    </a>
                </div>
                <form className="my-2" onSubmit={handleSubmit(onSubmit)}>
                    <Textarea label="Prompt" className="text-white" rows={5} {...register('prompt')} />
                    <div className="grid grid-cols-3 justify-between gap-5">
                        <Select
                            className="text-white"
                            value={watch('model')}
                            label="Select Model"
                            onChange={model => {
                                const currentModel = model || DEFAULT_MODEL;
                                setValue('model', currentModel);
                            }}
                            data={CUSTOM_GPT_MODELS}
                        />
                        <TextInput label="Suffix" type="text" {...register('suffix')} />
                        <TextInput label="max_tokens" type="number" {...register('max_tokens')} />
                        <TextInput label="temperature" type="number" {...register('temperature')} />
                        <TextInput label="top_p" type="number" {...register('top_p')} />
                        <TextInput label="n" type="number" {...register('n')} />
                        <TextInput label="logprobs" type="number" {...register('logprobs')} />
                        <TextInput label="stop" type="text" {...register('stop')} />
                        <TextInput label="presence_penalty" type="number" {...register('presence_penalty')} />
                        <TextInput label="frequency_penalty" type="number" {...register('frequency_penalty')} />
                        <TextInput label="best_of" type="number" {...register('best_of')} />
                        <TextInput label="user" type="text" {...register('user')} />
                        <Checkbox label="stream" {...register('stream')} />
                        <Checkbox label="echo" {...register('echo')} />
                        <Button
                            type="submit"
                            disabled={submitting}
                            variant={'gradient'}
                            rightIcon={<AiOutlineSend />}
                            className={'my-2 w-100'}
                        >
                            Submit
                        </Button>
                    </div>
                </form>
                <div className="flex flex-col">
                    <Textarea label="Result" className="text-white" rows={5} />
                </div>
            </div>
        </>
    );
};

export default CompletionComponent;
