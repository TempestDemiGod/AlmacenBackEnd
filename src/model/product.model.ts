import { Schema, model } from "mongoose";
import { Product } from "../interfaces/product.interface";

const productSchema = new Schema<Product>(
    {
        productName: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        nUnit: {
            type: Number,
            required: true
        },
        creatorUser: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        originStore: {
            type: String,
            required: true
        },
        nSales: {
            type: Number,
            default: 0
        },
        imageProduct: {
            image_id: String,
            image_url: String
        }
    },
    {
        timestamps: true
    }
)

export default model('Product', productSchema)