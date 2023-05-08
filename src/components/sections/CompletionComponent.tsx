import { CustomTextArea } from '@/components';
import { OpenAIService } from '@/config';
import { CUSTOM_GPT_MODELS, DEFAULT_MODEL } from '@/constants';
import { Button, Checkbox, Input, Option, Select, Spinner, Textarea, Typography } from '@material-tailwind/react';
import React, { useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineSend } from 'react-icons/ai';

interface ICompletionFormInput {
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

    const { register, handleSubmit, setValue, watch, formState } = useForm<ICompletionFormInput>();

    const onSubmit: SubmitHandler<ICompletionFormInput> = data => {
        console.log(data);
        // searchGpt(data);
    };

    const searchGpt = useCallback((input: ICompletionFormInput) => {
        const openAiTest = async () => {
            const { data } = await OpenAIService.createCompletion({
                model: input.model,
                prompt: input.prompt,
                max_tokens: input.max_tokens,
                n: input.n,
                stop: input.stop,
                temperature: input.temperature,
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
                    <Typography variant="h5" color="white" className="my-2">
                        Completion
                    </Typography>
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
                        >
                            {CUSTOM_GPT_MODELS.map((model, i) => (
                                <Option key={i} value={model}>
                                    {model}
                                </Option>
                            ))}
                        </Select>
                        <Input label="Suffix" type="text" {...register('suffix')} />
                        <Input label="max_tokens" type="number" {...register('max_tokens')} />
                        <Input label="temperature" type="number" {...register('temperature')} />
                        <Input label="top_p" type="number" {...register('top_p')} />
                        <Input label="n" type="number" {...register('n')} />
                        <Input label="logprobs" type="number" {...register('logprobs')} />
                        <Input label="stop" type="text" {...register('stop')} />
                        <Input label="presence_penalty" type="number" {...register('presence_penalty')} />
                        <Input label="frequency_penalty" type="number" {...register('frequency_penalty')} />
                        <Input label="best_of" type="number" {...register('best_of')} />
                        <Input label="user" type="text" {...register('user')} />
                        <Checkbox label="stream" type="checkbox" {...register('stream')} />
                        <Checkbox label="echo" type="checkbox" {...register('echo')} />
                        <Button type="submit" disabled={submitting} variant={'gradient'} className={'my-2 w-100'}>
                            <div className="flex gap-2 items-center justify-center">
                                {submitting && <Spinner />}
                                Submit {<AiOutlineSend />}
                            </div>
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
