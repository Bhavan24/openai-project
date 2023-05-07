import React, { createContext, ReactNode, useState } from 'react';

interface CompletionConfig {
    suffix?: string | null;
    max_tokens?: number | null;
    temperature?: number | null;
    top_p?: number | null;
    n?: number | null;
    stream?: boolean | null;
    logprobs?: number | null;
    echo?: boolean | null;
    stop?: string | null;
    presence_penalty?: number | null;
    frequency_penalty?: number | null;
    best_of?: number | null;
    user?: string;
}

interface GPTConfigs {
    completion: CompletionConfig;
}

interface GPTConfigProviderProps {
    children: ReactNode;
}

const initialGPTConfigs: GPTConfigs = {
    completion: {
        suffix: '',
        max_tokens: 2048,
        temperature: 0.5,
        top_p: 1,
        n: 1,
        stream: true,
        logprobs: 1,
        echo: true,
        stop: '',
        presence_penalty: 1,
        frequency_penalty: 1,
        best_of: 1,
        user: '',
    },
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
