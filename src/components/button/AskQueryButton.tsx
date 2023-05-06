import { OpenAIService } from '@/config';
import { GPT_API_TYPES } from '@/constants';
import { SettingsContext } from '@/context';
import React, { useCallback, useContext, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { CustomButton } from '../custom';

interface AskQueryButtonProps {
    model: string;
    text: string;
    onComplete: Function;
}

const AskQueryButton: React.FC<AskQueryButtonProps> = ({ model, text, onComplete }) => {
    const [submitting, setSubmitting] = useState<boolean>(false);
    const { settings } = useContext(SettingsContext);

    const searchGpt = useCallback(() => {
        const openAiTest = async () => {
            switch (settings.type) {
                case GPT_API_TYPES[0].value: {
                    const { data } = await OpenAIService.createCompletion({
                        model: model,
                        prompt: text.trim(),
                        max_tokens: 2048,
                        n: 1,
                        stop: '',
                        temperature: 0.5,
                    });

                    const response = data.choices[0].text?.trim() || '';
                    onComplete(response);
                }
                case GPT_API_TYPES[1].value: {
                    await OpenAIService.createChatCompletion({
                        model: model, // 'gpt-3.5-turbo'
                        messages: [{ role: 'user', content: text.trim() }],
                    });
                }
                case GPT_API_TYPES[2].value: {
                    await OpenAIService.createEdit({
                        model: '',
                        instruction: '',
                    });
                }
                case GPT_API_TYPES[3].value: {
                    await OpenAIService.createEmbedding({
                        model: '',
                        input: '',
                    });
                }
                case GPT_API_TYPES[4].value: {
                    // await OpenAIService.createFile({});
                }
                case GPT_API_TYPES[5].value: {
                    const { data } = await OpenAIService.createImage({
                        prompt: text.trim(),
                    });

                    const response = data.data[0].url?.trim() || '';
                    onComplete(response);
                }
                case GPT_API_TYPES[6].value: {
                    // await OpenAIService.createFineTune({
                    //     training_file: ''
                    // });
                }
                case GPT_API_TYPES[7].value: {
                    // await OpenAIService.createImageEdit();
                }
                case GPT_API_TYPES[8].value: {
                    // await OpenAIService.createImageVariation({
                    //     lastModified: 0,
                    //     name: '',
                    //     webkitRelativePath: '',
                    //     size: 0,
                    //     type: '',
                    //     arrayBuffer: function (): Promise<ArrayBuffer> {
                    //         throw new Error('Function not implemented.');
                    //     },
                    //     slice: function (start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Blob {
                    //         throw new Error('Function not implemented.');
                    //     },
                    //     stream: function (): ReadableStream<Uint8Array> {
                    //         throw new Error('Function not implemented.');
                    //     },
                    //     text: function (): Promise<string> {
                    //         throw new Error('Function not implemented.');
                    //     },
                    //     prototype: undefined
                    // });
                }
                case GPT_API_TYPES[9].value: {
                    // await OpenAIService.createModeration({
                    //     input: ''
                    // });
                }
                case GPT_API_TYPES[10].value: {
                    // await OpenAIService.createTranscription({
                    // });
                }
                case GPT_API_TYPES[11].value: {
                    // await OpenAIService.createTranslation();
                }
                case GPT_API_TYPES[12].value: {
                    // await OpenAIService.deleteFile();
                }
                case GPT_API_TYPES[13].value: {
                    // await OpenAIService.deleteModel();
                }
                case GPT_API_TYPES[14].value: {
                    // await OpenAIService.downloadFile();
                }
                case GPT_API_TYPES[15].value: {
                    // await OpenAIService.listFiles();
                }
                case GPT_API_TYPES[16].value: {
                    // await OpenAIService.listFineTuneEvents();
                }
                case GPT_API_TYPES[17].value: {
                    // await OpenAIService.listFineTunes();
                }
                case GPT_API_TYPES[18].value: {
                    // await OpenAIService.listModels();
                }
                case GPT_API_TYPES[19].value: {
                    // await OpenAIService.retrieveFile();
                }
                case GPT_API_TYPES[20].value: {
                    // await OpenAIService.retrieveFineTune();
                }
                case GPT_API_TYPES[21].value: {
                    // await OpenAIService.retrieveModel();
                }
            }
        };

        setSubmitting(true);

        openAiTest().finally(() => {
            setSubmitting(false);
        });
    }, [model, onComplete, settings.type, text]);

    return (
        <CustomButton
            loading={submitting}
            disabled={submitting}
            variant="gradient"
            text={'Ask Query'}
            icon={<AiOutlineSend />}
            onClick={searchGpt}
            className={'m-2'}
        />
    );
};

export default AskQueryButton;
