const userModel = require('../models/UserModel');
const utils = require('../middleware/utils');
const schemas = require("../middleware/schemas");

module.exports = {
    getUsers: (req, res, next) => {
        userModel.getAll()
            .then(result => {
                utils.sendResponse(res, result.statusCode, result.result);
            });
    },
    getUser: (req, res, next) => {
        if (req.params.id) {
            userModel.getOne(req.params.id)
                .then(result => {
                    utils.sendResponse(res, result.statusCode, result.result);
                });
        } else {
            utils.sendResponse(res, 400, {success: false, message: utils.getI18nMessage('id_required')});
        }
    },
    addUser: (req, res, next) => {
        const validation = utils.validateForm(req.body, schemas.userSchema);
        if (validation.success) {
            userModel.add(req.body)
                .then(result => {
                    utils.sendResponse(res, result.statusCode, result.result);
                });
        } else {
            utils.sendResponse(res, 400, validation);
        }
    },
    updateUser: (req, res, next) => {
        const validation = utils.validateForm(req.body, schemas.userSchema);
        if (req.params.id) {
            if (validation) {
                userModel.update(req.params.id, req.body)
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
    deleteUser: (req, res, next) => {
        if (req.params.id) {
            userModel.delete(req.params.id)
                .then(result => {
                    utils.sendResponse(res, result.statusCode, result.result);
                });
        } else {
            utils.sendResponse(res, 400, {success: false, message: utils.getI18nMessage('id_required')});
        }
    }
};