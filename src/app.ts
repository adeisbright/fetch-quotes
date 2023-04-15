import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import httpLogger from "./common/logging/http-logger";
import Middleware from "./middleware"
import authRouter from "./features/auth/auth.routes";
import quoteRouter from "./features/quote/quote.routes";

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