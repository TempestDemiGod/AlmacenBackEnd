import { ObjectId } from "mongoose"

export interface Almacen extends NewAlmacen{
    nProducts: number
    listProducts: ObjectId[]
}

export interface NewAlmacen extends basicAlmacen{
    country: string
}

export interface basicAlmacen{
    storeName: string
    region: string
}
