const userRouter = require('express').Router();
const userController = require('../controllers/users.controler');

userRouter.post('/', userController.createUser);

userRouter.get('/', userController.getUsers);

userRouter.get('/:userId', userController.getUser);

// userRouter.delete('/:userId', userController.deleteUser);

userRouter.delete('/:userId', userController.deleteUserInstance);

userRouter.put('/:userId', userController.updateUser);

module.exports = userRouter;

