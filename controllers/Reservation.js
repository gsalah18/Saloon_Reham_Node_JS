const reservationModel = require('../models/ReservationModel');
const utils = require('../middleware/utils');
const schemas = require("../middleware/schemas");

module.exports = {
    getReservations: (req, res, next) => {
        reservationModel.getAll()
            .then(result => {
                utils.sendResponse(res, result.statusCode, result.result);
            });
    },
    getReservation: (req, res, next) => {
        if (req.params.id) {
            reservationModel.getOne(req.params.id)
                .then(result => {
                    utils.sendResponse(res, result.statusCode, result.result);
                });
        } else {
            utils.sendResponse(res, 400, {success: false, message: utils.getI18nMessage('id_required')});
        }
    },
    addReservation: (req, res, next) => {
        const validation = utils.validateForm(req.body, schemas.reservationSchema);
        if (validation.success) {
            reservationModel.add(req.body)
                .then(result => {
                    utils.sendResponse(res, result.statusCode, result.result);
                });
        } else {
            utils.sendResponse(res, 400, validation);
        }
    },
    updateReservation: (req, res, next) => {
        const validation = utils.validateForm(req.body, schemas.reservationSchema);
        if (req.params.id) {
            if (validation) {
                reservationModel.update(req.params.id, req.body)
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
    deleteReservation: (req, res, next) => {
        if (req.params.id) {
            reservationModel.delete(req.params.id)
                .then(result => {
                    utils.sendResponse(res, result.statusCode, result.result);
                });
        } else {
            utils.sendResponse(res, 400, {success: false, message: utils.getI18nMessage('id_required')});
        }
    }
};