import { AskQueryButton, ClearButton, Editor, SettingsButton, SettingsDialog } from '@/components';
import { SettingsContext } from '@/context';
import { useContext, useState } from 'react';

export default function AdvancedPage() {
    const { settings } = useContext(SettingsContext);

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
            <div className="text-white">
                <div className="flex flex-row justify-between mx-4 gap-5">
                    <div>
                        <AskQueryButton
                            model={settings.model}
                            text={`${settings.command} ${settings.subCommand || ''} <|endofprompt|>  \n\n  ${text}`}
                            onComplete={onComplete}
                        />
                        <SettingsButton onSettingsClick={handleOpen} />
                    </div>
                    <ClearButton onClear={onClear} />
                </div>
                <div className="flex sm:flex-row flex-col">
                    <div className="m-4 sm:w-1/2 border border-blue-gray-50 px-2">
                        <Editor response={text} setReponse={setText} />
                    </div>
                    <div className="m-4 sm:w-1/2  border border-blue-gray-50 px-2">
                        <Editor response={response} setReponse={setReponse} />
                    </div>
                </div>
                <SettingsDialog open={open} handleOpen={handleOpen} />
            </div>
        </>
    );
}
