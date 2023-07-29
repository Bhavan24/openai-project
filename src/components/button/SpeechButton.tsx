import { ActionIcon } from '@mantine/core';
import { useEffect } from 'react';
import * as Icons from 'react-icons/ri';
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SpeechButton = ({ onChange }: any) => {
    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    useEffect(() => {
        if (listening && transcript) {
            onChange(transcript);
        }
    }, [listening, onChange, transcript]);

    if (!browserSupportsSpeechRecognition) {
        return <Icons.RiMicOffFill />;
    }

    return (
        <ActionIcon
            onClick={() => {
                if (listening) {
                    SpeechRecognition.stopListening();
                    resetTranscript();
                } else {
                    SpeechRecognition.startListening({ continuous: true });
                }
            }}
        >
            {listening ? <Icons.RiMicFill /> : <Icons.RiMicLine />}
        </ActionIcon>
    );
};
export default SpeechButton;
