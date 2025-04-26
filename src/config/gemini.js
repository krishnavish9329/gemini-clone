//const apiKey ="AIzaSyBZU7vdaic9GWkL-_n8yfHR20a-wT62dHo";

// To run this code you need to install the following dependencies:
// npm install @google/genai mime

const { GoogleGenAI } = require('@google/genai');

async function main(prompt) {
  const ai = new GoogleGenAI({
    apiKey: "AIzaSyBZU7vdaic9GWkL-_n8yfHR20a-wT62dHo",
  });

  const config = {
    thinkingConfig: {
      thinkingBudget: 0,
    },
    responseMimeType: 'text/plain',
  };

  const model = 'gemini-2.5-pro-preview-03-25';

  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  for await (const chunk of response) {
    console.log(chunk.text);
  }
}

export default main;
