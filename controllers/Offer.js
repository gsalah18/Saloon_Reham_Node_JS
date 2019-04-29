const offerModel = require('../models/OfferModel');
const utils = require('../middleware/utils');
const schemas = require("../middleware/schemas");

module.exports = {
    getOffers: (req, res, next) => {
        offerModel.getAll()
            .then(result => {
                utils.sendResponse(res, result.statusCode, result.result);
            });
    },
    getOffer: (req, res, next) => {
        if (req.params.id) {
            offerModel.getOne(req.params.id)
                .then(result => {
                    utils.sendResponse(res, result.statusCode, result.result);
                });
        } else {
            utils.sendResponse(res, 400, {success: false, message: utils.getI18nMessage('id_required')});
        }
    },
    addOffer: (req, res, next) => {
        const validation = utils.validateForm(req.body, schemas.offerSchema);
        if (validation.success) {
            offerModel.add(req.body)
                .then(result => {
                    utils.sendResponse(res, result.statusCode, result.result);
                });
        } else {
            utils.sendResponse(res, 400, validation);
        }
    },
    updateOffer: (req, res, next) => {
        const validation = utils.validateForm(req.body, schemas.offerSchema);
        if (req.params.id) {
            if (validation) {
                offerModel.update(req.params.id, req.body)
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
    deleteOffer: (req, res, next) => {
        if (req.params.id) {
            offerModel.delete(req.params.id)
                .then(result => {
                    utils.sendResponse(res, result.statusCode, result.result);
                });
        } else {
            utils.sendResponse(res, 400, {success: false, message: utils.getI18nMessage('id_required')});
        }
    }
};