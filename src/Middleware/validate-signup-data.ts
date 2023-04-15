import { NextFunction, Request, Response} from "express" 
import Joi from "joi" 
import BadRequestError from "../common/error-handler/BadRequestError"
import ApplicationError from "../common/error-handler/ApplicationError"
import UserDAO from "../features/auth/user.DAO"

const validateSignupData = async (
    req: Request, 
    res: Response, 
    next : NextFunction
) => {
    try {
        const {
            name, 
            email, 
            password, 
            confirmPassword 
        } = req.body 

        const parameterHash = {
			name: "name is required",
            email: "email is required",
            password: "password is required", 
            confirmPassword: "comfirmPassword is required"
           
		};

		for (const [key, value] of Object.entries(parameterHash)) {
			if (parameterHash.hasOwnProperty(key)) {
				if (req.body[key] == null) {
					return next(new BadRequestError(value));
				}
			}
        }
        
        const Schema = Joi.object({
            email: Joi.string().min(11).required(),
            password: Joi.string().min(8).required(),
            confirmPassword : Joi.string().min(8).required(),
            name: Joi.string()
                .min(3)
                .message("Name should have at least 3 characters ")
        });

        await Schema.validateAsync({
            name, 
            password, 
            confirmPassword, 
            email
        });

        if (password !== confirmPassword) {
            return next(new BadRequestError("Password does not match"));
        }
        const hasRegistered = UserDAO.findByEmail(email)

        if (hasRegistered) {
            return next(new BadRequestError("An account already exists with the details you provided"))
        } 
        next();
    } catch (error: any) {
        return next(new ApplicationError(error))
    }
}

export default validateSignupData