import { NextFunction , Request , Response } from "express" 
import ApplicationError from "../../common/error-handler/ApplicationError"
import axios from "axios";
import Config from "../../config"

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
}

export default new QuoteController()