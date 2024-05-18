import { Request, Response } from "express";
import { CredentialUsers } from "../interfaces/credentials.interface";
import { User, requestCreateUser } from "../interfaces/user.interface";
import { responseGlobal } from "../utils/typesGlobal";
import { signIn, signUp } from "../services/auth/auth";

export const register = async(req: Request, res: Response)=> {
    const {typeUser} = req.body
    const originUser:requestCreateUser = req.body
    const user : User= {
        email: originUser.email,
        password: originUser.password,
        name: originUser.name,
        lastName: originUser.lastName
      }
    const response: responseGlobal = await signUp(user,typeUser)
    res.status(response.status).json(response.data)
}

export const login = async(req: Request, res: Response) => {
    const credentials: CredentialUsers = req.body
    const response: responseGlobal = await signIn(credentials)
    res.status(response.status).json(response.data)
}