import winston from "winston";
import path from "path";
import { StreamOptions } from "morgan";

const infoFile = path.join("./", "/logs/info.log");

const streamLogger = winston.createLogger({
    transports: [
        new winston.transports.File({
            filename: infoFile,
            level: "info"
        })
    ]
});

const stream: StreamOptions = {
    write: (message: string) => streamLogger.info(message)
};

export default stream;
