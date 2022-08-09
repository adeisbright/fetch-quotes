import { NextFunction , Request , Response } from "express" 
import ApplicationError from "../../common/error-handler/ApplicationError"
import UserDAO from "./user.DAO"
import * as bcrypt from "bcryptjs"
import Config from "../../config"
import generateToken from "../../lib/generate-token"
import IUser from "./user.interface"
import NotAuthorizeError from "../../common/error-handler/NotAuthorizeError"

class AuthController {
    async handleRegistration(
        req: Request, 
        res: Response, 
        next : NextFunction
    ) {
        try {
            const {
                password, 
                name, 
                email
            } = req.body 

            const salt = await bcrypt.genSalt(Config.saltFactor) 
            const hashPassword = await bcrypt.hash(password, salt)

            const userData: IUser = {
                name, 
                email, 
                password : hashPassword
            }
            await UserDAO.addUser(userData)  
    
            res.status(200).json({
                message: `Hello ${name}, your registration was successful`, 
                success: true, 
                statusCode:200 
            })
        } catch (error: any) {
            return next(new ApplicationError(error))
        }
    }

    async handleLogin(
        req: Request, 
        res: Response, 
        next : NextFunction
    ) {
        try {
            const { password, email } = req.body
            const account = UserDAO.findByEmail(email)
            if (!account) {
                res.set("WWW-Authenticate","Basic realm=Access to login token , charset=UTF-8")
                return next(new NotAuthorizeError("Invalid User Credentials"));
            }

         
            const hasCorrectPassword = await bcrypt.compare(
                password,
                account.password
            )
            if (!hasCorrectPassword) {
                res.set("WWW-Authenticate","Basic realm=Access to login token , charset=UTF-8")
                return next(new NotAuthorizeError("Invalid email or wrong password entered"));
            }

            const {name} = account 
            const tokenData: Record<string,any> = {
                name,
                email
            }
            const token = generateToken(tokenData) as string
            
            const userDetails: Record<string,any> = {
                name, 
                email
            }
            
            res.status(200).json({
                message: "Login was successful", 
                statusCode: 200, 
                success: true, 
                data: {
                    token, 
                    userDetails
                }
            })
        } catch (error: any) {
            return next(new ApplicationError(error))
        }
    }

}

export default new AuthController()