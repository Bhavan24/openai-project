import { Typography } from '@material-tailwind/react';
import Link from 'next/link';
import React from 'react';

export default function Dashboard() {
    return (
        <>
            <div className="flex flex-col m-4">
                <a href="/advanced">Advanced Page</a>
                <a href="/basic">Basic Page</a>
            </div>
        </>
    );
}
