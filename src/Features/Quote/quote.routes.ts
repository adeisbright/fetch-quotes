import { Router } from "express" 
import quoteController from "./quote.controller"
import validateToken from "../../middleware/validate-token"

const {
   getQuote,
   getStoredQuotes
} = quoteController

const quoteRouter = Router() 

quoteRouter.use(validateToken)
quoteRouter.get("/quote",  getQuote)
quoteRouter.get("/quotes",  getStoredQuotes)
export default quoteRouter
