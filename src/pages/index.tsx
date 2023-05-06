import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react';
import AdvancedPage from './advanced';
import BasicPage from './basic';

export default function Dashboard() {
    const data = [
        {
            label: 'Noob',
            value: 'basic',
            desc: <BasicPage />,
        },
        {
            label: 'Pro',
            value: 'advanced',
            desc: <AdvancedPage />,
        },
    ];

    return (
        <main className="h-full p-2 m-2">
            <Tabs id="custom-animation" value="basic">
                <TabsHeader
                    className="bg-transparent"
                    indicatorProps={{
                        className: 'bg-blue-500/10 shadow-blue text-blue-500',
                    }}
                >
                    {data.map(({ label, value }) => (
                        <Tab key={value} value={value} className="text-white">
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
                    {data.map(({ value, desc }) => (
                        <TabPanel key={value} value={value} className="px-0">
                            {desc}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </main>
    );
}
