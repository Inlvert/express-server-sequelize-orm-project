const {
  User,
  Sequelize: { Op },
  Sequelize,
} = require("../models");

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;

    const user = await User.create(body);

    console.log(user);

    res.status(201).send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.getUsers = async (req, res, next) => {
  try {
    //SELECT * FROM users
    const users = await User.findAll();

    console.log(users);

    res.send({ data: users });

    //SELECT fullName FROM users

    // const users = await User.findAll({
    //   attributes: ['fullName']
    // });
    // console.log(users);
    // res.send(users);

    // const user = await User.findAll({
    //   where: {
    //     [Op.or]: [{id : 1},{isMale : true}]
    //   }
    // })
  } catch (error) {
    next(error);
  }
};

module.exports.getUser = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;

    // SELECT * FROM users WHERE id === id;
    // const user = await User.findOne({
    //   where: { id: userId },
    // });

    // SELECT * FROM users WHERE id === id;
    const user = await User.findByPk(userId);

    console.log(user);

    res.send({ data: user });
  } catch (error) {
    next(error);
  }
};

// module.exports.deleteUser = async (req, res, next) => {
//   try {
//     const {
//       params: { userId },
//     } = req;

//     const user = await User.findByPk(userId);

//     await User.destroy({
//       where: {
//         id: userId,
//       },
//     });

//     console.log(user);

//     res.send(user);
//   } catch (error) {
//     next(error);
//   }
// };

module.exports.deleteUserInstance = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;

    const user = await User.findByPk(userId);

    await user.destroy();

    console.log(user);

    res.send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    const {
      params: { userId },
      body,
    } = req;

    // const [updatedRows, [user]] = await User.update(body, {
    //   where: {
    //     id: userId,
    //   },
    //   returning: true
    // });

    //or

    const user = await User.findByPk(userId);

    const updateUser = await user.update(body);

    console.log(updateUser);

    res.send({ data: updateUser });
  } catch (error) {
    next(error);
  }
};
