import { CredentialUsers } from "./credentials.interface";

export interface User extends CredentialUsers{
    name: string,
    lastName: string
}

export interface ResponseUser extends User{
    __v: number,
    _id: string,
    createdAt: string,
    updatedAt: string,
}

export interface requestCreateUser extends User{
    typeUser: string
}