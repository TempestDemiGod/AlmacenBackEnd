import clientModel from "../../model/client.model"

export const getShoppingCart = async(id: string) => {
    try {
        const Client = await clientModel.findById(id).populate('shoppingCart')
        if(!Client) return {
            status: 404,
            data: 'Client not found'
        }
        const ShoppingCart = Client.shoppingCart
        return {
            status: 200,
            data: ShoppingCart
        }
    } catch (error) {
        return {
            status: 500,
            data: error
        }
    }
}

export const getPurchaseHistory = async(id: string) => {
    try {
        const Client = await clientModel.findById(id)
        if(!Client) return {
            status: 404,
            data: 'Client not found'
        }
        const PurchaseHistory = Client.purchaseHistory
        return {
            status: 200,
            data: PurchaseHistory
        }
    } catch (error) {
        return {
            status: 500,
            data: error
        }
    }
}

export const getFavoriteProducts = async(id: string) => {
    try {
        const Client = await clientModel.findById(id).populate('favoriteProducts')
        if(!Client) return {
            status: 404,
            data: 'Client not found'
        }
        const FavoriteProducts = Client.favoriteProducts
        return {
            status: 200,
            data: FavoriteProducts
        }
    } catch (error) {
        return {
            status: 500,
            data: error
        }
    }
}