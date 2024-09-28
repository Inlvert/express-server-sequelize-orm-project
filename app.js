const express = require('express');
const router = require('./routers');
const basicErrorsHandler = require('./middlewares/errors/basicErrors');
const { sequelizeErrorHandler } = require('./middlewares/errors/sequlizeHandler');
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(sequelizeErrorHandler);
app.use(basicErrorsHandler);

module.exports = app;