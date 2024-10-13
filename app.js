const express = require('express');
const taskRoutes = require('./routes/taskRoute');
const app = express();
const Task = require('./models/taskModelDb')

app.use(express.json());

async function startDatabase() {
  try {
    await Task.sync();
    console.log('Banco de dados sincronizado!');
  } catch (err) {
    console.error('Erro ao sincronizar o banco de dados:', err);
  }
}

startDatabase();

app.use('/tasks', taskRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
