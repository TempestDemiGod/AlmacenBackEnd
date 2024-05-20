import { Request, Response } from "express"
import { RequestExt, responseGlobal } from "../utils/typesGlobal"
import { addProductFavoriteList, addProductShoppingCart, getFavoriteProducts, getPurchaseHistory, getShoppingCart } from "../services/client/client"

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

export const productShoppingCart = async(req : Request , res:Response) => {
    const {id} = req.params
    const {uUnit} = req.body
    const _req = req as RequestExt
    const idUser = _req.user
    const response: responseGlobal = await addProductShoppingCart(idUser ,id , uUnit)
    res.status(response.status).json(response.data)
}

export const favoriteProduc = async(req : Request , res:Response) => {
    const {id} = req.params
    const _req = req as RequestExt
    const idUser = _req.user
    const response: responseGlobal = await addProductFavoriteList(idUser ,id)
    res.status(response.status).json(response.data)
}

export const buyProducts = () => {

}

// DELETE

export const deleteProductsShoppingCart = async(req : Request , res:Response) => {
    const {products} = req.body 
    const _req = req as RequestExt
    const idUser = _req.user
    const response: responseGlobal = await addProductFavoriteList(idUser, products)
    res.status(response.status).json(response.data)
}

export const deleteFavoriteProducts = () => {

}
