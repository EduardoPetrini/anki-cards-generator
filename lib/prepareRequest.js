const prepare = prompt => {
  if (!prompt) {
    throw new Error("prompt is empty");
  }

  return prompt;
};
