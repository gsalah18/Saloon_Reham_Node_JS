const financialDatabase = require('../middleware/firebase').financial;
const utils = require('../middleware/utils');

module.exports = {
    getAll: () => {
        return new Promise((resolve) => {
            financialDatabase.getAll()
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
            financialDatabase.getOne(id)
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
                                message: utils.getI18nMessage('financial_not_found'),
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
    add: (financial) => {
        return new Promise((resolve) => {
            financialDatabase.add(financial)
                .then(() => {
                    let resultObject = {
                        statusCode: 201,
                        result: {
                            message: utils.getI18nMessage('financial_added'),
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
    update: (id, financial) => {
        return new Promise((resolve) => {
            financialDatabase.update(id, financial)
                .then(() => {
                    let resultObject = {
                        statusCode: 200,
                        result: {
                            message: utils.getI18nMessage('financial_updated'),
                            success: true
                        }
                    };
                    resolve(resultObject);
                })
                .catch(() => {
                    let resultObject = {
                        statusCode: 400,
                        result: {
                            message: utils.getI18nMessage('financial_not_found'),
                            success: false
                        }
                    };
                    resolve(resultObject);
                });
        });
    },
    delete: (id) => {
        return new Promise((resolve) => {
            financialDatabase.delete(id)
                .then(() => {
                    let resultObject = {
                        statusCode: 200,
                        result: {
                            message: utils.getI18nMessage('financial_deleted'),
                            success: true
                        }
                    };
                    resolve(resultObject);
                })
                .catch(() => {
                    let resultObject = {
                        statusCode: 400,
                        result: {
                            message: utils.getI18nMessage('financial_not_found'),
                            success: false
                        }
                    };
                    resolve(resultObject);
                });
        });
    }
};