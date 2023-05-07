import { DEFAULT_MODEL } from '@/constants';
import React, { createContext, ReactNode, useState } from 'react';

// Define the type for your settings
interface Settings {
    model: string;
    command: string;
    subCommand?: string;
}

interface SettingsProviderProps {
    children: ReactNode;
}

// Create the initial settings
const initialSettings: Settings = {
    model: DEFAULT_MODEL,
    command: '',
    subCommand: '',
};

// Create the context
export const SettingsContext = createContext<{
    settings: Settings;
    updateSettings: (newSettings: Settings) => void;
    resetSettings: () => void;
}>({
    settings: initialSettings,
    updateSettings: () => {},
    resetSettings: () => {},
});

// Create a provider component to wrap your app
export const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
    const [settings, setSettings] = useState<Settings>(initialSettings);

    // Function to update the settings
    const updateSettings = (newSettings: Settings) => {
        setSettings(newSettings);
    };

    const resetSettings = () => {
        setSettings(initialSettings);
    };

    return (
        <SettingsContext.Provider value={{ settings, updateSettings, resetSettings }}>
            {children}
        </SettingsContext.Provider>
    );
};
