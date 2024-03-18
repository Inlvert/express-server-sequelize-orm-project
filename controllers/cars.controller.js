const { Car, Sequelize } = require("../models");

module.exports.createCar = async (req, res, next) => {
  try {
    const { body } = req;

    const car = await Car.create(body);

    console.log(car);
    res.status(201), send({ data: car });
  } catch (error) {
    next(error);
  }
};
