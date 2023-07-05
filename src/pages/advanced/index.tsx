import {
    AudioComponent,
    ChatComponent,
    CompletionComponent,
    EditsComponent,
    EmbeddingsComponent,
    FilesComponent,
    FineTunesComponent,
    ImagesComponent,
} from '@/components';
import {
    ChatBubbleBottomCenterTextIcon,
    DocumentTextIcon,
    FilmIcon,
    InformationCircleIcon,
    MicrophoneIcon,
    PencilSquareIcon,
    PhotoIcon,
    QuestionMarkCircleIcon,
} from '@heroicons/react/24/solid';
import { Tabs } from '@mantine/core';
import React from 'react';

export default function AdvancedPage() {
    const data = [
        {
            label: 'Completions',
            value: 'completions',
            icon: QuestionMarkCircleIcon,
            desc: <CompletionComponent />,
        },
        {
            label: 'Chat',
            value: 'chat',
            icon: ChatBubbleBottomCenterTextIcon,
            desc: <ChatComponent />,
        },
        {
            label: 'Edits',
            value: 'edits',
            icon: PencilSquareIcon,
            desc: <EditsComponent />,
        },
        {
            label: 'Images',
            value: 'images',
            icon: PhotoIcon,
            desc: <ImagesComponent />,
        },
        {
            label: 'Embeddings',
            value: 'embeddings',
            icon: FilmIcon,
            desc: <EmbeddingsComponent />,
        },
        {
            label: 'Audio',
            value: 'audio',
            icon: MicrophoneIcon,
            desc: <AudioComponent />,
        },
        {
            label: 'Files',
            value: 'files',
            icon: DocumentTextIcon,
            desc: <FilesComponent />,
        },
        {
            label: 'Fine-tunes',
            value: 'fine-tunes',
            icon: InformationCircleIcon,
            desc: <FineTunesComponent />,
        },
    ];

    return (
        <Tabs defaultValue="completions" orientation="vertical">
            <Tabs.List grow>
                {data.map(({ label, value, icon }) => (
                    <Tabs.Tab key={value} value={value}>
                        <div className="flex gap-2 align-center">
                            {React.createElement(icon, { className: 'w-5 h-5' })}
                            {label}
                        </div>
                    </Tabs.Tab>
                ))}
            </Tabs.List>

            {data.map(({ value, desc }) => (
                <Tabs.Panel key={value} value={value} className="py-0">
                    <div className="p-5 overflow-y-scroll h-[85vh]">{desc}</div>
                </Tabs.Panel>
            ))}
        </Tabs>
    );
}
