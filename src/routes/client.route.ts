import { Router } from "express";
import { AuthVerify } from "../middleware/auth.middleware";
import { validatorClient } from "../middleware/validatorClient.middleware";
import { deleteFavoriteProducts, deleteProductsShoppingCart, favoriteProduct, favoriteProducts, productShoppingCart, purchaseHistory, putAvatar, shoppingCart } from "../controllers/client.controller";
import fileUpload from "express-fileupload";

const router = Router()

router.get('/shoppingCart', AuthVerify, validatorClient, shoppingCart) // get de carrito de compras
router.get('/purchaseHistory', AuthVerify, validatorClient, purchaseHistory) // get de historial de compra
router.get('/favoriteProducts', AuthVerify, validatorClient, favoriteProducts) // get de productos favoritos

router.post('/productShoppingCart/:id', AuthVerify, validatorClient,productShoppingCart) // agregar un producto al carrito de compras
// router.post('/productPurchaseHistory', AuthVerify, validatorClient) // agregar productos al historial de compra ...--- no se si agregarlo a buyProducts
router.post('/favoriteProduct/:id', AuthVerify, validatorClient, favoriteProduct) // agregar producto a favoritos

router.delete('/productsShoppingCart', AuthVerify, validatorClient, deleteProductsShoppingCart) // eliminar productos del carrito de compra
router.delete('/favoriteProducts', AuthVerify, validatorClient, deleteFavoriteProducts) // eliminar productos de favoritos

router.post('/buyProducts', AuthVerify, validatorClient) // comprar productos

router.post('/avatar', AuthVerify,validatorClient, fileUpload(), putAvatar) // update evatar


export {router}