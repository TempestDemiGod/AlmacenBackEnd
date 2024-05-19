import { CredentialUsers } from "../../interfaces/credentials.interface"
import { ResponseUser, User } from "../../interfaces/user.interface"
import clientModel from "../../model/client.model"
import userModel from "../../model/user.model"
import { comparePass, encryptPass } from "../../utils/bcrypt"
import { createToken } from "../../utils/jwt"
import { responseGlobal } from "../../utils/typesGlobal"

export const signUp = async(data: User, typeUser: string):Promise<responseGlobal> => {
    try {
        let token
        const {email,lastName,name,password} = data
        if(typeUser === 'user'){
            const UserFound = await userModel.findOne({email})
            if(UserFound) return {
                status: 400,
                data: 'User already exists'
            }
            const ClientFound = await clientModel.findOne({email})
            if(ClientFound) return {
                status: 400,
                data: 'User already exists'
            }
            const newPass = await encryptPass(password)
            const newUser = new userModel({
                email,
                lastName,
                name,
                password: newPass
            })
            const saveUser: ResponseUser = await newUser.save() as any
            token = await createToken({id: saveUser._id})
        }else if(typeUser === 'client'){
            const ClientFound = await clientModel.findOne({email})
            if(ClientFound) return {
                status: 400,
                data: 'Client already exists'
            }
            const UserFound = await userModel.findOne({email})
            if(UserFound) return {
                status: 400,
                data: 'Client already exists'
            }
            const newPass = await encryptPass(password)
            const newClient = new clientModel({
                email,
                lastName,
                name,
                password: newPass
            })
            const saveClient: ResponseUser = await newClient.save() as any
            token = await createToken({id: saveClient._id})
        }
        return {
            status: 201,
            data: token
        }
    } catch (error) {
        return {
            status: 500,
            data: error
        }
    }
}

export const signIn = async(data: CredentialUsers):Promise<responseGlobal> => {
    try {
        const {email, password} = data
        let User: ResponseUser = await userModel.findOne({email}) as any
        if(!User){
            User = await clientModel.findOne({email}) as any
            if(!User) return {
                status: 400,
                data: 'incorrect credentials'
            }
        }
        const passUser = User.password
        const matchPass = await comparePass(password, passUser)
        if(!matchPass) return {
            status: 400,
            data: 'incorrect credentials'
        }
        const token = await createToken({id: User._id})
        return {
            status: 200,
            data: token
        }
    } catch (error) {
        return {
            status: 500,
            data: error
        }
    }
}
