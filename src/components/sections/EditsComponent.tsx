import { Button, Input, Option, Select, Spinner, Textarea, Typography } from '@material-tailwind/react';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineSend } from 'react-icons/ai';

interface IEditFormInput {
    model: string;
    input: string;
    instruction: string;
    max_tokens?: number | null;
    temperature?: number | null;
    top_p?: number | null;
    n?: number | null;
}

const EditsComponent: React.FC = () => {
    const [submitting, setSubmitting] = useState<boolean>(false);

    const { register, handleSubmit, setValue, watch, formState } = useForm<IEditFormInput>();

    const onSubmit: SubmitHandler<IEditFormInput> = data => {
        console.log(data);
        alert('Not Implemented');
    };

    return (
        <>
            <div className="text-white">
                <div className="mb-2">
                    <Typography variant="h5" color="white" className="my-2">
                        Edits
                    </Typography>
                    <a
                        href="https://platform.openai.com/docs/api-reference/edits"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500"
                    >
                        Click here for Documentation
                    </a>
                </div>
                <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-2 justify-between gap-2">
                        <Select
                            className="text-white"
                            value={watch('model')}
                            label="Select Model"
                            onChange={model => {
                                setValue('model', model!!);
                            }}
                        >
                            <Option key={'text-davinci-edit-001'} value={'text-davinci-edit-001'}>
                                {'text-davinci-edit-001'}
                            </Option>
                            <Option key={'code-davinci-edit-001'} value={'code-davinci-edit-001'}>
                                {'code-davinci-edit-001'}
                            </Option>
                        </Select>
                        <Input label="temperature" type="number" {...register('temperature')} />
                        <Input label="top_p" type="number" {...register('top_p')} />
                        <Input label="n" type="number" {...register('n')} />
                    </div>
                    <Textarea placeholder="Input" rows={3} {...register('input')} />
                    <Textarea placeholder="Instruction" rows={3} {...register('instruction')} />
                    <Button type="submit" disabled={submitting} variant={'gradient'} className={'my-2 w-100'}>
                        <div className="flex gap-2 items-center justify-center">
                            {submitting && <Spinner />}
                            Submit {<AiOutlineSend />}
                        </div>
                    </Button>
                </form>
            </div>
        </>
    );
};

export default EditsComponent;
