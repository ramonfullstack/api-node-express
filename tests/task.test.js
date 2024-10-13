const request = require('supertest');
const app = require('../app');
const { Task } = require('../models/taskModelDb');
const { default: expect } = require('expect');

jest.mock('../models/taskModelDb', () => ({
  Task: {
    findByPk: jest.fn(),
    sync: jest.fn(),
  }
}));

let server;

beforeAll((done) => {
  server = app.listen(3001, done);
});

afterAll((done) => {
  server.close(done); 
});

describe('PUT /tasks', () => {
  it('deve atualizar a tarefa existente', async () => {
    const mockTask = {
      id: 1,
      title: 'Fazer bolo',
      description: 'Bolo de chocolate',
      save: jest.fn(),
    };

    const res_insert = await request(app)
      .post('/tasks')
      .send(mockTask)
    
    expect(res_insert.statusCode).toEqual(200)

    Task.findByPk.mockResolvedValue(mockTask);

    const res = await request(app)
      .put('/tasks/1')
      .send({
        id: 1,
        title: 'Fazer bolo atualizado',
        description: 'Atualizando descrição',
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('title', 'Fazer bolo atualizado');
    expect(res.body).toHaveProperty('description', 'Atualizando descrição');
  });

  it('deve retornar 404 se a tarefa não for encontrada', async () => {
    Task.findByPk.mockResolvedValue(null);

    const res = await request(app)
      .put('/tasks/999')  // ID que não existe
      .send({
        id: 999,
        title: 'Tarefa não existente',
        description: 'Tentando atualizar tarefa que não existe',
      });

    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty('error', 'Tarefa não encontrada');
  });

  it('deve retornar 500 em caso de erro no servidor', async () => {
    Task.findByPk.mockRejectedValue(new Error('Erro no banco de dados'));

    const res = await request(app)
      .put('/tasks/1')
      .send({
        id: 1,
        title: 'Erro ao atualizar',
        description: 'Erro ao atualizar descrição',
      });

    expect(res.statusCode).toEqual(500);
    expect(res.body).toHaveProperty('error', 'Erro ao atualizar tarefa');
  });
});
