import { Request, Response } from "express"
import { RequestExt, responseGlobal } from "../utils/typesGlobal"
import { addProductFavoriteList, addProductShoppingCart, avatarRequest, delFavoriteProducts, delProductShoppingCart, getFavoriteProducts, getPurchaseHistory, getShoppingCart, postBuyProducts } from "../services/client/client"

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

export const favoriteProduct = async(req : Request , res:Response) => {
    const {id} = req.params
    const _req = req as RequestExt
    const idUser = _req.user
    const response: responseGlobal = await addProductFavoriteList(idUser ,id)
    res.status(response.status).json(response.data)
}

// DELETE

export const deleteProductsShoppingCart = async(req : Request , res:Response) => {
    const {products} = req.body 
    const _req = req as RequestExt
    const idUser = _req.user
    const response: responseGlobal = await delProductShoppingCart(idUser, products)
    res.status(response.status).json(response.data)
}

export const deleteFavoriteProducts = async(req : Request , res:Response) => {
    const {products} = req.body 
    const _req = req as RequestExt
    const idUser = _req.user
    const response: responseGlobal = await delFavoriteProducts(idUser, products)
    res.status(response.status).json(response.data)
}

export const buyProducts = async(req : Request , res:Response) => {
    const {products} = req.body 
    const _req = req as RequestExt
    const idUser = _req.user
    const response: responseGlobal = await postBuyProducts(idUser, products)
    res.status(response.status).json(response.data)
}

// update avatar

export const putAvatar = async(req : Request , res:Response) => {
    const image = req.files?.image
    const _req = req as RequestExt
    const idUser = _req.user
    const response: responseGlobal = await avatarRequest(image, idUser)
    res.status(response.status).json(response.data)
}
