const descripcion = {
    demand: true,
    alias: "d",
    desc: "Descripcion de la tarea"
}
const completado = {
    default: false,
    alias: "c",
    desc: "Estado de la tarea"
}

const argv = require("yargs")
    .command('crear', "Crea una tarea nueva", {
        descripcion
    })
    .command("actualizar", "actualizar una tarea", {
        descripcion,
        completado
    })
    .command("borrar", "borra una tarea", {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}