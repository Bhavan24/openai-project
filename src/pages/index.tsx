import { SettingsContext } from '@/contexts';
import { Tabs } from '@mantine/core';
import { useContext } from 'react';
import AdvancedPage from './advanced';
import BasicPage from './basic';
import CodePage from './code';

export default function Dashboard() {
    const { resetSettings } = useContext(SettingsContext);

    const data = [
        {
            label: 'Basic',
            value: 'basic',
            component: <BasicPage />,
        },
        {
            label: 'Code',
            value: 'code',
            component: <CodePage />,
        },
        {
            label: 'Pro',
            value: 'advanced',
            component: <AdvancedPage />,
        },
    ];

    return (
        <main className="h-full p-2 m-2">
            <Tabs defaultValue="basic">
                <Tabs.List grow>
                    {data.map(({ label, value }) => (
                        <Tabs.Tab
                            key={value}
                            value={value}
                            onClick={() => {
                                resetSettings();
                            }}
                        >
                            {label}
                        </Tabs.Tab>
                    ))}
                </Tabs.List>

                {data.map(({ value, component }) => (
                    <Tabs.Panel key={value} value={value} pt="xs">
                        {component}
                    </Tabs.Panel>
                ))}
            </Tabs>
        </main>
    );
}
