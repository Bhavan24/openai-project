import { Configuration, OpenAIApi } from 'openai';

const apiKey = Buffer.from('c2stZlZIbk9iV3NLc3lIYXRMQmlnbjFUM0JsYmtGSm9xY0FpdzlLazN3VGNWeWhsS2ZM', 'base64').toString();

const configuration = new Configuration({
    apiKey,
});

const openai = new OpenAIApi(configuration);

console.log('OpenAI configured.');

export default openai;
