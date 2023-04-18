import { OpenAIService } from '@/config';
import { Button, Select, Option, Textarea } from '@material-tailwind/react';
import { useCallback, useEffect, useState } from 'react';
import { AiOutlineCopy, AiOutlineSend } from 'react-icons/ai';
import { DropdownOptions } from './../constants/AppTypes';

export default function Main() {
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
        });
    }, [model, text]);

    return (
        <main className="h-full">
            <div className="text-white h-screen p-3">
                <div className="flex flex-row mx-4 gap-5">
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
                        <Button onClick={searchGpt} disabled={submitting} variant="gradient">
                            <div className="flex gap-2 items-center">
                                {submitting && (
                                    <svg
                                        aria-hidden="true"
                                        role="status"
                                        className="inline w-4 h-4 mr-3 text-white animate-spin"
                                        viewBox="0 0 100 101"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="#E5E7EB"
                                        />
                                        <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                )}
                                Ask Query <AiOutlineSend />
                            </div>
                        </Button>
                    </div>
                    <div>
                        <Button variant="outlined" onClick={copyResults}>
                            <div className="flex gap-2 items-center">
                                Copy Results <AiOutlineCopy />
                            </div>
                        </Button>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="m-4 w-1/2">
                        <Textarea
                            className="border border-black rounded-none"
                            value={text}
                            rows={30}
                            onChange={e => {
                                setText(e.target.value);
                            }}
                        />
                    </div>
                    <div className="m-4 w-1/2">
                        <Textarea
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
