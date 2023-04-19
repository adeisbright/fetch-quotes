import IQuote from "./quote.interface";
import { Schema, model } from "mongoose"; 

const quoteSchema = new Schema<IQuote>({
    content : {}
}, {
    timestamps : true
})

const Quote = model<IQuote>("quote", quoteSchema) 
export default Quote 