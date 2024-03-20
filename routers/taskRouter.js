const taskRouter = require('express').Router();
const taskController = require('../controllers/tasks.controller')

taskRouter.post('/', taskController.createTask);
taskRouter.get('/', taskController.getAllUserTasks);
taskRouter.get('/:taskId', taskController.getTask);
taskRouter.put('/:taskId', taskController.updateTask);
taskRouter.delete('/:taskId', taskController.deleteTask);


module.exports = taskRouter;