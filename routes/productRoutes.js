const express = require('express');
const router = express.Router();
const {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    increaseStock,
    decreaseStock,
    getLowStockProducts
} = require('../controllers/productController');

// Product CRUD
router.post('/', createProduct);
router.get('/', getProducts);

// Stock management
router.put('/:id/increase-stock', increaseStock);
router.put('/:id/decrease-stock', decreaseStock);

// Low stock check
router.get('/low-stock/all', getLowStockProducts);

// Single product
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
