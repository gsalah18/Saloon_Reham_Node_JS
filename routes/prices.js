const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth-middleware');
const priceController = require('../controllers/Price');

/* GET prices listing. */
router.get('/', authMiddleware.verifyToken, priceController.getPrices);
/* Add price. */
router.post('/',authMiddleware.verifyToken, priceController.addPrice);
/* Update price by id. */
router.put('/:id',authMiddleware.verifyToken, priceController.updatePrice);
/* Delete price by id. */
router.delete('/:id',authMiddleware.verifyToken, priceController.deletePrice);
/* Get price by id. */
router.get('/:id', authMiddleware.verifyToken, priceController.getPrice);
module.exports = router;
