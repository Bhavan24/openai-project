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
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react';
import React from 'react';
import {
    AudioComponent,
    ChatComponent,
    CompletionComponent,
    EditsComponent,
    EmbeddingsComponent,
    FilesComponent,
    FineTunesComponent,
    ImagesComponent,
} from './components';

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
        <Tabs value="completions" orientation="vertical">
            <TabsHeader
                className="w-[20em] bg-transparent"
                indicatorProps={{
                    className: 'bg-blue-500/10 shadow-blue text-blue-500',
                }}
            >
                {data.map(({ label, value, icon }) => (
                    <Tab key={value} value={value} className="place-items-start text-blue-300">
                        <div className="flex items-center gap-2">
                            {React.createElement(icon, { className: 'w-5 h-5' })}
                            {label}
                        </div>
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value} className="py-0">
                        {desc}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}
