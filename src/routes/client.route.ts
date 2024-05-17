import { Router } from "express";

const router = Router()

router.get('/shoppingCart')
router.get('/purchaseHistory')
router.get('/favoriteProducts')

router.post('/productShoppingCart')
router.post('/productPurchaseHistory')
router.post('/favoriteProduct')

router.delete('/productsShoppingCart')
router.delete('/productsPurchaseHistory')
router.delete('/favoritesProduct')

router.post('/buyProducts')

export {router}