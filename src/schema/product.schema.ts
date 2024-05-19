import { z } from 'zod'

export const newProductSchema = z.object({
    productName: z.string({
        required_error: 'The product name is required'
    }).min(6, {
        message : 'The product name has to min length of 6 characters'
    }).max(20, {
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
    TheOriginStore: z.string({
        required_error: 'The origin store is required'
    })
})

export const updateProductSchema = z.object({
    productName: z.string({
        required_error: 'The product name is required',
        invalid_type_error: 'The product name is type String'
    }).min(6, {
        message : 'The product name has to min length of 6 characters'
    }).max(20, {
        message: 'The product name has to max length of 16 characters'
    }).optional(),
    price: z.number({
        required_error: 'The price is required',
        invalid_type_error: 'The price is type Number'
    }).positive({
        message: 'The price greater than 0'
    }).optional(),
    nUnit: z.number({
        required_error: 'The product quantity is required',
        invalid_type_error: 'The product quantity has to is a number'
    }).positive({
        message: 'The quantity greater than 0'
    }).optional()
})