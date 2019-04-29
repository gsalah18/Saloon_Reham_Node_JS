const jwt = require('jsonwebtoken');
const utils = require('./utils');

module.exports = {
    verifyToken: (req, res, next) => {
        const bearerHeader = req.headers.authorization;
        if (bearerHeader) {
            const bearerToken = bearerHeader.split(' ')[1];
            jwt.verify(bearerToken, process.env.JWT_SECRET, (err, authData) => {
                if (err) {
                    console.log(err);
                    return utils.sendResponse(res, 403, {message: utils.getI18nMessage("not_authorized"), success: false})
                }
                req.userData = authData;
                next();
            });
        } else {
            return utils.sendResponse(res, 403, {message: utils.getI18nMessage("not_authorized"), success: false})
        }
    }
};
