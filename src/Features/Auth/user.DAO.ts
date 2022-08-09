import IUser from "./user.interface"
import accounts from "./accounts"

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

