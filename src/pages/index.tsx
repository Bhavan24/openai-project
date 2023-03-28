import { Editor } from '@/components';
import { OpenAIService } from '@/config';
import { Button } from '@material-tailwind/react';
import { useCallback, useEffect, useState } from 'react';

export default function Main() {
    const [response, setReponse] = useState('');
    const [text, setText] = useState<string>('');
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [options, setModelOptions] = useState<any>([]);
    const [model, setModel] = useState<string>('text-davinci-003');

    useEffect(() => {
        const getAll = async () => {
            const { data } = await OpenAIService.listModels();
            const modelOptions = data.data.map(model => model.id).map(m => ({ value: m, label: m }));
            setModelOptions(modelOptions);
        };

        getAll();
    }, []);

    const searchGpt = useCallback(() => {
        const openAiTest = async () => {
            const { data } = await OpenAIService.createCompletion({
                model: model,
                prompt: text,
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
        });
    }, [model, text]);

    return (
        <main>
            <div className="bg-gray-900 text-white h-screen">
                <div className="flex flex-row">
                    <div className="m-4 w-1/2">
                        <Editor response={text} setReponse={setText} />
                    </div>
                    <div className="m-4 w-1/2">
                        <Editor response={response} setReponse={setReponse} />
                    </div>
                </div>
                <div className="mx-4">
                    <Button onClick={searchGpt} variant="gradient">
                        Submit
                    </Button>
                </div>
            </div>
        </main>
    );
}
