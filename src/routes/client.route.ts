import { Router } from "express";
import { AuthVerify } from "../middleware/auth.middleware";
import { validatorClient } from "../middleware/validatorClient.middleware";
import { favoriteProducts, purchaseHistory, shoppingCart } from "../controllers/client.controller";

const router = Router()

router.get('/shoppingCart', AuthVerify, validatorClient, shoppingCart) // get de carrito de compras
router.get('/purchaseHistory', AuthVerify, validatorClient, purchaseHistory) // get de historial de compra
router.get('/favoriteProducts', AuthVerify, validatorClient, favoriteProducts) // get de productos favoritos

router.post('/productShoppingCart/:id', AuthVerify, validatorClient) // agregar un producto al carrito de compras
// router.post('/productPurchaseHistory', AuthVerify, validatorClient) // agregar productos al historial de compra ...--- no se si agregarlo a buyProducts
router.post('/favoriteProduct/:id', AuthVerify, validatorClient) // agregar producto a favoritos

router.delete('/productsShoppingCart', AuthVerify, validatorClient) // eliminar productos del carrito de compra
// router.delete('/productsPurchaseHistory', AuthVerify, validatorClient) -- no se si hacer este
router.delete('/favoriteProducts', AuthVerify, validatorClient) // eliminar productos de favoritos

router.post('/buyProducts', AuthVerify, validatorClient) // comprar productos

export {router}