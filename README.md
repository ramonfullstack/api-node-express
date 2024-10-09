Task Manager API - Node.js
Descrição
Esta é uma API simples para gerenciamento de tarefas, construída com Node.js e Express. A API permite que os usuários criem, listem, atualizem e excluam tarefas. O projeto simula um banco de dados usando um arquivo JSON para armazenar os dados temporariamente. Este projeto é ideal para iniciantes que desejam aprender a construir uma API RESTful do zero com Node.js.

Funcionalidades
Criar uma nova tarefa.
Listar todas as tarefas.
Buscar uma tarefa por ID.
Atualizar uma tarefa existente.
Excluir uma tarefa.
Requisitos
Node.js (versão 12 ou superior)
npm (geralmente instalado com o Node.js)
Instalação
Clone o repositório:
bash
Copiar código
git clone https://github.com/seuusuario/task-manager-api.git
Acesse a pasta do projeto:
bash
Copiar código
cd task-manager-api
Instale as dependências:
bash
Copiar código
npm install
Inicie o servidor:
bash
Copiar código
npm start
O servidor será executado na porta 3000 por padrão. Você pode acessá-lo em http://localhost:3000.

Endpoints
1. Listar todas as tarefas
GET /tasks

Resposta:

json
Copiar código
[
  {
    "id": 1,
    "title": "Tarefa 1",
    "description": "Descrição da tarefa 1"
  },
  {
    "id": 2,
    "title": "Tarefa 2",
    "description": "Descrição da tarefa 2"
  }
]
2. Buscar uma tarefa por ID
GET /tasks/:id

Exemplo de resposta:

json
Copiar código
{
  "id": 1,
  "title": "Tarefa 1",
  "description": "Descrição da tarefa 1"
}
3. Criar uma nova tarefa
POST /tasks

Body (JSON):

json
Copiar código
{
  "title": "Nova tarefa",
  "description": "Descrição da nova tarefa"
}
Exemplo de resposta:

json
Copiar código
{
  "id": 3,
  "title": "Nova tarefa",
  "description": "Descrição da nova tarefa"
}
4. Atualizar uma tarefa existente
PUT /tasks/:id

Body (JSON):

json
Copiar código
{
  "title": "Tarefa atualizada",
  "description": "Nova descrição da tarefa"
}
Exemplo de resposta:

json
Copiar código
{
  "id": 1,
  "title": "Tarefa atualizada",
  "description": "Nova descrição da tarefa"
}
5. Excluir uma tarefa
DELETE /tasks/:id

Resposta:

json
Copiar código
{
  "message": "Tarefa excluída com sucesso"
}
Tecnologias Utilizadas
Node.js
Express.js
Como Testar a API
Você pode testar os endpoints da API usando ferramentas como o Postman ou Insomnia. Para testar, basta seguir os exemplos de requisição descritos acima.

Contribuições
Contribuições são bem-vindas! Se você encontrar algum bug ou tiver sugestões de melhorias, fique à vontade para abrir uma issue ou enviar um pull request.

Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
