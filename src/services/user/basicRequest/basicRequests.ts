import UserModel from '../../../model/user.model'
import { User } from "../../../interfaces/user.interface"
import clientModel from '../../../model/client.model'
import { Almacen, NewAlmacen, basicAlmacen } from '../../../interfaces/almace.inteface'
import StoreModel from '../../../model/store.model'
import { BasicProduct, ImageProduct, NewProduct, Product, ResponseProduct} from '../../../interfaces/product.interface'
import productModel from '../../../model/product.model'
import storeModel from '../../../model/store.model'

// BASIC REQUEST OF THE USER

// GET REQUESTS

export const getAllUsers = async(): Promise< User[] | any > => {
    try {
        const allUsers = await UserModel.find()
        return {
            status: 200,
            data: allUsers
        }
    } catch (error) {
        console.log(error)
        return {
            status: 500,
            data: error
        }
    }
}

export const getAllClients = async(): Promise< User[] | any > => {
    try {
        const allClients = await clientModel.find()
        return {
            status: 200,
            data: allClients
        }
    } catch (error) {
        console.log(error)
        return {
            status: 500,
            data: error
        }
    }
}

// POST REQUESTS

export const postNewStore = async(Data : NewAlmacen): Promise< Almacen | any > => {
    try {
        const newStore = new StoreModel(Data)
        const saveStore = newStore.save()
        return {
            status: 201,
            data: saveStore
        }
    } catch (error) {
        console.log(error)
        return {
            status: 500,
            data: error
        }
    }
}

export const postNewProduct = async(Data : NewProduct, id: string): Promise< Product | any > => {
    try {
        const {TheOriginStore,nUnit,price,productName} = Data
        const matchUser = await UserModel.findById(id)
        if(!matchUser) return {
            status: 404,
            data: 'The User does not Exist'
        }
        const matchStore = await StoreModel.findById(TheOriginStore)
        if(!matchStore) return {
            status: 404,
            data: `The Store does not Exist`
        }
        const matchProduct = await productModel.findOne({productName})
        if(matchProduct) return {
            status: 404,
            data: `The product name already exists`
        }
        const imageProduct: ImageProduct = {
            image_id: 'dasdas',
            image_url: 'dasdasdsa'
        }

        const newProduct: any = new productModel({
            productName,
            price,
            nUnit,
            creatorUser: matchUser,
            originStore: matchStore,
            imageProduct
        })
        matchStore.listProducts.push(newProduct)
        await matchStore.save()
        const saveProduct = await newProduct.save()
        return {
            status: 201,
            data: saveProduct
        }
    } catch (error) {
        console.log(error)
        return {
            status: 500,
            data: error
        }
    }
}

// PUT REQUESTS

export const putUpdateStore = async(Data : basicAlmacen, id: string): Promise< any > => {
    try {
        const updateStore = await StoreModel.findByIdAndUpdate(id, Data ,{
            new: true
        })
        if(!updateStore) return {
            status: 404,
            data: 'The Store does not Exist'
        }

        return {
            status: 201,
            data: 'updateStore'
        }
    } catch (error) {
        console.log(error)
        return {
            status: 500,
            data: error
        }
    }
}

export const putUpdateProduct = async(Data : BasicProduct, id: string): Promise< any > => {
    try {
        const updateStore = await StoreModel.findByIdAndUpdate(id, Data ,{
            new: true
        })
        if(!updateStore) return {
            status: 404,
            data: 'The Store does not Exist'
        }

        return {
            status: 201,
            data: 'updateStore'
        }
    } catch (error) {
        console.log(error)
        return {
            status: 500,
            data: error
        }
    }
}

// DELETE REQUESTS

export const serviceDeleteStore = async(id: string): Promise< any > => {
    try {
        const store = await storeModel.findById(id)
        if(!store) return {
            status: 404,
            data: 'The Store does not Exist'
        }
        const idStore = store?._id
        let listProducts = store?.listProducts
        listProducts.map( async(product) => {
            const Product: ResponseProduct = product as any
            const id = Product._id
            await productModel.findByIdAndDelete(id)
        })
        await storeModel.findByIdAndDelete(idStore)
        return {
            status: 204,
            data: 'The store was successfully deleted'
        }
    } catch (error) {
        return {
            status: 500,
            data: error
        }
    }
}

export const serviceDeleteProduct = async(id: string): Promise< any > => {
    try {
        const Product = await productModel.findById(id)
        if(!Product) return {
            status: 404,
            data: 'The Product does not Exist'
        }
        const idStore = Product?._id
        await productModel.findByIdAndDelete(idStore)
        return {
            status: 204,
            data: 'The Product was successfully deleted'
        }
    } catch (error) {
        return {
            status: 500,
            data: error
        }
    }
}

// GRAPH REQUESTS