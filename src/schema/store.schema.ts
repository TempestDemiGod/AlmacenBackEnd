import {z} from 'zod'


export const newStoreSchema = z.object({
    storeName: z.string({
        required_error: 'The store name is required'
    }).min(4, {
        message: 'The store name has to min length of 4 characters'
    }).max(10, {
        message: 'The store name has to max length of 10 characters'
    }),
    region: z.string({
        required_error: 'The store name is required'
    }).min(4, {
        message: 'The store name has to min length of 4 characters'
    }).max(12, {
        message: 'The store name has to max length of 10 characters'
    }),
    country: z.string({
        required_error: 'The store name is required'
    }).min(4, {
        message: 'The store name has to min length of 4 characters'
    }).max(14, {
        message: 'The store name has to max length of 10 characters'
    })
})