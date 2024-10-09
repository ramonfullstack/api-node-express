const taskModel = require('../models/taskModel');

const getAllTasks = (req, res) => {
  res.json(taskModel.getAllTasks());
};

const getTaskById = (req, res) => {
  const task = taskModel.getTaskById(parseInt(req.params.id));
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: 'Tarefa não encontrada' });
  }                                                         
};

const createTask = (req, res) => {
  const newTask = taskModel.createTask(req.body);
  res.status(201).json(newTask);
};

const updateTask = (req, res) => {
  const updatedTask = taskModel.updateTask(parseInt(req.params.id), req.body);
  if (updatedTask) {
    res.json(updatedTask);
  } else {
    res.status(404).json({ message: 'Tarefa não encontrada' });
  }
};

const deleteTask = (req, res) => {
  const deletedTask = taskModel.deleteTask(parseInt(req.params.id));
  if (deletedTask) {
    res.status(204).json();
  } else {
    res.status(404).json({ message: 'Tarefa não encontrada' });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
