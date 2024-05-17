import { z } from "zod";

export const userSignUpSchema = z.object({
    email: z.string({
        required_error: 'The Email is required'
    }).email({
        message: 'The Email is invalid'
    }),
    password: z.string({
        required_error: 'The Password is required'
    }).min(6,{
        message: 'The Password has to min length of 6 characters'
    }).max(10, {
        message: 'The Password has to max length of 10 characters'
    }),
    name: z.string({
        required_error: 'The Name is required'
    }).min(2, {
        message: 'The Name has to min length of 2 characters'
    }),
    lastName: z.string({
        required_error: 'The lastname is required'
    }).min(4, {
        message: 'The lastname has to min length of 4 characters'
    })
}) 


