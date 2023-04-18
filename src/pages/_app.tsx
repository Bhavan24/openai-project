import type { AppProps } from 'next/app';
import Head from 'next/head';
import './globals.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Bhavan GPT</title>
            </Head>
            <Component {...pageProps} className="bg-gray-900" />
        </>
    );
}
