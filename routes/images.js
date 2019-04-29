const express = require('express');
const Multer = require('multer');
const router = express.Router();
const authMiddleware = require('../middleware/auth-middleware');
const imageController = require('../controllers/Image');

const multer = Multer({
    storage: Multer.memoryStorage()
});
/*
Post upload image
 */
router.post('/', multer.single('file'), authMiddleware.verifyToken, imageController.uploadImage);

module.exports = router;