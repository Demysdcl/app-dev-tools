const promptsNameAndPath = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the component name?',
  },
  {
    type: 'input',
    name: 'path',
    message: 'Where do you want to create the component?',
  },
];

module.exports = function (plop) {
  plop.setGenerator('Create Base Component', {
    prompts: promptsNameAndPath,
    actions: [
      {
        type: 'addMany',
        destination: '../app-cs/{{path}}/{{pascalCase name}}',
        templateFiles: './component',
      },
    ],
  });
};
