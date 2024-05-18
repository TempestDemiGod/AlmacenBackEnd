import { Request } from "express"

export type responseGlobal = {
    status: number,
    data: object | any
}

export type responseStore = {
    _id: string,
    storeName: string,
    region: string,
    country: string,
    nProducts: number,
    listProducts: any[],
    createdAt: string | Date,
    updatedAt: string | Date,
    __v: number
  }

export interface RequestExt extends Request{
    headers: {
        token : string
    },
    user: string
 }

 