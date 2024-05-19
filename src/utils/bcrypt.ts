import { compare, hash } from "bcryptjs";

export const encryptPass = async(pass: string) => {
    const hashPass = await hash(pass, 10)
    return hashPass
}

export const comparePass = async(pass:string, passUser: string) => {
    const matchPass =await compare(pass, passUser);
    return matchPass
}