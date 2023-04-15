import { Router } from "express" 
import authController from "./auth.controller"
import validateSignupData from "../../middleware/validate-signup-data"

const {
    handleRegistration,
    handleLogin
} = authController

const authRouter = Router() 

authRouter.post("/auth/sign-up", validateSignupData, handleRegistration)
authRouter.post("/auth/sign-in" , handleLogin)

export default authRouter
