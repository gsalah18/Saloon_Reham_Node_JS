const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth-middleware');
const financialController = require('../controllers/Financial');

/* GET financials listing. */
router.get('/', authMiddleware.verifyToken, financialController.getFinancials);
/* Add financial. */
router.post('/',authMiddleware.verifyToken, financialController.addFinancial);
/* Update financial by id. */
router.put('/:id',authMiddleware.verifyToken, financialController.updateFinancial);
/* Delete financial by id. */
router.delete('/:id',authMiddleware.verifyToken, financialController.deleteFinancial);
/* Get financial by id. */
router.get('/:id', authMiddleware.verifyToken, financialController.getFinancial);
module.exports = router;
