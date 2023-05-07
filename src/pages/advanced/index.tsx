import {
    ChatBubbleBottomCenterTextIcon,
    PencilSquareIcon,
    PhotoIcon,
    QuestionMarkCircleIcon,
    UserCircleIcon,
    FilmIcon,
    MicrophoneIcon,
    DocumentTextIcon,
    InformationCircleIcon,
} from '@heroicons/react/24/solid';
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react';
import React from 'react';
import { CompletionComponent } from './components';

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
            desc: <CompletionComponent />,
        },
        {
            label: 'Edits',
            value: 'edits',
            icon: PencilSquareIcon,
            desc: <CompletionComponent />,
        },
        {
            label: 'Images',
            value: 'images',
            icon: PhotoIcon,
            desc: <CompletionComponent />,
        },
        {
            label: 'Embeddings',
            value: 'embeddings',
            icon: FilmIcon,
            desc: <CompletionComponent />,
        },
        {
            label: 'Audio',
            value: 'audio',
            icon: MicrophoneIcon,
            desc: <CompletionComponent />,
        },
        {
            label: 'Files',
            value: 'files',
            icon: DocumentTextIcon,
            desc: <CompletionComponent />,
        },
        {
            label: 'Fine-tunes',
            value: 'fine-tunes',
            icon: InformationCircleIcon,
            desc: <CompletionComponent />,
        },
    ];
    return (
        <Tabs value="dashboard" orientation="vertical">
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
