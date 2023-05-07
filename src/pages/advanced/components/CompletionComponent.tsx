import { ClearButton, CommandsDropDown, CustomButton, Editor, SettingsButton, SettingsDialog } from '@/components';
import { OpenAIService } from '@/config';
import { ADVANCED_GPT_OPTIONS } from '@/constants';
import { SettingsContext } from '@/contexts';
import { Input } from '@material-tailwind/react';
import { useCallback, useContext, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const CompletionComponent = () => {
    const { settings, updateSettings } = useContext(SettingsContext);

    const [submitting, setSubmitting] = useState<boolean>(false);
    const [text, setText] = useState<string>('');
    const [response, setReponse] = useState('');
    const [open, setOpen] = useState(false);

    const searchGpt = useCallback(() => {
        const openAiTest = async () => {
            const { data } = await OpenAIService.createCompletion({
                model: settings.model,
                prompt: text.trim(),
                max_tokens: 2048,
                n: 1,
                stop: '',
                temperature: 0.5,
            });

            const response = data.choices[0].text?.trim() || '';
            setReponse(response);
        };

        setSubmitting(true);

        try {
            openAiTest().finally(() => {
                setSubmitting(false);
            });
        } catch (error) {
            console.log(error);
            setSubmitting(false);
        }
    }, [settings, text]);

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
                        <CustomButton
                            loading={submitting}
                            disabled={submitting}
                            variant="gradient"
                            text={'Ask Query'}
                            icon={<AiOutlineSend />}
                            onClick={searchGpt}
                            className={'m-2'}
                        />
                        <ClearButton onClear={onClear} />
                        <SettingsButton onSettingsClick={handleOpen} />
                    </div>
                    <div className="flex sm:flex-row flex-col justify-between mx-4 gap-5 align-middle">
                        <div className="my-2">
                            <CommandsDropDown options={ADVANCED_GPT_OPTIONS} />
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
};

export default CompletionComponent;
