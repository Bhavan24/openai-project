import { AskQueryButton, ClearButton, CommandsDropDown, CopyButton, CustomTextArea } from '@/components';
import { BASIC_GPT_OPTIONS, DEFAULT_MODEL, GET_GPT_INPUT } from '@/constants';
import { SettingsContext } from '@/contexts';
import { TextInput } from '@mantine/core';
import { useContext, useState } from 'react';

export default function BasicPage() {
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
            <div>
                <div className="flex flex-row justify-between mx-4 gap-5">
                    <div>
                        <AskQueryButton
                            model={DEFAULT_MODEL}
                            text={GET_GPT_INPUT(settings.command, settings.subCommand || '', text)}
                            onComplete={onComplete}
                        />
                        <ClearButton onClear={onClear} />
                        <CopyButton text={response} />
                    </div>
                    <div className="flex sm:flex-row flex-col justify-between mx-4 gap-5 align-middle">
                        <div className="my-2">
                            <CommandsDropDown options={BASIC_GPT_OPTIONS} />
                        </div>
                        {settings.command === BASIC_GPT_OPTIONS[1].value && (
                            <div className="my-2">
                                <TextInput
                                    value={settings.subCommand}
                                    label="Translate To"
                                    onChange={event => {
                                        updateSettings({ ...settings, subCommand: event.target.value });
                                    }}
                                />
                            </div>
                        )}
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
