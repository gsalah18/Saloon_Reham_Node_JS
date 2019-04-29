const imageModel = require('../models/ImageModel');
const utils = require('../middleware/utils');

module.exports = {
    uploadImage: (req, res, next) => {
        imageModel.uploadImage(req.file, req.params.id, req.query.catagory)
            .then((result) =>{
                utils.sendResponse(res, result.statusCode, result.result);
            })
    }
};