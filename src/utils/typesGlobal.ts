import { Request } from "express"
import fileUpload from "express-fileupload"

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

 export type UploadedFile = fileUpload.UploadedFile;

 export type ImgData = {
    name: string,
    data: object
 }

 export type ImageResponse = {
    public_id : string,
    secure_url: string
 }