import { Almacen } from "../../../interfaces/almace.inteface"
import { Product } from "../../../interfaces/product.interface"
import productModel from "../../../model/product.model"
import storeModel from "../../../model/store.model"

export const getGraphStoreByCountry = async() => {
    try {
        const listStore= await storeModel.find().populate('listProducts')
        if(!listStore) return {
            status: 404,
            data: 'stores not found'
        }
        let data:string[] = [] 
        listStore.map((store: Almacen) => {
            data.push(store.country)
        })
        const StoreByRegionNames = Array.from(new Set(data))
        let dataNumberStore: number[] = []
        StoreByRegionNames.forEach( nameCountry => {
            const countRegion = data.filter(country => country == nameCountry).length
            dataNumberStore.push(countRegion)
        })
        const graphData = {
            countryNames : StoreByRegionNames,
            countStores: dataNumberStore
        }
        return {
            status: 200,
            data: graphData
        }
    } catch (error) {
        return {
            status: 500,
            data: error
        }
    }
}

export const getGraphStoreByRegion = async() => {
    try {
        const listStore= await storeModel.find().populate('listProducts')
        if(!listStore) return {
            status: 404,
            data: 'stores not found'
        }
        let data:string[] = [] 
        listStore.map((store: Almacen) => {
            data.push(store.region)
        })
        const StoreByRegionNames = Array.from(new Set(data))
        let dataNumberStore: number[] = []
        StoreByRegionNames.forEach( nameCountry => {
            const countRegion = data.filter(country => country == nameCountry).length
            dataNumberStore.push(countRegion)
        })
        const graphData = {
            RegionNames : StoreByRegionNames,
            countStores: dataNumberStore
        }
        
        return {
            status: 200,
            data: graphData
        }
    } catch (error) {
        return {
            status: 500,
            data: error
        }
    }
}

export const getGraphSalesByProduct = async() => {
    try {
        const listProduct= await productModel.find()
        if(!listProduct) return {
            status: 404,
            data: 'products not found'
        }
        let graphDataProducts: object[] = [] 
        listProduct.map((product: Product)=>{
            const objectProduct = {
                nameProduct: product.productName,
                nSales: product.nSales
            }
            graphDataProducts.push(objectProduct)
        })
        return {
            status: 200,
            data: graphDataProducts
        }
    } catch (error) {
        return {
            status: 500,
            data: error
        }
    }
}

export const getGetGraphSalesByStore = async() => {
    try {
        const listStore= await storeModel.find().populate('listProducts')
        if(!listStore) return {
            status: 404,
            data: 'stores not found'
        }
        let listSalesByStores: object[] = []
        listStore.map((store: Almacen)=> {
            if(store.listProducts.length > 0){
                let nSales = 0

                store.listProducts.map((product)=> {
                    const itemProduct: Product = product as any
                    nSales += itemProduct.nSales
                })
                const dataStore = {
                    nameStore: store.storeName,
                    tSales: nSales
                }
                listSalesByStores.push(dataStore)
            }
        })
        return {
            status: 200,
            data: listSalesByStores
        }
    } catch (error) {
        return {
            status: 500,
            data: error
        }
    }
}