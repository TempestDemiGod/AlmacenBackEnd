
import { User } from "./user.interface";


export interface Client extends User{
    shoppingCart: Object[]
    purchaseHistory: Object[]
    favoriteProducts: Object[]
    imageUser: imageUser
}

export type imageUser = {
    image_id: string,
    image_url: string
}

