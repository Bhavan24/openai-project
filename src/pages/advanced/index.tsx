import { AskQueryButton, ClearButton, CommandsDropDown, Editor, SettingsButton, SettingsDialog } from '@/components';
import { getFinalCommand } from '@/constants';
import { SettingsContext } from '@/context';
import { Input } from '@material-tailwind/react';
import { useContext, useState } from 'react';

export default function AdvancedPage() {
    const { settings, updateSettings } = useContext(SettingsContext);

    const [text, setText] = useState<string>('');
    const [response, setReponse] = useState('');
    const [open, setOpen] = useState(false);

    const onComplete = (response: string) => {
        setReponse(response);
    };

    const onClear = () => {
        setText('');
    };

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <SettingsDialog open={open} handleOpen={handleOpen} />
            <div className="text-white">
                <div className="flex flex-row justify-between mx-4 gap-5">
                    <div>
                        <AskQueryButton
                            model={settings.model}
                            text={getFinalCommand(settings.command, settings.subCommand || '', text)}
                            onComplete={onComplete}
                        />
                        <ClearButton onClear={onClear} />
                        <SettingsButton onSettingsClick={handleOpen} />
                    </div>
                    <div className="flex flex-row justify-between mx-4 gap-5 align-middle">
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
