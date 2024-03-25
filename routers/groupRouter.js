const groupRouter = require("express").Router();
const groupController = require('../controllers/group.controller');
const { paginate } = require("../middlewares/common.mw");

groupRouter.post('/', groupController.createGroup);
groupRouter.get('/',paginate, groupController.getGroups);

module.exports = groupRouter;