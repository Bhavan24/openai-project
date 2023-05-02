import { Switch } from '@material-tailwind/react';
import { useState } from 'react';
import AdvancedPage from './advanced';
import BasicPage from './basic';

export default function Dashboard() {
    const [displayMode, setDisplayMode] = useState(false);

    return (
        <div className="p-2">
            <div className="m-2">
                <div className="flex justify-end mx-4">
                    <Switch
                        onChange={e => setDisplayMode(e.target.checked)}
                        label={displayMode ? 'Advanced Mode' : 'Basic Mode'}
                    />
                </div>
                {displayMode ? <AdvancedPage /> : <BasicPage />}
            </div>
        </div>
    );
}
