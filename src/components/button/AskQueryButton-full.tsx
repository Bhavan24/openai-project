import { OpenAIService } from '@/config';
import { GPT_API_TYPES } from '@/constants';
import { GPTConfigContext, SettingsContext } from '@/contexts';
import React, { useCallback, useContext, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { CustomButton } from '../custom';

interface AskQueryButtonProps {
    model: string;
    text: string;
    onComplete: Function;
}

const AskQueryButton: React.FC<AskQueryButtonProps> = ({ model, text, onComplete }) => {
    const { settings } = useContext(SettingsContext);
    const { config } = useContext(GPTConfigContext);

    const [submitting, setSubmitting] = useState<boolean>(false);

    const searchGpt = useCallback(() => {
        const openAiTest = async () => {
            switch (settings.type) {
                case GPT_API_TYPES[0].value: {
                    const { data } = await OpenAIService.createCompletion({
                        model: model,
                        prompt: text.trim(),
                        suffix: config.completion.suffix,
                        max_tokens: config.completion.max_tokens,
                        temperature: config.completion.temperature,
                        top_p: config.completion.top_p,
                        n: config.completion.n,
                        // stream: config.completion.stream,
                        // logprobs: config.completion.logprobs,
                        // echo: config.completion.echo,
                        // stop: config.completion.stop,
                        // presence_penalty: config.completion.presence_penalty,
                        // frequency_penalty: config.completion.frequency_penalty,
                        // best_of: config.completion.best_of,
                        // user: config.completion.user,
                    });

                    const response = data.choices[0].text?.trim() || '';
                    onComplete(response);
                    break;
                }
                case GPT_API_TYPES[1].value: {
                    await OpenAIService.createChatCompletion({
                        model: model, // 'gpt-3.5-turbo'
                        messages: [{ role: 'user', content: text.trim() }],
                    });
                    break;
                }
                case GPT_API_TYPES[2].value: {
                    await OpenAIService.createEdit({
                        model: '',
                        instruction: '',
                    });
                    break;
                }
                case GPT_API_TYPES[3].value: {
                    await OpenAIService.createEmbedding({
                        model: '',
                        input: '',
                    });
                    break;
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
                    break;
                }
                case GPT_API_TYPES[6].value: {
                    // await OpenAIService.createFineTune({
                    //     training_file: ''
                    // });
                    break;
                }
                case GPT_API_TYPES[7].value: {
                    // await OpenAIService.createImageEdit();
                    break;
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
                    break;
                }
                case GPT_API_TYPES[9].value: {
                    // await OpenAIService.createModeration({
                    //     input: ''
                    // });
                    break;
                }
                case GPT_API_TYPES[10].value: {
                    // await OpenAIService.createTranscription({
                    // });
                    break;
                }
                case GPT_API_TYPES[11].value: {
                    // await OpenAIService.createTranslation();
                    break;
                }
                case GPT_API_TYPES[12].value: {
                    // await OpenAIService.deleteFile();
                    break;
                }
                case GPT_API_TYPES[13].value: {
                    // await OpenAIService.deleteModel();
                    break;
                }
                case GPT_API_TYPES[14].value: {
                    // await OpenAIService.downloadFile();
                    break;
                }
                case GPT_API_TYPES[15].value: {
                    // await OpenAIService.listFiles();
                    break;
                }
                case GPT_API_TYPES[16].value: {
                    // await OpenAIService.listFineTuneEvents();
                    break;
                }
                case GPT_API_TYPES[17].value: {
                    // await OpenAIService.listFineTunes();
                    break;
                }
                case GPT_API_TYPES[18].value: {
                    // await OpenAIService.listModels();
                    break;
                }
                case GPT_API_TYPES[19].value: {
                    // await OpenAIService.retrieveFile();
                    break;
                }
                case GPT_API_TYPES[20].value: {
                    // await OpenAIService.retrieveFineTune();
                    break;
                }
                case GPT_API_TYPES[21].value: {
                    // await OpenAIService.retrieveModel();
                    break;
                }
            }
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
    }, [model, onComplete, settings, config, text]);

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
