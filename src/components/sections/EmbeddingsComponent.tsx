import { CUSTOM_GPT_MODELS, DEFAULT_MODEL } from '@/constants';
import { Button, Input, Option, Select, Spinner, Textarea, Typography } from '@material-tailwind/react';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineSend } from 'react-icons/ai';

interface IEmbeddingsFormInput {
    model: string;
    input: string;
    user: string;
}

const EmbeddingsComponent: React.FC = () => {
    const [submitting, setSubmitting] = useState<boolean>(false);

    const { register, handleSubmit, setValue, watch, formState } = useForm<IEmbeddingsFormInput>();

    const onSubmit: SubmitHandler<IEmbeddingsFormInput> = data => {
        console.log(data);
        alert('Not Implemented');
    };

    return (
        <div className="text-white">
            <div className="mb-2">
                <Typography variant="h5" color="white" className="my-2">
                    Embeddings
                </Typography>
                <a
                    href="https://platform.openai.com/docs/api-reference/embeddings"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500"
                >
                    Click here for Documentation
                </a>
            </div>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
                <Textarea placeholder="Input" rows={3} {...register('input')} />
                <div className="grid grid-cols-2 justify-between gap-2">
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
                    <Input label="user" {...register('user')} />
                </div>
                <Textarea label="Result" className="text-white" rows={5} />
                <Button type="submit" disabled={submitting} variant={'gradient'} className={'my-2 w-100'}>
                    <div className="flex gap-2 items-center justify-center">
                        {submitting && <Spinner />}
                        Submit {<AiOutlineSend />}
                    </div>
                </Button>
            </form>
        </div>
    );
};

export default EmbeddingsComponent;
