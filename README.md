# DS Delivery
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/fhilips/dsdeliver/blob/main/LICENSE) 

# Sobre o projeto

DS Delivery é uma aplicação full stack web, Spring Boot com React, construída durante a 2ª edição da **Semana DevSuperior**, evento organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

A aplicação consiste em um sistema de pedidos de comida Delivery, onde os usuarios deverão escolher os pratos e selecionar a
localização da entrega dos pedidos no Mapa ou pesquisando o endereço


## Layout web
![dsdeliver](https://github.com/fhilips/dsdeliver/blob/main/front-web/src/Assets/telas.gif)


# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven

## Front end
- HTML / CSS / JS / TypeScript
- ReactJS

## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/fhilips/dsdeliver
# entrar na pasta do projeto back end
cd backend
# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/fhilips/dsdeliver
# entrar na pasta do projeto front end web
cd front-web
# instalar dependências
yarn install
# executar o projeto
yarn start
```
