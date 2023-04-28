import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    organization: 'org-AaKtYyKnQ1SVLLFSewaUBFTs',
    apiKey: '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',
});

const openai = new OpenAIApi(configuration);

console.log('OpenAI configured.');

export default openai;
