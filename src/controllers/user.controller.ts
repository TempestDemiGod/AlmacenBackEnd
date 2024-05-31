import { Request, Response } from "express";
import { getAllClients, getAllUsers, postNewProduct, postNewStore, putUpdateProduct, putUpdateStore, serviceDeleteProduct, serviceDeleteStore } from "../services/user/basicRequest/basicRequests";
import { ImgData, RequestExt, responseGlobal } from "../utils/typesGlobal";
import { getGetGraphSalesByStore, getGraphSalesByProduct, getGraphStoreByCountry, getGraphStoreByRegion } from "../services/user/graphRequest/graphRequest";
import { uploadImage } from "../utils/cloudinary";

// BASIC REQUEST
// GETS

export const AllUsers = async( _ : Request , res:Response) => {
    const response: responseGlobal = await getAllUsers()
    res.status(response.status).json(response.data)
}

export const AllClients = async( _ : Request , res:Response) => {
    const response: responseGlobal = await getAllClients()
    res.status(response.status).json(response.data)
}

// POSTS

export const NewStore = async(req : Request , res:Response) => {
    const Data = req.body
    const response: responseGlobal = await postNewStore(Data)
    res.status(response.status).json(response.data)
}

export const NewProduct = async(req : Request , res:Response) => {
    const _req = req as RequestExt
    const image = req.files?.image
    const id = _req.user
    const Data = req.body
    const response: responseGlobal = await postNewProduct(Data, id, image)
    res.status(response.status).json(response.data)
}

// PUT REQUESTS

export const UpdateStore = async(req : Request , res:Response) => {
    const {id} = req.params
    const Data = req.body
    const response: responseGlobal = await putUpdateStore(Data, id)
    res.status(response.status).json(response.data)
}

export const UpdateProduct = async(req : Request , res:Response) => {
    const {id} = req.params
    const Data = req.body
    const response: responseGlobal = await putUpdateProduct(Data, id)
    res.status(response.status).json(response.data)
}

// DELETE REQUESTS

export const deleteStore = async(req : Request , res:Response) => {
    const {id} = req.params
    const response: responseGlobal = await serviceDeleteStore(id)
    res.status(response.status).json(response.data)
}

export const deleteProduct = async(req : Request , res:Response) => {
    const {id} = req.params
    const response: responseGlobal = await serviceDeleteProduct(id)
    res.status(response.status).json(response.data)
}

// GRAPH REQUESTS

export const graphStoreByCountry = async(_ : Request , res:Response) => {
    const response: responseGlobal = await getGraphStoreByCountry()
    res.status(response.status).json(response.data)
}

export const graphStoreByRegion = async(_ : Request , res:Response) => {
    const response: responseGlobal = await getGraphStoreByRegion()
    res.status(response.status).json(response.data)
}

export const graphSalesByProduct = async(_ : Request , res:Response) => {
    const response: responseGlobal = await getGraphSalesByProduct()
    res.status(response.status).json(response.data)
}

export const graphSalesByStore = async(_ : Request , res:Response) => {
    const response: responseGlobal = await getGetGraphSalesByStore()
    res.status(response.status).json(response.data)
}

// -------------------------------------

export const prueba = async(req : Request , res:Response) => {
    // const _req = req as RequestExt
    try {
        const image: ImgData = req.files?.image as ImgData

    // const id = _req.user
    // const Data = req.body
    // const response: responseGlobal = await postNewProduct(Data, id, image)
    const saveImage = await uploadImage(image.data,'product')
    res.status(200).json(saveImage)
    } catch (error) {
        res.status(500).json(error)
    }
}