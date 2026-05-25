let texto = document.getElementById("texto");
let lista = document.getElementById("lista");

const guardar = document.getElementById("guardar");
const borrarTodo = document.getElementById("borrarTodo");


function addToDO(){
    let contenido = texto.value;
    if(contenido.trim() === ""){
        alert("No empty task allowed.");
        return;
    }

    const tarea = document.createElement("div");
    tarea.classList.add("tarea");

    const marcador = document.createElement("input");
    marcador.type = "checkbox";
    marcador.classList.add("marcador");

    const textoT = document.createElement("p");
    textoT.textContent = contenido;

    const borrar = document.createElement("button");
    borrar.textContent = "X";
    borrar.classList.add("borrar");

    borrar.addEventListener("click",()=>{
        tarea.remove();
    });

    marcador.addEventListener("change", () => {
        if(marcador.checked){
            textoT.style.textDecoration = "line-through";
            textoT.style.opacity = "0.5";
            tarea.style.backgroundColor = "#B0A8B9";
        } else {
            textoT.style.textDecoration = "none";
            textoT.style.opacity = "1";
            tarea.style.backgroundColor = "#FFFDFD";
        }
    });

    tarea.appendChild(marcador);
    tarea.appendChild(textoT);
    tarea.appendChild(borrar);

    lista.appendChild(tarea);
    texto.value = "";
}

borrarTodo.addEventListener("click", () => {
    lista.innerHTML = "";
});
guardar.addEventListener("click", addToDO);