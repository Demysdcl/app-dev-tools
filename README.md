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
    - [Criação de um componente nomeado](#criação-de-um-componente-nomeado)
    - [Criação de um contexto](#criação-de-um-contexto)

## Utilização do projeto

Para utilizar este projeto, você precisa copiar o projeto **_app-cs_** para dentro da pasta raiz deste projeto.

Abra diretamente o **_app-cs_** no VSCode e mantenha um terminal apontado para a raiz do **_app-dev-tools_** e outro para a raiz do **_app-cs_**.

## scripts

Este projeto possui os seguinte scripts

| scripts         | description                                      |
| --------------- | ------------------------------------------------ |
| **color-name**  | pesquisar o nome de um color hex                 |
| **show-colors** | mostras os nomes e valores das cores do theme CS |
| **automation**  | script com automatização de criação de arquivos  |

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

| Opção                            | Descrição                                                            |
| -------------------------------- | -------------------------------------------------------------------- |
| Create Component                 | Cria a estrutura base de um componente com index and style           |
| Create Component with Named File | Cria a estrutura base de um componente com index, style e named file |
| Create Context                   | Cria a estrutura base de um contexto e provider                      |

### Criação de um componente

Para criar um componente você deve informar o **_nome_** e o **_caminho_** onde ele deve ser criado. Para pegar o caminha clique com o botão direito do mouse sobre a pasta que deseja criar o componente e clique em **_Copy Relative Path_** ou **_Copiar caminho relativo_**

### Criação de um componente nomeado

Para criar um componente você deve informar o **_nome_** e o **_caminho_** onde ele deve ser criado. Para pegar o caminha clique com o botão direito do mouse sobre a pasta que deseja criar o componente e clique em **_Copy Relative Path_** ou **_Copiar caminho relativo_**

### Criação de um contexto

Para criar um contexto você deve informar o **_nome_** e o **_caminho_** onde ele deve ser criado. Para pegar o caminha clique com o botão direito do mouse sobre a pasta que deseja criar o componente e clique em **_Copy Relative Path_** ou **_Copiar caminho relativo_**
