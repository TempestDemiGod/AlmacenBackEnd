import { Schema, model } from "mongoose";
import { Almacen } from "../interfaces/almace.inteface";

const storeSchema = new Schema<Almacen>(
    {
        storeName: {
            type: String,
            required: true
        },
        region: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        nProducts: {
            type: Number,
            required: true,
            default: 0
        },
        listProducts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Product'
            }
        ]
    },
    {
        timestamps: true
    }
)

export default model('Store',storeSchema)