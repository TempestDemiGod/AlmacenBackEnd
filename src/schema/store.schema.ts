import {z} from 'zod'


export const newStoreSchema = z.object({
    storeName: z.string({
        required_error: 'The store name is required',
        invalid_type_error: 'The store name is string type'
    }).min(4, {
        message: 'The store name has to min length of 4 characters'
    }).max(10, {
        message: 'The store name has to max length of 10 characters'
    }),
    region: z.string({
        required_error: 'The region name is required'
    }).min(4, {
        message: 'The store name has to min length of 4 characters'
    }).max(12, {
        message: 'The store name has to max length of 10 characters'
    }),
    country: z.string({
        required_error: 'The country name is required'
    }).min(4, {
        message: 'The store name has to min length of 4 characters'
    }).max(14, {
        message: 'The store name has to max length of 10 characters'
    })
})

export const updateStoreSchema = z.object({
    storeName: z.string({
        required_error: 'The store name is required'
    }).min(4, {
        message: 'The store name has to min length of 4 characters'
    }).max(10, {
        message: 'The store name has to max length of 10 characters'
    }).optional(),
    region: z.string({
        required_error: 'The store name is required'
    }).min(4, {
        message: 'The store name has to min length of 4 characters'
    }).max(12, {
        message: 'The store name has to max length of 10 characters'
    }).optional(),
    country: z.string({
        required_error: 'The store name is required'
    }).min(4, {
        message: 'The store name has to min length of 4 characters'
    }).max(14, {
        message: 'The store name has to max length of 10 characters'
    }).optional()
})