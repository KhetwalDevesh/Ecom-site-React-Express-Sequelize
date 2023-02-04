const{addProduct, getAllProducts, getOneProduct, updateProduct,deleteProduct} = require('../controllers/product.controller.js');

const router = require('express').Router();

router.get('/allProducts',getAllProducts);

router.get('/allProducts/:id',getOneProduct);

router.post('/addProduct',addProduct);

router.put('/updateProduct',updateProduct);

router.delete('/deleteProduct/:id',deleteProduct);

module.exports = router;