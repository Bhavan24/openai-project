import { OpenAIService } from '@/config';
import { CUSTOM_GPT_MODELS, DEFAULT_MODEL } from '@/constants';
import { Button, Option, Select, Textarea } from '@material-tailwind/react';
import { useCallback, useRef, useState } from 'react';
import { AiOutlineCopy } from 'react-icons/ai';

export default function BasicPage() {
    const resultElement = useRef<any>(null);
    const [response, setReponse] = useState('');
    const [text, setText] = useState<string>('');
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [model, setModel] = useState<string>(DEFAULT_MODEL);

    const copyResults = useCallback(() => {
        navigator.clipboard.writeText(response);
    }, [response]);

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
                    <div>
                        <Button onClick={searchGpt}>Ask Query </Button>
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
                    <div className="flex gap-2 m-2 sm:flex-row flex-col">
                        <Select
                            size="lg"
                            color="blue"
                            value={model}
                            label="Select Model"
                            onChange={model => {
                                console.log(model);
                                setModel(model || DEFAULT_MODEL);
                            }}
                        >
                            {CUSTOM_GPT_MODELS.map((model, i) => (
                                <Option key={i} value={model}>
                                    {model}
                                </Option>
                            ))}
                        </Select>
                        <Button variant="outlined" onClick={copyResults} fullWidth>
                            <div className="flex gap-2 items-center">
                                Copy Results <AiOutlineCopy />
                            </div>
                        </Button>
                    </div>
                </div>
                <div className="flex sm:flex-row flex-col">
                    <div className="m-4 sm:w-1/2">
                        <Textarea
                            className="text-white border border-black rounded-none"
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
                            className="text-white border border-black rounded-none"
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
