import { z } from "zod";

enum TypeUsers{
    UserAdm = 'user' ,
    UserClient = 'client'
}

export const userSignUpSchema = z.object({
    email: z.string({
        required_error: 'The Email is required',
        invalid_type_error: 'The Email is string'
    }).email({
        message: 'The Email is invalid'
    }),
    password: z.string({
        required_error: 'The Password is required',
        invalid_type_error: 'The Password is string'
    }).min(6,{
        message: 'The Password has to min length of 6 characters'
    }).max(10, {
        message: 'The Password has to max length of 10 characters'
    }),
    name: z.string({
        required_error: 'The Name is required',
        invalid_type_error: 'The name is String'
    }).min(2, {
        message: 'The Name has to min length of 2 characters'
    }),
    lastName: z.string({
        required_error: 'The lastname is required',
        invalid_type_error: 'The lastName is string'
    }).min(4, {
        message: 'The lastname has to min length of 4 characters'
    }),
    typeUser: z.nativeEnum(TypeUsers,{
        required_error: 'Type User is required',
    })
})


