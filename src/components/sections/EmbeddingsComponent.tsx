import { CUSTOM_GPT_MODELS, DEFAULT_MODEL } from '@/constants';
import { Button, Select, Textarea, TextInput } from '@mantine/core';
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
                <h5>Embeddings</h5>
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
                        data={CUSTOM_GPT_MODELS}
                        onChange={model => {
                            const currentModel = model || DEFAULT_MODEL;
                            setValue('model', currentModel);
                        }}
                    />
                    <TextInput label="user" {...register('user')} />
                </div>
                <Textarea label="Result" className="text-white" rows={5} />
                <Button
                    type="submit"
                    disabled={submitting}
                    variant={'gradient'}
                    rightIcon={<AiOutlineSend />}
                    className={'my-2 w-100'}
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default EmbeddingsComponent;
