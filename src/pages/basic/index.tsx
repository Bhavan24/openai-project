import { AskQueryButton, ClearButton, CopyButton, CustomTextArea } from '@/components';
import { DEFAULT_MODEL } from '@/constants';
import { useState } from 'react';

export default function BasicPage() {
    const [response, setReponse] = useState('');
    const [text, setText] = useState<string>('');

    const onComplete = (response: string) => {
        setReponse(response);
    };

    const onClear = () => {
        setText('');
    };

    return (
        <>
            <div className="text-white">
                <div className="flex flex-row justify-between mx-4 gap-5">
                    <div>
                        <AskQueryButton model={DEFAULT_MODEL} text={text} onComplete={onComplete} />
                        <ClearButton onClear={onClear} />
                    </div>
                    <div>
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
                    <div className="m-4 sm:w-1/2">
                        <CustomTextArea
                            text={response}
                            onChange={(text: string) => {
                                setReponse(text);
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
