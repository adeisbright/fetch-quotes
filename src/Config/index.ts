
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
    quotesURL : string
}
// SERVER_PORT=3800
// NODE_ENV=development
// SALT_FACTOR=10
// JWT_ISSUER=sbsc
// JWT_EXPIRES=864000
// JWT_ALGORITHM=HS512
// JWT_SECRET=20202022$&\*%^NCHDJ803--SKS87365
// JWT_SUBJECT=authorization
// QUOTES_URL=https://type.fit/api/quotes
// const Config: IConfig = {
//     serverPort: process.env.SERVER_PORT as string,
//     saltFactor: Number(process.env.SALT_FACTOR), 
//     JWT: {
//         secret: process.env.JWT_SECRET as string,
//         issuer: process.env.JWT_ISSUER as string,
//         subject: process.env.JWT_SUBJECT as string,
//         algorithm: process.env.JWT_ALGORITHM as string,
//         expires: Number(process.env.JWT_EXPIRES)
//     }, 
//     quotesURL: process.env.QUOTES_URL as string 
// }

const Config: IConfig = {
    serverPort: "3800",
    saltFactor: 10, 
    JWT: {
        secret: "20202022$&\*%^NCHDJ803--SKS87365",
        issuer: "sbsv",
        subject: "authorizatio",
        algorithm: "HS512",
        expires: 864000
    }, 
    quotesURL: "https://type.fit/api/quotes"
}
export default Config;
