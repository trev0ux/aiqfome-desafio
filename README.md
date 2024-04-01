# Olá, esse é o desafio para a aiqfome feito por Lucas Amorim
Antes de mais nada gostaria de dizer que foi um prazer fazer esse desafio durante o meu final de semana e que achei muito bacana usar dessa abordagem para que assim eu mostre meu potencial e trabalho, espero que gostem.

Apliquei uma série de padrões e metodologias para garantir um produto escalável e de fácil manutenibilidade focado na experiência dos usuários e também dos desenvolvedores.

### Pacotes usados nesse projeto:

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

## Agora, tentarei expor e descrever ao longo desse arquivo minhas tomadas de decisão no código construído.

### Padrão da criação de classes de estilo: BEM com o SCSS:

![ray-so-export](https://github.com/trev0ux/aiqfome-desafio/assets/47607723/ee9bad77-68f3-495b-bb6d-c618ccf8482d)

### Arquitetura de componentes seguindo o Atomic Design para garantir escalabilidade

![image](https://github.com/trev0ux/aiqfome-desafio/assets/47607723/a4ee02b5-b107-4411-b2ab-62803d3c777f)

### MobileFirst entendendo que a maioria dos usuários desse produto usam mobile

![ray-so-export (2)](https://github.com/trev0ux/aiqfome-desafio/assets/47607723/18be144f-303a-4c7a-895c-bd814e330d9a)

## Melhorias consideradas

- Uso do Stylelint e do ESLINT
- Comprimir imagens
- Refatorar o código 







