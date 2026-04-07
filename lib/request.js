import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

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
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.5,
  });

  const response = await fetch(API_URL, {
    method: "POST",
    headers: headers,
    body: body,
  });

  const json = await response.json();

  console.log(JSON.stringify(json));
};

call("List the top 10 topics related to programming in ReactJS. Format the answer with the topic title, explanation and an example.").catch(console.error);
