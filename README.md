# Olá, esse é o desafio para a aiqfome feito por Lucas Amorim
Antes de mais nada gostaria de dizer que foi um prazer fazer esse desafio durante o meu final de semana e que achei muito bacana usar dessa abordagem para que assim eu mostre meu potencial e trabalho, espero que gostem.

Apliquei uma série de padrões e metodologias como BEM e Atomic Design para garantir um produto escalável e de fácil manutenibilidade focado na experiência dos usuários e também dos desenvolvedores.

### Tecnologias e metodologias utilizadas:
 - HTML
 - SCSS
 - Bootstrap 5
 - Metodologia BEM
 - JavaScript
 - Vue3
 - Nuxt.js
 - Atomic Design
 - Mobile First
 - Apollo
 - GraphQL
   
### Pacotes e dependências usados nesse projeto:

![ray-so-export (1)](https://github.com/trev0ux/aiqfome-desafio/assets/47607723/dcce0ee5-baee-4ccc-9ee9-52c8c0bce0d6)


## Como rodar o projeto?

Esse projeto é desenvolvido com [Nuxt 3 documentation](https://nuxt.com) .

### Setup

Instale as dependências:

```bash
### npm
npm install
```

### Rode o servidor de desenvolvimento

```bash
# npm
npm run dev
```
Veja o servidor de desenvolvimento em `http://localhost:3000`:

Acesse a página com o link: `http://localhost:3000/order/ceviche-de-salmao`:


## Production

Rode a aplicação em produção:

```bash
# npm
npm run build

```

## Setup GraphQL

## Install
```bash
# Execute o comando:
npm i json-graphql-server -g

```
## Rode o servidor GraphQL
```bash
# Execute o comando:
json-graphql-server data.json  --p 4000
```
```bash
# Acesse o navegador e insira a url:
https://localhost:4000
```

```bash
# Execute essa query no GraphiQL Playground:
  query GetOrder($id: ID!) {
    Order(id: $id) {
      id
      slug
      name
      image
      shop
      currency
      description
      price
      size
      drink
      utensil
      other
    }
  }

# Adicione esse id na Query Variables
{
  "id":"1"
}
```

Para simular um servidor GraphQL criei um mock chamado `data.json` com as informações dos produtos enviando para um servidor GraphQL para tentar me aproximar ao máximo da realidade de vocês com o uso da ferramenta.

![data json](https://github.com/trev0ux/aiqfome-desafio/assets/47607723/419d1142-2c94-406d-a845-bcc8fd50410d)


## Premissas e entendendo as funcionalidades

![firefox_ANRyMJoWgK](https://github.com/trev0ux/aiqfome-desafio/assets/47607723/3067d291-148a-4fb9-a6ab-36a8da865533)

- O usuário pode adicionar e remover quantidades do produto e esse valor refletir no preço total exibido
- O usuário pode escolher o tamanho do produto e será enviado um objeto com preço, nome e tamanho
- As bebidas o usuário pode iterar adicionando ou removendo um novo item
- O usuário pode escolher um utensilio e um objeto com informações detalhadas do utensilio ser enviado
- O usuário pode escolher multiplo valores de itens adicionais, podendo ser adicionado, mudado ou removido cada valor escolhido
- Cada produto deve ter uma tela especifica para que o pedido seja feito


## Tomadas de decisão no processo de desenvolvimento

### Padrão da criação de classes de estilo: BEM com o SCSS:

![ray-so-export](https://github.com/trev0ux/aiqfome-desafio/assets/47607723/ee9bad77-68f3-495b-bb6d-c618ccf8482d)

### Arquitetura de componentes seguindo o Atomic Design para garantir escalabilidade

![image](https://github.com/trev0ux/aiqfome-desafio/assets/47607723/a4ee02b5-b107-4411-b2ab-62803d3c777f)

### Abordagem Mobile First com a lógica de large screens ser feito por último usando breakpoints

![ray-so-export (2)](https://github.com/trev0ux/aiqfome-desafio/assets/47607723/18be144f-303a-4c7a-895c-bd814e330d9a)

## Principais desafios

- Fazer uma integração com a mock data foi um grande desafio, criar uma query, instalar o pacote adequado para que isso funcione foi algo bastante desafiante. Essa proposta veio a partir da compreensão de que teremos uma só página com diferentes informações vinda do back-end, essa abordagem proativa é justamente entendendo de que teriamos páginas de vários produtos

- Tratar as informações dos formulários também foi uma tarefa trabalhosa e desafiadora, entendendo que é algo completamente dinâmico e que o usuário pode adicionar, mudar ou remover os itens inseridos. Precisei criar um objeto com as informações certas vindas de cada formulário

## Melhorias consideradas

- Uso do Stylelint e do ESLINT
- Comprimir imagens
- Refatorar o código
- Método POST com as informações do formulário
- Inserir propriedades no localStorage







