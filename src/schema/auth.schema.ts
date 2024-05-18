import { z } from "zod";

export const AuthSchema = z.object({
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
    })
}) 

export type Auth = z.infer<typeof AuthSchema>



