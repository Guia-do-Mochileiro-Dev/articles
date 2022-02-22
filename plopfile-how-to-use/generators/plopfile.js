module.exports = function (plop) {
  // gerador
  plop.setGenerator("controller", {
    description: "application controller logic", // descrição do gerador
    prompts: [
      {
        type: "input",
        name: "name",
        message: "controller name please",
      },
    ], // prompt é a pergunta que o gerador vai te fazer quando você rodar o comando
    actions: [
      {
        type: "add", // com esse add ele vai adicionar um arquivo
        path: "src/{{name}}.js", // aqui é o path de onde o arquivo vai ser criado
        templateFile: "templates/component.tsx.hbs", // aqui é o arquivo que vai servir como base (o template)
      },
      {
        type: "add",
        path: "src/{{name}}/{{name}}.js", // você também pode criar pastas utilizando o name
        templateFile: "templates/index.tsx.hbs",
      },
    ], // action é o que ele vai fazer quando você responder o prompt
  });
};
