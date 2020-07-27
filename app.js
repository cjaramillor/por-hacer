const argv = require("./config/yargs").argv;
const por_hacer = require("./por-hacer/por-hacer");
const color = require("colors");

let comando = argv._[0];


switch (comando) {
    case "crear":
        let tarea = por_hacer.crear(argv.descripcion, argv.i);
        break;

    case "listar":
        let lista = por_hacer.getLista();
        for (let i = 0; i < lista.length; i++) {
            const element = lista[i];
            console.log(color.green("========Tareas==========="));
            console.log(element.descripcion);
            console.log("estado :" + element.completado);
            console.log(color.green("========================="));
        }
        break;

    case "actualizar":
        let actu = por_hacer.actualizarTarea(argv.descripcion, argv.completado);
        if (actu) {
            console.log("Tarea actualizada!");
        } else {
            console.log("Tarea no actualizada.");
        }
        break;

    case "borrar":
        let borrar = por_hacer.borrarTarea(argv.descripcion);
        if (borrar) {
            console.log("Tarea borrada!");
        } else {
            console.log("Tarea no pudo ser borrada.");
        }

    default:
        "comando no disponible"
}