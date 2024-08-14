import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: "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", 
  dangerouslyAllowBrowser: true,
});

export default openai;
