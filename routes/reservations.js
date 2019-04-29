const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth-middleware');
const reservationController = require('../controllers/Reservation');

/* GET reservations listing. */
router.get('/', authMiddleware.verifyToken, reservationController.getReservations);
/* Add reservation. */
router.post('/',authMiddleware.verifyToken, reservationController.addReservation);
/* Update reservation by id. */
router.put('/:id',authMiddleware.verifyToken, reservationController.updateReservation);
/* Delete reservation by id. */
router.delete('/:id',authMiddleware.verifyToken, reservationController.deleteReservation);
/* Get reservation by id. */
router.get('/:id', authMiddleware.verifyToken, reservationController.getReservation);
module.exports = router;
