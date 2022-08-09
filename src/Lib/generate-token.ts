import * as jwt from "jsonwebtoken"
import Config from "../config" 
import fileLogger from "../Common/logging/file-logger"

const { JWT: { secret, subject, issuer, expires } } = Config 

const generateToken = (data: Record<string,any>) => {
    try {
        const {email , name} = data
        const token = jwt.sign({
            email, 
            name
        }, secret, {
            issuer: issuer,
            expiresIn: expires,
            algorithm: "HS512",
            subject: subject
        });
        return token
    } catch (error: any) {
        return fileLogger.log({
            message: error.message, 
            level:"error"
        })
    }
}

export default generateToken