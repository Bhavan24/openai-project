import { CustomButton } from '@/components/custom-button';
import { OpenAIService } from '@/config';
import { Button, Textarea } from '@material-tailwind/react';
import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import { AiOutlineCopy, AiOutlineSend } from 'react-icons/ai';
import { DropdownOptions } from '../../constants/AppTypes';

export default function BasicPage() {
    const resultElement = useRef<any>(null);
    const [response, setReponse] = useState('');
    const [text, setText] = useState<string>('');
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [options, setModelOptions] = useState<DropdownOptions[]>([]);
    const [model, setModel] = useState<string>('text-davinci-003');

    const copyResults = useCallback(() => {
        navigator.clipboard.writeText(response);
    }, [response]);

    useEffect(() => {
        const getAll = async () => {
            const { data } = await OpenAIService.listModels();
            const modelOptions = data.data.map(model => model.id).map(m => ({ value: m, label: m }));
            setModelOptions(modelOptions);
        };

        getAll();
    }, []);

    const searchGpt = useCallback(() => {
        const customText: string = text.trim();

        if (customText == '') {
            alert('Please enter something!');
            return;
        }

        const openAiTest = async () => {
            const { data } = await OpenAIService.createCompletion({
                model: model,
                prompt: customText,
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
            scrollToResult();
        });
    }, [model, text]);

    const scrollToResult = () => {
        resultElement?.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

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
                        <Button variant="outlined" onClick={copyResults}>
                            <div className="flex gap-2 items-center">
                                Copy Results <AiOutlineCopy />
                            </div>
                        </Button>
                    </div>
                </div>
                <div className="flex sm:flex-row flex-col">
                    <div className="m-4 sm:w-1/2">
                        <Textarea
                            className="border border-black rounded-none"
                            value={text}
                            rows={30}
                            onChange={e => {
                                setText(e.target.value);
                            }}
                        />
                    </div>
                    <div className="m-4 sm:w-1/2">
                        <Textarea
                            ref={resultElement}
                            className="border border-black rounded-none"
                            value={response}
                            rows={30}
                            onChange={e => {
                                setReponse(e.target.value);
                            }}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
