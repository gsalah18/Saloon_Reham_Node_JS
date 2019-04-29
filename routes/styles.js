const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth-middleware');
const styleController = require('../controllers/Style');

/* GET styles listing. */
router.get('/', authMiddleware.verifyToken, styleController.getStyles);
/* Add style. */
router.post('/',authMiddleware.verifyToken, styleController.addStyle);
/* Update style by id. */
router.put('/:id',authMiddleware.verifyToken, styleController.updateStyle);
/* Delete style by id. */
router.delete('/:id',authMiddleware.verifyToken, styleController.deleteStyle);
/* Get style by id. */
router.get('/:id', authMiddleware.verifyToken, styleController.getStyle);
module.exports = router;
