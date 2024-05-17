import UserModel from '../../../model/user.model'
import { User } from "../../../interfaces/user.interface"
import clientModel from '../../../model/client.model'
import { Almacen, NewAlmacen, updateAlmacen } from '../../../interfaces/almace.inteface'
import StoreModel from '../../../model/store.model'
import { ImageProduct, NewProduct, Product } from '../../../interfaces/product.interface'
import productModel from '../../../model/product.model'

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

export const postNewProduct = async(Data : NewProduct): Promise< Product | any > => {
    try {
        const matchUser = await UserModel.findById(Data.creatorUser)
        if(!matchUser) return {
            status: 404,
            Data: 'The User does not Exist'
        }
        const matchStore = await StoreModel.findById(Data.originStore)
        if(!matchStore) return {
            status: 404,
            Data: `The Store does not Exist`
        }

        const ImageProduct: ImageProduct = {
            image_id: 'dasdas',
            image_url: 'dasdasdsa'
        }

        const newProduct = new productModel({
            productName : Data.productName,
            price: Data.price,
            nUnit: Data.nUnit,
            creatorUser: Data.creatorUser,
            originStore: Data.originStore,
            imageProduct: {
                image_id: ImageProduct.image_id,
                image_url: ImageProduct.image_url
            }
        })
        
        const saveProduct = newProduct.save()
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

export const updateStore = async(Data : updateAlmacen): Promise< any > => {
    try {
        const updateStore = await StoreModel.findByIdAndUpdate(Data.id, Data ,{
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