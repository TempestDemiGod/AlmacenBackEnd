import { Schema, model } from "mongoose";
import { Client } from "../interfaces/client.interface";

const clientSchema = new Schema<Client>(
    {
        name: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        shoppingCart: [
            {
                uUnit: {
                    type: Number,
                    required: true
                },
                product: {
                    type: Schema.Types.ObjectId,
                    ref: 'Product',
                    required: true
                }
            }
        ],
        purchaseHistory: [
            {
                products: [
                    {
                        nameProducts: [String],
                        nUnit: Number,
                        price: Number
                    }
                ],
                dateSale: String,
                TPrice: Number,
                nameStore: String,
                country: String,
                region: String
            }
        ],
        favoriteProducts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            }
        ],
        imageUser: {
            image_id: String,
            image_url: String
        }
    },
    {
        timestamps: true
    }
)

export default model('Client', clientSchema)