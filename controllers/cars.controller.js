const e = require("express");
const { Car } = require("../models");

module.exports.createCar = async (req, res, next) => {
  try {
    const { body } = req;

    const car = await Car.create(body);

    console.log(car);

    res.status(201).send({ data: car });
  } catch (error) {
    next(error);
  }
};

module.exports.getCars = async (req, res, nex) => {
  try {
    const car = await Car.findAll();

    console.log(car);

    res.send({ data: car });
  } catch (error) {
    next(error);
  }
};

module.exports.getCar = async (req, res, next) => {
  try {
    const {
      params: { carId },
    } = req;

    const car = await Car.findByPk(carId);

    console.log(car);

    res.send({ data: car });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteCar = async (req, res, next) => {
  try {
    const {
      params: { carId },
    } = req;

    const car = await Car.findByPk(carId);

    await car.destroy();

    console.log(car);

    res.status(200).send(car);
  } catch (error) {
    next(error);
  }
};

module.exports.updateCar = async (req, res, next) => {
  try {
    const {
      params: { carId },
      body,
    } = req;

    const car = await Car.findByPk(carId);

    const updateCar = await car.update(body);

    res.send({ data: updateCar });
  } catch (error) {
    next(error);
  }
};
