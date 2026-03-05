const form = document.getElementById("formTarea");
const input = document.getElementById("inputTarea");
const lista = document.getElementById("listaTareas");
const contador = document.getElementById("contador");

let total = 0;

form.addEventListener("submit", function(e){

    e.preventDefault();

    const tarea = input.value.trim();

    if(tarea === "") return;

    crearTarea(tarea);

    input.value = "";

});

function crearTarea(texto){

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = texto;

    const boton = document.createElement("button");
    boton.textContent = "X";
    boton.classList.add("delete");

    boton.addEventListener("click", function(){

        li.remove();
        total--;
        actualizarContador();

    });

    li.appendChild(span);
    li.appendChild(boton);

    lista.appendChild(li);

    total++;

    actualizarContador();

}

function actualizarContador(){
    contador.textContent = total;
}