import { Textarea, Select, Input, Button, TextInput } from '@mantine/core';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineSend } from 'react-icons/ai';

interface IEditFormInput {
    prompt: string;
    size: string;
    response_format?: string | null;
    user?: string | null;
    n?: number | null;
}

const ImagesComponent: React.FC = () => {
    const [submitting, setSubmitting] = useState<boolean>(false);

    const { register, handleSubmit, setValue, watch, formState } = useForm<IEditFormInput>();

    const onSubmit: SubmitHandler<IEditFormInput> = data => {
        setSubmitting(true);
        console.log(data);
        alert('Not Implemented');
        setSubmitting(false);
    };

    return (
        <div className="text-white">
            <div className="mb-2">
                <h5>Images</h5>

                <a
                    href="https://platform.openai.com/docs/api-reference/images"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500"
                >
                    Click here for Documentation
                </a>
            </div>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
                <Textarea placeholder="Input" rows={3} {...register('prompt')} />
                <div className="grid grid-cols-2 justify-between gap-2">
                    <Select
                        className="text-white"
                        value={watch('size')}
                        label="Select size"
                        data={[
                            { value: '256x256', label: '256x256' },
                            { value: '512x512', label: '512x512' },
                            { value: '1024x1024', label: '1024x1024' },
                        ]}
                        onChange={size => {
                            setValue('size', size!!);
                        }}
                    />
                    <TextInput label="user" {...register('user')} />
                    <TextInput label="response_format" {...register('response_format')} />
                    <TextInput label="n" type="number" {...register('n')} />
                </div>
                <Button
                    type="submit"
                    disabled={submitting}
                    variant={'gradient'}
                    rightIcon={<AiOutlineSend />}
                    className={'my-2 w-100'}
                >
                    Submit
                </Button>{' '}
            </form>
            <div className="p-2 my-2 flex justify-center border-2 border-gray-300">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={'/assets/ai-image.jpeg'} width={500} height={500} alt="Picture from GPT" />
            </div>
        </div>
    );
};

export default ImagesComponent;
