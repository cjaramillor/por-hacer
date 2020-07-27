const fs = require("fs");
const { array } = require("yargs");
let listado_tareas = [];


const guardarDB = () => {
    let data = JSON.stringify(listado_tareas);
    fs.writeFile("db/data.json", data, (err) => {
        if (err) {
            console.log("Error de creacion : " + err);
        }
    });
}

const cargarDB = () => {

    try {
        listado_tareas = require("../db/data.json");
    } catch (error) {
        listado_tareas = [];
    }

}

const crear = (desc) => {

    cargarDB();

    let tarea = {
        descripcion: desc,
        completado: true
    };

    listado_tareas.push(tarea);
    guardarDB();
    return tarea;
}

const getLista = () => {
    cargarDB();
    return listado_tareas;
}

const actualizarTarea = (descripcion, estado) => {

    cargarDB();
    let index = listado_tareas.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listado_tareas[index].completado = estado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrarTarea = (descripcion) => {

    cargarDB();
    let borrar = listado_tareas.filter(tarea => tarea.descripcion !== descripcion);

    if (borrar.length == listado_tareas.length) {
        return false;
    } else {
        listado_tareas = borrar;
        guardarDB();
        return true;
    }
}


module.exports = {
    crear,
    getLista,
    actualizarTarea,
    borrarTarea
}