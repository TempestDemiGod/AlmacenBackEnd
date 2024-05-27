import clientModel from "../../model/client.model"
import productModel from "../../model/product.model"

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

export const addProductShoppingCart = async(idUser: string ,id: string, uUnit: number) => {
    try {
        const UserFound = await clientModel.findById(idUser) 
        if(!UserFound) return {
            status: 404,
            data: 'user not found'
        }
        const product = await productModel.findById(id)
        if(!product) return {
            status: 404,
            data: 'product not found'
        }
        const newProductInCart = {
            uUnit,
            product
        }
        UserFound.shoppingCart.push(newProductInCart)
        const addProduct = await UserFound.save()
        return {
            status: 201,
            data: addProduct
        }
    } catch (error) {
        return {
            status: 500,
            data: error
        }
    }
} 

export const addProductFavoriteList = async(idUser: string ,id: string) => {
    try {
        const UserFound = await clientModel.findById(idUser) 
        if(!UserFound) return {
            status: 404,
            data: 'user not found'
        }
        const product = await productModel.findById(id)
        if(!product) return {
            status: 404,
            data: 'product not found'
        }
        UserFound.favoriteProducts.push(product)
        const addProduct = await UserFound.save()
        return {
            status: 201,
            data: addProduct
        }
    } catch (error) {
        return {
            status: 500,
            data: error
        }
    }
} 

export const delProductShoppingCart = async(idUser: string ,products: string[]) => {
    try {
        const clientFound = await clientModel.findById(idUser).populate('shoppingCart')
        if(!clientFound) return {
            status: 404,
            data: 'client not found'
        }
        if(!products) return {
            status: 400,
            data: 'list products for delete is required'
        }
        if(products.length === 0) return {
            status: 400,
            data: 'list products length for delete is 0 '
        }
        const listProduct: string[] = []
        const ShoppingCart = clientFound.shoppingCart
        ShoppingCart.map((item: any)=>{
            listProduct.push(item.product.toString())
        })
        products.map(item => {
            const indexProduct = listProduct.indexOf(item)
            if(indexProduct !== -1){
                listProduct.splice(indexProduct,1)
                clientFound.shoppingCart.splice(indexProduct,1)
            }
        })
        const deleteProducts = await clientFound.save()
        return {
            status: 201,
            data: deleteProducts
        }
    } catch (error) {
        return {
            status: 500,
            data: error
        }
    }
} 

export const delFavoriteProducts = async(idUser: string ,products: string[]) => {
    try {
        const clientFound = await clientModel.findById(idUser).populate('shoppingCart')
        if(!clientFound) return {
            status: 404,
            data: 'client not found'
        }
        if(!products) return {
            status: 400,
            data: 'list products for delete is required'
        }
        if(products.length === 0) return {
            status: 400,
            data: 'list products length for delete is 0 '
        }
        const favoriteList = clientFound.favoriteProducts
        products.map(item => {
            const indexProduct = favoriteList.indexOf(item)
            if(indexProduct !== -1){
                clientFound.favoriteProducts.splice(indexProduct,1)
            }
        })
        const deleteProducts = await clientFound.save()
        return {
            status: 201,
            data: deleteProducts
        }
    } catch (error) {
        return {
            status: 500,
            data: error
        }
    }
} 