const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth-middleware');
const userController = require('../controllers/User');

/* GET users listing. */
router.get('/', authMiddleware.verifyToken, userController.getUsers);
/* Add user. */
router.post('/',authMiddleware.verifyToken, userController.addUser);
/* Update user by id. */
router.put('/:id',authMiddleware.verifyToken, userController.updateUser);
/* Delete user by id. */
router.delete('/:id',authMiddleware.verifyToken, userController.deleteUser);
/* Get user by id. */
router.get('/:id', authMiddleware.verifyToken, userController.getUser);
module.exports = router;
