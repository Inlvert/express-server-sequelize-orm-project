const { Group, User } = require("../models");
const createHttpError = require("http-errors");

module.exports.createGroup = async (req, res, next) => {
  try {
    const {
      body: { userId, ...body },
    } = req;

    const groupAutor = await User.findByPk(userId);

    if (!groupAutor) {
      return next(createHttpError(404, "user not found"));
    }
    const group = await Group.create(body);

    await group.addUser(groupAutor);

    res.status(201).send({ data: group });
  } catch (error) {
    next(error);
  }
};

module.exports.getGroups = async (req, res, next) => {
  try {
    const { pagination } = req;

    const groups = await Group.findAll({
      ...pagination,
      include: {
        model: User,
        requred: true,
        attributes: ["id", "fullName", "password"],
        through: {
          attributes: ["groupId", "UserId"],
        },
      },
    });

    res.send({ data: groups });
  } catch (error) {
    next(error);
  }
};

module.exports.addUserToGroup = async (req, res, next) => {
  try {
    const {
      user,
      params: { groupId },
    } = req;

    const group = await Group.findByPk(groupId);

    if (!group) {
      return next(createHttpError(404, "Group not found"));
    }

    await user.addGroup(group);

    const groupWithUsers = await Group.findOne({
      where: { id: groupId },
      include: {
        model: User,
        attributes: {
          exclude: ["password"],
        },
        through: {
          attributes: [],
        },
      },
    });
    res.send({ data: groupWithUsers });
  } catch (error) {
    next(error);
  }
};
