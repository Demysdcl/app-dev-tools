const promptsNameAndPath = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the item name?',
  },
  {
    type: 'input',
    name: 'path',
    message: 'Where do you want to create the item?',
  },
];

module.exports = function (plop) {
  plop.setGenerator('Create Component', {
    prompts: promptsNameAndPath,
    actions: [
      {
        type: 'addMany',
        destination: '../app-cs/{{path}}/{{pascalCase name}}',
        templateFiles: './component',
      },
    ],
  });
  plop.setGenerator('Create Component with Named', {
    prompts: promptsNameAndPath,
    actions: [
      {
        type: 'addMany',
        destination: '../app-cs/{{path}}/{{pascalCase name}}',
        templateFiles: './component-index',
      },
    ],
  });
  plop.setGenerator('Create Context', {
    prompts: promptsNameAndPath,
    actions: [
      {
        type: 'addMany',
        destination: '../app-cs/{{path}}/context',
        templateFiles: './context',
      },
    ],
  });
};
