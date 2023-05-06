import { AskQueryButton, ClearButton, CommandsDropDown, Editor, ModelsDropDown } from '@/components';
import { DEFAULT_MODEL } from '@/constants';
import { useState } from 'react';

export default function AdvancedPage() {
    const [text, setText] = useState<string>('');
    const [response, setReponse] = useState('');
    const [command, setCommand] = useState('');
    const [model, setModel] = useState(DEFAULT_MODEL);

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
                        <AskQueryButton model={model} text={`'''${text}''' \n\n ${command}`} onComplete={onComplete} />
                        <ClearButton onClear={onClear} />
                    </div>
                    <div className="flex gap-2 m-2 sm:flex-row flex-col">
                        <ModelsDropDown
                            onChange={(model: string) => {
                                setModel(model);
                            }}
                        />
                        <CommandsDropDown
                            onChange={(command: string) => {
                                setCommand(command);
                            }}
                        />
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
        </>
    );
}
