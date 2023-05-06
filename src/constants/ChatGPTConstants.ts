export const CUSTOM_GPT_OPTIONS = [
    { value: '', label: 'Default' },
    { value: 'add comments to the below code.', label: 'Add Code Comments' },
    { value: 'refactor the below code.', label: 'Refactor Code' },
    { value: 'explain the below code.', label: 'Explain Code' },
    { value: 'find the bugs in the below code.', label: 'Find Code Bugs' },
    { value: 'provide documentation for the below code.', label: 'Document Code' },
    { value: 'compile and run the below code.', label: 'Compile & Run Code' },
    { value: 'add unit test for the below code.', label: 'Add Unit Test' },
    { value: 'convert the below code to ', label: 'Convert Code' },
    { value: 'translate the below sentance to ', label: 'Translate' },
    { value: 'what is the meaning of', label: 'Find Meaning' },
    { value: 'paraphrase the below paragraph.', label: 'Paraphrase' },
    { value: 'simplify the below paragraph.', label: 'Simplify Complex Paragraph' },
    { value: 'write an essay on the below topic.', label: 'Write an essay' },
    { value: 'write an article on the below topic.', label: 'Write an article' },
];

export const GPT_API_TYPES = [
    { value: 'create_completion', label: 'Create completion' },
    { value: 'create_chat_completion', label: 'Create chat completion' },
    { value: 'create_edit', label: 'Create edit' },
    { value: 'create_embedding', label: 'Create embedding' },
    { value: 'create_file', label: 'Create file' },
    { value: 'create_image', label: 'Create image' },
    { value: 'create_finetune', label: 'Create finetune' },
    { value: 'create_image_edit', label: 'Create image edit' },
    { value: 'create_image_variation', label: 'Create image variation' },
    { value: 'create_moderation', label: 'Create moderation' },
    { value: 'create_transcription', label: 'Create transcription' },
    { value: 'create_translation', label: 'Create translation' },
    { value: 'delete_file', label: 'Delete file' },
    { value: 'delete_model', label: 'Delete model' },
    { value: 'download_file', label: 'Download file' },
    { value: 'list_files', label: 'List files' },
    { value: 'list_finetune_events', label: 'List finetune events' },
    { value: 'list_finetunes', label: 'List finetunes' },
    { value: 'list_models', label: 'List models' },
    { value: 'retrieve_file', label: 'Retrieve file' },
    { value: 'retrieve_finetune', label: 'Retrieve finetune' },
    { value: 'retrieve_model', label: 'Retrieve model' },
];

export const CUSTOM_GPT_MODELS = [
    'babbage',
    'davinci',
    'text-davinci-edit-001',
    'babbage-code-search-code',
    'text-similarity-babbage-001',
    'code-davinci-edit-001',
    'text-davinci-001',
    'ada',
    'babbage-code-search-text',
    'babbage-similarity',
    'code-search-babbage-text-001',
    'text-curie-001',
    'code-search-babbage-code-001',
    'text-ada-001',
    'text-embedding-ada-002',
    'text-similarity-ada-001',
    'curie-instruct-beta',
    'gpt-3.5-turbo',
    'ada-code-search-code',
    'ada-similarity',
    'code-search-ada-text-001',
    'text-search-ada-query-001',
    'gpt-3.5-turbo-0301',
    'davinci-search-document',
    'ada-code-search-text',
    'text-search-ada-doc-001',
    'davinci-instruct-beta',
    'text-similarity-curie-001',
    'code-search-ada-code-001',
    'ada-search-query',
    'text-search-davinci-query-001',
    'curie-search-query',
    'davinci-search-query',
    'babbage-search-document',
    'ada-search-document',
    'text-search-curie-query-001',
    'whisper-1',
    'text-search-babbage-doc-001',
    'curie-search-document',
    'text-search-curie-doc-001',
    'babbage-search-query',
    'text-babbage-001',
    'text-search-davinci-doc-001',
    'text-search-babbage-query-001',
    'curie-similarity',
    'curie',
    'text-davinci-003',
    'text-similarity-davinci-001',
    'text-davinci-002',
    'davinci-similarity',
    'cushman:2020-05-03',
    'ada:2020-05-03',
    'babbage:2020-05-03',
    'curie:2020-05-03',
    'davinci:2020-05-03',
    'if-davinci-v2',
    'if-curie-v2',
    'if-davinci:3.0.0',
    'davinci-if:3.0.0',
    'davinci-instruct-beta:2.0.0',
    'text-ada:001',
    'text-davinci:001',
    'text-curie:001',
    'text-babbage:001',
];

export const DEFAULT_MODEL = 'text-davinci-003';

export const getFinalCommand = (command: string, subCommand: string, text: string): string => {
    return command ? `${command} ${subCommand || ''} <|endofprompt|>  \n\n  ${text}` : `${text}`;
};
