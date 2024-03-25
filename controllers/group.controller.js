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
    const { paginate } = req;

    const groups = await Group.findAll({ 
      ...paginate,
      include: {
        model: User,
        requred:true,
        attributes: ['id', 'fullName', 'password'],
        through: {
          attributes: ['groupId', 'UserId']
        }
      }
    });

    res.send({ data: groups });
  } catch (error) {
    next(error);
  }
};
