import { z } from 'zod'

export const newProductSchema = z.object({
    productName: z.string({
        required_error: 'The product name is required'
    }).min(6, {
        message : 'The product name has to min length of 6 characters'
    }).max(16, {
        message: 'The product name has to max length of 16 characters'
    }),
    price: z.number({
        required_error: 'The price is required'
    }).positive({
        message: 'The price greater than 0'
    }),
    nUnit: z.number({
        required_error: 'The product quantity has to is a number'
    }).positive({
        message: 'The quantity greater than 0'
    }),
    originStore: z.string({
        required_error: 'The origin store is required'
    })
})