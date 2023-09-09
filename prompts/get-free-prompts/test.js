const data = require('./final.json');

const allPrompts = data.prompts.map(p => ({
    prompt: p.prompt,
    category: p.category,
}));

console.log(allPrompts);
