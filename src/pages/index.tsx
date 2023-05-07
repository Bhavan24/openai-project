import { SettingsContext } from '@/contexts';
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react';
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
            <Tabs id="custom-animation" value="basic">
                <TabsHeader
                    className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                    indicatorProps={{
                        className: 'bg-transparent border-b-2 border-blue-500 shadow-none rounded-none',
                    }}
                >
                    {data.map(({ label, value }) => (
                        <Tab
                            key={value}
                            value={value}
                            className="text-white"
                            onClick={() => {
                                resetSettings();
                            }}
                        >
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody
                    animate={{
                        initial: { y: 250 },
                        mount: { y: 0 },
                        unmount: { y: 250 },
                    }}
                >
                    {data.map(({ value, component }) => (
                        <TabPanel key={value} value={value} className="px-0">
                            {component}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </main>
    );
}
