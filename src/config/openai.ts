import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    organization: 'org-UTxfWV3VCM6Oxk1LOHZMN0mH',
    apiKey: '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',
});

const openai = new OpenAIApi(configuration);

console.log('OpenAI configured.');

export default openai;
