const router = require('express').Router();
const carRouter = require('./carRouter');
const userRouter = require('./userRouter')


router.use('/users', userRouter);
router.use('/cars', carRouter)

module.exports = router;