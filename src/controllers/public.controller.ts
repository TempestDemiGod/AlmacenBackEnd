import { Request, Response } from "express"
import { getAllProducts, getAllStores } from "../services/public/publicRequest"
import { responseGlobal } from "../utils/typesGlobal"


// BASIC REQUEST
// GETS

export const AllProducts = async( _ : Request , res:Response) => {
    const response: responseGlobal = await getAllProducts()
    res.status(response.status).json(response.data)
}

export const AllProductsByStore = async( _ : Request , res:Response) => {
    const response: responseGlobal = await getAllProducts()
    res.status(response.status).json(response.data)
}

export const infoProduct = async( _ : Request , res:Response) => {
    // const response: responseGlobal = await getAllStores()
    res.status(32123).json('das')
}

export const infoAlmacen = async( _ : Request , res:Response) => {
    // const response: responseGlobal = await getAllStores()
    res.status(32123).json('das')
}

export const AllStores = async( _ : Request , res:Response) => {
    const response: responseGlobal = await getAllStores()
    res.status(response.status).json(response.data)
}

export const AllNameStores = async( _ : Request , res:Response) => {
    // const response: responseGlobal = await getAllStores()
    res.status(32123).json('das')
}
