import { OpenAIService } from '@/config';
import React, { useCallback, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { CustomButton } from '../custom';

interface AskQueryButtonProps {
    model: string;
    text: string;
    onComplete: Function;
}

const AskQueryButton: React.FC<AskQueryButtonProps> = ({ model, text, onComplete }) => {
    const [submitting, setSubmitting] = useState<boolean>(false);

    const searchGpt = useCallback(() => {
        const openAiTest = async () => {
            const { data } = await OpenAIService.createCompletion({
                model: model,
                prompt: text.trim(),
                max_tokens: 2048,
                n: 1,
                stop: '',
                temperature: 0.5,
            });

            // await OpenAIService.createChatCompletion({
            //     model: '',
            //     messages: []
            // });

            // await OpenAIService.createEdit({
            //     model: '',
            //     instruction: ''
            // });

            // await OpenAIService.createEmbedding({
            //     model: '',
            //     input: ''
            // });

            // await OpenAIService.createFile({});

            // await OpenAIService.createImage({
            //     prompt: ''
            // });

            // await OpenAIService.createFineTune({
            //     training_file: ''
            // });

            // await OpenAIService.createImageEdit();

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

            // await OpenAIService.createModeration({
            //     input: ''
            // });

            // await OpenAIService.createTranscription({

            // });

            // await OpenAIService.createTranslation();

            // await OpenAIService.deleteFile();

            // await OpenAIService.deleteModel();

            // await OpenAIService.downloadFile();

            // await OpenAIService.listFiles();

            // await OpenAIService.listFineTuneEvents();

            // await OpenAIService.listFineTunes();

            // await OpenAIService.listModels();

            // await OpenAIService.retrieveFile();

            // await OpenAIService.retrieveFineTune();

            // await OpenAIService.retrieveModel();

            const response = data.choices[0].text?.trim() || '';
            onComplete(response);
        };

        setSubmitting(true);
        openAiTest().finally(() => {
            setSubmitting(false);
        });
    }, [model, onComplete, text]);

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
