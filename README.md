# Aplicação NestJS com MySQL

Este é um projeto de uma aplicação utilizando NestJS

## Pré-requisitos

Certifique-se de ter os seguintes softwares instalados em sua máquina:

- Node.js
- NPM ou Yarn

## Instalação

### 1. Clonar o repositório

Primeiramente, clone o repositório do projeto para sua máquina local.

```bash
git clone https://github.com/Jucafleming/LojaNestJs.git
```

### 2. Instalar dependências

Instale as dependências do projeto usando NPM ou Yarn.

Com NPM:
```bash
npm install
```

Com Yarn:
```bash
yarn install
```
## 3. Executar a Aplicação

Para iniciar a aplicação em modo de desenvolvimento, utilize o seguinte comando:

```bash
npm run start:dev
```

A aplicação estará disponível em `http://localhost:3000`.



## 4. Estrutura do Projeto
```
└── 📁src
    └── 📁produto
        └── 📁controller
            └── produto.controller.ts
        └── 📁dto
            └── atualizaProduto.dto.ts
            └── listaProduto.dto.ts
            └── produto.dto.ts
        └── 📁entity
            └── produtoEntity.ts
        └── 📁repository
            └── produto.repository.ts
        └── produto.module.ts
    └── 📁usuario
        └── 📁controller
            └── usuario.controller.ts
        └── 📁dto
            └── atualizaUsuario.dto.ts
            └── criaUsuario.dto.ts
            └── listaUsuario.dto.ts
        └── 📁entity
            └── usuario.entity.ts
        └── 📁repository
            └── usuario.repository.ts
        └── 📁validation
            └── emailUnico.validator.ts
        └── usuario.module.ts
    └── app.module.ts
    └── main.ts
```



##  5. Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)


