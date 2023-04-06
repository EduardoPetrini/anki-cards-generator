import { Configuration, OpenAIApi } from "openai";

const { API_URL, API_TOKEN, API_ORG } = process.env;

export const call = async prompt => {
  const configuration = new Configuration({
    apiKey: API_TOKEN,
    organization: API_ORG,
  });

  const openai = new OpenAIApi(configuration);

  const options = {
    temperature: 0.5,
    max_tokens: 50,
    frequency_penalty: 0,
    presence_penalty: 0,
  };

  const completionRequest = {
    prompt: prompt,
    max_tokens: options.max_tokens,
    temperature: options.temperature,
    n: 1,
    stop: "\n",
    frequency_penalty: options.frequency_penalty,
    presence_penalty: options.presence_penalty,
  };

  const newConfig = {
    model: "text-davinci-003",
    prompt: "You: How do I combine arrays?\nJavaScript chatbot: You can use the concat() method.\nYou: How do you make an alert appear after 10 seconds?\nJavaScript chatbot",
    temperature: 0,
    max_tokens: 150,
    top_p: 1.0,
    frequency_penalty: 0.5,
    presence_penalty: 0.0,
    stop: ["You:"],
  };
  const response = await openai.createChatCompletion(newConfig);

  console.log(JSON.stringify(response));
};

call("hey chat, good night").catch(console.error);
