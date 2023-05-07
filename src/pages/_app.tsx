import { SettingsProvider } from '@/contexts';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import './globals.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Bhavan GPT</title>
            </Head>
            <SettingsProvider>
                <Component {...pageProps} className="bg-gray-900" />
            </SettingsProvider>
        </>
    );
}
