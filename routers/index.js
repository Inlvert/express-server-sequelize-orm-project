const router = require('express').Router();
const carRouter = require('./carRouter');
const groupRouter = require('./groupRouter');
const userRouter = require('./userRouter')


router.use('/users', userRouter);
router.use('/cars', carRouter);
router.use('/groups', groupRouter)

module.exports = router;