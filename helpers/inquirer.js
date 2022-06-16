const inquirer = require("inquirer");
require("colors");

const inquirerMenu = async () => {
  console.clear();

  console.log("=====================================".yellow);
  console.log("       Selecciona una opcion".white);
  console.log("=====================================\n".yellow);

  const preguntas = [
    {
      type: "list",
      name: "opcion",
      message: "¿Que deseas hacer?: ".yellow,
      choices: [
        {
          value: 1,
          name: `${"1.".yellow} Buscar ciudad`,
        },
        {
          value: 2,
          name: `${"2.".yellow} Historial`,
        },
        {
          value: 0,
          name: `${"0.".red} Salir`,
        }
      ],
    },
  ];

  const { opcion } = await inquirer.prompt(preguntas);

  return opcion;
};

const pausa = async () => {
  console.log("\n");

  const pausaOpt = [
    {
      type: "input",
      name: "stop",
      message: `Presione ${"ENTER".green} para continuar`,
    },
  ];

  await inquirer.prompt(pausaOpt);
};

const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "descripcion",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingrese un valor";
        }

        return true;
      },
    },
  ];

  const { descripcion } = await inquirer.prompt(question);

  return descripcion;
};

const listadoLugaresBuscados = async ( lugares = [] ) => {

  const choices = lugares.map(( lugar, index ) => {
    const idx = `${index + 1}.`.yellow;

    return {
      value: lugar.id,
      name: `${idx} ${lugar.nombre}`,
    };
  });

  choices.unshift({
    value: 0,
    name: "0.".red + " Cancelar",
  });

  const opciones = [
    {
      type: "list",
      name: "id",
      message: "Selecciona un lugar:".red,
      choices,
    },
  ];

  const { id } = await inquirer.prompt( opciones );

  return id;

};

const mostrarListadoChecklist = async (tareas = "") => {
  const choices = tareas.map((tarea, index) => {
    const idx = `${index + 1}.`.yellow;

    return {
      value: tarea.id,
      name: `${idx} ${tarea.descripcion}`,
      checked: tarea.completadoEn ? true : false,
    };
  });

  const preguntas = [
    {
      type: "checkbox",
      name: "ids",
      message: "Seleccione: ",
      choices,
    },
  ];

  const { ids } = await inquirer.prompt(preguntas);

  return ids;
};

const validador = async (message) => {
  question = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];

  const { ok } = await inquirer.prompt(question);

  return ok;
};

module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
  listadoLugaresBuscados,
  validador,
  mostrarListadoChecklist,
};
