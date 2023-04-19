import { NextFunction , Request , Response } from "express" 
import ApplicationError from "../../common/error-handler/ApplicationError"
import axios from "axios";
import Config from "../../config"
import { addQuote, getQuotes } from "./quote.services";

class QuoteController {
    async getQuote(
        req: Request, 
        res: Response, 
        next : NextFunction
    ) {
        try {
            const quotes = await axios.get(Config.quotesURL) 

            let randomQuote: Record<string, any> = {}

            if (Array.isArray(quotes.data)) {
                const quoteData = quotes.data
                randomQuote = quoteData[Math.floor(Math.random()*quoteData.length + 1)]
            }
            //Store quote 
            await addQuote({content : randomQuote})
            res.status(200).json({
                message: `Quote retrieved successfully`, 
                success: true, 
                statusCode: 200, 
                data: {
                    quote : randomQuote
                }
            })
        } catch (error: any) {
            return next(new ApplicationError(error))
        }
    }

    async getStoredQuotes(
        req: Request, 
        res: Response, 
        next : NextFunction
    ) {
        try {
            const quotes = await getQuotes()
            if (quotes.hasError) {
                throw new Error(quotes.message)
            }
            
            res.status(200).json({
                message: `Quotes retrieved successfully`, 
                success: true, 
                statusCode: 200, 
                data:quotes.data
            })
        } catch (error: any) {
            return next(new ApplicationError(error))
        }
    }
}

export default new QuoteController()