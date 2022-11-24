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
  plop.setGenerator('Create Component (index.tsx - styles.ts)', {
    prompts: promptsNameAndPath,
    actions: [
      {
        type: 'addMany',
        destination: '../app-cs/{{path}}/{{pascalCase name}}',
        templateFiles: './component',
      },
    ],
  });
  plop.setGenerator('Create Component ($name.tsx index.ts - styles.ts)', {
    prompts: promptsNameAndPath,
    actions: [
      {
        type: 'addMany',
        destination: '../app-cs/{{path}}/{{pascalCase name}}',
        templateFiles: './component-named',
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
