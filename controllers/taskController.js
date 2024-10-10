const Task = require('../models/taskModelDb');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar tarefas' });
  }
};

const getTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ error: 'Tarefa não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar tarefa' });
  }                                                        
};

const createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const task = await Task.create({ title, description });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar tarefa' });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.body.id;
  const { title, description } = req.body;
  try {
    const task = await Task.findByPk(id);
    if (task) {
      task.title = title;
      task.description = description;
      await task.save();
      res.json(task);
    } else {
      res.status(404).json({ error: 'Tarefa não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar tarefa' });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (task) {
      await task.destroy();
      res.json({ message: 'Tarefa excluída com sucesso' });
    } else {
      res.status(404).json({ error: 'Tarefa não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir tarefa' });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
