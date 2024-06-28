import { createOpenAI } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { productSchema } from "./productSchema";

import { prompt } from "./prompt";

export const maxDuration = 30;

const openai = createOpenAI({ apiKey: 'sk-proj-f3mkT4FIwtrViyRI3b1CT3BlbkFJtSTxIMy5eTNfDeFigqXE' })

export async function returnData(image) {
  try {
    const { object } = await generateObject({
      model: openai('gpt-4-turbo'),
      maxTokens: 512,
      schema: productSchema,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: prompt()
            },
            {
              type: 'image',
              image: image
            }
          ]
        }
      ]
    })
    return object;

  } catch (e) {
    throw new Error(e.message);
  };
};
