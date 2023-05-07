import { DEFAULT_MODEL, DEFAULT_API_TYPE } from '@/constants';
import React, { createContext, ReactNode, useState } from 'react';

interface GPTConfigs {
    model: string;
    command: string;
    subCommand?: string;
    type?: string;
}

interface GPTConfigProviderProps {
    children: ReactNode;
}

const initialGPTConfigs: GPTConfigs = {
    model: DEFAULT_MODEL,
    command: '',
    subCommand: '',
    type: DEFAULT_API_TYPE,
};

// Create the context
export const GPTConfigContext = createContext<{
    config: GPTConfigs;
    updateGPTConfigs: (newConfig: GPTConfigs) => void;
    resetGPTConfigs: () => void;
}>({
    config: initialGPTConfigs,
    updateGPTConfigs: () => {},
    resetGPTConfigs: () => {},
});

// Create a provider component to wrap your app
export const GPTConfigProvider: React.FC<GPTConfigProviderProps> = ({ children }) => {
    const [config, setConfig] = useState<GPTConfigs>(initialGPTConfigs);

    const updateGPTConfigs = (newConfig: GPTConfigs) => {
        setConfig(newConfig);
    };

    const resetGPTConfigs = () => {
        setConfig(initialGPTConfigs);
    };

    return (
        <GPTConfigContext.Provider value={{ config, updateGPTConfigs, resetGPTConfigs }}>
            {children}
        </GPTConfigContext.Provider>
    );
};
