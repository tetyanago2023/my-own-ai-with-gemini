import { config } from "dotenv"
config()

import { GoogleGenerativeAI } from "@google/generative-ai"
// const genAI = new GoogleGenerativeAI(process.env.API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//
// const prompt = "Write a story about a magic backpack.";
//
// const result = await model.generateContent(prompt);
// console.log(result.response.text());

// [START text_gen_text_only_prompt_streaming]
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // const prompt = "Write a code in Javascript to generate a random number between 1 and 10.";
    const prompt = "Write a code in Ruby to generate a random number between 1 and 10.";

    const result = await model.generateContentStream(prompt);

    // Print text as it comes in.
    for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        process.stdout.write(chunkText);
    }
    // [END text_gen_text_only_prompt_streaming]