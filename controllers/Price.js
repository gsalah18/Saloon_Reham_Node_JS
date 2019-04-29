const priceModel = require('../models/PriceModel');
const utils = require('../middleware/utils');
const schemas = require("../middleware/schemas");

module.exports = {
    getPrices: (req, res, next) => {
        priceModel.getAll()
            .then(result => {
                utils.sendResponse(res, result.statusCode, result.result);
            });
    },
    getPrice: (req, res, next) => {
        if (req.params.id) {
            priceModel.getOne(req.params.id)
                .then(result => {
                    utils.sendResponse(res, result.statusCode, result.result);
                });
        } else {
            utils.sendResponse(res, 400, {success: false, message: utils.getI18nMessage('id_required')});
        }
    },
    addPrice: (req, res, next) => {
        const validation = utils.validateForm(req.body, schemas.priceSchema);
        if (validation.success) {
            priceModel.add(req.body)
                .then(result => {
                    utils.sendResponse(res, result.statusCode, result.result);
                });
        } else {
            utils.sendResponse(res, 400, validation);
        }
    },
    updatePrice: (req, res, next) => {
        const validation = utils.validateForm(req.body, schemas.priceSchema);
        if (req.params.id) {
            if (validation) {
                priceModel.update(req.params.id, req.body)
                    .then(result => {
                        utils.sendResponse(res, result.statusCode, result.result);
                    });
            } else {
                utils.sendResponse(res, 400, validation);
            }
        } else {
            utils.sendResponse(res, 400, {success: false, message: utils.getI18nMessage('id_required')});
        }
    },
    deletePrice: (req, res, next) => {
        if (req.params.id) {
            priceModel.delete(req.params.id)
                .then(result => {
                    utils.sendResponse(res, result.statusCode, result.result);
                });
        } else {
            utils.sendResponse(res, 400, {success: false, message: utils.getI18nMessage('id_required')});
        }
    }
};