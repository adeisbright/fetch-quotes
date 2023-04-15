import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import httpLogger from "./Common/logging/http-logger";
import Middleware from "./Middleware"
import authRouter from "./Features/Auth/auth.routes";
import quoteRouter from "./Features/Quote/quote.routes";

const app: express.Application = express();

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