let tasks = [
    { id: 1, title: 'Tarefa 1', description: 'Descrição da tarefa 1' },
    { id: 2, title: 'Tarefa 2', description: 'Descrição da tarefa 2' }
  ];
  
  const getAllTasks = () => tasks;
  
  const getTaskById = (id) => tasks.find(task => task.id === id);
  
  const createTask = (task) => {
    const newTask = { id: tasks.length + 1, ...task };
    tasks.push(newTask);
    return newTask;
  };
  
  const updateTask = (id, updatedTask) => {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      tasks[index] = { ...tasks[index], ...updatedTask };
      return tasks[index];
    }
    return null;
  };
  
  const deleteTask = (id) => {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      return tasks.splice(index, 1);
    }
    return null;
  };
  
  module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
  };
  