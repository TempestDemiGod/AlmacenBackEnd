import { ObjectId } from "mongoose"

export interface Product extends BasicProduct{
    creatorUser: ObjectId
    originStore: ObjectId
    nSales: number
    imageProduct: object
}
export interface NewProduct extends BasicProduct{
    TheOriginStore: string
}

export type ImageProduct = {
    image_id: string,
    image_url: string
}

export interface BasicProduct{
    productName: string
    price: number
    nUnit: number
}

export interface ResponseProduct extends Product{
    __v: number,
    _id: string,
    createdAt: string,
    updatedAt: string,
}