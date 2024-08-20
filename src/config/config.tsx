import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.API_KEY)

export default async function GeneratePromptAI (textPrompt : string){
    try{
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

        // const prompt = "Hola"
      
        const result = await model.generateContent(textPrompt);
        const response = await result.response;
        const text = response.text();
        console.log(text);
        return{
            content: text
        }
    }
    catch(error){
        console.log('Error:',error)
    }
}