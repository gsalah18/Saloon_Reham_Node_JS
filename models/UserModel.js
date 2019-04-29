const userDatabase = require('../middleware/firebase').user;
const utils = require('../middleware/utils');

module.exports = {
    getAll: () => {
        return new Promise((resolve) => {
            userDatabase.getAll()
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
            userDatabase.getOne(id)
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
                                message: utils.getI18nMessage('user_not_found'),
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
    add: (user) => {
        return new Promise((resolve) => {
            userDatabase.add(user)
                .then(() => {
                    let resultObject = {
                        statusCode: 201,
                        result: {
                            message: utils.getI18nMessage('user_added'),
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
    update: (id, user) => {
        return new Promise((resolve) => {
            userDatabase.update(id, user)
                .then(() => {
                    let resultObject = {
                        statusCode: 200,
                        result: {
                            message: utils.getI18nMessage('user_updated'),
                            success: true
                        }
                    };
                    resolve(resultObject);
                })
                .catch(() => {
                    let resultObject = {
                        statusCode: 400,
                        result: {
                            message: utils.getI18nMessage('user_not_found'),
                            success: false
                        }
                    };
                    resolve(resultObject);
                });
        });
    },
    delete: (id) => {
        return new Promise((resolve) => {
            userDatabase.delete(id)
                .then(() => {
                    let resultObject = {
                        statusCode: 200,
                        result: {
                            message: utils.getI18nMessage('user_deleted'),
                            success: true
                        }
                    };
                    resolve(resultObject);
                })
                .catch(() => {
                    let resultObject = {
                        statusCode: 400,
                        result: {
                            message: utils.getI18nMessage('user_not_found'),
                            success: false
                        }
                    };
                    resolve(resultObject);
                });
        });
    }
};