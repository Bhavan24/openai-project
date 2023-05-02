import { Editor } from '@/components';
import { CustomButton } from '@/components/custom-button';
import { OpenAIService } from '@/config';
import { CUSTOM_GPT_OPTIONS } from '@/constants';
import { Button, Option, Select } from '@material-tailwind/react';
import { useCallback, useEffect, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { DropdownOptions } from '../../constants/AppTypes';

export default function AdvancedPage() {
    const [response, setReponse] = useState('');
    const [text, setText] = useState<string>('');
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [options, setModelOptions] = useState<DropdownOptions[]>([]);
    const [command, setCommand] = useState('');
    const [model, setModel] = useState<string>('text-davinci-003');

    useEffect(() => {
        const getAll = async () => {
            const { data } = await OpenAIService.listModels();
            const modelOptions = data.data.map(model => model.id).map(m => ({ value: m, label: m }));
            setModelOptions(modelOptions);
        };

        getAll();
    }, []);

    const searchGpt = useCallback(() => {
        const customText: string = `'''${text}''' \n\n ${command}`;

        const openAiTest = async () => {
            const { data } = await OpenAIService.createCompletion({
                model: model,
                prompt: customText.trim(),
                max_tokens: 2048,
                n: 1,
                stop: '',
                temperature: 0.5,
            });

            const response = data.choices[0].text?.trim() || '';
            setReponse(response);
        };

        setReponse('');
        setSubmitting(true);
        openAiTest().finally(() => {
            setSubmitting(false);
        });
    }, [command, model, text]);

    return (
        <main className="h-full">
            <div className="text-white h-screen p-3">
                <div className="flex flex-row justify-between mx-4 gap-5">
                    {/* <div>
                        <Select
                            size="lg"
                            color="blue"
                            value={model}
                            label="Select Model"
                            onChange={model => {
                                console.log(model);
                                setModel(model || 'text-davinci-003');
                            }}
                        >
                            {options.map((option, i) => (
                                <Option key={i} value={option.value}>
                                    {option.label}
                                </Option>
                            ))}
                        </Select>
                    </div> */}
                    <div>
                        <CustomButton
                            loading={submitting}
                            disabled={submitting}
                            text={'Ask Query'}
                            icon={<AiOutlineSend />}
                            onClick={searchGpt}
                        />
                        <Button
                            variant="outlined"
                            onClick={() => {
                                setText('');
                            }}
                            className="m-2"
                        >
                            <div className="flex gap-2 items-center">Clear</div>
                        </Button>
                    </div>
                    <div className="m-2">
                        <Select
                            size="lg"
                            color="blue"
                            value={command}
                            label="Select Custom Command"
                            onChange={(command: any) => {
                                setCommand(command);
                            }}
                        >
                            {CUSTOM_GPT_OPTIONS.map((option, i) => (
                                <Option key={i} value={option.value}>
                                    {option.label}
                                </Option>
                            ))}
                        </Select>
                    </div>
                </div>
                <div className="flex sm:flex-row flex-col">
                    <div className="m-4 sm:w-1/2 border border-blue-gray-50 px-2">
                        <Editor response={text} setReponse={setText} />
                    </div>
                    <div className="m-4 sm:w-1/2  border border-blue-gray-50 px-2">
                        <Editor response={response} setReponse={setReponse} />
                    </div>
                </div>
            </div>
        </main>
    );
}
