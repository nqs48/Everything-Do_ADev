import { success, error } from "./sweet.alerts.js";

//Elementos del DOM
const boton_agregar = document.querySelector(".boton-agregar");
const lista_tareas = document.querySelector(".lista-tareas");
const boton_limpiar = document.querySelector(".boton-limpiar");
const boton_listar = document.querySelector(".boton-listar");
const boton_tarea = document.querySelector(".boton-tarea");

//Declaración variables LocalStorage
let arregloTareas;
let contador;

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

boton_limpiar.addEventListener("click", () => {
  let title = "Todas las tareas han sido eliminadas";
  arregloTareas = [];
  contador = 0;
  setData();
  success(title);
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

//Funciones de Lógica de Aplicación
const agregarTarea = (descripcion) => {
  if (descripcion.trim() == "") {
    let text = "La tarea no puede estar vacía!";
    error(text);
  } else {
    let title = "Tu tarea ha sido creada satisfactoriamente";
    contador = parseInt(contador) + 1;
    let objetoTarea = {
      id: contador,
      descripcion: descripcion,
    };
    arregloTareas = getArregloTareas();
    arregloTareas.push(objetoTarea);
    setData();
    success(title);
  }
};

const listarTareas = () => {
  lista_tareas.innerHTML = "";
  getArregloTareas()
    .reverse()
    .forEach((tarea) => {
      let li = document.createElement("li");
      li.id = `L${tarea.id}`;
      let input = document.createElement("input");
      input.id = `${tarea.id}`;
      input.type = "text";
      input.classList.add("input-tarea");
      input.value = `${tarea.descripcion}`;
      let button = document.createElement("button");
      button.id = `D${tarea.id}`;
      button.classList.add("boton-eliminar");
      button.textContent = "X";
      li.append(input, button);
      lista_tareas.appendChild(li);
    });
};

const inputTareas = () => {
  lista_tareas.innerHTML = "";
  let li = document.createElement("li");
  let input = document.createElement("input");
  input.type = "text";
  input.classList.add("input-tarea");
  li.append(input);
  lista_tareas.appendChild(li);
};

export const editarTareas = (id, descripcion) => {
  arregloTareas.forEach((tarea) => {
    if (tarea.id == id) {
      tarea.descripcion = descripcion;
      let title = "Tu tarea ha sido editada";
      success(title);
    }
  });
  setData();
};

const eliminarTareas = (id) => {
  let newArreglo = [];
  arregloTareas.forEach((tarea) => {
    if (tarea.id != id) {
      newArreglo.push(tarea);
    }
  });
  arregloTareas = newArreglo;
  setData();
};

//Funciones Asociadas al LocalStorage
const setData = () => {
  localStorage.setItem("contador", contador);
  localStorage.setItem("arregloTareas", JSON.stringify(arregloTareas));
};

const getContador = () => {
  const cont = localStorage.getItem("contador");
  return cont;
};

const getArregloTareas = () => {
  return JSON.parse(localStorage.getItem("arregloTareas"));
};

//Función inicio de app con configuración de datos al localStorage
function init() {
  contador = getContador();
  arregloTareas = getArregloTareas();
  if (contador == null || arregloTareas == null) {
    contador = 0;
    arregloTareas = [];
    setData();
  }
}

//Inicio de la aplicación
init();
