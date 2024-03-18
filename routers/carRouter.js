const carRouter = require('express').Router();
const carController = require('../controllers/cars.controller');

carRouter.post('/', carController.createCar);
carRouter.get('/', carController.getCars);
carRouter.get('/:carId', carController.getCar);
carRouter.delete('/:carId', carController.deleteCar);
carRouter.put('/:carId', carController.updateCar);


module.exports = carRouter;