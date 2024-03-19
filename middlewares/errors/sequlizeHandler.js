const {BaseError} = require('sequelize');

module.exports.sequelizeErrorHandler = async (err, req, res, next) => {

  if(err instanceof BaseError) {

    if(err.name === 'SequelizeUniqueConstraintError') {
      res.status(409).send({
        errors: err.errors
      });
      next();
    }

  }
  next(err);
}