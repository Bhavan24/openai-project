import { GPTConfigContext } from '@/contexts';
import { Card, Input, Popover, PopoverContent, PopoverHandler, Tooltip, Typography } from '@material-tailwind/react';
import React, { useContext } from 'react';

interface CompletionFormProps {}

const CompletionForm: React.FC<CompletionFormProps> = () => {
    const { config, updateGPTConfigs } = useContext(GPTConfigContext);

    return (
        <Card color="transparent" shadow={false}>
            <div className="mb-2">
                <Typography variant="h5" color="white" className="my-2">
                    Completion
                </Typography>
                <a
                    href="https://platform.openai.com/docs/api-reference/completions/create"
                    target="_blank"
                    rel="noreferrer"
                >
                    Click here for Documentation
                </a>
            </div>
            <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="mb-4 flex flex-col gap-6">
                    <Input
                        value={String(config.completion.suffix)}
                        label="suffix"
                        onChange={event => {
                            const text = event.target.value;
                            updateGPTConfigs({
                                ...config,
                                completion: { ...config.completion, suffix: String(text) },
                            });
                        }}
                    />
                    <Input
                        value={String(config.completion.max_tokens)}
                        label="max_tokens"
                        type="number"
                        onChange={event => {
                            const text = event.target.value;
                            updateGPTConfigs({
                                ...config,
                                completion: { ...config.completion, max_tokens: Number(text) },
                            });
                        }}
                    />
                    <Input
                        value={String(config.completion.temperature)}
                        label="temperature"
                        type="number"
                        onChange={event => {
                            const text = event.target.value;
                            updateGPTConfigs({
                                ...config,
                                completion: { ...config.completion, temperature: Number(text) },
                            });
                        }}
                    />
                    <Input
                        value={String(config.completion.top_p)}
                        label="top_p"
                        type="number"
                        onChange={event => {
                            const text = event.target.value;
                            updateGPTConfigs({ ...config, completion: { ...config.completion, top_p: Number(text) } });
                        }}
                    />
                </div>
                <div className="mb-4 flex flex-col gap-6">
                    <Input
                        value={String(config.completion.n)}
                        label="n"
                        type="number"
                        onChange={event => {
                            const text = event.target.value;
                            updateGPTConfigs({ ...config, completion: { ...config.completion, n: Number(text) } });
                        }}
                    />
                    <Input
                        value={String(config.completion.stream)}
                        label="stream"
                        onChange={event => {
                            const text = event.target.value;
                            updateGPTConfigs({
                                ...config,
                                completion: { ...config.completion, stream: Boolean(text) },
                            });
                        }}
                    />
                    <Input
                        value={String(config.completion.logprobs)}
                        label="logprobs"
                        type="number"
                        onChange={event => {
                            const text = event.target.value;
                            updateGPTConfigs({
                                ...config,
                                completion: { ...config.completion, logprobs: Number(text) },
                            });
                        }}
                    />
                    <Input
                        value={String(config.completion.echo)}
                        label="echo"
                        onChange={event => {
                            const text = event.target.value;
                            updateGPTConfigs({ ...config, completion: { ...config.completion, echo: Boolean(text) } });
                        }}
                    />
                </div>
                <div className="mb-4 flex flex-col gap-6">
                    <Input
                        value={String(config.completion.stop)}
                        label="stop"
                        onChange={event => {
                            const text = event.target.value;
                            updateGPTConfigs({ ...config, completion: { ...config.completion, stop: String(text) } });
                        }}
                    />
                    <Input
                        value={String(config.completion.presence_penalty)}
                        label="presence_penalty"
                        type="number"
                        onChange={event => {
                            const text = event.target.value;
                            updateGPTConfigs({
                                ...config,
                                completion: { ...config.completion, presence_penalty: Number(text) },
                            });
                        }}
                    />
                    <Input
                        value={String(config.completion.presence_penalty)}
                        type="number"
                        label="frequency_penalty"
                        onChange={event => {
                            const text = event.target.value;
                            updateGPTConfigs({
                                ...config,
                                completion: { ...config.completion, frequency_penalty: Number(text) },
                            });
                        }}
                    />
                    <Input
                        value={String(config.completion.best_of)}
                        type="number"
                        label="best_of"
                        onChange={event => {
                            const text = event.target.value;
                            updateGPTConfigs({
                                ...config,
                                completion: { ...config.completion, best_of: Number(text) },
                            });
                        }}
                    />
                    <Input
                        value={String(config.completion.user)}
                        label="user"
                        onChange={event => {
                            const text = event.target.value;
                            updateGPTConfigs({
                                ...config,
                                completion: { ...config.completion, user: String(text) },
                            });
                        }}
                    />
                </div>
            </div>
        </Card>
    );
};

export default CompletionForm;
