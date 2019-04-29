const reservationDatabase = require('../middleware/firebase').reservation;
const utils = require('../middleware/utils');

module.exports = {
    getAll: () => {
        return new Promise((resolve) => {
            reservationDatabase.getAll()
                .then(result => {
                    let resultObject = {
                        statusCode: 200,
                        result: {
                            data: result,
                            success: true
                        }
                    };
                    resolve(resultObject);
                })
                .catch(() => {
                    let resultObject = {
                        statusCode: 400,
                        result: {
                            message: utils.getI18nMessage('error_message'),
                            success: false
                        }
                    };
                    resolve(resultObject);

                });
        });
    },
    getOne: (id) => {
        return new Promise((resolve) => {
            reservationDatabase.getOne(id)
                .then(result => {
                    if (result) {
                        let resultObject = {
                            statusCode: 200,
                            result: {
                                data: result,
                                success: true
                            }
                        };
                        resolve(resultObject);
                    } else {
                        let resultObject = {
                            statusCode: 200,
                            result: {
                                message: utils.getI18nMessage('reservation_not_found'),
                                success: false
                            }
                        };
                        resolve(resultObject);
                    }
                })
                .catch(() => {
                    let resultObject = {
                        statusCode: 400,
                        result: {
                            message: utils.getI18nMessage('error_message'),
                            success: false
                        }
                    };
                    resolve(resultObject);
                });
        });
    },
    add: (reservation) => {
        return new Promise((resolve) => {
            reservationDatabase.add(reservation)
                .then(() => {
                    let resultObject = {
                        statusCode: 201,
                        result: {
                            message: utils.getI18nMessage('reservation_added'),
                            success: true
                        }
                    };
                    resolve(resultObject);
                })
                .catch(() => {
                    let resultObject = {
                        statusCode: 400,
                        result: {
                            message: utils.getI18nMessage('error_message'),
                            success: false
                        }
                    };
                    resolve(resultObject);
                });
        });
    },
    update: (id, reservation) => {
        return new Promise((resolve) => {
            reservationDatabase.update(id, reservation)
                .then(() => {
                    let resultObject = {
                        statusCode: 200,
                        result: {
                            message: utils.getI18nMessage('reservation_updated'),
                            success: true
                        }
                    };
                    resolve(resultObject);
                })
                .catch(() => {
                    let resultObject = {
                        statusCode: 400,
                        result: {
                            message: utils.getI18nMessage('reservation_not_found'),
                            success: false
                        }
                    };
                    resolve(resultObject);
                });
        });
    },
    delete: (id) => {
        return new Promise((resolve) => {
            reservationDatabase.delete(id)
                .then(() => {
                    let resultObject = {
                        statusCode: 200,
                        result: {
                            message: utils.getI18nMessage('reservation_deleted'),
                            success: true
                        }
                    };
                    resolve(resultObject);
                })
                .catch(() => {
                    let resultObject = {
                        statusCode: 400,
                        result: {
                            message: utils.getI18nMessage('reservation_not_found'),
                            success: false
                        }
                    };
                    resolve(resultObject);
                });
        });
    }
};