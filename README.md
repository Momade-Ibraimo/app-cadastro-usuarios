# 👤 App Cadastro de Usuários

Interface de cadastro de usuários construída com React. Permite adicionar, listar e remover usuários através de uma API REST conectada.

> ⚠️ **Este projeto faz parte de um sistema com dois repositórios que se comunicam. Para funcionar corretamente, a API e o Frontend precisam estar rodando na mesma máquina ao mesmo tempo.**
>
> | Repositório | Link |
> |---|---|
> | 🔧 **API (necessária para o frontend funcionar)** | [node-user-api](https://github.com/Momade-Ibraimo/node-user-api) |
> | 🖥️ **Frontend (você está aqui)** | [app-cadastro-usuarios](https://github.com/Momade-Ibraimo/app-cadastro-usuarios) |

## 🌐 Deploy

Acesse a versão publicada: [app-cadastro-usuarios](https://momade-ibraimo.github.io/app-cadastro-usuarios/)

> ⚠️ A versão publicada exibe a interface, mas **as funcionalidades dependem da API rodando localmente**. Para uso completo, siga as instruções abaixo.

---

## ✅ Funcionalidades

- Cadastrar usuários com nome e idade
- Listar todos os usuários cadastrados
- Deletar usuários da lista
- Navegação entre páginas com React Router
- Estilização com Styled Components

---

## 🛠️ Tecnologias utilizadas

- React
- Styled Components
- Axios
- React Router DOM

---

## ⚙️ Como rodar

### 1. Suba a API primeiro

O frontend **depende da API** para funcionar. Clone e inicie o back-end antes de qualquer coisa:

```bash
git clone https://github.com/Momade-Ibraimo/node-user-api
cd node-user-api
npm install
npm start
```

A API deve estar rodando em `http://localhost:3002`.

### 2. Suba o frontend

```bash
git clone https://github.com/Momade-Ibraimo/app-cadastro-usuarios
cd app-cadastro-usuarios
npm install
npm start
```

Com os dois rodando na mesma máquina, a aplicação estará completamente funcional.

---

## 📁 Estrutura do projeto

```
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
```

---

## 🔗 Endpoints utilizados

| Método | Endpoint | Descrição |
|---|---|---|
| `POST` | `/user` | Cria um novo usuário |
| `GET` | `/users` | Lista todos os usuários |
| `DELETE` | `/users/:id` | Remove um usuário |
