const createHttpError = require("http-errors");
const { Task } = require("../models");

// module.exports.createTask = async (req, res, next) => {
//   try {
//     const {
//       user: { id: userId },
//       body,
//     } = req;

//     const task = await Task.create({ ...body, userId });

//     res.status(201).send({ data: task });
//   } catch (error) {
//     next(error);
//   }
// };

// variant wiht magic method

module.exports.createTask = async (req, res, next) => {
  try {
    const { user, body } = req;

    const task = await user.createTask(body);

    res.status(201).send({ data: task });
  } catch (error) {
    next(error);
  }
};

module.exports.getAllUserTasks = async (req, res, next) => {
  try {
    const { user } = req;

    const tasks = await user.getTasks();

    res.status(201).send({ data: tasks });
  } catch (error) {
    next(error);
  }
};
module.exports.getTask = async (req, res, next) => {
  try {
    const { params: {taskId}, user } = req;

    const task = await Task.findOne({
      where: {
        id: taskId,
        userId: user.id
      }
    });

    if(!task) {
      return next(createHttpError(404, 'task not found'))
    }
    res.send({data: task});
  } catch (error) {
    next(error);
  }
};


module.exports.updateTask = async (req, res, next) => {
  try {
    const {user, params: {taskId}, body } = req;

    const [updateCount, [task]] = await Task.update(body, {
      where: {
        id: taskId,
        userId: user.id
      },
      returning: true
    });

    if(updateCount !== 1) {
      return next(createHttpError(404, 'task not found'))
    }
    res.send({data: task});
  } catch (error) {
    next(error);
  }
};


module.exports.deleteTask = async (req, res, next) => {
  try {
    const { params: {taskId}, user } = req;

    const task = await Task.findOne({
      where: {
        id: taskId,
        userId: user.id
      }
    });
    
    if(!task) {
      return next(createHttpError(404, 'task not found'))
    }

    await task.destroy();
    
    res.send({data: task});
  } catch (error) {
    next(error);
  }
}