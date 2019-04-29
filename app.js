const express = require('express');

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const bodyParser= require('body-parser')
const i18n = require('i18n');
require('dotenv').config();
global.appRoot = path.resolve(__dirname);

const utils = require('./middleware/utils');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const pricesRouter = require('./routes/prices');
const financialsRouter = require('./routes/financials');
const offersRouter = require('./routes/offers');
const stylesRouter = require('./routes/styles');
const reservationsRouter = require('./routes/reservations');
const imagesRouter = require('./routes/images');


const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, OPTIONS, DELETE");
    next();
});

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}))
// app.use('/api', expressJwt({'secret': process.env.JWT_SECRET}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

i18n.configure({
    locales: ['en', 'ar'],
    directory: __dirname + '/locales'
});

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/prices', pricesRouter);
app.use('/api/financials', financialsRouter);
app.use('/api/offers', offersRouter);
app.use('/api/styles', stylesRouter);
app.use('/api/reservations', reservationsRouter);
app.use('/api/images', imagesRouter);

app.get('/api/auth', (req, res) => {
    jwt.sign(req.body, process.env.JWT_SECRET, {expiresIn: process.env.TOKEN_EXPIRATION_TIME}, (err, token) => {
        if (err) {
            console.log(err);
            utils.sendResponse(res, 400, {success: false, message: utils.getI18nMessage("Bad_Request")});
        }
        utils.sendResponse(res, 200, {success: true, token});
    });
});

app.use((req, res, next) => {
    utils.sendResponse(res, 404, {success: false, message: utils.getI18nMessage("page_not_found")});
});


module.exports = app;
