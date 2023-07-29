import { AskQueryButton, ClearButton, CommandsDropDown, Editor, SpeechButton } from '@/components';
import { CODE_GPT_OPTIONS, DEFAULT_MODEL, GET_GPT_INPUT } from '@/constants';
import { SettingsContext } from '@/contexts';
import { TextInput } from '@mantine/core';
import { useContext, useState } from 'react';

export default function CodePage() {
    const { settings, updateSettings } = useContext(SettingsContext);

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
                    <div className="flex flex-row gap-3 items-center">
                        <SpeechButton
                            onChange={(text: any) => {
                                setText(text);
                            }}
                        />
                        <AskQueryButton
                            model={DEFAULT_MODEL}
                            text={GET_GPT_INPUT(settings.command, settings.subCommand || '', text)}
                            onComplete={onComplete}
                        />
                        <ClearButton onClear={onClear} />
                    </div>
                    <div className="flex sm:flex-row flex-col justify-between mx-4 gap-5 align-middle">
                        <div className="my-2">
                            <CommandsDropDown options={CODE_GPT_OPTIONS} />
                        </div>
                        {settings.command === CODE_GPT_OPTIONS[8].value && (
                            <div className="my-2">
                                <TextInput
                                    value={settings.subCommand}
                                    label="Convert To"
                                    onChange={event => {
                                        updateSettings({ ...settings, subCommand: event.target.value });
                                    }}
                                />
                            </div>
                        )}
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
