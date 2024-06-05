import { Router } from "express";
import { AllNameStores, AllProducts, AllProductsByStore, AllStores, infoProduct, infoStore } from "../controllers/public.controller";

const router = Router()

router.get('/allProducts', AllProducts) // todos los productos
router.get('/allProducts/:id', AllProductsByStore) // get productos de un almacen
router.get('/infoProduct/:id', infoProduct) // info de un producto
router.get('/infoStore/:id', infoStore) // info de un almacen
router.get('/allstores', AllStores) // get de todos los almacenes
router.get('/allNameStores', AllNameStores) // lista de nombres y id de todos los almacenes

router.get('/hola',(_req,res)=>{
    res.status(200).json({hola: 'saludo'})
})

export {router}