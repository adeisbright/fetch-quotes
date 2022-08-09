//import * as accounts from "./accounts.json"
import IUser from "./user.interface"
import fs from "fs/promises"
import path from "path" 
import accounts from "./accounts"


//const accountPath = path.join(__dirname  , "accounts.json")

export default class UserDAO {
    static async addUser(data: IUser) {
        accounts.push(data)
    }

   

    static findByEmail(email: string){
        return accounts.find((account: Record<string, any>) => {
            return account.email === email
        })
    }
}

