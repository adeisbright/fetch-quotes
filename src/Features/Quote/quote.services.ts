import IQuote from "./quote.interface"
import Quote from "./quote.model"

export const addQuote = async( quote: IQuote) => {
    try {
        const result = await Quote.create(quote) 
        return {
            data: result, 
            hasError: false,
            message : "Ok"
        }
    } catch (error: any) {
        return {
            hasError: true, 
            message: error.message, 
            data : {}
        }
    }
}

export const getQuotes  = async() => {
    try {
        const result = await Quote.find({}) 
        return {
            data: result, 
            hasError: false,
            message : "Ok"
        }
    } catch (error: any) {
        return {
            hasError: true, 
            message: error.message, 
            data : {}
        }
    }
}