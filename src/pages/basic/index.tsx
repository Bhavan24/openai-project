import { AskQueryButton, ClearButton, CommandsDropDown, CopyButton, CustomTextArea } from '@/components';
import { DEFAULT_MODEL, getFinalCommand } from '@/constants';
import { SettingsContext } from '@/context';
import { Input } from '@material-tailwind/react';
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
            <div className="text-white">
                <div className="flex flex-row justify-between mx-4 gap-5">
                    <div>
                        <AskQueryButton
                            model={DEFAULT_MODEL}
                            text={getFinalCommand(settings.command, settings.subCommand || '', text)}
                            onComplete={onComplete}
                        />
                        <ClearButton onClear={onClear} />
                    </div>
                    <div className="flex sm:flex-row flex-col justify-between mx-4 gap-5 align-middle">
                        <div className="my-2">
                            <CommandsDropDown />
                        </div>
                        <div className="my-2">
                            <Input
                                value={settings.subCommand}
                                label="Sub Command"
                                onChange={event => {
                                    updateSettings({ ...settings, subCommand: event.target.value });
                                }}
                            />
                        </div>
                        <div>
                            <CopyButton text={response} />
                        </div>
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
