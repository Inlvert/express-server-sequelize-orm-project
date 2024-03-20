const userRouter = require("express").Router();
const userController = require("../controllers/users.controler");
const { paginate } = require("../middlewares/common.mw");
const { findUser } = require("../middlewares/user.mw");

userRouter.post("/", userController.createUser);

userRouter.get("/", paginate, userController.getUsers);

userRouter.get("/:userId", findUser, userController.getUser);

// userRouter.delete('/:userId', userController.deleteUser);

userRouter.delete("/:userId", findUser, userController.deleteUserInstance);

userRouter.put("/:userId", findUser, userController.updateUser);

module.exports = userRouter;
