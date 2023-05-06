import { AskQueryButton, ClearButton, ModelsDropDown, CustomTextArea, CopyButton } from '@/components';
import { OpenAIService } from '@/config';
import { CUSTOM_GPT_MODELS, DEFAULT_MODEL } from '@/constants';
import { Button, Option, Select, Textarea } from '@material-tailwind/react';
import { useCallback, useRef, useState } from 'react';
import { AiOutlineCopy } from 'react-icons/ai';

export default function BasicPage() {
    const resultElement = useRef<any>(null);

    const [response, setReponse] = useState('');
    const [text, setText] = useState<string>('');
    const [model, setModel] = useState<string>(DEFAULT_MODEL);

    const onComplete = (response: string) => {
        setReponse(response);
        scrollToResult();
    };

    const onClear = () => {
        setText('');
    };

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
                        <AskQueryButton model={model} text={text} onComplete={onComplete} />
                        <ClearButton onClear={onClear} />
                    </div>
                    <div className="flex gap-2 m-2 sm:flex-row flex-col">
                        <div className="my-2">
                            <ModelsDropDown
                                onChange={(model: string) => {
                                    setModel(model);
                                }}
                            />
                        </div>

                        <CopyButton text={response} />
                    </div>
                </div>
                <div className="flex sm:flex-row flex-col">
                    <div className="m-4 sm:w-1/2">
                        <CustomTextArea
                            text={text}
                            onChange={(text: string) => {
                                setText(text);
                            }}
                        />
                    </div>
                    <div className="m-4 sm:w-1/2" ref={resultElement}>
                        <CustomTextArea
                            text={response}
                            onChange={(text: string) => {
                                setReponse(text);
                            }}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
