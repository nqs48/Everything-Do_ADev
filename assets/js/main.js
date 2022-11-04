import { success, error } from "./sweet.alerts.js";

//Elementos del DOM
const lista_tareas = document.querySelector(".lista-tareas");
const boton_limpiar = document.querySelector(".boton-limpiar");
const boton_agregar= document.querySelector(".boton-agregar");

//Declaración variables LocalStorage
let arregloTareas;
let contador;

boton_limpiar.addEventListener("click", () => {
  let title = "Todas las tareas han sido eliminadas";
  if (arregloTareas.length > 0) {
    success(title);
  } else {
    let text = "No hay tareas para eliminar";
    error(text);
  }
  arregloTareas = [];
  contador = 0;
  setData();
  inputTareas();
});

//Funciones de Lógica de Aplicación
export const agregarTarea = (descripcion) => {
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

export const listarTareas = () => {
  if (arregloTareas.length < 1) {
    let text = "No hay tareas para listar, empieza a crearlas!";
    error(text);
  } else {
    boton_agregar.classList.add("invisible");
    lista_tareas.innerHTML = "";
    getArregloTareas()
      .reverse()
      .forEach((tarea) => {
        let li = document.createElement("li");
        li.classList.add("container-input");
        li.id = `L${tarea.id}`;
        let input = document.createElement("input");
        input.id = `${tarea.id}`;
        input.type = "text";
        input.classList.add(
          "input-tarea",
          "w-full",
          "rounded-2xl",
          "bg-gray-50",
          "px-4",
          "ring-2",
          "ring-gray-200",
          "focus-within:ring-gray-800"
        );
        input.value = `${tarea.descripcion}`;
        let button = document.createElement("button");
        button.classList.add("boton-eliminar", "icon", "fas", "fa-trash");
        button.id = `D${tarea.id}`;
        li.append(input, button);
        lista_tareas.appendChild(li);
      });
  }
};

export const inputTareas = () => {
  boton_agregar.classList.remove("invisible");
  lista_tareas.innerHTML = "";
  let li = document.createElement("li");
  let input = document.createElement("input");
  input.type = "text";
  input.setAttribute("placeholder", "Escribe tu tarea");
  input.classList.add(
    "input-tarea",
    "w-full",
    "rounded-2xl",
    "bg-gray-50",
    "px-4",
    "ring-2",
    "ring-gray-200",
    "focus-within:ring-gray-800"
  );
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

export const eliminarTareas = (id) => {
  let title = "La tarea ha sido eliminada";
  let newArreglo = [];
  arregloTareas.forEach((tarea) => {
    if (tarea.id != id) {
      newArreglo.push(tarea);
    }
  });
  arregloTareas = newArreglo;
  success(title);
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
