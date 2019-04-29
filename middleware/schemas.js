const Joi = require('joi');
const utils = require('./utils');
module.exports = {
    userSchema: {
        name: Joi.string().alphanum().required().label(utils.getI18nMessage('username_required')),
        username: Joi.string().token().required().label(utils.getI18nMessage('username_required')),
        password: Joi.string().token().required().label(utils.getI18nMessage('password_invalid')),
        type: Joi.string().required().label(utils.getI18nMessage('user_type_required'))
    },
    priceSchema: {
        name: Joi.string().required().label(utils.getI18nMessage('price_name_required')),
        value: Joi.number().integer().positive().label(utils.getI18nMessage('price_value_invalid')),
        type: Joi.string().required().label(utils.getI18nMessage('price_type_required'))
    },
    financialSchema: {
        value: Joi.number().positive().label("financial_value_invalid"),
        date: Joi.date().iso().label("financial_date_invalid"),
        type: Joi.string().required().label(utils.getI18nMessage('financial_type_required'))
    },
    reservationSchema: {
        customer: Joi.string().alphanum().required().label(utils.getI18nMessage('customer_name_required')),
        dateTime: Joi.date().timestamp().label("reservation_date_invalid"),
        work: Joi.string().required().label(utils.getI18nMessage('reservation_work_required'))
    },
    styleSchema: {
        name: Joi.string().required().label(utils.getI18nMessage('style_name_required')),
        imageUrl: Joi.string().required().uri().label(utils.getI18nMessage('style_uri_invalid')),
        description: Joi.string().required().label(utils.getI18nMessage('style_desc_required'))
    },
    offerSchema: {
        title: Joi.string().required().label(utils.getI18nMessage('offer_title_required')),
        description: Joi.string().required().label(utils.getI18nMessage('offer_desc_required')),
        imageUrl: Joi.string().uri().label(utils.getI18nMessage('offer_uri_invalid')),
    }
};