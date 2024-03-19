module.exports = async (err, req, res, next) => {

  const status = await err.status || 500;

  res.status(status).send({
    errors: [
      err.message
    ]
  })
}