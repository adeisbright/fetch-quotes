import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";

const app: express.Application = express();

app.use(compression());
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

export default app 