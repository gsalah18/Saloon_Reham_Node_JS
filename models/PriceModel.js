const priceDatabase = require('../middleware/firebase').price;
const utils = require('../middleware/utils');

module.exports = {
    getAll: () => {
        return new Promise((resolve) => {
            priceDatabase.getAll()
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
            priceDatabase.getOne(id)
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
                                message: utils.getI18nMessage('price_not_found'),
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
    add: (price) => {
        return new Promise((resolve) => {
            priceDatabase.add(price)
                .then(() => {
                    let resultObject = {
                        statusCode: 201,
                        result: {
                            message: utils.getI18nMessage('price_added'),
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
    update: (id, price) => {
        return new Promise((resolve) => {
            priceDatabase.update(id, price)
                .then(() => {
                    let resultObject = {
                        statusCode: 200,
                        result: {
                            message: utils.getI18nMessage('price_updated'),
                            success: true
                        }
                    };
                    resolve(resultObject);
                })
                .catch(() => {
                    let resultObject = {
                        statusCode: 400,
                        result: {
                            message: utils.getI18nMessage('price_not_found'),
                            success: false
                        }
                    };
                    resolve(resultObject);
                });
        });
    },
    delete: (id) => {
        return new Promise((resolve) => {
            priceDatabase.delete(id)
                .then(() => {
                    let resultObject = {
                        statusCode: 200,
                        result: {
                            message: utils.getI18nMessage('price_deleted'),
                            success: true
                        }
                    };
                    resolve(resultObject);
                })
                .catch(() => {
                    let resultObject = {
                        statusCode: 400,
                        result: {
                            message: utils.getI18nMessage('price_not_found'),
                            success: false
                        }
                    };
                    resolve(resultObject);
                });
        });
    }
};