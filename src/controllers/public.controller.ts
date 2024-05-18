import { Request, Response } from "express"
import { getAllProducts, getAllProductsByStore, getAllStoreNames, getAllStores, getInfoProduct, getInfoStore } from "../services/public/publicRequest"
import { responseGlobal } from "../utils/typesGlobal"


// BASIC REQUEST
// GETS

export const AllProducts = async( _ : Request , res:Response) => {
    const response: responseGlobal = await getAllProducts()
    res.status(response.status).json(response.data)
}

export const AllProductsByStore = async( req : Request , res:Response) => {
    const {id} = req.params
    const response: responseGlobal = await getAllProductsByStore(id)
    res.status(response.status).json(response.data)
}

export const infoProduct = async( req : Request , res:Response) => {
    const {id} = req.params
    const response: responseGlobal = await getInfoProduct(id)
    res.status(response.status).json(response.data)
}

export const infoStore = async( req : Request , res:Response) => {
    const {id} = req.params
    const response: responseGlobal = await getInfoStore(id)
    res.status(response.status).json(response.data)
}

export const AllStores = async( _ : Request , res:Response) => {
    const response: responseGlobal = await getAllStores()
    res.status(response.status).json(response.data)
}

export const AllNameStores = async( _ : Request , res:Response) => {
    const response: responseGlobal = await getAllStoreNames()
    res.status(response.status).json(response.data)
}
