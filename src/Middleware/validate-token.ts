import Config from "../config"; 
import * as jwt from "jsonwebtoken" 
import { NextFunction , Request , Response } from "express";
import BadRequestError from "../common/error-handler/BadRequestError";
import NotAuthorizeError from "../common/error-handler/NotAuthorizeError";


const {
    JWT: { secret, subject, issuer }
} = Config;

const validateToken = async (
    req: Request, 
    res: Response, 
    next : NextFunction
) => {
    try {
        const { authorization } = req.headers;
        if (authorization === undefined || authorization === "") {
            return next(new BadRequestError("Provide Authorizatin Header"));
        }
        let bearer;
        let token = "";
        if (authorization !== undefined) {
            [bearer, token] = authorization.split(" ");
        }

        if (bearer !== "Bearer") {
            res.set("WWW-Authenticate" , "Basic realm= Access Token , charset=UTF-8")
            return next(
                new NotAuthorizeError("Bad Request  :Invalid Authorization")
            );
        }

       
        const payload: jwt.JwtPayload = jwt.verify(token, secret, {
            issuer,
            subject
        }) as jwt.JwtPayload;

        res.locals.payload = payload
        next();

    } catch (error: any) {
        return next(new BadRequestError(error))
    }
}

export default validateToken