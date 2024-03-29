
import * as dotenv from "dotenv";
dotenv.config();

interface IJWT {
    secret: string;
    issuer: string;
    expires: number;
    subject: string;
    algorithm: string;
}

interface IConfig {
    serverPort: string;
    saltFactor: number, 
    JWT: IJWT, 
    quotesURL: string 
    mongoURL : string 
}

const Config: IConfig = {
    serverPort: process.env.SERVER_PORT as string,
    saltFactor: Number(process.env.SALT_FACTOR), 
    JWT: {
        secret: process.env.JWT_SECRET as string,
        issuer: process.env.JWT_ISSUER as string,
        subject: process.env.JWT_SUBJECT as string,
        algorithm: process.env.JWT_ALGORITHM as string,
        expires: Number(process.env.JWT_EXPIRES)
    }, 
    quotesURL: process.env.QUOTES_URL as string,
    mongoURL  : process.env.MONGO_URL as string ,
}

export default Config;
