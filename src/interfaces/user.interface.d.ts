import { CredentialUsers } from "./credentials.interface";

export interface User extends CredentialUsers{
    name: string,
    lastName: string
}
