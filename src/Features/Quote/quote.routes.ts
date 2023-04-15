import { Router } from "express" 
import quoteController from "./quote.controller"
import validateToken from "../../middleware/validate-token"

const {
   getQuote
} = quoteController

const quoteRouter = Router() 

quoteRouter.get("/quote", validateToken, getQuote)

export default quoteRouter
