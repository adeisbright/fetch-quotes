import app from "../src/app"
import request from "supertest"

let password= "abcdefgh"
let email = "example@sbsc.com"
let token = "" 


describe("Auth  Resource Handlers", () => {
   
    it("Should not register user as field is incomplete", async () => {
           
        const res = await request(app)
            .post("/auth/sign-up").send({ name: "Gentro" })
            
            expect(res.statusCode).toBe(400)
            
    })

        
    it("Should  register user", async () => {

        const userData = {
            "name" : "Foo Bar" , 
            email,
            password,
            "confirmPassword": password
        }

        const res = await request(app)
            .post("/auth/sign-up")
            .send(userData)
        
        expect(res.statusCode).toBe(200)
        expect(res.body.message).toEqual("Registration was successful")
    })

    it("Should  not register user when a user already exists", async () => {

        const userData = {
            "name" : "Foo Bar" , 
            email,
            password,
            "confirmPassword": password
        }

        const res = await request(app)
            .post("/auth/sign-up")
            .send(userData)
        
        expect(res.statusCode).toBe(400)
    })

    it("Should allow the user login", async () => {
        const loginData = {
            email, 
            password
        }

        const res = await request(app)
            .post("/auth/sign-in")
            .send(loginData)
       
        token = res.body.body.token  
        
        expect(res.statusCode).toBe(200) 
        expect(res.body).toHaveProperty("token")
        expect(res.body).toHaveProperty("data")
    })

    it("Should not allow unathenticated user to get quote", async () => {
       
        const res = await request(app)
            .get(`/quote`)
       
        
        expect(res.statusCode).toBe(400)
        expect(res.body.success).toBeFalsy()
    })

    it("Should  allow authenticated user to get a quote", async () => {
       
        const res = await request(app)
            .get(`/quote`)
            .set({authorization:`Bearer ${token}`})
       
        
        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveProperty("success") 
        expect(res.body.success).toBe(true)
    })
})