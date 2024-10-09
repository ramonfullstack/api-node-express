const express = require('express');
const taskRoutes = require('./routes/taskRoute');
const app = express();

app.use(express.json());

app.use('/tasks', taskRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
