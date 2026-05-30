App Cadastro de Usuários

Interface de cadastro de usuários construída com React. É possível adicionar, listar e remover usuários através de uma API REST conectada.

Funcionalidades

- Cadastrar usuários com nome e idade
- Listar todos os usuários cadastrados
- Deletar usuários da lista
- Navegação entre páginas com React Router
- Estilização com Styled Components

Tecnologias

- React
- Styled Components
- Axios
- React Router DOM

Como rodar

Clone o repositório e instale as dependências:

```bash
npm install
```

Certifique-se de que a API está rodando em `http://localhost:3002` antes de iniciar a aplicação.

```bash
npm start
```
Estrutura do projeto
src/
├── assets/
├── components/
│   ├── Button/
│   ├── ContainerItens/
│   └── Title/
├── containers/
│   ├── Home/
│   └── Users/
├── routes.jsx
├── globalStyles.js
└── index.js

 Commits (em ordem natural de desenvolvimento)
 
commit inicial - configuração do projeto com create react app

adiciona estilos globais com reset via styled-components

configura rotas com react-router-dom

cria componente reutilizável de botão

cria componente de título

cria componente de layout ContainerItens

cria página Home com formulário de cadastro

conecta formulário da Home ao endpoint POST /user

redireciona para lista de usuários após cadastro

cria página de usuários com renderização da lista

conecta página de usuários ao endpoint GET /users

adiciona funcionalidade de deletar usuário com atualização otimista

adiciona botão de voltar na página de usuários

estiliza página Home com imagem de fundo e inputs

estiliza página de usuários e itens da lista

adiciona avatar e ícones como assets estáticos
