import { Request, Response } from "express"
import { RequestExt, responseGlobal } from "../utils/typesGlobal"
import { getFavoriteProducts, getPurchaseHistory, getShoppingCart } from "../services/client/client"

// Client Requests
// GETS

export const shoppingCart = async(req : Request , res:Response) => {
    const _req = req as RequestExt
    const id = _req.user
    const response: responseGlobal = await getShoppingCart(id)
    res.status(response.status).json(response.data)
}

export const purchaseHistory = async(req : Request , res:Response) => {
    const _req = req as RequestExt
    const id = _req.user
    const response: responseGlobal = await getPurchaseHistory(id)
    res.status(response.status).json(response.data)
}

export const favoriteProducts = async(req : Request , res:Response) => {
    const _req = req as RequestExt
    const id = _req.user
    const response: responseGlobal = await getFavoriteProducts(id)
    res.status(response.status).json(response.data)
}

// POSTS

export const productShoppingCart = () => {

}

export const favoriteProduc = () => {

}

export const buyProducts = () => {

}

// DELETE

export const productsShoppingCart = () => {

}

export const deleteFavoriteProducts = () => {

}
