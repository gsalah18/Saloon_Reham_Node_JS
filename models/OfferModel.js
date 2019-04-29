const offerDatabase = require('../middleware/firebase').offer;
const utils = require('../middleware/utils');

module.exports = {
    getAll: () => {
        return new Promise((resolve) => {
            offerDatabase.getAll()
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
            offerDatabase.getOne(id)
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
                                message: utils.getI18nMessage('offer_not_found'),
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
    add: (offer) => {
        return new Promise((resolve) => {
            offerDatabase.add(offer)
                .then(() => {
                    let resultObject = {
                        statusCode: 201,
                        result: {
                            message: utils.getI18nMessage('offer_added'),
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
    update: (id, offer) => {
        return new Promise((resolve) => {
            offerDatabase.update(id, offer)
                .then(() => {
                    let resultObject = {
                        statusCode: 200,
                        result: {
                            message: utils.getI18nMessage('offer_updated'),
                            success: true
                        }
                    };
                    resolve(resultObject);
                })
                .catch(() => {
                    let resultObject = {
                        statusCode: 400,
                        result: {
                            message: utils.getI18nMessage('offer_not_found'),
                            success: false
                        }
                    };
                    resolve(resultObject);
                });
        });
    },
    delete: (id) => {
        return new Promise((resolve) => {
            offerDatabase.delete(id)
                .then(() => {
                    let resultObject = {
                        statusCode: 200,
                        result: {
                            message: utils.getI18nMessage('offer_deleted'),
                            success: true
                        }
                    };
                    resolve(resultObject);
                })
                .catch(() => {
                    let resultObject = {
                        statusCode: 400,
                        result: {
                            message: utils.getI18nMessage('offer_not_found'),
                            success: false
                        }
                    };
                    resolve(resultObject);
                });
        });
    }
};