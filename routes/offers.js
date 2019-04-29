const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth-middleware');
const offerController = require('../controllers/Offer');

/* GET offers listing. */
router.get('/', authMiddleware.verifyToken, offerController.getOffers);
/* Add offer. */
router.post('/',authMiddleware.verifyToken, offerController.addOffer);
/* Update offer by id. */
router.put('/:id',authMiddleware.verifyToken, offerController.updateOffer);
/* Delete offer by id. */
router.delete('/:id',authMiddleware.verifyToken, offerController.deleteOffer);
/* Get offer by id. */
router.get('/:id', authMiddleware.verifyToken, offerController.getOffer);
module.exports = router;
