import { Router} from "express";
import { AllClients, AllUsers, NewProduct } from "../controllers/user.controller";
import { AuthVerify } from "../middleware/auth.middleware";
import { validatorAdmin } from "../middleware/validatorAdmin.middleware";

const router = Router()

// BASIC REQUESTS
router.get('/allusers', AuthVerify,validatorAdmin, AllUsers) // get de todos los usuarios
router.get('/allclients', AuthVerify, validatorAdmin, AllClients) // get de todos los clientes

router.post('/store', AuthVerify,validatorAdmin , NewProduct) // creacion de un almacen
router.post('/product', AuthVerify,validatorAdmin) // creacion de un producto

router.put('/store/:id', AuthVerify, validatorAdmin ) // edicion de un almacen
router.put('/product/:id', AuthVerify,validatorAdmin) // edicion de un producto

router.delete('/store/:id', AuthVerify,validatorAdmin) // eliminar un almacen y sus productos
router.delete('/product/:id', AuthVerify,validatorAdmin) // eliminar un producto

// GRAPH REQUESTS
router.get('/graphStoreByCountry', AuthVerify,validatorAdmin) // grafico de almacenes por pais
router.get('/graphStoreByRegion', AuthVerify,validatorAdmin) // grafico de almacenes por region
router.get('/graphSalesByProduct', AuthVerify,validatorAdmin) // grafico de productos mas vendidos
router.get('/graphSalesByStore', AuthVerify,validatorAdmin) // grafico de almacenes con mas ventas

export {router}