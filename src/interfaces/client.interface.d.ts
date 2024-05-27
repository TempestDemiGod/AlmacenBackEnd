
import { User } from "./user.interface";


export interface Client extends User{
    shoppingCart: Object[]
    purchaseHistory: Object[]
    favoriteProducts: Object[]
    imageUser: object
}
