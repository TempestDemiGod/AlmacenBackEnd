import { Router } from "express";
import { AllClients, AllUsers, NewProduct } from "../controllers/user.controller";

const router = Router()

// BASIC REQUESTS
router.get('/allusers', AllUsers)
router.get('/allclients', AllClients)

router.post('/store', NewProduct)
router.post('/product')

router.put('/store/:id')
router.put('/product/:id')

router.delete('/store/:id')
router.delete('/product/:id')

// GRAPH REQUESTS
router.get('/graphStoreByCountry')
router.get('/graphStoreByRegion')
router.get('/graphSalesByProduct')
router.get('/graphSalesByStore')

export {router}