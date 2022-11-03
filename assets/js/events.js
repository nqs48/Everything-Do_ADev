import {
  agregarTarea,
  listarTareas,
  inputTareas,
  editarTareas,
  eliminarTareas,
} from "./main.js";

const boton_agregar = document.querySelector(".boton-agregar");
const lista_tareas = document.querySelector(".lista-tareas");
const boton_limpiar = document.querySelector(".boton-limpiar");
const boton_listar = document.querySelector(".boton-listar");
const boton_tarea = document.querySelector(".boton-tarea");

//Declaración de eventos
boton_agregar.addEventListener("click", () => {
  const inputTarea = document.querySelector(".input-tarea");
  agregarTarea(inputTarea.value);
  inputTarea.value = "";
});

boton_listar.addEventListener("click", () => {
  listarTareas();
});

boton_tarea.addEventListener("click", () => {
  inputTareas();
});

lista_tareas.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    let id = event.target.id;
    let descripcion = event.target.value;
    editarTareas(id, descripcion);
  }
});

lista_tareas.addEventListener("click", (event) => {
  if (event.target.classList.contains("boton-eliminar")) {
    let idTarea = event.target.id.substring(1);
    eliminarTareas(idTarea);
    let lista = document.getElementById(`L${idTarea}`);
    lista.remove();
  }
});

