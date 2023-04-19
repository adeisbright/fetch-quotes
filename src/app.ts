import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import httpLogger from "./common/logging/http-logger";
import Middleware from "./middleware"
import authRouter from "./features/auth/auth.routes";
import quoteRouter from "./features/quote/quote.routes";
import CompletionServices from "./features/openai-completion/completion.services";
const app: express.Application = express();


(async () => {
    const prompt = "Mention atleast 8 countries in Africa"
    const result = await CompletionServices.complete(prompt) 
    if (result.hasError) {
        console.log("There is an error with the result") 
        console.log(result.data)
        return 
    }
    console.log(result.data)
})()

app.use(compression());
app.use(express.json());
app.use(helmet());
app.use(httpLogger);
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(authRouter)
app.use(quoteRouter)
app.use(Middleware.errorHandler);

export default app 