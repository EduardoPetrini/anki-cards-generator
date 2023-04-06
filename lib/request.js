import fetch from "node-fetch";

const { API_URL = "https://api.openai.com/v1/chat/completions", API_TOKEN, API_ORG } = process.env;

export const call = async prompt => {
  const meta = {
    apiKey: API_TOKEN,
    organization: API_ORG,
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${meta.apiKey}`,
  };

  const body = JSON.stringify({
    "model": "gpt-3.5-turbo",
    prompt: prompt,
    max_tokens: 50,
    temperature: 0.5,
    n: 1,
    stop: "\n",
  });

  const response = await fetch(API_URL, {
    method: "POST",
    headers: headers,
    body: body,
  });

  const json = await response.json();

  console.log(JSON.stringify(json));
};

// call("hey chat, good night").catch(console.error);
