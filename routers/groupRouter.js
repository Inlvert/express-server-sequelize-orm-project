const groupRouter = require("express").Router();
const groupController = require('../controllers/group.controller');
const { paginate } = require("../middlewares/common.mw");
const { findUser } = require("../middlewares/user.mw");

groupRouter.post('/', groupController.createGroup);
groupRouter.get('/',paginate, groupController.getGroups);
groupRouter.post('/:groupId/users/:userId', findUser, groupController.addUserToGroup);

module.exports = groupRouter;