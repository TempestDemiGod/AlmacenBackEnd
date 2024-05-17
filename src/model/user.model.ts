import {model , Schema} from "mongoose";
import { User } from "../interfaces/user.interface";

const userSchema =  new Schema<User>(
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
        }
    },
    {
        timestamps: true
    }
)

export default model('User', userSchema)