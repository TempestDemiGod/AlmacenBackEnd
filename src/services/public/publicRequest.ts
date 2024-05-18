import { Product } from "../../interfaces/product.interface";
import productModel from "../../model/product.model";
import storeModel from "../../model/store.model";
import { responseStore } from "../../utils/typesGlobal";

export const getAllProducts = async(): Promise< Product[] | any > => {
    try {
        const allProducts = await productModel.find()
        return {
            status: 200,
            data: allProducts
        }
    } catch (error) {
        console.log(error)
        return {
            status: 500,
            data: error
        }
    }
}

export const getAllProductsByStore = async(id: (string | any)): Promise< Product[] | any > => {
    try {
        const store = await storeModel.findById(id).populate('listProducts')
        if(!store) return {
            status: 404,
            data: 'Store not found'
        }
        const allProducts = store.listProducts
        return {
            status: 200,
            data: allProducts
        }
    } catch (error) {
        console.log(error)
        return {
            status: 500,
            data: error
        }
    }
}

export const getInfoProduct = async(id: (string | any)) => {
    try {
        const product = await productModel.findById(id)
        if(!product) return {
            status: 404,
            data: 'Product Not Found'
        }
        return {
            status: 200,
            data: product
        }
    } catch (error) {
        console.log(error)
        return {
            status: 500,
            data: error
        }
    }
} 

export const getInfoStore = async(id: (string | any)) => {
    try {
        const store = await storeModel.findById(id)
        if(!store) return {
            status: 404,
            data: 'Store Not Found'
        }
        return {
            status: 200,
            data: store
        }
    } catch (error) {
        console.log(error)
        return {
            status: 500,
            data: error
        }
    }
} 

export const getAllStores = async(): Promise< Product[] | any > => {
    try {
        const allStores = await storeModel.find()
        return {
            status: 200,
            data: allStores
        }
    } catch (error) {
        console.log(error)
        return {
            status: 500,
            data: error
        }
    }
}

export const getAllStoreNames = async() => {
    try {
        const allStore = await storeModel.find()
        if(!allStore) return {
            status: 404,
            data: 'Stores Not Found'
        }
        let allStoreNames: object[] = []
        let temStore!: object
        allStore.map((store: (responseStore | any))=>{
            temStore = {
                name : store.storeName,
                id: store._id
            }
            allStoreNames.push(temStore)
        })
        return {
            status: 200,
            data: allStoreNames
        }
    } catch (error) {
        console.log(error)
        return {
            status: 500,
            data: error
        }
    }
} 