const carRouter = require('express').Router();
const carController = require('../controllers/cars.controller');

carRouter.post('/', carController.createCar)

module.exports = carRouter;