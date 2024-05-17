import { ObjectId } from "mongoose"

export interface Product extends NewProduct{
    nSales: number
    imageProduct: object
}

export interface NewProduct{
    productName: string
    price: number
    nUnit: number
    creatorUser: ObjectId
    originStore: ObjectId
}

export type ImageProduct = {
    image_id: string,
    image_url: string
}