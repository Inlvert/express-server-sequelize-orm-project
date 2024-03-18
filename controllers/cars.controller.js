const { Car } = require("../models");

module.exports.createCar = async (req, res, next) => {
  try {
    const { body } = req;

    const car = await Car.create(body);

    console.log(car);

    res.send(car);
    
  } catch (error) {
    next(error);
  }
};
