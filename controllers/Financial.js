const financialModel = require('../models/FinancialModel');
const utils = require('../middleware/utils');
const schemas = require("../middleware/schemas");

module.exports = {
    getFinancials: (req, res, next) => {
        financialModel.getAll()
            .then(result => {
                utils.sendResponse(res, result.statusCode, result.result);
            });
    },
    getFinancial: (req, res, next) => {
        if (req.params.id) {
            financialModel.getOne(req.params.id)
                .then(result => {
                    utils.sendResponse(res, result.statusCode, result.result);
                });
        } else {
            utils.sendResponse(res, 400, {success: false, message: utils.getI18nMessage('id_required')});
        }
    },
    addFinancial: (req, res, next) => {
        const validation = utils.validateForm(req.body, schemas.financialSchema);
        if (validation.success) {
            financialModel.add(req.body)
                .then(result => {
                    utils.sendResponse(res, result.statusCode, result.result);
                });
        } else {
            utils.sendResponse(res, 400, validation);
        }
    },
    updateFinancial: (req, res, next) => {
        const validation = utils.validateForm(req.body, schemas.financialSchema);
        if (req.params.id) {
            if (validation) {
                financialModel.update(req.params.id, req.body)
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
    deleteFinancial: (req, res, next) => {
        if (req.params.id) {
            financialModel.delete(req.params.id)
                .then(result => {
                    utils.sendResponse(res, result.statusCode, result.result);
                });
        } else {
            utils.sendResponse(res, 400, {success: false, message: utils.getI18nMessage('id_required')});
        }
    }
};