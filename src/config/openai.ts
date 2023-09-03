import { Configuration, OpenAIApi } from 'openai';

const apiKey = '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';

const configuration = new Configuration({
    apiKey,
});

const openai = new OpenAIApi(configuration);

console.log('OpenAI configured.');

export default openai;
