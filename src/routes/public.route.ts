import { Router } from "express";
import { AllProducts, AllStores } from "../controllers/public.controller";

const router = Router()

router.get('/allProducts', AllProducts) // todos los productos
router.get('/allProducts/:id') // get productos de un almacen
router.get('/infoProduct/:id')
router.get('/infoStore/:id')
router.get('/allstores', AllStores)
router.get('/allNameStores')

export {router}