# App Dev Tools

Este é o projeto auxiliar para o projeto _app-cs_

- [App Dev Tools](#app-dev-tools)
  - [Utilização do projeto](#utilização-do-projeto)
  - [scripts](#scripts)
  - [color-name](#color-name)
  - [show-colors](#show-colors)
  - [automation](#automation)
    - [Tabela de opções](#tabela-de-opções)
  - [Criação de um componente](#criação-de-um-componente)

## Utilização do projeto

Para utilizar este projeto, você precisa copiar o projeto **_app-cs_** para dentro da pasta raiz deste projeto.

Mantenha um terminal apontado para a raiz do **_app-dev-tools_** e outro para a raiz do **_app-cs_**.

Quando precisar acionar os automatizadores utilize o terminal apontado para **_app-dev-tools_**

## scripts

Este projeto possui os seguinte scripts

| scripts         | description                                      |
| --------------- | ------------------------------------------------ |
| **automation**  | script com automatização de criação de arquivos  |
| **show-colors** | mostras os nomes e valores das cores do theme CS |
| **color-name**  | pesquisar o nome de um color hex                 |

## color-name

```sh
COLOR=$hexadecimal yarn color-name

//or

COLOR=$hexadecimal npm run color-name
```

## show-colors

```sh
yarn show-colors

//or

npm run show-colors
```

## automation

```sh
yarn automation

//or

npm run automation
```

### Tabela de opções

| Opção            | Descrição                                       |
| ---------------- | ----------------------------------------------- |
| Create Component | Cria a estrutura base de um componente          |
| Create Context   | Cria a estrutura base de um contexto e provider |

## Criação de um componente

Para criar um componente você deve informar o **_nome_** e o **_caminho_** onde ele deve ser criado. Para pegar o caminha clique com o botão direito do mouse sobre a pasta que deseja criar o componente e clique em **_Copy Relative Path_**
