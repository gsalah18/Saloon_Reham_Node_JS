const i18n = require('i18n');
const Joi = require('joi');

i18n.configure({
    locales: ['en', 'ar'],
    directory: `${appRoot}/locales`
});
module.exports = {
    sendResponse: (res, statusCode, data) => {
        res.append('Access-Control-Allow-Headers', 'Content-Type');
        res.append('Content-Type', 'application/json');
        res.status(statusCode).json(data);
    },
    getI18nMessage: (key) => {
        return i18n.__(key);
    },
    validateForm: (object, shcema) => {
        const validation = Joi.validate(object, shcema);
        if (validation.error) {
            let errors = '';
            validation.error.details.map(detail => {
                errors += `${detail.context.label} `;
            });
            return {
                success: false,
                message: errors
            };
        }
        return {
            success: true,
        };
    }

};
