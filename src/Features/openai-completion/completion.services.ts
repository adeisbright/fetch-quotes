import openai from "../../loader/openai-loader";

export default class CompletionServices {
    static async complete(prompt : string ) {
        try {
            const response = await openai.createCompletion({
                model: "text-davinci-003",
                prompt,
                temperature: 0,
                max_tokens: 7,
            });

            return {
                hasError: false,
                data: response,
                message : "Ok"
            }
        } catch (error: any) {
            return {
                hasError: true,
                data: {}, 
                message : error.message
            }
        }
    }
}